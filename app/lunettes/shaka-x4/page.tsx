import Link from "next/link";
import { ArrowUpRight, Bluetooth, Music, Phone, Mic, Sparkles, Battery, PlayCircle } from "lucide-react";
import OrderModal from "@/components/OrderModal";

export default function ShakaX4Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Hero Section (Black) */}
      <section className="bg-black pt-24 pb-12 overflow-hidden relative min-h-[80vh] flex flex-col justify-end">
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-6 md:px-12 h-full flex flex-col justify-between">
          
          <div className="w-full flex justify-center relative z-10 flex-grow items-center">
            <img 
              src="/images/lunettes-shakax4-hero.png" 
              alt="AS GLASS SHAKA X4" 
              className="w-full max-w-[1000px] h-auto object-contain drop-shadow-2xl scale-125 md:scale-150 transform-gpu"
            />
          </div>

          <div className="z-20 w-full px-6 md:px-0 mt-[-60px] md:mt-0 md:absolute md:left-[121px] md:bottom-[10%]">
            <h1 
              className="text-white font-bold leading-none mb-4 max-w-full text-[50px] md:text-[72px] md:w-[383px]"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
            >
              SHAKA X4
            </h1>
            <p 
              className="text-white font-normal leading-relaxed max-w-full text-[15px] md:text-[17px] md:w-[389px] text-left md:text-justify"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
            >
              L'avenir se porte. Design raffiné, caméra intégrée, son immersif et intelligence artificielle intégrée.
            </p>
          </div>
          
        </div>
      </section>

      {/* Thumbnails Section */}
      <section className="py-16 md:py-24 bg-white relative w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full relative px-6 md:px-0 flex flex-col md:block">
          
          <div className="md:absolute md:left-[160px] md:top-0 mb-8 md:mb-0">
            <h2 
              className="text-black font-bold leading-none w-full md:w-[171px] text-[17px] text-left md:text-justify"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
            >
              Différents modèles
            </h2>
          </div>

          <div className="w-full flex md:absolute md:left-[566px] md:top-[52px] gap-6 md:gap-[30px] overflow-x-auto pb-4 snap-x">
            <img src="/images/lunette1-shakax4-différentModèles.png" alt="Shaka X4 View 1" className="w-[150px] h-[150px] md:w-[204px] md:h-[204px] object-cover hover:scale-105 transition-transform cursor-pointer shrink-0 snap-start" />
            <img src="/images/lunette2-shakax4-différentModèles.png" alt="Shaka X4 View 2" className="w-[150px] h-[150px] md:w-[204px] md:h-[204px] object-cover hover:scale-105 transition-transform cursor-pointer shrink-0 snap-start" />
            <img src="/images/lunette3-shakax4-différentModèles.png" alt="Shaka X4 View 3" className="w-[150px] h-[150px] md:w-[204px] md:h-[204px] object-cover hover:scale-105 transition-transform cursor-pointer shrink-0 snap-start" />
          </div>

          {/* Desktop spacer since absolute positioning removes elements from flow */}
          <div className="hidden md:block w-full h-[256px]"></div>

        </div>
      </section>

      {/* Lifestyle Full Width Image */}
      <section className="relative w-full h-[50vh] md:h-[70vh] min-h-[600px] bg-neutral-100 overflow-hidden">
        <img 
          src="/images/lunettes-shakax4-lifestyle.png" 
          alt="Shaka X4 Lifestyle" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 w-full max-w-[1440px] mx-auto pointer-events-none relative">
          {/* Top Left Title */}
          <div className="md:absolute md:top-[160px] md:left-[200px] mt-12 ml-6 md:mt-0 md:ml-0">
            <h2 
              className="text-white font-bold leading-none max-w-full text-[40px] md:text-[72px] md:w-[383px] drop-shadow-md text-left md:text-justify"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
            >
              SHAKA X4
            </h2>
          </div>

          {/* Bottom Right Button */}
          <div className="absolute bottom-[40px] md:top-[618px] right-6 md:right-auto md:left-[1136px] pointer-events-auto">
            <OrderModal defaultAppareil="AS SHAKA X4">
              <div 
                className="flex items-center justify-center text-white font-sans font-medium text-[16px] transition-colors duration-300 shadow-lg cursor-pointer hover:bg-neutral-800"
                style={{ 
                  backgroundColor: '#212121', 
                  width: '133px', 
                  height: '48px', 
                  padding: '12px 16px',
                  gap: '10px'
                }}
              >
                Commander
              </div>
            </OrderModal>
          </div>
        </div>
      </section>

      {/* Detail Section 1 */}
      <section className="py-16 md:py-32 bg-white overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center relative px-6 md:px-0">
          
          <div className="w-full md:w-[40%] flex flex-col z-10 md:pl-[121px] mb-12 md:mb-0">
            <p 
              className="text-black text-[15px] md:text-[17px] leading-[1.6] text-justify max-w-full md:w-[476px]"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
            >
              Capturez vos instants avec <span className="font-bold">AS SHAKA X4</span>. Immortalisez vos moments, écoutez votre musique et communiquez sans contrainte. Élégante, performante et intelligente, elle redéfinit la manière de vivre le multimédia au quotidien. Avec <span className="font-bold">AS WORLD TECH</span>, la technologie devient une extension naturelle de votre regard.
            </p>
          </div>
          
          <div className="w-full md:w-[60%] flex justify-end relative z-0 md:-mr-[25%] lg:-mr-[35%] md:translate-x-[25%] lg:translate-x-[35%]">
            <img 
              src="/images/lunettes-shakax4-detail1.png" 
              alt="Shaka X4 Détail" 
              className="w-full h-auto object-contain max-w-[800px] lg:max-w-[1000px] scale-110 md:scale-125 md:origin-right transform-gpu"
            />
          </div>
          
        </div>
      </section>

      {/* Technical Description Section */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] relative">
        <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
          
          <h2 
            className="text-black font-bold text-[28px] md:text-[36px] text-center mb-6"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
          >
            Description technique et visuelle
          </h2>
          <p 
            className="text-black font-normal text-[14px] md:text-[15px] text-center max-w-[900px] mb-16 leading-[1.8]"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
          >
            AS SHAKA X4 allie élégance et innovation dans une monture légère en titane. Dotées d'une Intelligence Artificielle intégrée, d'une caméra HD, d'un système audio à conduction osseuse et d'une connectivité Bluetooth avancée, ces lunettes intelligentes offrent une expérience multimédia immersive et 100 % mains libres, compatible avec Android et iOS.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
            
            {/* Left Column */}
            <div className="w-full md:w-1/3 flex flex-col gap-10 z-10 order-2 md:order-1 mt-10 md:mt-0">
              
              {/* Item 1 */}
              <div className="flex items-center justify-end gap-4">
                <div className="flex flex-col items-end text-right">
                  <span className="font-bold text-[15px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Monture</span>
                  <span className="text-[13px] text-neutral-600 mt-1" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Alliage titane léger, coloris noir graphite</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#FF5A00] shrink-0"></div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-end gap-4">
                <div className="flex flex-col items-end text-right">
                  <span className="font-bold text-[15px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Verres</span>
                  <span className="text-[13px] text-neutral-600 mt-1" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Anti-reflets, protection UV400, design panoramique</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#FF5A00] shrink-0"></div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-end gap-4">
                <div className="flex flex-col items-end text-right">
                  <span className="font-bold text-[15px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Caméra</span>
                  <span className="text-[13px] text-neutral-600 mt-1" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Capteur HD – photo et enregistrement vidéo</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#FF5A00] shrink-0"></div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center justify-end gap-4">
                <div className="flex flex-col items-end text-right">
                  <span className="font-bold text-[15px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Audio</span>
                  <span className="text-[13px] text-neutral-600 mt-1" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Système stéréo à conduction osseuse + micro double</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#FF5A00] shrink-0"></div>
              </div>

            </div>

            {/* Center Image */}
            <div className="w-full md:w-1/3 flex justify-center z-0 order-1 md:order-2">
              <img 
                src="/images/lunettes-shakax4-tech.png" 
                alt="Shaka X4 Tech" 
                className="w-full max-w-[350px] h-auto object-contain mix-blend-multiply"
              />
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/3 flex flex-col gap-10 z-10 order-3 mt-10 md:mt-0">
              
              {/* Item 1 */}
              <div className="flex items-center justify-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FF5A00] shrink-0"></div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[15px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Multimédia</span>
                  <span className="text-[13px] text-neutral-600 mt-1" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Fonction audio complète (appels, musique, assistant vocal)</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FF5A00] shrink-0"></div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[15px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Autonomie</span>
                  <span className="text-[13px] text-neutral-600 mt-1" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>6 à 8 heures d'utilisation continue</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FF5A00] shrink-0"></div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[15px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Connectivité</span>
                  <span className="text-[13px] text-neutral-600 mt-1" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Bluetooth stable longue portée</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center justify-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FF5A00] shrink-0"></div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[15px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Compatibilité</span>
                  <span className="text-[13px] text-neutral-600 mt-1" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Android & iOS via application dédiée</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-16 md:py-24 bg-white relative w-full">
        <div className="max-w-[1440px] mx-auto px-6 w-full flex flex-col">
          
          <h2 
            className="text-black font-bold text-[17px] md:text-[24px] mb-8 md:mb-12"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
          >
            Usage
          </h2>

          <div className="w-full bg-black relative flex items-center justify-center min-h-[500px] md:h-[700px] overflow-hidden">
            
            {/* Left Content */}
            <div className="absolute left-6 md:left-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center text-center z-20">
              <div className="mb-4 text-white">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10H7C6.44772 10 6 10.4477 6 11V17C6 17.5523 6.44772 18 7 18H15C15.5523 18 16 17.5523 16 17V11C16 10.4477 15.5523 10 15 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12.5L20 10.5V17.5L16 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 10V8C8 6.89543 8.89543 6 10 6H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="11" cy="14" r="2" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <span 
                className="text-white font-normal text-[14px] md:text-[16px] leading-[1.4]"
                style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
              >
                Prendre des photos<br />et des vidéos
              </span>
            </div>

            {/* Center Image */}
            <div className="relative h-full w-[80%] md:w-[450px] flex justify-center items-center">
              <div className="absolute inset-0 z-10 shadow-[inset_0_0_80px_60px_#000000] pointer-events-none"></div>
              <img 
                src="/images/lunettes-shakax4-usage.png" 
                alt="Shaka X4 Usage" 
                className="w-full h-full object-cover"
                style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)' }}
              />
            </div>

          </div>

        </div>
      </section>

      {/* Detail Section 2 */}
      <section className="py-16 md:py-32 bg-white relative w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center relative px-6 md:px-0">
          
          <div className="w-full md:absolute md:left-[164px] md:-mt-[120px] z-10 mb-10 md:mb-0">
            <p 
              className="text-black text-[15px] md:text-[17px] leading-[1.8] text-left md:text-justify max-w-full md:w-[476px]"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
            >
              <span className="font-bold">Usage multimédia, créatif et professionnel</span> Destinée aux passionnés d'images, aux créateurs de contenu et aux technophiles, AS SHAKA X4 allie design premium et fonctionnalités intuitives. Elle permet de capturer, écouter et partager sans effort
            </p>
          </div>

          <div className="w-full flex justify-center md:justify-end md:-mr-[15%] lg:-mr-[25%] relative z-0 md:translate-x-[15%] lg:translate-x-[25%]">
            <img 
              src="/images/lunettes-shakax4-detail2.png" 
              alt="Shaka X4 Design" 
              className="w-full max-w-[800px] lg:max-w-[1000px] h-auto object-contain"
            />
          </div>
          
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-16 md:py-20 bg-[#FAFAFA]">
        <div className="max-w-[1440px] mx-auto px-6 w-full flex flex-col items-center">
          
          <h2 
            className="text-black font-bold text-[24px] md:text-[28px] mb-12 uppercase tracking-wide text-center"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
          >
            FONCTIONNALITÉS CLÉS
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-[60px]">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="w-[54px] h-[54px] rounded-full border border-neutral-300 flex items-center justify-center shrink-0 bg-white">
                <Bluetooth size={22} className="text-black" />
              </div>
              <span className="font-sans text-[14px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Bluetooth</span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="w-[54px] h-[54px] rounded-full border border-neutral-300 flex items-center justify-center shrink-0 bg-white">
                <Music size={22} className="text-black" />
              </div>
              <span className="font-sans text-[14px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Musique</span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="w-[54px] h-[54px] rounded-full border border-neutral-300 flex items-center justify-center shrink-0 bg-white">
                <Phone size={22} className="text-black" />
              </div>
              <span className="font-sans text-[14px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Appel</span>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4">
              <div className="w-[54px] h-[54px] rounded-full border border-neutral-300 flex items-center justify-center shrink-0 bg-white">
                {/* User Voice / Mic alternative */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M12 20a4 4 0 0 0 4-4v-5a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
              <span className="font-sans text-[14px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Assistant vocal</span>
            </div>

            {/* Feature 5 */}
            <div className="flex items-center gap-4">
              <div className="w-[54px] h-[54px] rounded-full border border-neutral-300 flex items-center justify-center shrink-0 bg-white">
                <Sparkles size={22} className="text-black" />
              </div>
              <span className="font-sans text-[14px] text-black" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>Intelligence Artificielle</span>
            </div>

          </div>

        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="py-10 md:py-16 flex items-center justify-center px-6">
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
            <OrderModal defaultAppareil="AS SHAKA X4">
              <button 
                className="inline-flex items-center justify-between gap-6 bg-white hover:bg-neutral-200 text-black font-medium text-[15px] leading-[26px] rounded-full pl-[24px] pr-[3px] h-[55px] transition-all duration-300 group w-fit mx-auto md:mx-0 cursor-pointer"
              >
                <span>Rejoindre ASUKA SPIRIT</span>
                <div className="w-[49px] h-[49px] rounded-full bg-[#FF5A00] flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                  <ArrowUpRight size={20} />
                </div>
              </button>
            </OrderModal>
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
