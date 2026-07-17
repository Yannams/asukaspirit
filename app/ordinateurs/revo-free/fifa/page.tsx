import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Zap, Users, ArrowUpRight } from "lucide-react";
import FigmaImage from "../../../../components/FigmaImage";
import HeroVideoSection from "@/components/HeroVideoSection";
import FloatingOrderButton from '@/components/FloatingOrderButton';

const LaptopIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 6h16v10H4z" />
    <path d="M2 17h20v2H2z" />
  </svg>
);

const CpuIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 6h12v12H6z" />
    <path d="M9 4v2h2V4H9zm4 0v2h2V4h-2zM4 9h2v2H4V9zm0 4h2v2H4v-2zm14-4h2v2h-2V9zm0 4h2v2h-2v-2zM9 18v2h2v-2H9zm4 0v2h2v-2h-2z" />
    <path d="M10 10h4v4h-4z" fill="#F47639" />
  </svg>
);

const RamIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 8h18v8H3z" />
    <path d="M6 16v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM5 10h2v2H5v-2zm4 0h6v2H9v-2z" fill="#F47639" />
  </svg>
);

const SsdIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="8" width="18" height="8" rx="4" />
    <circle cx="7" cy="12" r="1.5" fill="#F47639" />
    <rect x="10" y="11" width="5" height="2" rx="1" fill="#F47639" />
  </svg>
);

const GammeIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
    <rect x="6" y="6" width="9" height="9" fill="currentColor" stroke="none" />
    <path d="M11 11h8v8h-8z" />
  </svg>
);

