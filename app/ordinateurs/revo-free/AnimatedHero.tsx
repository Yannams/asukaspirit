"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the entire container (Hero + La Naissance)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Desktop animations
  const yDesktop = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]); 
  const xDesktop = useTransform(scrollYProgress, [0, 1], ["-10vw", "0vw"]);
  const rotateDesktop = useTransform(scrollYProgress, [0, 1], [21.65, 0]);
  const scaleBaseDesktop = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  // Clean 3D Flip Trick:
  // We rotate the Hero image fully to 90deg (which makes it visually 0px high / invisible).
  // Exactly at that point (0.7 progress), we swap opacities.
  // Then the Naissance image rotates from -90deg (invisible) to 0deg (fully visible).
  // This guarantees ZERO ghosting and ZERO overlapping.
  const rotateXHeroDesktop = useTransform(scrollYProgress, [0, 0.7, 1], [0, 90, 90]);
  const opacityHeroDesktop = useTransform(scrollYProgress, [0, 0.7, 0.71, 1], [1, 1, 0, 0]);

  const rotateXNaissanceDesktop = useTransform(scrollYProgress, [0, 0.7, 1], [-90, -90, 0]);
  const opacityNaissanceDesktop = useTransform(scrollYProgress, [0, 0.69, 0.7, 1], [0, 0, 1, 1]);

  // Mobile animations
  const yMobile = useTransform(scrollYProgress, [0, 1], ["5vh", "5vh"]);
  const xMobile = useTransform(scrollYProgress, [0, 1], ["-15vw", "0vw"]);
  const rotateMobile = useTransform(scrollYProgress, [0, 1], [-45, 0]);
  const scaleBaseMobile = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  const rotateXHeroMobile = useTransform(scrollYProgress, [0, 0.7, 1], [0, 90, 90]);
  const opacityHeroMobile = useTransform(scrollYProgress, [0, 0.7, 0.71, 1], [1, 1, 0, 0]);

  const rotateXNaissanceMobile = useTransform(scrollYProgress, [0, 0.7, 1], [-90, -90, 0]);
  const opacityNaissanceMobile = useTransform(scrollYProgress, [0, 0.69, 0.7, 1], [0, 0, 1, 1]);

  return (
    <div ref={containerRef} className="relative w-full flex flex-col" style={{ perspective: "1500px" }}>
      
      {/* The Sticky Laptop Container */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="sticky top-0 h-screen w-full flex justify-center items-start overflow-hidden" style={{ perspective: "1500px" }}>
          
          {/* Desktop Laptop - 3D Hero */}
          <motion.img
            src="/images/laptop_revo-free_hero.png"
            alt="Revo Free Hero"
            className="hidden md:block absolute"
            style={{
              width: "1100px",
              height: "auto",
              rotateZ: rotateDesktop,
              rotateX: rotateXHeroDesktop,
              x: xDesktop,
              y: yDesktop,
              scale: scaleBaseDesktop,
              opacity: opacityHeroDesktop,
              objectFit: "contain",
              transformOrigin: "center center",
            }}
          />

          {/* Desktop Laptop - Profile Naissance */}
          <motion.img
            src="/images/laptop_revo-free_naissance.png"
            alt="Revo Free Profile"
            className="hidden md:block absolute"
            style={{
              width: "1100px",
              height: "auto",
              rotateZ: rotateDesktop,
              rotateX: rotateXNaissanceDesktop,
              x: xDesktop,
              y: yDesktop,
              scale: scaleBaseDesktop,
              opacity: opacityNaissanceDesktop,
              objectFit: "contain",
              transformOrigin: "center center",
            }}
          />

          {/* Mobile Laptop - 3D Hero */}
          <motion.img
            src="/images/laptop_revo-free_hero.png"
            alt="Revo Free Hero"
            className="md:hidden absolute w-[150%] max-w-none"
            style={{
              rotateZ: rotateMobile,
              rotateX: rotateXHeroMobile,
              x: xMobile,
              y: yMobile,
              scale: scaleBaseMobile,
              opacity: opacityHeroMobile,
              objectFit: "contain",
              transformOrigin: "center center",
            }}
          />

          {/* Mobile Laptop - Profile Naissance */}
          <motion.img
            src="/images/laptop_revo-free_naissance.png"
            alt="Revo Free Profile"
            className="md:hidden absolute w-[150%] max-w-none"
            style={{
              rotateZ: rotateMobile,
              rotateX: rotateXNaissanceMobile,
              x: xMobile,
              y: yMobile,
              scale: scaleBaseMobile,
              opacity: opacityNaissanceMobile,
              objectFit: "contain",
              transformOrigin: "center center",
            }}
          />
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-[#212121] w-full relative z-20">
        {/* Desktop Version */}
        <div className="max-w-[1446px] mx-auto h-[655px] relative overflow-hidden hidden md:block">
          <div 
            className="absolute flex flex-col"
            style={{
              top: "187px",
              left: "899px",
              width: "345px",
            }}
          >
            <h2 className="text-[#F47639] uppercase tracking-wider mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "20px", lineHeight: "100%" }}>
              Revo FREE
            </h2>
            <p className="text-[#FFFFFF]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "30px", lineHeight: "33px" }}>
              La technologie neuve accessible à tous, avec deux modèles adaptés à chaque besoin.
            </p>
          </div>
        </div>

        {/* Mobile Version Fallback */}
        <div className="max-w-[1446px] mx-auto flex flex-col items-center relative overflow-hidden md:hidden py-12 px-6 h-[500px]">
           <h2 className="text-[#F47639] uppercase tracking-wider mb-2 self-start" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "20px", lineHeight: "100%" }}>
              Revo FREE
           </h2>
           <p className="text-[#FFFFFF] mb-8 self-start" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "24px", lineHeight: "30px" }}>
              La technologie neuve accessible à tous, avec deux modèles adaptés à chaque besoin.
           </p>
        </div>
      </section>

      {/* La Naissance */}
      <section className="pt-48 md:pt-80 pb-24 bg-white z-10 relative overflow-hidden">
        <div className="max-w-[1021px] mx-auto px-6 text-center relative z-20">
          <h2 className="text-[#F47639] uppercase tracking-wider mb-10" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "20px", lineHeight: "100%" }}>
            La naissance de la gamme Revo free
          </h2>
          <p className="text-[#000000] relative z-10 mx-auto" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "34px", marginBottom: "0" }}>
            Chez ASUKA SPIRIT, nous croyons fermement que chacun mérite un accès facile à la technologie neuve et de qualité. En écoutant les besoins de notre communauté, nous avons choisi de créer la gamme REVO FREE. L'idée était simple : proposer des ordinateurs neufs, fiables et faciles à choisir, pour que chacun trouve rapidement l'outil qui lui convient.
          </p>
          
          {/* Invisible placeholder to keep the height for the laptop to land */}
          <div className="w-full max-w-[1197px] mx-auto h-[350px] md:h-[550px]" />
        </div>
      </section>
    </div>
  );
}
