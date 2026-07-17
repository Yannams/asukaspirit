import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Sparkles, Zap, Users } from "lucide-react";
import FigmaImage from "../../../../components/FigmaImage";
import FloatingOrderButton from '@/components/FloatingOrderButton';

export default function RevoFreeShangoPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Product Hero */}
      <section className="bg-transparent flex flex-col items-center text-center pb-0 relative">
        {/* Top Hero Image */}
        <div className="w-full mt-[-50px] md:mt-[-120px] flex justify-center z-0 relative">
          <img 
            src="/images/laptop-shango_revo-free-shango_hero.png" 
            alt="Revo Free Shango Hero" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Overlapping Text Section */}
        <div className="w-full bg-white relative z-10 mt-[-60px] md:mt-[-300px] pt-16 md:pt-24 pb-20">
          <div className="max-w-[1171px] mx-auto px-6 w-full flex flex-col items-center">
          <span className="text-[#F47639] text-[17px] font-semibold uppercase tracking-[0.47em] mb-4 ml-[0.47em]">
            REVO
          </span>
          <h1 className="text-[#212121] text-[40px] font-semibold uppercase mb-6">
            SHANGO R PRO
          </h1>
          <p className="text-[#212121] text-[20px] font-normal mb-8 max-w-[567px]">
            La puissance professionnelle au service de vos ambitions
          </p>
          <p className="text-[#8B8B8B] text-[15px] font-normal uppercase mb-0 md:-mb-10 relative z-20">
            Intel Core i7 (13e Gén.) • 16 Go RAM • SSD 1 To
          </p>
          <div className="w-full max-w-[1200px] mt-[-80px] md:mt-[-160px] mb-[-50px] md:mb-[-100px] relative z-10 pointer-events-none">
            <img
              src="/images/laptop-shango_revo-free-shango_shango.png"
              alt="Revo Free Shango R Pro"
              className="w-full object-contain scale-110 md:scale-125"
            />
          </div>
        </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-[#151515] py-20 overflow-hidden">
        <div className="max-w-[1171px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image */}
          <div className="relative flex justify-center lg:justify-start lg:-ml-6">
            <img 
              src="/images/laptop-shango_revo-free-shango_advantages.png" 
              alt="Shango Advantages" 
              className="w-full max-w-[600px] object-contain"
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col gap-6 justify-center">
            <h2 className="font-bold text-white text-[20px] leading-[1.4] max-w-[362px]">
              Conçu pour les professionnels, créateurs et utilisateurs exigeants.
            </h2>
            
            <ul className="flex flex-col gap-4 mt-2">
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#F47639] shrink-0" strokeWidth={3} />
                <span className="text-white text-[18px] font-normal">Excellence inspirée</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#F47639] shrink-0" strokeWidth={3} />
                <span className="text-white text-[18px] font-normal">Réactivité optimale</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#F47639] shrink-0" strokeWidth={3} />
                <span className="text-white text-[18px] font-normal">Grande capacité</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#F47639] shrink-0" strokeWidth={3} />
                <span className="text-white text-[18px] font-normal">Utilisation intensive</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Specs & Targets Section */}
      <section className="bg-white py-20 flex flex-col items-center text-center overflow-hidden">
        <p className="text-[#8B8B8B] text-[14px] font-normal mb-12 relative z-20">
          Plus de puissance. Plus de rapidité. Plus de possibilités.
        </p>

        <div className="w-full max-w-[1171px] mx-auto px-6 mt-[-80px] md:mt-[-180px] mb-[-60px] md:mb-[-160px] pointer-events-none relative z-10">
          <img 
            src="/images/laptop_opened-revo_free_shango-more_power.png" 
            alt="Shango Side Profile" 
            className="w-full h-auto object-contain scale-[1.6] md:scale-[2.2]"
          />
        </div>

        <div className="w-full max-w-[800px] mx-auto px-6 relative z-20">
          <h2 className="text-[#F47639] text-[15px] font-semibold uppercase mb-8">
            CARACTÉRISTIQUES TECHNIQUES
          </h2>
          
          <div className="w-full flex flex-col border border-[#212121]">
            {[
              { name: "Modèle", value: "REVO SHANGO R PRO" },
              { name: "Processeur", value: "Intel Core i7 (13e génération)" },
              { name: "Mémoire RAM", value: "16 Go" },
              { name: "Stockage", value: "SSD 1 To" },
              { name: "Utilisation", value: "Professionnelle / Création / Entreprise" }
            ].map((spec, index) => (
              <div key={index} className="flex flex-row w-full border-b border-[#212121] last:border-b-0">
                <div className="w-1/3 bg-[#212121] text-white p-4 text-[14px] font-semibold text-left flex items-center">
                  {spec.name}
                </div>
                <div className="w-2/3 bg-white text-[#212121] p-4 text-[14px] font-medium text-left flex items-center border-l border-[#212121]">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targets Section */}
      <section className="w-full bg-[#F5F5F5] py-16 flex flex-col items-center text-center">
        <div className="w-full max-w-[1171px] mx-auto px-6">
          <h2 className="text-[#F47639] text-[15px] font-semibold uppercase mb-10">
            À QUI S'ADRESSE-T-IL ?
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 text-[#212121] text-[15px] font-medium">
            <span>Entreprises</span>
            <div className="w-[1px] h-[15px] bg-neutral-300 hidden md:block"></div>
            <span>Développeurs</span>
            <div className="w-[1px] h-[15px] bg-neutral-300 hidden md:block"></div>
            <span>Graphistes</span>
            <div className="w-[1px] h-[15px] bg-neutral-300 hidden md:block"></div>
            <span>Administrateurs</span>
          </div>
        </div>
      </section>

      {/* Slogan & Best Price Section */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-[1171px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="flex justify-center lg:justify-start lg:pl-10">
            <p className="text-[#212121] text-[22px] font-normal leading-[1.4] max-w-[352px]">
              Meilleurs prix, Meilleure qualité, Meilleur design, c'est ça <br />
              <span className="text-[#F47639] font-bold">REVO FREE, la révolution</span>
            </p>
          </div>
          
          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-start lg:ml-4">
            <img 
              src="/images/laptop_semi_open-revo_free_shango-bestprice.png" 
              alt="Revo Free Shango Slogan" 
              className="w-full max-w-[1000px] object-contain scale-[1.6] lg:scale-[2.4] origin-left"
            />
          </div>
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
    
      <FloatingOrderButton appareilName="REVO FREE SHANGO" />
    </div>
  );
}
