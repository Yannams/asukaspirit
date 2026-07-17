import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import FeaturesSlider from "./FeaturesSlider";
import FloatingOrderButton from '@/components/FloatingOrderButton';

export default function ASWatch1Page() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] md:min-h-[1080px] flex flex-col items-center justify-center overflow-hidden -pt-20 bg-[#191919]">
        

        {/* Layered Images Container */}
        {/* We use a container that scales down properly on smaller screens while maintaining aspect ratio or centering */}
        <div className="relative w-full max-w-[1440px] h-[700px] md:h-[950px] flex items-center justify-center z-10 mt-10">
          
          {/* Layer 1: Solid White Text (Background) */}
          <img 
            src="/images/textwhite-aw1-hero.png" 
            alt="AS WATCH 1 Background Text" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[220px] w-[90%] md:w-[1200px] h-auto object-contain z-0 pointer-events-none"
          />
          
          {/* Layer 2: The Watch Image */}
          <img 
            src="/images/montre-aw1-hero.png" 
            alt="AS WATCH 1" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-[950px] h-auto object-contain z-10 drop-shadow-2xl pointer-events-none"
          />
          
          {/* Layer 3: Bordered Text (Foreground) */}
          <img 
            src="/images/textborder_aw1_hero.png" 
            alt="AS WATCH 1 Border Text" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[220px] w-[90%] md:w-[1200px] h-auto object-contain z-20 pointer-events-none"
          />
          
        </div>

        {/* Subtitle */}
        <div className="relative z-30 mt-8 mb-20 text-center px-4">
          <p className="font-sans italic font-medium text-[24px] md:text-[37px] leading-[1] text-white">
            Série Sport Dynamique
          </p>
        </div>

      </section>

      {/* Made For Section */}
      <section className="w-full bg-white py-16 md:py-32 px-6 flex items-center justify-center">
        <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/images/montre-aw1-madeFor.png" 
              alt="Montre AS WATCH 1 Profil" 
              className="w-full max-w-[500px] h-auto object-contain drop-shadow-xl" 
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <p className="font-sans font-normal text-[15px] leading-[1.75] text-[#000000] max-w-[522px] text-justify md:text-left">
              Pensée pour les jeunes, les professionnels dynamiques et les sportifs, 
              cette montre incarne la vitalité et la robustesse. Elle accompagne les 
              entraînements, les journées intenses et les instants de détente avec 
              une même fiabilité.
            </p>
          </div>

        </div>
      </section>

      {/* Ideal For Section */}
      <section className="w-full bg-[#f8faf8] relative flex items-center overflow-hidden border-t border-neutral-100 py-16 md:py-28">
        
        {/* Text Layer absolute to container */}
        <div className="absolute inset-0 w-full max-w-[1440px] mx-auto pointer-events-none flex items-center">
          <div className="absolute left-[6%] md:left-[10%] z-10 text-left pointer-events-auto">
            <h2 className="font-sans text-[36px] md:text-[48px] leading-[1.1] text-black">
              <span className="font-normal block">Idéale pour</span>
              <span className="font-bold block">le sport</span>
            </h2>
          </div>
        </div>

        {/* Image aligned right */}
        <div className="w-full flex justify-end">
          <img 
            src="/images/athlete-aw1-idealFor.png" 
            alt="Idéale pour le sport" 
            className="w-[150%] md:w-[85%] max-w-[1400px] h-auto object-contain object-right" 
          />
        </div>

      </section>

      {/* Description technique et visuelle */}
      <section className="w-full bg-[#FAFAFA] py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-20 md:mb-24">
            <h2 className="font-display font-bold text-[32px] md:text-[40px] text-black mb-6">
              Description technique et visuelle
            </h2>
            <p className="font-sans text-[15px] leading-relaxed text-[#555555] max-w-[800px] mx-auto">
              Robuste, élégante et performante, la montre ASUKA Sport Dynamique accompagne vos activités 
              sportives et professionnelles grâce à ses fonctionnalités intelligentes et son confort au quotidien
            </p>
          </div>

          {/* Specs Grid */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-12 lg:gap-24">
            
            {/* Left Specs */}
            <div className="flex flex-col gap-12 w-full md:w-1/3">
              {[
                { title: "Boîtier", desc: "Alliage noir mat ou doré (rose gold)" },
                { title: "Bracelet", desc: "Silicone coloré (noir, orange, rose)" },
                { title: "Écran", desc: "TFT couleur haute luminosité" },
                { title: "Étanchéité", desc: "IP68 – résistante à la sueur et aux éclaboussures" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 group">
                  <div className="text-center md:text-right order-2 md:order-1">
                    <h3 className="font-sans font-bold text-[15px] text-black">{item.title}</h3>
                    <p className="font-sans text-[14px] text-[#555555]">{item.desc}</p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F26A3B] shrink-0 order-1 md:order-2"></div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="w-full md:w-1/3 flex justify-center py-8 md:py-0">
              <img 
                src="/images/montre-aw1-description.png" 
                alt="Caractéristiques AS WATCH 1" 
                className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl scale-[170%]" 
              />
            </div>

            {/* Right Specs */}
            <div className="flex flex-col gap-12 w-full md:w-1/3">
              {[
                { title: "Autonomie", desc: "5-7 jours" },
                { title: "Fonctions clés", desc: "Suivi multisport, capteur cardiaque, SpO2, chronomètre, rappels d'activité, gestion des appels et musique" },
                { title: "Compatibilité", desc: "Android & iOS" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 group">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F26A3B] shrink-0"></div>
                  <div className="text-center md:text-left">
                    <h3 className="font-sans font-bold text-[15px] text-black">{item.title}</h3>
                    <p className="font-sans text-[14px] text-[#555555]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Features Slider Section */}
      <FeaturesSlider />

      {/* Repoussez vos limites Section */}
      <section className="w-full bg-white py-20 px-6 flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left: Images */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img 
              src="/images/montre_2-aw1-repoussez.png" 
              alt="ASUKA Sport Dynamique Vue Avant" 
              className="w-[60%] max-w-[350px] h-auto object-contain relative z-20" 
            />
            <img 
              src="/images/montre-aw1-repoussez.png" 
              alt="ASUKA Sport Dynamique Vue Arrière" 
              className="w-[55%] max-w-[320px] h-auto object-contain relative z-10 -ml-16 md:-ml-28 drop-shadow-xl" 
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <p className="font-sans text-[15px] leading-[1.8] text-[#222222] max-w-[480px] mx-auto md:mx-0">
              Repoussez vos limites avec la ASUKA Sport Dynamique. Solide, précise et stylée, 
              elle vous accompagne à la salle, au travail comme dans vos défis quotidiens. 
              Son design moderne et ses fonctions sportives avancées incarnent l'énergie et la performance au poignet.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-24 bg-white flex items-center justify-center px-6">
        <div className="w-full max-w-[1171px] bg-[#222222] rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 relative">
          
          {/* Left Text Content */}
          <div className="flex flex-col text-center md:text-left z-10 w-full md:w-1/2">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 uppercase">
              PRÊT À AMÉLIORER VOTRE TECHNOLOGIE ?
            </h2>
            <p className="text-[#D1D1D1] text-lg mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
              Rejoignez des millions de personnes qui font confiance à ASUKA SPIRIT pour la qualité, l'innovation et le style.
            </p>

            {/* Button */}
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-between gap-6 bg-white hover:bg-neutral-200 text-black font-medium text-[15px] leading-[26px] rounded-full pl-[24px] pr-[3px] h-[55px] transition-all duration-300 group w-fit mx-auto md:mx-0"
            >
              <span>Rejoindre ASUKA SPIRIT</span>
              <div className="w-[49px] h-[49px] rounded-full bg-[#F26A3B] flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </div>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[50%] mt-12 md:mt-0 relative flex justify-center md:justify-end z-10">
            <img 
              src="/images/groupe_13_1_I478_1145;304_1348.png" 
              alt="ASUKA SPIRIT Products" 
              className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl" 
            />
          </div>
          
        </div>
      </section>

    
      <FloatingOrderButton appareilName="AS WATCH 1" />
    </div>
  );
}
