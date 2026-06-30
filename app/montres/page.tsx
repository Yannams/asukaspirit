import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Watch, Heart, Flame, ShieldAlert, Award } from "lucide-react";
import FigmaImage from "../../components/FigmaImage";

export default function MontresPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24 flex items-center justify-center px-6 overflow-hidden border-b border-neutral-100">
        <div className="max-w-[1171px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left w-full md:w-1/2 z-10">
            {/* Badge */}
            <span className="font-display font-normal text-[16px] leading-[1] text-[#212121] bg-[#F2F2F2] pt-[6px] pb-[6px] pl-[18px] pr-[18px] rounded-[48px] mb-8 inline-block">
              Montres connectées
            </span>
            
            {/* Title */}
            <h1 className="font-display font-bold text-[48px] md:text-[60px] leading-[1.1] text-black mb-6 uppercase">
              AS WATCH
            </h1>
            
            {/* Description */}
            <p className="font-display font-normal text-[15px] leading-[21px] text-justify text-black max-w-[450px]">
              Les montres connectées ASUKA allient élégance et technologie pour vous accompagner au quotidien. Suivi d'activité, surveillance de la santé, notifications intelligentes et contrôle de la musique : tout est conçu pour rester connecté, actif et organisé avec confort et autonomie.
            </p>
          </div>

          {/* Right Image Content */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10">
            <img 
              src="/images/double_montre_montres.png" 
              alt="AS WATCH" 
              className="w-full max-w-[474px] h-auto object-contain drop-shadow-2xl" 
            />
          </div>
        </div>
      </section>

      {/* Section AS WATCH 1 */}
      <section className="bg-white overflow-hidden border-b border-neutral-100">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center">
          
          {/* Left Large Image */}
          <div className="w-full lg:w-[65%] relative shrink-0 flex justify-start">
            <img 
              src="/images/as_watch_1_montres.png" 
              alt="AS WATCH 1" 
              className="w-full max-w-[1262px] h-auto object-contain lg:-ml-[25%] drop-shadow-xl" 
            />
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left px-6 py-16 lg:py-0 z-10 lg:pr-24">
            <p className="font-display font-medium text-[12px] md:text-[14px] leading-[1] text-[#222222] mb-4">
              Série Sport Dynamique
            </p>
            
            <h2 className="font-display font-bold text-[48px] md:text-[63px] leading-[1] text-black uppercase mb-6">
              AS WATCH 1
            </h2>
            
            <p className="font-sans font-normal text-[14px] leading-relaxed text-[#444444] text-justify mb-10 max-w-[480px]">
              Pensée pour ceux qui ne s'arrêtent jamais, cette montre connectée allie style, robustesse et performance. Que vous soyez au bureau, en plein entraînement ou en déplacement, elle vous accompagne avec précision, confort et une autonomie durable pour relever chaque défi du quotidien.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center bg-[#222222] hover:bg-black text-white font-sans font-semibold text-[14px] h-[44px] px-8 transition-all duration-300"
              >
                Commander
              </Link>
              
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center bg-transparent border border-neutral-300 hover:border-black text-[#222222] font-sans font-semibold text-[14px] h-[44px] px-6 transition-all duration-300 gap-2 group"
              >
                En savoir plus 
                <ArrowUpRight size={16} className="text-[#888888] group-hover:text-black transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section AS WATCH 2 */}
      <section className="bg-white overflow-hidden border-b border-neutral-100 pt-20">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center px-6 relative">
          
          {/* Top Text Content */}
          <div className="flex flex-col items-center text-center z-10 max-w-[700px] mb-4">
            <p className="font-display font-normal text-[16px] leading-[1] text-black mb-4">
              Série Argentée Classique
            </p>
            
            <h2 className="font-display font-bold text-[48px] md:text-[63px] leading-[1] text-black uppercase mb-6">
              AS WATCH 2
            </h2>
            
            <p className="font-display font-normal text-[16px] leading-normal text-black text-justify max-w-[448px] mb-8">
              Avec la montre connectée ASUKA Argent Classique, l'élégance rencontre l'efficacité. Discrète, légère et raffinée, elle s'adapte à votre rythme professionnel et personnel. Recevez vos notifications, suivez vos performances et améliorez votre bien-être sans jamais perdre en style. Parce que la productivité commence par une meilleure maîtrise de soi.
            </p>
          </div>

          {/* Large Center Image with Buttons overlaid */}
          <div className="w-full relative flex justify-center mt-4">
            <img 
              src="/images/as_watch_2_montres.png" 
              alt="AS WATCH 2" 
              className="w-full max-w-[1200px] h-auto object-contain drop-shadow-xl" 
            />
            
            <div className="absolute bottom-[5%] md:bottom-[10%] left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-20">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center bg-[#222222] hover:bg-black text-white font-sans font-semibold text-[14px] h-[44px] px-8 transition-all duration-300"
              >
                Commander
              </Link>
              
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center bg-white border border-neutral-300 hover:border-black text-[#222222] font-sans font-semibold text-[14px] h-[44px] px-6 transition-all duration-300 gap-2 group"
              >
                En savoir plus 
                <ArrowUpRight size={16} className="text-[#888888] group-hover:text-black transition-colors" />
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* Section AS WATCH 3 */}
      <section className="bg-white py-24 overflow-visible border-b border-neutral-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative flex justify-center">
          
          {/* Dark Background Container */}
          <div className="bg-[#191919] w-full max-w-[900px] relative flex flex-col lg:flex-row items-center justify-start p-10 md:p-16 lg:p-24 z-10 min-h-[626px] ml-0 lg:-ml-24">
            
            {/* Left Text Content */}
            <div className="w-full lg:w-[60%] flex flex-col items-start text-left z-20">
              <p className="font-display font-medium text-[14px] leading-[1] text-[#AAAAAA] mb-4">
                Série Outdoor Tactique
              </p>
              
              <h2 className="font-display font-bold text-[48px] md:text-[63px] leading-[1] text-white uppercase mb-8">
                AS WATCH 3
              </h2>
              
              <p className="font-sans font-normal text-[14px] leading-relaxed text-[#CCCCCC] text-justify mb-12 max-w-[480px]">
                La montre ASUKA Outdoor Tactique est plus qu'un accessoire : c'est un outil. Forgée pour résister aux environnements les plus rudes, elle accompagne les professionnels et explorateurs du quotidien. Sa solidité inspire confiance, ses capteurs avancés assurent sécurité et performance. Une montre conçue pour ceux qui n'abandonnent jamais, même quand la route devient difficile.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link 
                  href="#contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F26A3B] hover:bg-[#D95529] text-white font-sans font-semibold text-[14px] h-[48px] px-10 transition-all duration-300"
                >
                  Commander
                </Link>
                
                <Link 
                  href="#contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-neutral-600 hover:border-white text-white font-sans font-semibold text-[14px] h-[48px] px-8 transition-all duration-300 gap-2 group"
                >
                  En savoir plus 
                  <ArrowUpRight size={16} className="text-[#AAAAAA] group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Floating Image */}
          <div className="absolute right-0 lg:right-[-5%] top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-[50%] max-w-[800px] pointer-events-none">
            <img 
              src="/images/as_watch_3_montres.png" 
              alt="AS WATCH 3 Outdoor Tactique" 
              className="w-full h-auto object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)] scale-110" 
            />
          </div>
          
          {/* Mobile Image Fallback */}
          <div className="w-full relative flex justify-center lg:hidden mt-[-40px] z-20 pointer-events-none">
            <img 
              src="/images/as_watch_3_montres.png" 
              alt="AS WATCH 3 Outdoor Tactique" 
              className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl" 
            />
          </div>
          
        </div>
      </section>



      {/* New Call to Action (CTA) */}
      <section className="py-10 md:py-16 bg-[#FAFAFA] flex items-center justify-center px-6">
        <div className="w-full max-w-[1171px] bg-[#222222] rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 relative">
          
          {/* Left Text Content */}
          <div className="flex flex-col text-center md:text-left z-10 w-full md:w-1/2">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 uppercase">
              PRÊT À AMÉLIORER VOTRE TECHNOLOGIE ?
            </h2>
            <p className="text-[#D1D1D1] text-lg mb-10 leading-relaxed max-w-md">
              Rejoignez des millions de personnes qui font confiance à ASUKA SPIRIT pour la qualité, l'innovation et le style.
            </p>

            {/* Button */}
            <Link 
              href="#rejoindre" 
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
    </div>
  );
}