export default function RevoFreeFifaPage() {
  const benefits = [
    "Design moderne et élégant",
    "Démarrage rapide grâce au SSD",
    "Navigation fluide pour les tâches courantes",
    "Stockage généreux pour vos documents et fichiers",
    "Excellent rapport qualité-prix"
  ];

  const idealFor = [
    "Les étudiants",
    "Les tâches bureautiques",
    "La navigation internet",
    "Les emails et visioconférences",
    "Le multimédia et le divertissement",
    "La gestion de documents"
  ];

  const specs = [
    { name: "Modèle", value: "REVO FIFA", desc: "PC portable pour les besoins quotidiens.", icon: <LaptopIcon /> },
    { name: "Processeur", value: "Intel Celeron", desc: "Adapté aux tâches courantes.", icon: <CpuIcon /> },
    { name: "Mémoire RAM", value: "4 Go", desc: "Assure une utilisation fluide.", icon: <RamIcon /> },
    { name: "Stockage", value: "SSD 512 GO", desc: "Rapide et spacieux.", icon: <SsdIcon /> },
    { name: "Gamme", value: "Light", desc: "Simple, pratique et accessible.", icon: <GammeIcon /> }
  ];

  return (
    <div className="flex flex-col min-h-screen">


      {/* Product Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-[1171px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Image */}
          <div className="flex items-center justify-center relative select-none">
            <img
              src="/images/laptop-revo_free_fifa-hero.png"
              alt="Revo Free FIFA PC"
              className="w-full max-w-[600px] h-auto object-contain hover:scale-105 transition-transform duration-500 scale-110 drop-shadow-2xl"
            />
          </div>

          {/* Right side: Text */}
          <div className="flex flex-col items-start text-left">
            <h1 className="font-display font-semibold text-[40px] md:text-[60px] leading-none uppercase text-[#F47639] mb-4">
              REVO FIFA
            </h1>
            <p className="font-display font-normal text-[16px] md:text-[18px] text-[#212121] mb-8">
              Le PC essentiel pour vos besoins quotidiens
            </p>
            <p className="font-display font-normal text-[13px] md:text-[15px] uppercase text-[#292929] mb-4 tracking-wide">
              MEILLEURS PRIX • MEILLEURE QUALITÉ • MEILLEUR DESIGN
            </p>
            <p className="font-display font-normal text-[13px] md:text-[15px] uppercase text-[#F47639] mb-10 tracking-wide">
              REVO FREE, LA RÉVOLUTION
            </p>

            <button className="inline-flex items-center justify-between bg-black hover:bg-neutral-800 text-white font-medium text-[15px] leading-[26px] rounded-full pl-[17px] pr-[2px] w-[180px] h-[47px] transition-all duration-300 group">
              <span>Voir la vidéo</span>
              <div className="w-[43px] h-[43px] rounded-full bg-[#F47639] flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                <ArrowUpRight size={18} />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Hero Video */}
      <HeroVideoSection />

      {/* Product Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1171px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text */}
          <div className="flex flex-col gap-8 items-start text-left">
            <h2 className="font-display font-medium text-[20px] uppercase text-[#F47639] tracking-wide m-0">
              REVO FREE, LA RÉVOLUTION
            </h2>
            <div className="flex flex-col gap-6">
              <p className="font-display font-normal text-[18px] text-[#000000] leading-[27px]">
                Le <span className="font-bold">REVO FIFA</span> est un ordinateur portable conçu pour répondre efficacement aux besoins du quotidien. Léger, pratique et accessible, il offre les performances nécessaires pour la navigation internet, la bureautique, les cours en ligne, les réseaux sociaux et le multimédia.
              </p>
              <p className="font-display font-normal text-[18px] text-[#000000] leading-[27px]">
                Que vous soyez étudiant, professionnel ou particulier, le <span className="font-bold">REVO FIFA</span> vous accompagne dans toutes vos tâches essentielles.
              </p>
            </div>
          </div>

          {/* Right Side: Image with Spade Background */}
          <div className="relative flex justify-center items-center w-full max-w-[556px] mx-auto aspect-[556/602] select-none">
            {/* Ace of Spades Background */}
            <img
              src="/images/as_gris.svg"
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] object-contain opacity-[0.03] pointer-events-none z-0"
            />
            {/* Laptop Image (Top-down view) */}
            <img
              src="/images/laptop_fifa-revo_free_fifa-revo_free_revolution.png"
              alt="REVO FIFA Vue de dessus"
              className="relative w-full h-auto object-contain z-10 hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative w-full bg-[#212121] py-24 min-h-[500px] lg:min-h-[700px] flex items-center z-10">
        {/* Left Image - Absolute positioned to overflow */}
        <img
          src="/images/laptop_semi_open-revo_free_fifa-pourquoi.png"
          alt="Pourquoi choisir REVO FIFA"
          className="absolute left-[-40%] lg:left-[-20%] top-1/2 -translate-y-[55%] lg:-translate-y-[60%] w-[160%] lg:w-[95%] max-w-[2000px] h-auto object-contain z-30 drop-shadow-2xl select-none pointer-events-none"
        />

        <div className="max-w-[1171px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 relative z-20">
          {/* Empty div for spacing on left */}
          <div className="hidden lg:block"></div>

          {/* Right Text */}
          <div className="flex flex-col justify-center pl-0 lg:pl-12 bg-[#212121]/80 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none">
            <h2 className="font-display font-bold text-[20px] text-[#FFFFFF] mb-8">
              Pourquoi choisir le REVO FIFA ?
            </h2>
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 text-[15px] font-normal text-[#FFFFFF]">
                  <div className="text-[#F47639] flex-shrink-0">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="font-display">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* Tech specs section */}
      <section className="pt-32 pb-120 lg:pt-40 bg-white relative z-10">
        <div className="max-w-[1171px] mx-auto px-6">
          <h2 className="text-center font-display font-medium text-[16px] md:text-[20px] uppercase text-[#F47639] mb-16 tracking-[0.1em]">
            CARACTÉRISTIQUES TECHNIQUES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {specs.map((spec, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-[85px] h-[85px] rounded-full bg-[#F47639] flex items-center justify-center mb-6 text-white shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110">
                  {spec.icon}
                </div>
                <h3 className="font-display font-medium text-[11px] md:text-[13px] uppercase text-[#F47639] mb-3 tracking-widest">
                  {spec.name}
                </h3>
                <p className="font-display font-bold text-[20px] md:text-[24px] uppercase text-black mb-3 leading-none">
                  {spec.value}
                </p>
                <p className="font-display font-normal text-[12px] md:text-[13px] text-[#555555] leading-relaxed max-w-[200px]">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="relative w-full bg-[#FCFCFC] py-24 pt-25 min-h-[500px] lg:min-h-[600px] flex items-center z-20">
        <div className="max-w-[1171px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 relative z-20">
          {/* Left Text */}
          <div className="flex flex-col justify-center bg-[#FCFCFC]/80 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none z-20">
            <h2 className="font-display font-bold text-[20px] text-[#212121] mb-8">
              Le REVO FIFA est idéal pour :
            </h2>
            <ul className="space-y-5">
              {idealFor.map((target, index) => (
                <li key={index} className="flex items-center gap-4 text-[15px] font-normal text-[#212121]">
                  <div className="text-[#F47639] flex-shrink-0">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="font-display">{target}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Empty div for right side spacing */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Right Image - Absolute positioned to overflow */}
        <img 
          src="/images/laptop_semi_open_back-revo_free_fifa-ideal_for.png" 
          alt="Idéal pour" 
          className="absolute right-[-40%] lg:right-[-10%] top-50 -translate-y-[55%] lg:-translate-y-[60%] w-[140%] lg:w-[60%] max-w-[1400px] h-auto object-contain z-30 drop-shadow-2xl select-none pointer-events-none"
        />
      </section>

      {/* Slogan Section */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-[1171px] mx-auto px-6 flex flex-col items-center">
          
          {/* Top Text Blocks */}
          <div className="w-full max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-0 relative z-10">
            <div className="flex-1 text-[14px] md:text-[15px] text-[#555555] leading-[26px]">
              Grâce à son <span className="font-bold text-black">SSD de 512 Go</span>, le <span className="font-bold text-[#F47639]">REVO FIFA</span> offre un démarrage rapide du système et une meilleure réactivité des applications. Son processeur Intel Celeron associé à <span className="font-bold text-black">4 Go de RAM</span> garantit une expérience fluide pour les usages essentiels.
            </div>
            
            {/* Vertical Divider (Hidden on mobile) */}
            <div className="hidden md:block w-px h-24 bg-neutral-200 shrink-0"></div>
            {/* Horizontal Divider (Mobile only) */}
            <div className="md:hidden h-px w-24 bg-neutral-200"></div>

            <div className="flex-1 text-[14px] md:text-[15px] text-[#555555] leading-[26px]">
              Avec le REVO FIFA, profitez d'un ordinateur fiable, élégant et performant pour toutes vos activités quotidiennes, sans compromis sur votre budget.
            </div>
          </div>

          {/* Center Image */}
          <img 
            src="/images/laptop_closed-revo_fifa_free-slogan.png" 
            alt="REVO FIFA Slogan" 
            className="w-full max-w-[1000px] h-auto object-contain -mt-16 -mb-8 md:-mt-70 md:-mb-68 select-none drop-shadow-xl relative z-0"
          />

          {/* Bottom Slogan */}
          <p className="font-display font-bold text-[16px] md:text-[18px] text-black text-center">
            REVO FIFA, c'est l'essentiel de la performance au meilleur prix.
          </p>

        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="py-10 md:py-16 bg-white flex items-center justify-center px-6">
        <div className="w-full max-w-[1171px] bg-[#222222] rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 relative">
          
          {/* Left Text Content */}
          <div className="flex flex-col text-center md:text-left z-10 w-full md:w-1/2">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 uppercase">
              PRÊT À AMÉLIORER VOTRE TECHNOLOGIE ?
            </h2>
            <p className="text-[#D1D1D1] text-lg mb-10 leading-relaxed max-w-md">
              Rejoignez des millions de personnes qui font confiance à ASUKA SPIRIT pour la qualité, l&apos;innovation et le style.
            </p>

            {/* Button */}
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-between gap-6 bg-white hover:bg-neutral-200 text-black font-medium text-[15px] leading-[26px] rounded-full pl-[24px] pr-[3px] h-[55px] transition-all duration-300 group w-fit mx-auto md:mx-0"
            >
              <span>Rejoindre ASUKA SPIRIT</span>
              <div className="w-[49px] h-[49px] rounded-full bg-primary flex items-center justify-center text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[50%] mt-12 md:mt-0 relative flex justify-center md:justify-end z-10">
            <img 
              src="/images/groupe_13_1_I478_1145;304_1348.png" 
              alt="ASUKA SPIRIT Products" 
              className="w-full max-w-[600px] object-contain drop-shadow-2xl" 
            />
          </div>
        </div>
      </section>
    
      <FloatingOrderButton appareilName="REVO FREE FIFA" />
    </div>
  );
}
