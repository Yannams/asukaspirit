import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import FeaturesSlider from "./FeaturesSlider";

export default function ASWatch2Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] md:min-h-[900px] flex flex-col md:flex-row items-center justify-center bg-[#1c1c1e] px-6 md:px-16 lg:px-24">
        <div className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left z-20 mt-20 md:mt-0 md:pl-10">
            <h3 className="font-sans italic font-medium text-[20px] md:text-[28px] lg:text-[32px] text-white mb-4">
              Série Argentée Classique
            </h3>
            <h1 className="font-display font-bold text-[70px] md:text-[100px] lg:text-[130px] leading-[1.05] text-white mb-8">
              AS <br /> WATCH 2
            </h1>
            <p className="font-sans font-normal text-[15px] md:text-[18px] text-white/90 max-w-[400px]">
              Élégance, sobriété et efficacité au quotidien.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-end items-center mt-12 md:mt-0 relative z-30 pointer-events-none h-[400px] md:h-auto">
            <img 
              src="/images/montre-aw2-hero.png" 
              alt="AS WATCH 2" 
              className="absolute top-1/2 left-0 -translate-y-[50%] md:-translate-y-[45%] lg:-translate-y-[40%] w-[120%] md:w-[160%] lg:w-[180%] max-w-none h-auto object-contain translate-x-[10%] md:translate-x-[20%] lg:translate-x-[10%]"
            />
          </div>
          
        </div>
      </section>

      {/* Made For Section */}
      <section className="w-full bg-white py-16 md:py-32 px-6 flex items-center justify-center">
        <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/images/double_montre-aw2-thisModel.png" 
              alt="AS WATCH 2 Modèles" 
              className="w-full max-w-[600px] h-auto object-contain drop-shadow-xl scale-110" 
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <p className="font-sans font-normal text-[15px] leading-[1.8] text-[#333333] max-w-[500px] mx-auto md:mx-0 text-justify md:text-left">
              Ce modèle est idéal pour les cadres, assistants et utilisateurs recherchant un équilibre parfait entre style et performance. Son design minimaliste s'intègre parfaitement à un environnement de travail élégant tout en offrant des fonctionnalités de suivi personnel avancées.
            </p>
          </div>

        </div>
      </section>

      {/* Ideal For Section */}
      <section className="w-full  flex items-center overflow-hidden border-t border-neutral-100">
        {/* Image aligned right */}
        <div className="w-full flex justify-end">
          <img 
            src="/images/homme-aw2-image.png" 
            alt="Idéale pour le sport" 
            className="w-full object-cover" 
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
              Discrète, élégante et performante, l'ASUKA Argent Classique combine style et fonctionnalités 
              intelligentes pour simplifier votre quotidien.
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
                    <p className="font-sans text-[14px] text-[#555555]">{item.desc}</p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F26A3B] shrink-0 order-1 md:order-2"></div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="w-full md:w-1/3 flex justify-center py-8 md:py-0">
              <img 
                src="/images/montre-aw2-description.png" 
                alt="Caractéristiques AS WATCH 2" 
                className="w-full max-w-[350px] h-auto object-contain drop-shadow-xl scale-[130%]" 
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

      {/* Lifestyle / Everyday Section */}
      <section className="w-full bg-white py-20 px-6 flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left: Images */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img 
              src="/images/montre_2-aw2-avantage.png" 
              alt="ASUKA Argent Classique Vue Avant" 
              className="w-[60%] max-w-[350px] h-auto object-contain relative z-20" 
            />
            <img 
              src="/images/montre-aw2-avantage.png" 
              alt="ASUKA Argent Classique Vue Arrière" 
              className="w-[55%] max-w-[320px] h-auto object-contain relative z-10 -ml-16 md:-ml-28 drop-shadow-xl" 
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <p className="font-sans text-[15px] leading-[1.8] text-[#222222] max-w-[480px] mx-auto md:mx-0 text-justify md:text-left">
              Avec la montre connectée ASUKA Argent Classique, alliez style, performance et praticité au quotidien. Recevez vos notifications, suivez votre activité et restez maître de votre temps avec une montre raffinée qui valorise chaque instant. Plus qu'un accessoire, c'est un véritable allié pour une vie moderne, active et organisée.
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
