import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import FeaturesSlider from "./FeaturesSlider";
import FloatingOrderButton from '@/components/FloatingOrderButton';

export default function ASWatch3Page() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] md:min-h-[800px] flex items-center bg-[#191919] z-20">
        <div className="w-full flex flex-col md:flex-row items-center relative z-10">
          
          {/* Left: Image (Watch) */}
          <div className="w-full md:w-1/2 flex justify-start pl-0 mt-10 md:mt-0 relative z-20">
            <img 
              src="/images/montre-aw3-hero.png" 
              alt="AS WATCH 3" 
              className="w-full max-w-[800px] h-auto object-contain object-left scale-[1.2] md:scale-[1.35] -ml-10 md:-ml-[150px] lg:-ml-[250px] md:translate-y-[50px] lg:translate-y-[80px]"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left text-white mt-10 md:mt-0 z-20 px-6 md:px-10 lg:px-20">
            <div className="max-w-[600px]">
              <p className="font-sans italic font-medium text-[20px] md:text-[28px] mb-4">
                Série Outdoor Tactique
              </p>
              <h1 className="font-display font-bold text-[60px] md:text-[80px] lg:text-[100px] leading-[1.1] mb-6 tracking-wide">
                AS<br />WATCH 3
              </h1>
              <p className="font-sans text-[16px] md:text-[18px] text-[#e0e0e0] leading-[1.6] max-w-[450px]">
                Puissance, endurance et caractère. Conçue pour les explorateurs modernes.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Made For Section */}
      <section className="w-full bg-white py-24 md:py-48 px-6 flex items-center justify-center">
        <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left: Image (Three Watches) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/images/triple_montre-aw3-thisModel.png" 
              alt="Montres AS WATCH 3 - Couleurs" 
              className="w-full max-w-[600px] h-auto object-contain drop-shadow-xl scale-110" 
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <p className="font-sans font-normal text-[15px] md:text-[16px] leading-[1.8] text-[#222222] max-w-[500px] mx-auto md:mx-0">
              Ce modèle s'adresse aux utilisateurs exigeants : techniciens, agents de terrain, randonneurs, militaires ou aventuriers urbains. Elle allie robustesse et précision, tout en reflétant la fiabilité et l'endurance qui caractérisent la marque <strong>ASUKA</strong>.
            </p>
          </div>

        </div>
      </section>

      {/* Ne craint pas les defis Section */}
      <section className="w-full bg-[#191919] relative py-20 md:py-32 overflow-hidden flex items-center justify-center min-h-[600px] md:min-h-[800px]">
        
        {/* Unified White Background Layer (z-0) */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0">
          {/* Mobile simple background */}
          <div className="absolute top-[5%] bottom-[5%] left-0 right-0 bg-white rounded-[40px] md:hidden"></div>
          
          {/* Desktop structured background */}
          <div className="w-full h-full relative hidden md:block">
             {/* 1. Left Shape (Touches left edge, reduced width) */}
             <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[30%] h-[700px] bg-white rounded-r-[100px]"></div>
             
             {/* 2. Center Shape (Aligned with center block at 35%) */}
             <div className="absolute top-1/2 -translate-y-1/2 left-[35%] -translate-x-1/2 w-[260px] h-[650px] bg-white rounded-[120px]"></div>
             
             {/* 3. Right Shape (Touches right edge, increased width) */}
             <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[60%] h-[700px] bg-white rounded-l-[100px]"></div>
          </div>
        </div>

        {/* Main Flex Container */}
        <div className="w-full flex flex-col md:flex-row items-center justify-start relative z-10">

          {/* 1. Left Block: Profile Watch */}
          <div className="relative flex justify-center items-center w-full md:w-[20%] min-h-[300px] md:min-h-[400px]">
            {/* Image */}
            <img 
              src="/images/montre_2-aw3-defis.png" 
              alt="AS WATCH 3 Profil" 
              className="relative w-full max-w-[300px] md:max-w-[500px] h-auto object-contain drop-shadow-2xl scale-[1.2] md:scale-[1.5] md:translate-x-[70%] z-10" 
            />
          </div>

          {/* 2. Center Block: Front Watch */}
          <div className="relative flex justify-center items-center w-full md:w-[30%] min-h-[300px] md:min-h-[500px] -mt-10 md:mt-0">
            {/* Image */}
            <img 
              src="/images/montre-aw3-defis.png" 
              alt="AS WATCH 3 Face" 
              className="relative w-full max-w-[350px] md:max-w-[500px] h-auto object-contain drop-shadow-2xl scale-[1.3] md:scale-[1.6] z-20" 
            />
          </div>

          {/* 3. Right Block: Text */}
          <div className="relative flex justify-center items-center w-full md:w-[50%] min-h-[300px]">
            {/* Text Content */}
            <div className="relative z-10 flex flex-col justify-center text-center md:text-left px-6 py-10 md:py-0 md:pl-16 md:pr-10">
              <h2 className="font-sans italic font-bold text-[28px] md:text-[36px] lg:text-[40px] text-black mb-6 leading-[1.2]">
                La AS WATCH 3 ne craint pas les défis.
              </h2>
              <p className="font-sans italic text-[15px] md:text-[16px] lg:text-[18px] leading-[1.8] text-[#555555] max-w-[550px] mx-auto md:mx-0">
                Plus robuste que les <span className="text-[#F26A3B] font-bold">AS WATCH 1 et 2</span>, elle est spécialement conçue pour absorber les chocs, résister aux environnements difficiles et vous accompagner partout, même dans les situations les plus exigeantes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Description technique et visuelle */}
      <section className="w-full bg-[#FAFAFA] py-32 md:py-48 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-20 md:mb-24">
            <h2 className="font-display font-bold text-[32px] md:text-[40px] text-black mb-6">
              Description technique et visuelle
            </h2>
            <p className="font-sans text-[15px] leading-relaxed text-[#555555] max-w-[800px] mx-auto">
              Robuste, audacieuse et performante, la AS WATCH 3 est la montre tactique ultime. Forgée pour l'extrême, elle allie une solidité à toute épreuve et des technologies de pointe pour vous accompagner partout.
            </p>
          </div>

          {/* Specs Grid */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-12 lg:gap-24">
            
            {/* Left Specs */}
            <div className="flex flex-col gap-12 w-full md:w-1/3">
              {[
                { title: "Boîtier", desc: "Alliage aérospatial renforcé, conception antichoc" },
                { title: "Bracelet", desc: "Silicone texturé ultra-résistant (camouflage ou noir)" },
                { title: "Écran", desc: "Verre trempé anti-rayures, affichage HD haute visibilité" },
                { title: "Étanchéité", desc: "IP68 et résistance extrême aux températures" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 group">
                  <div className="text-center md:text-right order-2 md:order-1">
                    <h3 className="font-sans font-bold text-[15px] text-black">{item.title}</h3>
                    <p className="font-sans text-[14px] text-[#555555] max-w-[200px] ml-auto">{item.desc}</p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F26A3B] shrink-0 order-1 md:order-2"></div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="w-full md:w-1/3 flex justify-center py-8 md:py-0">
              <img 
                src="/images/montre-aw3-description.png" 
                alt="Caractéristiques AS WATCH 3" 
                className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl scale-[250%]" 
              />
            </div>

            {/* Right Specs */}
            <div className="flex flex-col gap-12 w-full md:w-1/3">
              {[
                { title: "Autonomie", desc: "Batterie haute capacité, jusqu'à 15 jours" },
                { title: "Fonctions clés", desc: "Modes sport extrêmes, boussole, suivi santé 24/7, alertes intelligentes" },
                { title: "Compatibilité", desc: "Android & iOS via application dédiée" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 group">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F26A3B] shrink-0"></div>
                  <div className="text-center md:text-left">
                    <h3 className="font-sans font-bold text-[15px] text-black">{item.title}</h3>
                    <p className="font-sans text-[14px] text-[#555555] max-w-[200px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Features Slider Section */}
      <FeaturesSlider />
        {/* Plus qu'un accessoire Section */}
      <section className="w-full bg-white py-16 md:py-32 px-6 flex items-center justify-center">
        <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left: Images (Double watches) */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[350px] md:min-h-[500px]">
            {/* Back watch (left) */}
            <img 
              src="/images/montre_2-aw3-outdoor.png" 
              alt="AS WATCH 3 Dos" 
              className="absolute right-0 md:right-[60%] w-[60%] md:w-[85%] h-auto object-contain drop-shadow-xl z-0 " 
            />
            {/* Front watch (right) */}
            <img 
              src="/images/montre-aw3-outdoor.png" 
              alt="AS WATCH 3 Face" 
              className="absolute right-0 md:left-[10%] w-[60%] md:w-[95%] h-auto object-contain drop-shadow-2xl z-10 scale-110" 
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <p className="font-sans text-[15px] md:text-[16px] leading-[1.8] text-[#222222] max-w-[550px] mx-auto md:mx-0 text-justify md:text-left">
              <strong>La montre ASUKA Outdoor Tactique</strong> est plus qu'un accessoire : c'est un outil. Forgée pour résister aux environnements les plus rudes, elle accompagne les professionnels et explorateurs du quotidien. Sa solidité inspire confiance, ses capteurs avancés assurent sécurité et performance. Une montre conçue pour ceux qui n'abandonnent jamais, même quand la route devient difficile.
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

    
      <FloatingOrderButton appareilName="AS WATCH 3" />
    </div>
  );
}
