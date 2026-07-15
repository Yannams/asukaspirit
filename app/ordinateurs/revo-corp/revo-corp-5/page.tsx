import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function RevoCorp5Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header REVO CORP 5 */}
      <section className="mt-24 md:mt-[0px] py-16 md:py-24 relative bg-white min-h-[730px] flex items-center justify-center">
        
        {/* The background shape (Subtract.svg is the gradient shape with a hollow) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <img 
            src="/images/Subtract.svg" 
            alt="Background Shape" 
            className="w-full min-w-[900px] max-w-[1322px] h-auto object-contain"
          />
        </div>

        <div className="max-w-[1322px] mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px] lg:min-h-[730px] translate-y-19 md:translate-y-38">
            
            {/* Left Column: Text Content inside the hollow of Subtract.svg */}
            <div className="flex flex-col items-start w-full mt-10 lg:mt-0 lg:pl-16 xl:pl-24">
              {/* Pill */}
              <div className="inline-flex items-center bg-[#E9E9E9] rounded-[48px] px-[18px] py-[6px] gap-1 shadow-sm mb-4">
                <span className="font-[family-name:var(--font-montserrat)] font-medium text-[16px] text-[#F47B20]">Desktop</span>
                <span className="font-[family-name:var(--font-montserrat)] font-normal text-[16px] text-[#222222]">ALL IN ONE</span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-montserrat)] font-bold text-[40px] md:text-[55px] lg:text-[73px] leading-[1.1] text-[#000000] mb-6">
                REVO CORP 5
              </h1>

              {/* Paragraph */}
              <p className="font-[family-name:var(--font-montserrat)] font-normal text-[15px] md:text-[16px] leading-[26px] text-black max-w-[480px] text-justify">
                Véritable vitrine du savoir-faire technologique <span className="font-bold">d'ASUKA SPIRIT</span>, cette gamme représente le modèle tout-en-un le plus élaboré de la marque. Elle offre une expérience informatique fluide, une installation simplifiée et un environnement de travail plus organisé, sans compromis sur la puissance et la fiabilité.
              </p>
            </div>

            {/* Right Column: PC Image */}
            <div className="relative flex items-center justify-center lg:justify-end select-none h-[400px] lg:h-[730px] z-20">
              <img 
                src="/images/allinone-RC5-hero.png" 
                alt="REVO CORP 5 All-In-One" 
                className="w-auto h-[110%] lg:h-[115%] max-h-[850px] object-contain object-center lg:object-right scale-[1.1] md:scale-[1.15] lg:translate-x-12 origin-center drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* New Section: Design Compact */}
      <section className="py-24 md:py-32 relative bg-white min-h-[600px] flex items-center">
        {/* Slanted Background Shape (#F7F7F7) - Triangle Polygon */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 mt-64 md:mt-[400px] bg-[#F7F7F7] z-0 pointer-events-none"
          style={{ 
            width: '1854px', 
            height: '1546px', 
            left: '-927px', 
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' 
          }}
        ></div>

        <div className="max-w-[1322px] mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="flex flex-col justify-center items-center lg:items-start w-full">
              <p className="font-[family-name:var(--font-montserrat)] font-normal text-[16px] leading-[1.5] text-[#000000] w-full max-w-[271px] text-justify">
                Les <span className="font-bold">All-in-One</span> offrent un design compact et élégant, parfait pour les espaces de travail modernes.
              </p>
            </div>

            {/* Right Column: PC Image */}
            <div className="relative flex items-center justify-center lg:justify-end w-full h-[400px] lg:h-[612px]">
              <img 
                src="/images/allinone-RC5-allinone.png" 
                alt="All in one design" 
                className="w-full max-w-[850px] h-full object-contain"
              />
            </div>

          </div>
        </div>     
      </section>

      {/* Webcam Section */}
      <section className="relative w-full flex flex-col items-center">
        <div className="relative w-full mx-auto">
          <img 
            src="/images/allinone-RC5-webcam.png" 
            alt="Webcam REVO CORP 5" 
            className="w-full h-auto object-cover"
          />
          {/* Overlay Text */}
          <div className="absolute top-[10%] right-[5%] md:top-[20%] md:right-[15%]">
            <p className="font-[family-name:var(--font-montserrat)] font-normal text-[16px] leading-[1.5] text-[#000000] w-full max-w-[305px] text-justify">
              Équipé d'une <span className="font-bold">webcam HD de 3,0 MP</span> pour des visioconférences claires et professionnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Connectivité Section */}
      <section className="pt-20 md:pt-64 pb-0 bg-white flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-[826px] flex flex-col items-center px-6 mb-10 md:mb-64">
          <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[24px] md:text-[28px] text-[#000000] mb-6">
            Connectivité complète et ultra-polyvalente pour tous vos usages
          </h2>
          <p className="font-[family-name:var(--font-montserrat)] font-normal text-[15px] md:text-[16px] leading-[26px] text-[#000000]">
            Offrant une connectivité complète et polyvalente, incluant 1 port HDMI, 1 VGA, 1 RJ45, 1 port Type-C 3.0, 1 port USB 2.0, 4 ports USB 3.2, ainsi qu'un jack audio (Mic-in/Line-in/Line-out) et un lecteur de carte SD, pour répondre efficacement à tous vos besoins de connexion.
          </p>
        </div>
        <img 
          src="/images/allinone-RC5-connectivite.png" 
          alt="Connectivité arrière" 
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Profitez Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1920px] mx-auto">
          
          {/* Left Column: Image (Shifted Left to cut off slightly) */}
          <div className="w-full lg:w-[60%] flex justify-start -translate-x-8 md:-translate-x-16 lg:-translate-x-16 xl:-translate-x-32">
            <img 
              src="/images/allinone-RC5-profitez.png" 
              alt="Profitez d'un grand écran" 
              className="w-full max-w-[1051px] h-auto object-contain"
            />
          </div>

          {/* Right Column: Text */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-start px-6 lg:px-12 mt-12 lg:mt-0">
            <div className="w-full max-w-[475px]">
              <p className="font-[family-name:var(--font-montserrat)] font-normal text-[16px] leading-[28px] text-[#000000] text-justify">
                Profitez d'un grand écran de 23,8 pouces associé à un puissant Intel Core i5 de 13ᵉ génération (10 cœurs, 16 threads) pour travailler, créer et collaborer avec une fluidité remarquable au quotidien.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 md:py- flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-[1440px] flex flex-col items-center">
          <div className="w-full max-w-[1000px] mb-12 flex justify-center">
            <img 
              src="/images/allinone-RC5-performance.png" 
              alt="REVO CORP 5 Performances et vues" 
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full max-w-[900px] text-center">
            <p className="font-[family-name:var(--font-montserrat)] font-normal text-[16px] leading-[28px] text-[#000000]">
              Grâce à ses 8 Go de RAM DDR5 à 4800 MHz, son SSD M.2 NVMe de 256 Go et sa carte graphique Intel UHD Graphics 730, le REVO CORP 5 offre des performances rapides et fiables pour les tâches professionnelles et multimédias.
            </p>
          </div>
        </div>
      </section>


      {/* Call to Action (CTA) */}
      <section className="py-10 md:py-16 bg-white flex items-center justify-center px-6">
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
