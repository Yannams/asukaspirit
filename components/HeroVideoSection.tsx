"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

/**
 * HeroVideoSection
 *
 * 3-layer card structure + smoothed scroll via lerp.
 * Uses a real <video> element that plays when fullscreen is reached.
 * Pauses when user scrolls past the section.
 * Includes a mute/unmute toggle button.
 */
export default function HeroVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frame1Ref = useRef<HTMLDivElement>(null);
  const frame2Ref = useRef<HTMLDivElement>(null);
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
      if (videoRef.current) {
        // Unmute if user has clicked (browser allows audio after gesture)
        if (anim.current.userClicked) {
          videoRef.current.muted = false;
        }
        videoRef.current.play().catch(() => {});
      }
    } else if (!shouldPlay && anim.current.isPlaying) {
      anim.current.isPlaying = false;
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, []);

  // ---- SMOOTH ANIMATION LOOP ----
  const SMOOTH = 0.1;

  const animLoop = useCallback(() => {
    const a = anim.current;
    const diff = a.targetProgress - a.currentProgress;

    if (Math.abs(diff) > 0.0001) {
      a.currentProgress += diff * SMOOTH;
      render(a.currentProgress);
    }

    a.rafId = requestAnimationFrame(animLoop);
  }, [render]);

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
  }, [animLoop]);

  // ---- INTERSECTION OBSERVER: pause when section leaves viewport ----
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        anim.current.isVisible = entry.isIntersecting;
        // If section is no longer visible, pause the video
        if (!entry.isIntersecting && videoRef.current && anim.current.isPlaying) {
          videoRef.current.pause();
          anim.current.isPlaying = false;
        }
        // If section becomes visible again and progress is high enough, resume
        if (entry.isIntersecting && videoRef.current && anim.current.currentProgress >= 0.92) {
          anim.current.isPlaying = true;
          videoRef.current.play().catch(() => {});
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handlePlayClick = useCallback(() => {
    // Mark user gesture — allows unmuting later
    anim.current.userClicked = true;

    if (sectionRef.current && anim.current.currentProgress < 0.9) {
      const el = sectionRef.current;
      window.scrollTo({
        top: el.offsetTop + el.offsetHeight - window.innerHeight,
        behavior: "smooth",
      });
    }
  }, []);

  const handleMuteToggle = useCallback(() => {
    anim.current.userClicked = true;
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  }, []);

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
            }}
          >
            {/* Real Video Element — #t=2 loads frame at 2s as thumbnail */}
            <video
              ref={videoRef}
              src="/images/Video_Institutionelle.mp4#t=2"
              muted
              loop
              playsInline
              preload="auto"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Black overlay */}
            <div
              ref={overlayRef}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#000",
                opacity: 0.17,
                zIndex: 3,
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
                className="rounded-full bg-white hover:bg-neutral-100 text-black flex items-center justify-center"
                style={{
                  width: 70,
                  height: 70,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
                  transition: "background-color 0.2s",
                }}
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
              className="absolute bottom-5 right-5 z-20 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200"
              style={{
                width: 44,
                height: 44,
              }}
              title={isMuted ? "Activer le son" : "Couper le son"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
