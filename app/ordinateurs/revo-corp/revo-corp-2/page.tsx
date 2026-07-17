import Link from "next/link";
import { Cpu, Laptop, Zap, Check, ArrowUpRight } from "lucide-react";
import FigmaImage from "../../../../components/FigmaImage";

export default function RevoCorp2Page() {
  const laptop2Specs = [
    { name: "Moniteur / Écran", value: "15.6” FHD IPS (1920x1080)" },
    { name: "Processeur", value: "Intel i5-1335U (10 Cores, 12 Threads, up to 4.46GHz)" },
    { name: "Mémoire RAM", value: "8 Go DDR5 (3200MHz)" },
    { name: "Stockage", value: "SSD 256 Go M.2 NVMe" },
    { name: "Atout principal", value: "Légèreté, sécurité et finition haut de gamme" }
  ];

  const laptop3Specs = [
    { name: "Moniteur / Écran", value: "15.6” FHD IPS (1920x1080)" },
    { name: "Processeur", value: "Intel i7-1335U (10 Cores, 12 Threads, up to 5.00GHz, 13MB Cache)" },
    { name: "Mémoire RAM", value: "16 Go DDR5 (3200MHz)" },
    { name: "Stockage", value: "SSD 512 Go M.2 NVMe" },
    { name: "Atout principal", value: "Puissance, durabilité et connexion avancée" }
  ];

  return (
    <div className="flex flex-col min-h-screen">


      {/* Hero Header */}
      <section className="relative w-full bg-white pt-[135px] overflow-hidden">
        <div className="flex flex-col items-center text-center px-6 relative z-10">
          {/* Badge */}
          <div className="flex items-center justify-center bg-[#F4F4F4] rounded-[48px] px-[18px] py-[6px] mb-[30px] w-fit mx-auto">
            <span className="font-sans text-[16px] font-normal leading-none">
              <span className="text-primary">Laptop</span> <span className="text-black">premium & professionnel</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="font-sans text-[50px] font-normal leading-none text-black mb-[20px] uppercase">
            REVO CORP 2 & 3
          </h1>

          {/* Description */}
          <p className="font-sans text-[18px] leading-[28px] text-black text-center max-w-[928px] mx-auto mb-[60px]">
            Des laptops conçus pour tous les usages : mobilité pour les équipes de terrain, <span className="font-bold">puissance, légèreté et sécurité</span> pour les décideurs et experts.
          </p>
        </div>

        {/* Laptop Image & Black Background */}
        <div className="relative w-full flex justify-center pb-12 -mt-80">
          <div className="absolute bottom-49 w-full h-[50%] bg-[#1A1A1A] z-0"></div>
          <img 
            src="/images/laptop-RC2&3-hero.png" 
            alt="REVO CORP 2 & 3" 
            className="relative z-10 w-full max-w-[1200px] object-contain -rotate-[32deg]" 
          />
        </div>
      </section>

      {/* Gamme Context Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[800px] overflow-hidden">
        {/* Background Split */}
        <div className="absolute inset-0 z-0 flex flex-col">
          <div className="w-full h-1/2 bg-white"></div>
          <div className="w-full h-[20%] bg-[#1A1A1A]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col md:flex-row min-h-[600px] md:min-h-[800px]">
          
          {/* Left Column (Image) */}
          <div className="w-full md:w-1/2 flex items-center justify-end">
            <div className="w-[130%] md:w-[160%] lg:w-[200%] flex-shrink-0">
              <img 
                src="/images/laptop-RC2&3-gamme.png" 
                alt="La gamme REVO CORP 2 & 3" 
                className="w-full h-auto object-contain py-8 md:py-16"
              />
            </div>
          </div>

          {/* Right Column (Text) */}
          <div className="w-full md:w-1/2 relative flex flex-col">
            
            {/* Top Text Block (White bg area) */}
            <div className="w-full h-1/2 flex items-end justify-center md:justify-start pb-12 px-6 md:px-0 md:pl-12 lg:pl-24">
              <div className="max-w-[448px] w-full">
                <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[30px] leading-tight text-black mb-4">
                  La gamme REVO CORP 2 & 3
                </h2>
                <p className="font-[family-name:var(--font-montserrat)] font-normal text-[16px] leading-[1.6] text-black text-justify">
                  a été créée pour répondre à une réalité claire : les organisations publiques et privées en Afrique ont besoin d’outils informatiques plus spécialisés, plus robustes et adaptés à différents niveaux d’exigence professionnelle.
                </p>
              </div>
            </div>
            
            {/* Bottom Text Block (Dark bg area) */}
            <div className="w-full h-1/2 flex items-start justify-center md:justify-start pt-12 px-6 md:px-0 md:pl-12 lg:pl-24">
              <div className="max-w-[448px] w-full">
                <p className="font-[family-name:var(--font-montserrat)] font-normal text-[16px] leading-[1.6] text-white text-justify">
                  Après l’analyse des besoins des ministères, administrations, entreprises, ONG et institutions régionales, <span className="font-bold">ASUKA SPIRIT</span> a identifié que tous les utilisateurs ne travaillent pas de la même manière ni avec les mêmes contraintes. Il fallait donc aller plus loin qu’une offre unique.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>



      {/* Pourquoi REVO CORP Section */}
      <section className="relative w-full bg-white py-16 md:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">
          
          {/* Left Column - Text */}
          <div className="w-full md:w-1/2 flex flex-col md:pr-12 xl:pr-24 relative z-10">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[24px] md:text-[28px] lg:text-[36px] leading-tight text-black mb-10 whitespace-nowrap">
              Pourquoi REVO CORP 2 & 3 existent ?
            </h2>
            
            <ul className="space-y-6">
              {[
                "Segmenter les besoins professionnels selon le niveau d'exigence et de performance",
                "Répondre à des environnements de travail variés : bureaux administratifs, directions, équipes techniques, mobilité terrain",
                "Apporter plus de précision dans le choix des équipements pour les institutions et entreprises",
                "Offrir des machines adaptées aux usages intensifs et spécialisés (gestion, administration avancée, analyse, production, terrain)",
                "Renforcer la montée en puissance technologique entre des postes standards et des postes stratégiques"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#FF7A00] mr-4 flex-shrink-0 mt-[2px]">
                    <Check size={20} strokeWidth={3} />
                  </span>
                  <span className="font-[family-name:var(--font-montserrat)] font-medium text-[16px] leading-[1.6] text-[#4A4A4A]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end relative">
             <div className="w-[120%] md:w-[150%] lg:w-[160%] flex-shrink-0 flex items-center justify-start translate-x-16 md:translate-x-32 lg:translate-x-48 xl:translate-x-64 -mt-10 md:-mt-16 lg:-mt-14 xl:-mt-6">
               <img 
                 src="/images/laptop-RC2&3-pourquoi.png" 
                 alt="REVO CORP Laptop" 
                 className="w-full h-auto object-contain scale-110 md:scale-125"
               />
             </div>
          </div>

        </div>
      </section>

      {/* REVO CORP 2 Details Section */}
      <section className="relative w-full bg-white py-16 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column - Image & Background Shape */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center mt-12 md:mt-0">
             <div className="relative w-full max-w-[400px] lg:max-w-[500px]">
               {/* Background Shape */}
               <img 
                 src="/images/Subtract-RC2&3-RC2.svg" 
                 alt="Forme de fond" 
                 className="w-full h-auto object-contain"
               />
               {/* Laptop Overlay */}
               <img 
                 src="/images/laptop-RC2&3-RC2.png" 
                 alt="REVO CORP 2 Laptop" 
                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] lg:w-[140%] max-w-none h-auto object-contain drop-shadow-2xl"
               />
             </div>
          </div>

          {/* Right Column - Text */}
          <div className="w-full md:w-1/2 flex flex-col font-[family-name:var(--font-montserrat)]">
            <h2 className="font-bold text-[32px] md:text-[40px] leading-tight text-black">
              REVO CORP 2
            </h2>
            <h3 className="font-bold text-[24px] md:text-[32px] leading-tight text-black mb-10">
              Puissance et fluidité
            </h3>
            
            <p className="mb-6 text-[16px] text-[#4A4A4A] leading-[1.6]">
              Le REVO CORP 2 allie performance et efficacité pour un usage professionnel optimal.
            </p>
            <p className="mb-6 text-[16px] text-[#4A4A4A] leading-[1.6]">
              Il est équipé d'un <span className="font-bold text-[#FF7A00]">écran 15.6” Full HD IPS (1920×1080)</span> offrant un affichage clair et précis.
            </p>
            <p className="mb-6 text-[16px] text-[#4A4A4A] leading-[1.6]">
              Sous le capot, <span className="font-bold text-[#FF7A00]">un Intel Core i5-1335U (10 cœurs, 12 threads) cadencé de 2.30 GHz à 4.46 GHz en Turbo</span> assure rapidité et multitâche fluide.
            </p>
            <p className="mb-10 text-[16px] text-[#4A4A4A] leading-[1.6]">
              La machine embarque <span className="font-bold text-[#FF7A00]">8 Go de RAM DDR5 à 3200 MHz</span>, garantissant une excellente réactivité, ainsi qu'un <span className="font-bold text-[#FF7A00]">SSD M.2 NVMe de 256 Go</span> pour un stockage rapide et sécurisé.
            </p>
            
            <div>
              <button className="bg-[#242424] text-white text-[16px] font-medium px-10 py-4 hover:bg-black transition-colors">
                Commander
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* REVO CORP 3 Details Section */}
      <section className="relative w-full bg-white py-16 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column - Text */}
          <div className="w-full md:w-1/2 flex flex-col font-[family-name:var(--font-montserrat)]">
            <h2 className="font-bold text-[32px] md:text-[40px] leading-tight text-[#FF7A00]">
              REVO CORP 3
            </h2>
            <h3 className="font-bold text-[24px] md:text-[32px] leading-tight text-black mb-10">
              Puissance avancée et<br className="hidden lg:block"/> performance supérieure
            </h3>
            
            <p className="mb-6 text-[16px] text-[#4A4A4A] leading-[1.6]">
              Le REVO CORP 3 se distingue par une puissance renforcée et une fluidité optimale pour les usages professionnels et intensifs.
            </p>
            <p className="mb-6 text-[16px] text-[#4A4A4A] leading-[1.6]">
              Il est doté d'un <span className="font-bold text-black">écran 15.6” Full HD IPS (1920×1080)</span> offrant un rendu visuel clair, précis et confortable.
            </p>
            <p className="mb-6 text-[16px] text-[#4A4A4A] leading-[1.6]">
              Sous le capot, un <span className="font-bold text-black">Intel Core i7-1335U (10 cœurs, 12 threads) cadencé de 2.50 GHz à 5.0 GHz en Turbo, avec 13 MB Intel Smart Cache</span>, garantit une exécution rapide et une excellente capacité multitâche.
            </p>
            <p className="mb-10 text-[16px] text-[#4A4A4A] leading-[1.6]">
              La performance est soutenue par <span className="font-bold text-black">16 Go de RAM DDR5 à 3200 MHz</span>, assurant une grande fluidité même en utilisation intensive, ainsi qu'un <span className="font-bold text-black">SSD M.2 NVMe de 512 Go</span> pour un stockage rapide, spacieux et sécurisé.
            </p>
            
            <div>
              <button className="bg-[#242424] text-white text-[16px] font-medium px-10 py-4 hover:bg-black transition-colors">
                Commander
              </button>
            </div>
          </div>

          {/* Right Column - Image & Background Shape */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center mb-12 md:mb-0">
             <div className="relative w-full max-w-[400px] lg:max-w-[500px]">
               {/* Background Shape */}
               <img 
                 src="/images/Subtract-RC2&3-RC3.svg" 
                 alt="Forme de fond" 
                 className="w-full h-auto object-contain"
               />
               {/* Laptop Overlay */}
               <img 
                 src="/images/laptop_revo-corp_revo-corp-3.png" 
                 alt="REVO CORP 3 Laptop" 
                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] lg:w-[120%] max-w-none h-auto object-contain drop-shadow-2xl"
               />
             </div>
          </div>

        </div>
      </section>

      {/* Floating Laptop Evolution Section */}
      <section className="relative w-full bg-white py-16 md:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative">
          
          {/* Huge floating laptop */}
          <div className="flex justify-center items-center w-full relative min-h-[400px] md:min-h-[600px] lg:min-h-[800px]">
            <img 
              src="/images/laptop-RC2&3-RC2&3.png" 
              alt="REVO CORP 2 & 3 Evolution" 
              className="w-full max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] h-auto object-contain z-10"
            />

            {/* Left Text Block - Absolute positioning for large screens */}
            <div className="hidden lg:block absolute left-0 top-[30%] w-[300px] xl:w-[350px] z-20">
              <p className="font-[family-name:var(--font-montserrat)] text-[14px] leading-[1.6] text-[#4A4A4A]">
                <span className="font-bold text-black">REVO CORP 2 & 3</span> ont été créées pour structurer l'offre professionnelle en plusieurs niveaux de performance, afin que chaque organisation puisse avoir exactement l'ordinateur adapté à son rôle, sans surcoût inutile ni manque de puissance.
              </p>
            </div>

            {/* Right Text Block - Absolute positioning for large screens */}
            <div className="hidden lg:block absolute right-0 bottom-[20%] w-[300px] xl:w-[350px] z-20">
              <p className="font-[family-name:var(--font-montserrat)] text-[14px] leading-[1.6] text-[#4A4A4A]">
                C'est une évolution naturelle de <span className="font-bold text-[#FF7A00]">REVO CORP</span> : passer d'une solution globale à une réponse plus fine, plus stratégique et mieux adaptée aux réalités du terrain africain.
              </p>
            </div>
          </div>

          {/* Mobile view text blocks */}
          <div className="lg:hidden flex flex-col gap-8 mt-12 relative z-20">
             <p className="font-[family-name:var(--font-montserrat)] text-[14px] leading-[1.6] text-[#4A4A4A] text-center max-w-[500px] mx-auto">
               <span className="font-bold text-black">REVO CORP 2 & 3</span> ont été créées pour structurer l'offre professionnelle en plusieurs niveaux de performance, afin que chaque organisation puisse avoir exactement l'ordinateur adapté à son rôle, sans surcoût inutile ni manque de puissance.
             </p>
             <p className="font-[family-name:var(--font-montserrat)] text-[14px] leading-[1.6] text-[#4A4A4A] text-center max-w-[500px] mx-auto">
               C'est une évolution naturelle de <span className="font-bold text-[#FF7A00]">REVO CORP</span> : passer d'une solution globale à une réponse plus fine, plus stratégique et mieux adaptée aux réalités du terrain africain.
             </p>
          </div>

        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="py-10 md:py-16 bg-white dark:bg-black flex items-center justify-center px-6 border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="w-full max-w-[1171px] bg-[#222222] rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 relative">
          
          {/* Left Text Content */}
          <div className="flex flex-col text-center md:text-left z-10 w-full md:w-1/2">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-3xl md:text-4xl text-white mb-6 uppercase">
              PRÊT À AMÉLIORER VOTRE TECHNOLOGIE ?
            </h2>
            <p className="text-[#D1D1D1] text-lg mb-10 leading-relaxed max-w-md">
              Rejoignez des millions de personnes qui font confiance à ASUKA SPIRIT pour la qualité, l'innovation et le style.
            </p>

            {/* Button */}
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-between gap-6 bg-white hover:bg-neutral-200 text-black font-medium text-[15px] leading-[26px] rounded-full pl-[24px] pr-[3px] h-[55px] transition-all duration-300 group w-fit mx-auto md:mx-0"
            >
              <span>Rejoindre ASUKA SPIRIT</span>
              <div className="w-[49px] h-[49px] rounded-full bg-[#F47639] flex items-center justify-center text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
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
    </div>
  );
}
