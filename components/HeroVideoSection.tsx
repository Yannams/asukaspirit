"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

const YOUTUBE_VIDEO_ID = "HqRiiL31QJk";

/**
 * HeroVideoSection
 *
 * 3-layer card structure + smoothed scroll via lerp.
 * Integrates YouTube video (HqRiiL31QJk) with high-res poster and IFrame Player API.
 * Plays when fullscreen is reached (p >= 0.92).
 * Pauses when user scrolls past or away from the section.
 * Includes play button and a mute/unmute toggle button.
 */
export default function HeroVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frame1Ref = useRef<HTMLDivElement>(null);
  const frame2Ref = useRef<HTMLDivElement>(null);
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const isPlayerReadyRef = useRef(false);
  const posterRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const playBtnRef = useRef<HTMLButtonElement>(null);

  const [isMuted, setIsMuted] = useState(true);

  // Animation state (mutable, no re-renders)
  const anim = useRef({
    targetProgress: 0,
    currentProgress: 0,
    isPlaying: false,
    userClicked: false, // tracks user gesture for audio permission
    rafId: 0,
    isVisible: true, // tracks if section is in viewport
  });

  // Math
  const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const easeOut = (t: number) => 1 - (1 - t) ** 3;
  const easeInOut = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

  // Helper to play/pause YT player safely
  const safePlay = useCallback(() => {
    if (playerRef.current && isPlayerReadyRef.current && typeof playerRef.current.playVideo === "function") {
      if (anim.current.userClicked && !isMuted) {
        playerRef.current.unMute();
      }
      playerRef.current.playVideo();
    }
  }, [isMuted]);

  const safePause = useCallback(() => {
    if (playerRef.current && isPlayerReadyRef.current && typeof playerRef.current.pauseVideo === "function") {
      playerRef.current.pauseVideo();
    }
  }, []);

  // ---- RENDER FRAME ----
  const render = useCallback((p: number) => {
    const settleRaw = clamp(p / 0.35, 0, 1);
    const expandRaw = clamp((p - 0.35) / 0.65, 0, 1);
    const settle = easeOut(settleRaw);
    const expand = easeInOut(expandRaw);

    // ---- CONTAINER: width grows from 90vw/max1129px to 100vw ----
    if (containerRef.current) {
      const s = containerRef.current.style;
      const wPct = lerp(90, 100, expand);
      s.width = expand > 0.01 ? `${wPct}vw` : "min(90vw, 1129px)";
      if (expand > 0.3) {
        const hPct = lerp(50, 100, clamp((expand - 0.3) / 0.7, 0, 1));
        s.height = `${hPct}vh`;
        s.aspectRatio = "unset";
      } else {
        s.height = "auto";
        s.aspectRatio = "2 / 1";
      }
    }

    // ---- FRAMES: translateY settles, fade on expand ----
    if (frame1Ref.current) {
      const y = lerp(-59, 0, settle);
      const opacity = expand > 0.15 ? clamp(1 - (expand - 0.15) / 0.35, 0, 1) : 1;
      frame1Ref.current.style.transform = `translateY(${y}px)`;
      frame1Ref.current.style.opacity = `${opacity}`;
      frame1Ref.current.style.borderRadius = `${lerp(50, 0, expand)}px`;
    }
    if (frame2Ref.current) {
      const y = lerp(-30, 0, settle);
      const opacity = expand > 0.15 ? clamp(1 - (expand - 0.15) / 0.35, 0, 1) : 1;
      frame2Ref.current.style.transform = `translateY(${y}px)`;
      frame2Ref.current.style.opacity = `${opacity}`;
      frame2Ref.current.style.borderRadius = `${lerp(50, 0, expand)}px`;
    }

    // ---- VIDEO BOX: border-radius shrinks ----
    if (videoBoxRef.current) {
      videoBoxRef.current.style.borderRadius = `${lerp(50, 0, expand)}px`;
    }

    // ---- OVERLAY: gets darker then fades to reveal video ----
    if (overlayRef.current) {
      if (expand > 0.8) {
        // Fade overlay out to reveal playing video
        overlayRef.current.style.opacity = `${lerp(0.42, 0, clamp((expand - 0.8) / 0.2, 0, 1))}`;
      } else {
        overlayRef.current.style.opacity = `${lerp(0.17, 0.42, expand)}`;
      }
    }

    // ---- PLAY BUTTON: fades out ----
    if (playBtnRef.current) {
      const o = expand > 0.1 ? clamp(1 - (expand - 0.1) / 0.25, 0, 1) : 1;
      playBtnRef.current.style.opacity = `${o}`;
      playBtnRef.current.style.transform = `scale(${lerp(1, 0.5, expand)})`;
      playBtnRef.current.style.pointerEvents = expand > 0.3 ? "none" : "auto";
    }

    // ---- VIDEO PLAY/PAUSE ----
    const shouldPlay = p >= 0.92 && anim.current.isVisible;
    if (shouldPlay && !anim.current.isPlaying) {
      anim.current.isPlaying = true;
      safePlay();
    } else if (!shouldPlay && anim.current.isPlaying) {
      anim.current.isPlaying = false;
      safePause();
    }
  }, [safePlay, safePause]);

  // ---- SMOOTH ANIMATION LOOP + SCROLL LISTENER ----
  const SMOOTH = 0.1;

  const animLoop = useCallback(function loop() {
    const a = anim.current;
    const diff = a.targetProgress - a.currentProgress;

    if (Math.abs(diff) > 0.0001) {
      a.currentProgress += diff * SMOOTH;
      render(a.currentProgress);
    }

    a.rafId = requestAnimationFrame(loop);
  }, [render]);

  // ---- YOUTUBE IFRAME API INITIALIZATION ----
  useEffect(() => {
    let isCancelled = false;

    const initYT = () => {
      if (isCancelled || playerRef.current) return;
      if (!window.YT || !window.YT.Player) return;

      try {
        playerRef.current = new window.YT.Player("youtube-hero-player", {
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            modestbranding: 1,
            playlist: YOUTUBE_VIDEO_ID,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            enablejsapi: 1,
            origin: typeof window !== "undefined" ? window.location.origin : undefined,
          },
          events: {
            onReady: (event: any) => {
              if (isCancelled) return;
              isPlayerReadyRef.current = true;
              event.target.mute();
              if (anim.current.isPlaying) {
                event.target.playVideo();
              }
            },
            onStateChange: (event: any) => {
              if (isCancelled) return;
              // 1 = PLAYING
              if (event.data === 1) {
                if (posterRef.current) {
                  posterRef.current.style.opacity = "0";
                }
              }
              // 0 = ENDED (loop fallback)
              if (event.data === 0) {
                event.target.playVideo();
              }
            },
          },
        });
      } catch (e) {
        console.error("YouTube Player init error:", e);
      }
    };

    if (window.YT && window.YT.Player) {
      initYT();
    } else {
      const existingScript = document.getElementById("youtube-iframe-api-script");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api-script";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }

      const prevOnReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prevOnReady === "function") prevOnReady();
        initYT();
      };
    }

    return () => {
      isCancelled = true;
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        try {
          playerRef.current.destroy();
        } catch (_) {}
        playerRef.current = null;
        isPlayerReadyRef.current = false;
      }
    };
  }, []);

  // ---- SCROLL LISTENER ----
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      const total = sectionRef.current.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      anim.current.targetProgress = clamp(-top / total, 0, 1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    anim.current.rafId = requestAnimationFrame(animLoop);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(anim.current.rafId);
    };
  }, [render]);

  // ---- INTERSECTION OBSERVER: pause when section leaves viewport ----
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        anim.current.isVisible = entry.isIntersecting;
        if (!entry.isIntersecting && anim.current.isPlaying) {
          safePause();
          anim.current.isPlaying = false;
        }
        if (entry.isIntersecting && anim.current.currentProgress >= 0.92) {
          anim.current.isPlaying = true;
          safePlay();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [safePause, safePlay]);

  const handlePlayClick = useCallback(() => {
    anim.current.userClicked = true;
    safePlay();

    if (sectionRef.current && anim.current.currentProgress < 0.9) {
      const el = sectionRef.current;
      window.scrollTo({
        top: el.offsetTop + el.offsetHeight - window.innerHeight,
        behavior: "smooth",
      });
    }
  }, [safePlay]);

  const handleMuteToggle = useCallback(() => {
    anim.current.userClicked = true;
    if (playerRef.current && isPlayerReadyRef.current && typeof playerRef.current.mute === "function") {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } else {
      setIsMuted((prev) => !prev);
    }
  }, [isMuted]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: "200vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Container — 3-layer card stack */}
        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: "min(90vw, 1129px)",
            aspectRatio: "2 / 1",
          }}
        >
          {/* Layer 1 — Rectangle 17 (furthest back) */}
          <div
            ref={frame1Ref}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 50,
              backgroundColor: "rgba(71, 71, 71, 0.30)",
              transform: "translateY(-59px)",
            }}
          />

          {/* Layer 2 — Rectangle 19 (middle) */}
          <div
            ref={frame2Ref}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 50,
              backgroundColor: "rgba(71, 71, 71, 0.60)",
              zIndex: 1,
              transform: "translateY(-30px)",
            }}
          />

          {/* Layer 3 — Video box (front) */}
          <div
            ref={videoBoxRef}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: 50,
              overflow: "hidden",
              backgroundColor: "#171717",
              zIndex: 2,
              boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
              isolation: "isolate",
            }}
          >
            {/* High-res Poster preview before playback */}
            <img
              ref={posterRef}
              src={`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
              alt="Asuka Spirit Vidéo Aperçu"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none z-[2]"
            />

            {/* YouTube Player Container - full bleed cover without letterboxing */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[1]">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0 pointer-events-none"
                style={{
                  width: "max(100%, 177.78vh)",
                  height: "max(100%, 56.25vw)",
                  transform: "translate(-50%, -50%) scale(1.15)",
                }}
              >
                <div id="youtube-hero-player" className="w-full h-full" />
              </div>
            </div>

            {/* Black overlay */}
            <div
              ref={overlayRef}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#000",
                opacity: 0.17,
                zIndex: 3,
                pointerEvents: "none",
              }}
            />

            {/* Play button — centered */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <button
                ref={playBtnRef}
                onClick={handlePlayClick}
                className="rounded-full bg-white hover:bg-neutral-100 text-black flex items-center justify-center cursor-pointer"
                style={{
                  width: 70,
                  height: 70,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
                  transition: "background-color 0.2s, transform 0.2s",
                }}
                aria-label="Lire la vidéo"
              >
                <Play
                  size={22}
                  className="fill-black text-black translate-x-0.5"
                />
              </button>
            </div>

            {/* Mute/Unmute button — bottom right */}
            <button
              onClick={handleMuteToggle}
              className="absolute bottom-5 right-5 z-20 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
              style={{
                width: 44,
                height: 44,
              }}
              title={isMuted ? "Activer le son" : "Couper le son"}
              aria-label={isMuted ? "Activer le son" : "Couper le son"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
