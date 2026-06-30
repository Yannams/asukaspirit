"use client";

import Link from "next/link";
import { ArrowUpRight, Play, Cpu, ShieldCheck, Package, Headphones, Users, Award } from "lucide-react";
import HeroVideoSection from "@/components/HeroVideoSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-8 md:pt-12 pb-8 lg:pb-12 overflow-hidden bg-white">
        {/* Concentric rings background decoration matching Figma */}
        <div className="absolute inset-0 overflow-hidden -z-10 flex items-center justify-center">
          <svg width="100%" height="100%" className="absolute opacity-[0.04] text-black" style={{ transform: "scale(1.3)" }}>
            <circle cx="50%" cy="40%" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50%" cy="40%" r="250" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
            <circle cx="50%" cy="40%" r="350" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50%" cy="40%" r="450" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10,5" />
            <circle cx="50%" cy="40%" r="550" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50%" cy="40%" r="650" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-[1171px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              {/* Badge */}
              <div className="inline-flex items-center justify-center bg-[#EBEBEB] text-[#555555] text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
                ASUKA SPIRIT
              </div>

              {/* Headline */}
              <h1 className="font-display font-normal text-[38px] sm:text-[55px] lg:text-[70px] xl:text-[80px] leading-[1.1] tracking-tight text-black uppercase mb-6 text-left">
                La marque <br />
                <span className="font-bold text-primary">Africaine n°1</span> <br />
                des équipements !
              </h1>

              {/* Subtitle */}
              <p className="text-[#888888] text-[15px] sm:text-[17px] font-normal leading-[26px] max-w-xl mb-8 text-left">
                Ordinateurs, lunettes connectés, montres connectées ,<br className="hidden sm:inline" />
                services & solutions pensés pour l'Afrique, fabriqués pour durer.
              </p>

              {/* Button */}
              <div className="flex justify-start w-full">
                <Link 
                  href="/ordinateurs" 
                  className="inline-flex items-center justify-between bg-black hover:bg-neutral-800 text-white font-medium text-[15px] leading-[26px] rounded-full pl-[17px] pr-[2px] w-[250px] h-[47px] transition-all duration-300 group"
                >
                  <span>Découvrez nos produits</span>
                  <div className="w-[43px] h-[43px] rounded-full bg-primary flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end h-[380px] sm:h-[480px] lg:h-[540px] w-full select-none">
              <img 
                src="/images/casque.png" 
                alt="Lunettes Connectées ASUKA" 
                className="w-full h-full object-contain lg:object-right-bottom scale-[1.1] lg:scale-[1.2] origin-bottom-right drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1b. Hero Video — Scroll-driven animation */}
      <HeroVideoSection />

      {/* 2. Section Ordinateurs - GAMME REVO CORP */}
      <section className="py-16 bg-[#FCFCFC] border-t border-neutral-100 relative overflow-hidden">
        {/* Spade watermark behind image/text */}
        <div className="absolute right-[5%] bottom-[5%] text-[#F2F2F2] pointer-events-none select-none text-[350px] font-bold leading-none -z-10">
          ♠
        </div>

        <div className="max-w-[1171px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center gap-2">
            <span className="text-[12px] font-medium tracking-[6px] text-black mb-8">
              Nos Ordinateurs
            </span>
            <span className="text-[18px] font-normal leading-[26px] text-[#3E3E3E] uppercase tracking-wide">
              (Pro / Entreprise)
            </span>
            <h2 className="font-display font-bold text-[32px] md:text-[50px] md:leading-[26px] uppercase text-black tracking-tight my-2">
              Gamme REVO CORP
            </h2>
            <p className="text-[15px] font-normal leading-none text-black max-w-[462px] mx-auto text-center mt-2">
              Taillée pour <span className="font-semibold text-primary">les professionnels</span> qui ne font pas de compromis.
            </p>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <p className="font-display font-light text-[25px] leading-snug text-black text-left max-w-[459px]">
                Robustesse, performance et fiabilité <span className="font-medium">la gamme REVO CORP</span> est conçue pour les entreprises, les équipes exigeantes et les environnements intensifs.
              </p>
              
              <Link 
                href="/ordinateurs/revo-corp" 
                className="inline-flex items-center justify-between bg-black hover:bg-neutral-800 text-white font-medium text-[15px] leading-[26px] rounded-full pl-[17px] pr-[2px] w-[250px] h-[47px] transition-all duration-300 group"
              >
                <span>Voir la gamme CORP</span>
                <div className="w-[43px] h-[43px] rounded-full bg-primary flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            </div>

            <div className="lg:col-span-7 flex justify-center w-full">
              {/* Image Container for REVO CORP Setup */}
              <div className="relative w-full max-w-[620px] aspect-[4/3] flex items-center justify-center select-none">
                {/* Grey Ace of Spades Watermark in the background */}
                <img 
                  src="/images/as_gris.svg" 
                  alt="Asuka Spirit Spade Logo Background" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] object-contain opacity-[0.08] pointer-events-none select-none z-0"
                />

                {/* Back Monitor (All In One Back) */}
                <div className="absolute top-[8%] right-0 w-[55%] aspect-square z-10 transition-all duration-500 hover:translate-y-[-8px] hover:scale-[1.02]">
                  <img 
                    src="/images/all_in_one_back.png" 
                    alt="REVO CORP All-In-One Back View" 
                    className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
                  />
                </div>

                {/* Front Monitor (All In One Front) */}
                <div className="absolute bottom-[4%] left-0 w-[60%] aspect-[790/684] z-20 transition-all duration-500 hover:translate-y-[-8px] hover:scale-[1.02]">
                  <img 
                    src="/images/all_in_one_front.png" 
                    alt="REVO CORP All-In-One Front View" 
                    className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section Ordinateurs - GAMME REVO FREE */}
      <section className="pt-16 pb-10 bg-[#141414] text-white relative overflow-visible">
        <div className="max-w-[1171px] mx-auto px-6 relative z-10 w-full">
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center gap-2">
            <span className="text-[12px] font-medium tracking-[6px] text-white/50 mb-8 uppercase">
              Nos Ordinateurs
            </span>
            <span className="text-[18px] font-normal leading-[26px] text-primary uppercase tracking-wide">
              (Grand public / Étudiant)
            </span>
            <h2 className="font-display font-bold text-[32px] md:text-[50px] md:leading-[26px] uppercase tracking-tight text-white my-2">
              Gamme REVO FREE
            </h2>
            <p className="text-[15px] font-normal leading-none text-[#B5B5B5] max-w-[462px] mx-auto text-center mt-2">
              La liberté de travailler, apprendre et créer sans se ruiner.
            </p>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6 relative z-10">
              <p className="font-display font-light text-[25px] leading-snug text-left text-neutral-300 max-w-[311px]">
                Légère, accessible et puissante, <span className="font-medium">la gamme REVO FREE</span> accompagne les étudiants, créatifs et utilisateurs du quotidien partout où ils vont.
              </p>
              
              <Link 
                href="/ordinateurs/revo-free" 
                className="inline-flex items-center justify-between bg-white hover:bg-neutral-100 text-black font-medium text-[15px] leading-[26px] rounded-full pl-[17px] pr-[2px] w-[250px] h-[47px] transition-all duration-300 group"
              >
                <span>Voir la gamme FREE</span>
                <div className="w-[43px] h-[43px] rounded-full bg-primary flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            </div>

            {/* Spacer column — the image is positioned absolutely to the section */}
            <div className="lg:col-span-7 h-[250px] md:h-[350px] lg:h-[450px] pointer-events-none" />
          </div>
        </div>

        {/* Laptop image flush to right edge, bottom overflows out of section */}
        <img 
          src="/images/laptop_free.png" 
          alt="REVO FREE Laptop" 
          className="absolute right-0 top-[15%] lg:top-[-25%] h-[110%] md:h-[140%] lg:h-[170%] w-auto max-w-none object-contain select-none pointer-events-none z-0"
        />
      </section>
      {/* 4. Section Wearables (Lunettes & Montres Connectées Side-by-Side) */}
      <section id="wearables" className="py-12 md:py-16 bg-[#FAFAFA] scroll-mt-[80px] overflow-hidden">
        <div className="max-w-[1171px] mx-auto px-6">
          {/* Section title matching Figma specs */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display font-medium text-[12px] tracking-[6px] text-black uppercase">
              Wearables & Smart Devices
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
            {/* Central divider line visible on desktop matching Figma */}
            <div className="hidden lg:block absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 h-[70%] w-[1px] bg-neutral-300" />

            {/* Left Column: Lunettes Connectées */}
            <div className="flex flex-col items-center text-center justify-between h-full">
              <div className="flex flex-col items-center w-full">
                {/* Subtitle */}
                <span className="text-[18px] font-normal leading-[26px] text-[#3E3E3E] uppercase mb-2">
                  (Smart Eyewear)
                </span>
                {/* Title */}
                <h3 className="font-display font-bold text-[32px] md:text-[40px] uppercase text-black leading-[26px] tracking-tight mb-4">
                  Lunettes Connectées
                </h3>
                {/* Tagline */}
                <p className="text-[17px] font-normal text-black mb-12 sm:mb-20 lg:mb-[200px]">
                  Vois le monde autrement. <span className="text-primary font-semibold">Connecté,</span> en permanence.
                </p>
                
                {/* Glasses Image Container - Pushed to the left edge of the screen */}
                <div className="relative w-[calc(100%+4rem)] sm:w-[calc(100%+10rem)] lg:w-[calc(100%+20rem)] h-[280px] sm:h-[340px] lg:h-[400px] flex items-center justify-start my-4 select-none -ml-6 sm:-ml-12 md:-ml-16 lg:-ml-24 xl:-ml-[calc((100vw-1171px)/2+1.5rem)] z-10">
                  <img 
                    src="/images/shaka.png" 
                    alt="Lunettes Connectées ASUKA" 
                    className="relative w-auto h-full object-contain drop-shadow-2xl z-10 scale-[1.50] sm:scale-[1.4] lg:scale-[2.10] origin-left -translate-x-2 md:-translate-x-9"
                  />
                </div>

                {/* Description - Figma exact size (20px, light) */}
                <div className="w-full flex justify-center">
                  <p className="font-display font-light text-[18px] md:text-[20px] leading-[26px] text-neutral-700 max-w-[459px] mt-16 sm:mt-24 lg:mt-[220px] mb-8 text-justify">
                    <span className="font-medium text-black">Les lunettes connectées ASUKA fusionnent style africain</span> contemporain et technologie embarquée notifications, audio, photos, vidéos, IA, navigation. Tout dans votre regard.
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-center w-full mt-2">
                <Link 
                  href="#contact" 
                  className="inline-flex items-center justify-between bg-black hover:bg-neutral-800 text-white font-medium text-[15px] leading-[26px] rounded-full pl-[17px] pr-[2px] w-[250px] h-[47px] transition-all duration-300 group"
                >
                  <span>Découvrir nos lunettes</span>
                  <div className="w-[43px] h-[43px] rounded-full bg-primary flex items-center justify-center text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column: Montres Connectées */}
            <div className="flex flex-col items-center text-center justify-between h-full pt-10 lg:pt-0">
              <div className="flex flex-col items-center w-full">
                {/* Subtitle */}
                <span className="text-[18px] font-normal leading-[26px] text-[#3E3E3E] uppercase mb-2">
                  (Smart Watch)
                </span>
                {/* Title */}
                <h3 className="font-display font-bold text-[32px] md:text-[40px] uppercase text-black leading-[26px] tracking-tight mb-4">
                  Montres Connectées
                </h3>
                {/* Tagline */}
                <p className="text-[17px] font-normal text-black mb-12 sm:mb-20 lg:mb-[200px]">
                  <span className="text-primary font-semibold">Votre vie au poignet.</span> Santé, temps, connexion.
                </p>
                
                {/* Watch Image Container */}
                <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] flex items-center justify-center my-4 select-none">
                  <img 
                    src="/images/montre.png" 
                    alt="Montre Connectée ASUKA" 
                    className="w-auto h-full object-contain drop-shadow-xl scale-[1.15] lg:scale-[2] origin-center"
                  />
                </div>

                {/* Description - Figma exact size (20px, light) */}
                <div className="w-full flex justify-center">
                  <p className="font-display font-light text-[18px] md:text-[20px] leading-[26px] text-neutral-700 max-w-[459px] mt-16 sm:mt-24 lg:mt-[240px] mb-8 text-justify">
                    Conçue pour l'Africain actif suivi santé, alertes intelligentes, autonomie longue durée. Une montre qui travaille autant que vous.
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-center w-full mt-2">
                <Link 
                  href="/montres" 
                  className="inline-flex items-center justify-between bg-black hover:bg-neutral-800 text-white font-medium text-[15px] leading-[26px] rounded-full pl-[17px] pr-[2px] w-[250px] h-[47px] transition-all duration-300 group"
                >
                  <span>Découvrir nos montres</span>
                  <div className="w-[43px] h-[43px] rounded-full bg-primary flex items-center justify-center text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section Dr ASUKA (Redesigned with WHITE background to match design) */}
      <section className="mt-12 lg:mt-20 pt-0 pb-16 bg-white text-black">
        <div className="max-w-[1171px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left side text */}
            <div className="lg:col-span-6 flex flex-col gap-6 justify-center">
              {/* Dr. ASUKA custom logo */}
              <div className="w-full max-w-[458px] overflow-visible">
                <img 
                  src="/images/Dr_ASUKA.png" 
                  alt="Dr. ASUKA" 
                  className="w-full aspect-square object-contain -ml-[19%] -mt-[15%] -mb-[22%]"
                />
              </div>
              
              <p className="font-display font-light text-[23px] leading-[32px] text-justify text-black max-w-[377px]">
                <span className="font-bold">Dr ASUKA</span> est une marque déposée de <span className="font-bold">AS WORLD TECH</span>, ayant pour mission d'apporter un professionnalisme aux standards internationaux dans le secteur de la réparation et de la maintenance des équipements électroniques.
              </p>

              <div className="mt-4">
                <Link 
                  href="https://docteurasuka.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-black hover:bg-neutral-800 text-white font-medium text-[15px] leading-[26px] rounded-full pl-[17px] pr-[2px] w-[250px] h-[47px] transition-all duration-300 group"
                >
                  <span>En savoir plus</span>
                  <div className="w-[43px] h-[43px] rounded-full bg-primary flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right side exploded view image */}
            <div className="lg:col-span-6 flex items-center justify-center h-[400px] lg:h-auto w-full">
              <img 
                src="/images/pc_bureau_exploded.png" 
                alt="Dr. ASUKA Atelier / PC Démonté" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section Solutions & Financement (AS Pay / Assuk Assur / Stats) */}
      <section id="solutions" className="py-16 bg-white border-t border-neutral-100 scroll-mt-[80px]">
        <div className="max-w-[1171px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-medium text-[12px] tracking-[6px] text-black">
              Nos solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* AS Pay (Dark card) */}
            <div className="p-8 lg:p-10 bg-[#212121] text-white rounded-[50px] w-full lg:w-[417px] lg:h-[389px] flex flex-col justify-center items-center shadow-lg relative overflow-hidden mx-auto">
              <div className="flex flex-col items-center text-center gap-6">
                <img 
                  src="/images/as pay.png" 
                  alt="AS Pay" 
                  className="w-[86px] h-[136.45px] object-contain"
                />
                <p className="font-display font-normal text-[14px] leading-relaxed text-justify text-white max-w-[307px] mx-auto">
                  AS Pay supprime la barrière du prix. Financement immédiat via votre banque, remboursement progressif la tech ASUKA est accessible à tous, tout de suite.
                </p>
              </div>
            </div>

            {/* Assuk Assur (Light card) */}
            <div className="p-8 lg:p-10 bg-[#D9D9D9]/[0.08] text-black rounded-[50px] w-full lg:w-[426px] lg:h-[389px] flex flex-col justify-center items-center relative overflow-hidden mx-auto">
              <div className="flex flex-col items-center text-center gap-6">
                <img 
                  src="/images/assuka_assur.png" 
                  alt="Assuk Assur" 
                  className="w-[157px] h-[129px] object-contain"
                />
                <p className="font-display font-normal text-[14px] leading-relaxed text-justify text-neutral-600 max-w-[307px] mx-auto">
                  En partenariat avec SUNU Assurances, Assuk Assur couvre casse, vol, dégâts et surtensions. Réparation ou remplacement rapide tu investis une fois, on protège pour longtemps.
                </p>
              </div>
            </div>
          </div>

          {/* Section Chiffres (Single Horizontal Black statistics bar matching Figma design) */}
          <div className="flex flex-col lg:flex-row items-center justify-between bg-[#212121] rounded-[50px] px-10 py-8 lg:py-0 lg:h-[136px] max-w-[1171px] w-full gap-8 lg:gap-4 shadow-xl select-none">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 justify-start w-full lg:w-auto lg:flex-1 lg:justify-center">
              <div className="text-white shrink-0">
                <Package size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="font-sans font-bold text-[32px] lg:text-[40px] xl:text-[48px] leading-none tracking-[-0.04em] text-primary">+120</span>
                <span className="text-white text-[12px] lg:text-[13px] leading-none font-normal text-justify">
                  Produits de qualité<br className="hidden sm:inline" /> supérieure
                </span>
              </div>
            </div>

            {/* Divider 1 */}
            <div className="hidden lg:block h-[38px] w-[1px] bg-[#D9D9D9]/30 shrink-0" />

            {/* Stat 2 */}
            <div className="flex items-center gap-4 justify-start w-full lg:w-auto lg:flex-1 lg:justify-center">
              <div className="text-white shrink-0">
                <Users size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="font-sans font-bold text-[32px] lg:text-[40px] xl:text-[48px] leading-none tracking-[-0.04em] text-primary">2.5M+</span>
                <span className="text-white text-[12px] lg:text-[13px] leading-none font-normal text-justify">
                  Clients satisfaits
                </span>
              </div>
            </div>

            {/* Divider 2 */}
            <div className="hidden lg:block h-[38px] w-[1px] bg-[#D9D9D9]/30 shrink-0" />

            {/* Stat 3 */}
            <div className="flex items-center gap-4 justify-start w-full lg:w-auto lg:flex-1 lg:justify-center">
              <div className="text-white shrink-0">
                <Award size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="font-sans font-bold text-[32px] lg:text-[40px] xl:text-[48px] leading-none tracking-[-0.04em] text-primary">98%</span>
                <span className="text-white text-[12px] lg:text-[13px] leading-none font-normal text-justify">
                  Taux de satisfaction
                </span>
              </div>
            </div>

            {/* Divider 3 */}
            <div className="hidden lg:block h-[38px] w-[1px] bg-[#D9D9D9]/30 shrink-0" />

            {/* Stat 4 */}
            <div className="flex items-center gap-4 justify-start w-full lg:w-auto lg:flex-1 lg:justify-center">
              <div className="text-white shrink-0">
                <Headphones size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="font-sans font-bold text-[32px] lg:text-[40px] xl:text-[48px] leading-none tracking-[-0.04em] text-primary">24/7</span>
                <span className="text-white text-[12px] lg:text-[13px] leading-none font-normal text-justify">
                  Assistance d'expert
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section Ils Nous Font Confiance (Logos) */}
      <section className="py-10 bg-[#FAFAFA] border-y border-neutral-100">
        <div className="max-w-[1171px] mx-auto px-6 text-center">
          <h3 className="font-sans font-medium text-[12px] leading-none uppercase tracking-[0.5em] text-black mb-8">
            ILS NOUS FONT CONFIANCE
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 transition-all duration-300">
            <img src="/images/ministere.png" alt="Ministère" className="h-12 md:h-14 w-auto object-contain" />
            <img src="/images/lnb.png" alt="LNB" className="h-10 md:h-12 w-auto object-contain" />
            <img src="/images/cma.png" alt="CMA" className="h-10 md:h-12 w-auto object-contain" />
            <img src="/images/asin.png" alt="ASIN" className="h-10 md:h-12 w-auto object-contain" />
            <img src="/images/ccib.png" alt="CCIB" className="h-10 md:h-12 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* 8. Contact Form Section (Exploded view: Form on left, Athlete image placeholder on right inside same card) */}
      <section id="contact" className="py-16 bg-white scroll-mt-[160px]">
        <div className="max-w-[1171px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sans font-medium text-[12px] leading-none tracking-[0.5em] text-black">
              Nous contactez
            </h2>
          </div>

          <div className="relative w-full mx-auto">
            {/* Rectangle 42: Contact Card */}
            <div className="rounded-[50px] overflow-hidden shadow-2xl bg-[#212121] relative w-full">
              {/* Form container */}
              <div className="text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between h-full z-10">
                <div className="mb-6">
                  <h2 className="font-sans font-semibold text-[22px] sm:text-[25px] leading-none uppercase mb-4 text-white">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-[#B1B1B1] text-[13px] leading-[1.4] font-normal max-w-[396px]">
                    Avez-vous une question ? Une plainte ? Ou avez-vous besoin d'aide pour choisir le bon produit chez Asuka Spirit. N'hésitez pas à nous contacter
                  </p>
                </div>

                 <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Nom <span className="text-primary">*</span></label>
                      <input
                        type="text"
                        placeholder="Votre nom..."
                        className="bg-white border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary w-full text-black placeholder:text-neutral-400"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Prénom <span className="text-primary">*</span></label>
                      <input
                        type="text"
                        placeholder="Votre prénom..."
                        className="bg-white border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary w-full text-black placeholder:text-neutral-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Email <span className="text-primary">*</span></label>
                      <input
                        type="email"
                        placeholder="Votre adresse email..."
                        className="bg-white border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary w-full text-black placeholder:text-neutral-400"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Téléphone <span className="text-primary">*</span></label>
                      <input
                        type="tel"
                        placeholder="Votre numéro..."
                        className="bg-white border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary w-full text-black placeholder:text-neutral-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Message <span className="text-primary">*</span></label>
                    <textarea
                      placeholder="Votre message..."
                      rows={3}
                      className="bg-white border border-neutral-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary w-full text-black placeholder:text-neutral-400"
                      required
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-between bg-white hover:bg-neutral-100 text-black font-medium text-[15px] leading-[26px] rounded-full pl-[17px] pr-[2px] w-[250px] h-[47px] transition-all duration-300 group"
                    >
                      <span>Envoyez le message</span>
                      <div className="w-[43px] h-[43px] rounded-full bg-primary flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                        <ArrowUpRight size={18} />
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
