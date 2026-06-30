import Link from "next/link";
import { ArrowRight, ArrowUpRight, Monitor, Layers, Cpu, Compass } from "lucide-react";
import FigmaImage from "../../components/FigmaImage";

export default function OrdinateursPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16 flex flex-col items-center text-center px-6 border-b border-neutral-100">
        <div className="max-w-[1171px] mx-auto flex flex-col items-center">
          <span className="font-display font-normal text-[16px] text-black bg-[#E9E9E9] py-[6px] px-[18px] rounded-[48px] mb-6">
            Ordinateur <span className="text-primary font-medium">REVO</span> ASUKA SPIRIT
          </span>
          <h1 className="font-display font-light text-[40px] md:text-[64px] lg:text-[96px] leading-[1.05] text-[#222222] max-w-[1120px] mb-8">
            La technologie africaine conçue pour tous les usages.
          </h1>
          <p className="font-display font-normal text-[18px] md:text-[20px] leading-relaxed text-[#222222] max-w-[1074px] mb-10">
            Des ordinateurs fiables, performants et accessibles pour les particuliers, les entreprises et les institutions.
          </p>

          <Link 
            href="#vision" 
            className="inline-flex items-center justify-between gap-6 bg-black hover:bg-neutral-800 text-white font-medium text-[15px] leading-[26px] rounded-full pl-[20px] pr-[2px] h-[47px] transition-all duration-300 group"
          >
            <span>Découvrez nos Ordinateurs REVO</span>
            <div className="w-[43px] h-[43px] rounded-full bg-primary flex items-center justify-center text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
              <ArrowUpRight size={18} />
            </div>
          </Link>
        </div>
      </section>

      {/* 2. Section SANS LIMITES (Images + Text) */}
      <section id="vision" className="py-12 md:py-16 bg-white overflow-hidden border-b border-neutral-100">
        <div className="max-w-[1171px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-[67px]">
          {/* Left Column: Overlapping Images */}
          <div className="relative w-full max-w-[643px] aspect-[643/864] shrink-0">
            <img 
              src="/images/bureau_dessin.png" 
              alt="Bureau ASUKA" 
              className="absolute top-0 left-0 w-full h-[74.4%] object-contain drop-shadow-lg" 
            />
            <img 
              src="/images/laptop dessin.png" 
              alt="Laptop ASUKA" 
              className="absolute top-[25.5%] left-0 w-full h-[74.4%] object-contain drop-shadow-2xl z-10" 
            />
          </div>

          {/* Right Column: Text Figma Specs */}
          <div className="flex flex-col w-full max-w-[461px] text-center lg:text-left items-center lg:items-start z-10 lg:pl-4">
            <span className="font-display font-normal text-[16px] text-[#222222] bg-[#E9E9E9] py-[6px] px-[18px] rounded-[48px] mb-6 inline-block">
              La Technologie
            </span>
            <h2 className="font-display font-light text-[64px] lg:text-[96px] leading-[1] text-[#222222] mb-8">
              SANS LIMITES.
            </h2>
            <p className="font-display font-normal text-[18px] md:text-[20px] leading-relaxed text-[#222222]">
              Conçu au cœur de l'innovation, Asuka Spirit fusionne puissance brute et design raffiné pour créer les outils de demain, accessibles dès aujourd'hui.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Section REVO FREE */}
      <section className="py-12 md:py-16 bg-white overflow-hidden border-b border-neutral-100">
        <div className="max-w-[1171px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-[67px]">
          {/* Left Column: Overlapping Images */}
          <div className="relative w-full max-w-[600px] lg:max-w-none lg:w-[1041px] lg:-ml-[184px] aspect-[1041/880] shrink-0">
            {/* Orange background shape behind computers */}
            <img 
              src="/images/Subtract.png" 
              alt="Orange Shape" 
              className="absolute top-[12px] left-[31px] w-[667px] h-[730px] object-contain" 
            />
            
            <img 
              src="/images/revo_free_image_2.png" 
              alt="REVO FREE Modèle 1" 
              className="absolute top-0 left-0 w-[95%] lg:w-[1041px] object-contain drop-shadow-xl" 
            />
            <img 
              src="/images/revo_free_image_1.png" 
              alt="REVO FREE Modèle 2" 
              className="absolute top-[19%] lg:top-[167px] left-0 lg:-left-[4px] w-[100%] lg:w-[1099px] object-contain drop-shadow-2xl z-10" 
            />
          </div>

          {/* Right Column: Text Figma Specs */}
          <div className="flex flex-col w-full max-w-[461px] text-center lg:text-left items-center lg:items-start z-10 lg:pl-4">
            <span className="font-display font-normal text-[16px] text-primary bg-[#E9E9E9] py-[6px] px-[18px] rounded-[48px] mb-6 inline-block">
              Gamme Revo Free
            </span>
            <h2 className="font-display font-light text-[64px] lg:text-[96px] leading-[1] text-[#222222] mb-6 uppercase">
              REVO FREE
            </h2>
            <h3 className="font-display font-light text-[24px] lg:text-[29px] leading-[1.2] text-[#222222] mb-8">
              La technologie neuve accessible à tous.
            </h3>
            <p className="font-display font-normal text-[18px] lg:text-[21px] leading-[1.5] text-[#222222]">
              <span className="font-bold">REVO FREE</span> a été pensée pour simplifier le choix des utilisateurs en proposant deux modèles essentiels couvrant les besoins du quotidien et les usages professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Section REVO CORP */}
      <section className="py-12 md:py-16 bg-[#FAFAFA] overflow-hidden border-b border-neutral-100">
        <div className="max-w-[1171px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-[67px]">
          {/* Left Column: Text Figma Specs */}
          <div className="flex flex-col w-full max-w-[461px] text-center lg:text-left items-center lg:items-start z-10 lg:mt-[150px]">
            <span className="font-display font-normal text-[16px] text-primary bg-[#E9E9E9] py-[6px] px-[18px] rounded-[48px] mb-6 inline-block">
              Gamme Revo Corp
            </span>
            <h2 className="font-display font-light text-[64px] lg:text-[96px] leading-[1] text-[#222222] mb-6 uppercase text-left">
              REVO<br />CORP
            </h2>
            <h3 className="font-display font-light text-[24px] lg:text-[29px] leading-[1.2] text-[#222222] mb-8 text-left">
              La puissance professionnelle pensée pour l'Afrique.
            </h3>
            <p className="font-display font-normal text-[18px] lg:text-[21px] leading-[1.5] text-[#222222] mb-10 text-left">
              Conçue pour les administrations, les entreprises et les organisations, <span className="font-bold">REVO CORP</span> répond aux exigences des environnements professionnels modernes.
            </p>

            {/* Button */}
            <Link 
              href="#gammes" 
              className="inline-flex items-center justify-between gap-6 bg-black hover:bg-neutral-800 text-white font-medium text-[15px] leading-[26px] rounded-full pl-[20px] pr-[2px] h-[47px] transition-all duration-300 group w-fit"
            >
              <span>En savoir plus</span>
              <div className="w-[43px] h-[43px] rounded-full bg-primary flex items-center justify-center text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                <ArrowUpRight size={18} />
              </div>
            </Link>
          </div>

          {/* Right Column: Image Collage */}
          <div className="relative w-full max-w-[600px] lg:max-w-none lg:w-[958px] lg:-mr-[100px] aspect-square shrink-0 mt-12 lg:-mt-[400px]">
            {/* Background Subtract Shape (Calculé par rapport au Bureau: 667/958, X: 145/958, Y: 413/958) */}
            <img 
              src="/images/Subtract_revo_corp.png" 
              alt="Background Shape" 
              className="absolute top-[43.1%] left-[15.1%] w-[69.6%] h-auto object-contain" 
            />
            
            {/* Bureau (Desktop PC) - L'ancre de base (958x958) */}
            <img 
              src="/images/bureau_ordinateurs_revo_corp.png" 
              alt="Bureau REVO CORP" 
              className="absolute top-0 left-0 w-full h-full object-contain drop-shadow-2xl z-10" 
            />

            {/* All in One (Calculé par rapport au Bureau: 440/958, X: 115/958, Y: 680/958) */}
            <img 
              src="/images/all_in_one_ordinateurs_revo_corp.png" 
              alt="All In One REVO CORP" 
              className="absolute top-[71%] left-[12%] w-[46%] object-contain drop-shadow-2xl z-30" 
            />

            {/* Laptop (Calculé par rapport au Bureau: 574/958, X: 388/958, Y: 535/958) avec sa rotation */}
            <img 
              src="/images/laptop_ordinateurs_revo_corp.png" 
              alt="Laptop REVO CORP" 
              className="absolute top-[56%] left-[40.5%] w-[60%] object-contain drop-shadow-2xl z-20 transform -rotate-[6.51deg]" 
            />
          </div>
        </div>
      </section>

      {/* 5. Section VISION ASUKA SPIRIT */}
      <section className="py-12 md:py-16 bg-white overflow-hidden border-b border-neutral-100">
        <div className="max-w-[1171px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-[67px]">
          {/* Left Column: Image Man with Glasses */}
          <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-[512px] aspect-[512/719] shrink-0">
            <img 
              src="/images/casque.png" 
              alt="La Vision ASUKA SPIRIT" 
              className="absolute top-0 left-0 w-full h-full object-cover object-top drop-shadow-xl scale-x-[-1]" 
            />
          </div>

          {/* Right Column: Text and Laptop Slice */}
          <div className="flex flex-col w-full max-w-[550px] text-center lg:text-left z-10">
            <h2 className="font-display font-light text-[64px] lg:text-[96px] leading-[1] text-[#222222] mb-10 uppercase">
              LA<br />VISION<br />D'ASUKA<br />SPIRIT
            </h2>
            <h3 className="font-display font-light text-[24px] lg:text-[29px] leading-[1.2] text-[#222222] mb-8">
              Construire la souveraineté technologique africaine.
            </h3>
            <p className="font-display font-normal text-[18px] lg:text-[21px] leading-[1.5] text-[#222222] mb-12">
              <span className="font-bold">ASUKA SPIRIT</span> développe des solutions informatiques conçues pour répondre aux réalités du continent tout en respectant les standards internationaux de qualité, de performance et de durabilité.
            </p>

            {/* Laptop Slice Image */}
            <img 
              src="/images/laptop_ordinateurs_vision.png" 
              alt="Laptop Ports" 
              className="w-[90%] lg:w-full max-w-[400px] mx-auto lg:mx-0 object-contain drop-shadow-lg" 
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
