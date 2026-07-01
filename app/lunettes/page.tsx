import Link from "next/link";
import { ArrowUpRight, Bluetooth, Music, Phone, Mic, Sparkles } from "lucide-react";

export default function LunettesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section AS GLASS */}
      <section className="bg-white py-24 overflow-hidden relative min-h-[80vh] flex flex-col justify-center">
        
        {/* Background Gradient Rectangle */}
        <div 
          className="absolute top-0 left-0 w-full h-[300px] pointer-events-none z-0"
          style={{ background: 'linear-gradient(180deg, #EDEDED 0%, #FFFFFF 100%)' }}
        ></div>

        <div className="max-w-[1440px] mx-auto w-full relative flex flex-col items-center z-10">

          {/* Giant Watermark */}
          <div className="absolute top-[5%] md:top-[-6%] w-full flex justify-center z-0 pointer-events-none select-none">
            <h2 className="font-display font-bold text-[100px] md:text-[180px] lg:text-[262px] leading-[1] text-white whitespace-nowrap tracking-tighter">
              AS GLASS
            </h2>
          </div>
          
          {/* Main Image Container */}
          <div className="relative z-10 w-full max-w-[1076px] mt-16 md:mt-32 -mb-24 md:-mb-64 flex justify-center px-6 perspective-1000">
            <div className="relative flex flex-col justify-center w-full max-w-fit mx-auto">
              
              {/* TOP: Real Glasses */}
              <div className="relative animate-drop-top">
                {/* Image */}
                <img 
                  src="/images/as_glass_lunettes_hero.png" 
                  alt="AS GLASS Lunettes connectées" 
                  className="w-full h-auto object-contain relative z-10"
                />
                
                {/* Glint Masked Strictly to Lenses */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {/* Left Lens Mask */}
                  <div className="absolute top-[30%] left-[18%] w-[27%] h-[45%] rounded-[45%] overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 w-[100%] h-[300%] bg-gradient-to-r from-transparent via-white/70 to-transparent animate-glint"></div>
                  </div>
                  {/* Right Lens Mask */}
                  <div className="absolute top-[30%] right-[18%] w-[27%] h-[45%] rounded-[45%] overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 w-[100%] h-[300%] bg-gradient-to-r from-transparent via-white/70 to-transparent animate-glint"></div>
                  </div>
                </div>
              </div>

              {/* BOTTOM: Symmetrical Reflection */}
              <div className="relative opacity-40 animate-drop-bottom pointer-events-none" style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)"
              }}>
                {/* Image (Flipped via CSS transform) */}
                <img 
                  src="/images/as_glass_lunettes_hero.png" 
                  alt="AS GLASS Lunettes connectées reflet" 
                  className="w-full h-auto object-contain relative z-10"
                />
                
                {/* Glint Masked Strictly to Lenses on Reflection */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {/* Left Lens Mask (Visually mapped to flipped image) */}
                  <div className="absolute top-[30%] left w-[27%] h-[45%] rounded-[45%] overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 w-[100%] h-[300%] bg-gradient-to-r from-transparent via-white/70 to-transparent animate-glint"></div>
                  </div>
                  {/* Right Lens Mask (Visually mapped to flipped image) */}
                  <div className="absolute top-[30%] right-[18%] w-[27%] h-[45%] rounded-[45%] overflow-hidden">
                    <div className="absolute top-1/2 left- w-[100%] h-[300%] bg-gradient-to-r from-transparent via-white/70 to-transparent animate-glint"></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Bottom Fade Gradient / Backdrop */}
          <div className="absolute bottom-0 left-0 w-full h-[250px] md:h-[350px] bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Text Content Below Image */}
          <div className="w-full max-w-[1338px] flex flex-col md:flex-row justify-between items-center z-20 px-6 gap-8 md:gap-12 lg:gap-24 relative py-8">
            
            {/* Left Title & Paragraph */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-10 text-center md:text-left">
              {/* Title */}
              <div className="flex flex-col justify-center">
                <p className="font-display font-normal text-[18px] leading-[1] text-[#444444] mb-2">
                  Lunettes connectées
                </p>
                <h3 className="font-display font-bold text-[40px] md:text-[50px] leading-[1] text-black">
                  AS GLASS
                </h3>
              </div>
              
              {/* Vertical Separator */}
              <div className="hidden md:block w-px bg-neutral-300"></div>
              
              {/* Paragraph */}
              <p className="font-sans font-normal text-[12px] leading-relaxed text-[#444444] max-w-[272px] flex items-center">
                Les lunettes connectées AS GLASS incarnent une nouvelle façon de vivre la technologie au quotidien.
              </p>
            </div>
            
            {/* Right Button */}
            <Link 
              href="#as-glass" 
              className="inline-flex items-center justify-center bg-white border border-neutral-300 hover:border-black text-black font-sans font-medium text-[14px] h-[48px] px-8 transition-all duration-300 gap-3 group shrink-0"
            >
              En savoir plus 
              <ArrowUpRight size={16} className="text-[#888888] group-hover:text-black transition-colors" />
            </Link>
            
          </div>
          
        </div>
      </section>

      {/* SHAKA X4 Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[58px]">
          
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/images/Shaka_lunettes_shaka_X4.png" 
              alt="Lunettes connectées SHAKA X4" 
              className="w-full max-w-[726px] h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left max-w-[400px]">
            <h2 className="font-sans font-bold text-[40px] md:text-[50px] leading-[1.47] text-black mb-6">
              SHAKA X4
            </h2>
            <p className="font-sans font-normal text-[17px] leading-relaxed text-black mb-10">
              AS SHAKA X4 est une paire de lunettes connectées haut de gamme conçue pour les passionnés de technologie et de création de contenu. Dotée d'une caméra HD intégrée, d'un système audio immersif, d'une connectivité Bluetooth stable et d'une autonomie de 6 à 8 heures, elle permet de capturer, écouter et communiquer en toute liberté. Élégante et intelligente, elle transforme chaque instant en une...
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-[20px]">
              <Link 
                href="#commander-shaka" 
                className="inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white font-sans font-semibold text-[16px] h-[52px] px-8 transition-colors duration-300"
              >
                Commander
              </Link>
              <Link 
                href="#savoir-shaka" 
                className="inline-flex items-center justify-center bg-transparent border border-[#222222] hover:bg-neutral-50 text-black font-sans font-medium text-[16px] h-[52px] px-[20px] transition-colors duration-300 gap-[3px] group"
              >
                En savoir 
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* AVIATOR Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-[58px]">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left max-w-[400px]">
            <h2 className="font-sans font-bold text-[40px] md:text-[50px] leading-[1.47] text-black mb-6 uppercase">
              AVIATOR
            </h2>
            <p className="font-sans font-normal text-[17px] leading-relaxed text-black mb-10">
              AS GLASS AVIATOR est une paire de lunettes connectées élégante conçue pour les professionnels et les utilisateurs urbains. Grâce à ses haut-parleurs intégrés, son microphone HD, sa connectivité Bluetooth et son autonomie de 6 à 8 heures, elle permet d'écouter de la musique, de gérer ses appels et d'utiliser un assistant vocal en toute simplicité. Chic, légère et raffinée, elle allie parfaitement style, confort et technologie pour rester connecté les mains libres.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-[20px]">
              <Link 
                href="#commander-aviator" 
                className="inline-flex items-center justify-center bg-[#1A1A1A] hover:bg-black text-white font-sans font-semibold text-[16px] h-[52px] px-8 transition-colors duration-300"
              >
                Commander
              </Link>
              <Link 
                href="#savoir-aviator" 
                className="inline-flex items-center justify-center bg-transparent border border-[#222222] hover:bg-neutral-50 text-black font-sans font-medium text-[16px] h-[52px] px-[20px] transition-colors duration-300 gap-[3px] group"
              >
                En savoir plus
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img 
              src="/images/Aviator_lunettes_aviator.jpg" 
              alt="Lunettes connectées AVIATOR" 
              className="w-full max-w-[726px] h-auto object-contain"
            />
          </div>

        </div>
      </section>

      {/* ALPHA Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[58px]">
          
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/images/alpha_lunettes_alpha.jpg" 
              alt="Lunettes connectées ALPHA" 
              className="w-full max-w-[726px] h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left max-w-[400px]">
            <h2 className="font-sans font-bold text-[40px] md:text-[50px] leading-[1.47] text-black mb-6 uppercase">
              ALPHA
            </h2>
            <p className="font-sans font-normal text-[17px] leading-relaxed text-black mb-10">
              AS GLASS ALPHA est une paire de lunettes connectées robuste et légère conçue pour les sportifs, aventuriers et professionnels de terrain. Équipée de haut-parleurs stéréo, d'un micro à réduction de bruit, d'une connectivité Bluetooth stable et d'une autonomie de 6 à 8 heures, elle permet de rester connecté tout en gardant les mains libres. Résistante, confortable et performante, elle accompagne efficacement toutes vos activités en intérieur comme en extérieur.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-[20px]">
              <Link 
                href="#commander-alpha" 
                className="inline-flex items-center justify-center bg-[#1A1A1A] hover:bg-black text-white font-sans font-semibold text-[16px] h-[52px] px-8 transition-colors duration-300"
              >
                Commander
              </Link>
              <Link 
                href="#savoir-alpha" 
                className="inline-flex items-center justify-center bg-transparent border border-[#222222] hover:bg-neutral-50 text-black font-sans font-medium text-[16px] h-[52px] px-[20px] transition-colors duration-300 gap-[3px] group"
              >
                En savoir plus
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FONCTIONNALITÉS CLÉS Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-[58px]">
          
          {/* Left Content (Features List) */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start max-w-[400px]">
            <h2 className="font-sans font-bold text-[32px] md:text-[40px] leading-[1.2] text-black mb-10 uppercase tracking-tight text-center md:text-left">
              FONCTIONNALITÉS CLÉS
            </h2>
            
            <div className="flex flex-col gap-6 w-full">
              {/* Feature 1 */}
              <div className="flex items-center gap-6">
                <div className="w-[54px] h-[54px] rounded-full border border-neutral-300 flex items-center justify-center shrink-0 bg-white shadow-sm">
                  <Bluetooth size={22} className="text-black" />
                </div>
                <span className="font-sans font-medium text-[16px] text-black">Bluetooth</span>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-center gap-6">
                <div className="w-[54px] h-[54px] rounded-full border border-neutral-300 flex items-center justify-center shrink-0 bg-white shadow-sm">
                  <Music size={22} className="text-black" />
                </div>
                <span className="font-sans font-medium text-[16px] text-black">Musique</span>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-center gap-6">
                <div className="w-[54px] h-[54px] rounded-full border border-neutral-300 flex items-center justify-center shrink-0 bg-white shadow-sm">
                  <Phone size={22} className="text-black" />
                </div>
                <span className="font-sans font-medium text-[16px] text-black">Appel</span>
              </div>
              
              {/* Feature 4 */}
              <div className="flex items-center gap-6">
                <div className="w-[54px] h-[54px] rounded-full border border-neutral-300 flex items-center justify-center shrink-0 bg-white shadow-sm">
                  <Mic size={22} className="text-black" />
                </div>
                <span className="font-sans font-medium text-[16px] text-black">Assistant vocal</span>
              </div>
              
              {/* Feature 5 */}
              <div className="flex items-center gap-6">
                <div className="w-[54px] h-[54px] rounded-full border border-neutral-300 flex items-center justify-center shrink-0 bg-white shadow-sm">
                  <Sparkles size={22} className="text-black" />
                </div>
                <span className="font-sans font-medium text-[16px] text-black">Intelligence Artificielle</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-2/3 flex justify-center md:justify-end">
            <img 
              src="/images/casque.png" 
              alt="Fonctionnalités clés AS GLASS" 
              className="w-full max-w-[900px] h-auto object-contain"
            />
          </div>

        </div>
      </section>

      {/* Introduction AS GLASS Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/images/as_glass_lunettes_hero.png" 
              alt="Lunettes connectées AS GLASS" 
              className="w-full max-w-[726px] h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 flex items-center max-w-[500px]">
            {/* Vertical Bar */}
            <div className="bg-[#222222] flex items-center justify-center py-10 px-4 shrink-0 mr-6 md:mr-8">
              <span className="text-white font-sans font-medium text-[16px] tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                AS GLASS
              </span>
            </div>
            {/* Paragraph */}
            <p className="font-sans font-normal text-[15px] leading-[1.8] text-[#222222]">
              Les lunettes connectées AS GLASS offrent une expérience technologique élégante et mains libres. Elles permettent de passer des appels, écouter de la musique et utiliser un assistant vocal via Bluetooth, avec une autonomie de 6 à 8 heures. Légères et modernes, elles s'adaptent à tous les styles de vie tout en combinant design et performance.
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action (CTA) */}
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
