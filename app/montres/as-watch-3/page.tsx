import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import FeaturesSlider from "./FeaturesSlider";

export default function ASWatch3Page() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] md:min-h-[800px] flex items-center bg-[#191919] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
          
          {/* Left: Image (Watch) */}
          <div className="w-full md:w-1/2 flex justify-start -ml-10 md:-ml-20 mt-10 md:mt-0 relative">
            <img 
              src="/images/montre-aw3-hero.png" 
              alt="AS WATCH 3" 
              className="w-[120%] max-w-[800px] h-auto object-contain object-left scale-[1.15] md:scale-[1.3]"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left text-white mt-10 md:mt-0 z-20 pl-0 md:pl-10 lg:pl-20">
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
      </section>

      {/* Made For Section */}
      <section className="w-full bg-white py-16 md:py-32 px-6 flex items-center justify-center">
        <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left: Image (Three Watches) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/images/c_3_1_479_1241.png" 
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
      <section className="w-full bg-[#191919] relative py-20 md:py-32 flex items-center justify-center overflow-hidden min-h-[600px] md:min-h-[800px]">
        
        {/* White Background adapting to the subject (montre-aw3-defis) */}
        <div className="absolute inset-0 w-full h-full flex items-center pointer-events-none z-0">
          {/* Main horizontal white band */}
          <div className="w-full h-[45%] md:h-[50%] bg-white absolute left-0"></div>
          
          {/* Circle reduced in size to perfectly hug the shape of the front watch */}
          <div className="absolute left-[50%] md:left-[25%] -translate-x-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-white rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 px-6 mt-8 md:mt-0">
          
          {/* Left: Images (Restored exactly to original base) */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative z-10">
            <img 
              src="/images/montre_2-aw3-defis.png" 
              alt="AS WATCH 3 Profil" 
              className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl scale-130 absolute right-[50%]" 
            />  
            <img 
              src="/images/montre-aw3-defis.png" 
              alt="AS WATCH 3 Face" 
              className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl scale-170 relative" 
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left pl-0 md:pl-10">
            <h2 className="font-sans italic font-bold text-[28px] md:text-[36px] lg:text-[40px] text-black mb-6 leading-[1.2]">
              La AS WATCH 3 ne craint pas les défis.
            </h2>
            <p className="font-sans italic text-[15px] md:text-[16px] lg:text-[18px] leading-[1.8] text-[#555555] max-w-[550px] mx-auto md:mx-0">
              Plus robuste que les <span className="text-[#F26A3B] font-bold">AS WATCH 1 et 2</span>, elle est spécialement conçue pour absorber les chocs, résister aux environnements difficiles et vous accompagner partout, même dans les situations les plus exigeantes.
            </p>
          </div>

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
              Discrète, élégante et performante, l'ASUKA Argent Classique combine style et fonctionnalités intelligentes pour simplifier votre quotidien.
            </p>
          </div>

          {/* Specs Grid */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-12 lg:gap-24">
            
            {/* Left Specs */}
            <div className="flex flex-col gap-12 w-full md:w-1/3">
              {[
                { title: "Boîtier", desc: "Métal argenté poli, ultra-léger" },
                { title: "Bracelet", desc: "Silicone gris ou blanc au toucher doux" },
                { title: "Écran", desc: "Plein écran HD couleur, bord fin" },
                { title: "Étanchéité", desc: "IP68" }
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
                src="/images/c_3_2_502_714.png" 
                alt="Caractéristiques AS WATCH 3" 
                className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl scale-[130%]" 
              />
            </div>

            {/* Right Specs */}
            <div className="flex flex-col gap-12 w-full md:w-1/3">
              {[
                { title: "Autonomie", desc: "4-5 jours" },
                { title: "Fonctions clés", desc: "Notifications intelligentes, suivi de la fréquence cardiaque, sommeil, sport, météo, alarme" },
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
          
          {/* Left: Image (Double watches) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/images/c_5_1_517_727.png" 
              alt="ASUKA Outdoor Tactique - Double vue" 
              className="w-full max-w-[550px] h-auto object-contain drop-shadow-xl scale-110" 
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

    </div>
  );
}
