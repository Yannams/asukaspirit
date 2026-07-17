import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle, Smartphone, Globe, Shield } from "lucide-react";
import OrderModal from "@/components/OrderModal";
import FigmaImage from "../../../components/FigmaImage";
import AnimatedHero from "./AnimatedHero";

export default function RevoFreePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHero />

      {/* Banner FIFA & SHANGO */}
      <section className="h-[221px] w-full flex items-center justify-center bg-[#FCFCFC] z-10 relative">
        <h2 className="text-[#212121] text-[50px] font-semibold uppercase">
          FIFA & SHANGO
        </h2>
      </section>

      {/* Intro text */}
      <section className="py-16 bg-white z-10 relative">
        <div className="max-w-[1171px] mx-auto px-6">
          <p className="text-[#212121] text-[17px] font-normal leading-[1.53] max-w-[504px] mx-auto text-center">
            Plutôt que d&apos;inonder nos clients de choix complexes, nous avons opté pour une offre épurée avec deux modèles clés :
          </p>
        </div>
      </section>

      {/* Models split view */}
      <section className="w-full flex flex-col lg:flex-row z-10 relative">
        {/* Shango side (Left) */}
        <div className="flex-1 bg-[#212121] py-20 px-6 sm:px-12 flex flex-col items-center text-center">
          <span className="text-[#F47639] text-[15px] font-normal uppercase mb-0">REVO</span>
          <h3 className="text-[#FCFCFC] text-[50px] font-normal uppercase mb-4 leading-tight">SHANGO</h3>
          <p className="text-[#FCFCFC] text-[15px] font-normal max-w-[541px] leading-relaxed mb-12">
            Notre modèle « pro » est doté d&apos;un <strong className="text-[#F47639] font-bold">Intel Core i7</strong> (13ᵉ génération), de <strong className="text-[#F47639] font-bold">16 Go de RAM</strong> et d&apos;un <strong className="text-[#F47639] font-bold">SSD de 1 To</strong>, parfait pour les utilisateurs exigeants.
          </p>
          <div className="flex-grow flex items-center justify-center mb-12 w-full">
            <img 
              src="/images/laptop-shango_revo-free_fifa&shango.png" 
              alt="Revo Free Shango" 
              className="w-full max-w-[500px] object-contain hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-auto">
            <OrderModal defaultAppareil="REVO SHANGO">
              <button 
                className="bg-[#F47639] text-white px-8 py-3.5 font-semibold text-sm hover:bg-[#e06527] transition-colors"
              >
                Commander
              </button>
            </OrderModal>
            <Link 
              href="/ordinateurs/revo-free/shango" 
              className="border border-[#FCFCFC] text-[#FCFCFC] px-8 py-3.5 font-semibold text-sm hover:bg-[#FCFCFC] hover:text-[#212121] transition-colors flex items-center justify-center gap-2 group"
            >
              En savoir plus
              <ArrowRight size={16} className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* FIFA side (Right) */}
        <div className="flex-1 bg-[#FCFCFC] py-20 px-6 sm:px-12 flex flex-col items-center text-center">
          <span className="text-[#F47639] text-[15px] font-normal uppercase mb-0">REVO</span>
          <h3 className="text-[#212121] text-[50px] font-normal uppercase mb-4 leading-tight">FIFA</h3>
          <p className="text-[#212121] text-[15px] font-normal max-w-[541px] leading-relaxed mb-12">
            Ce modèle « light » embarque un processeur Intel Celeron, <strong className="text-[#F47639] font-bold">4 Go de RAM</strong> et un <strong className="text-[#F47639] font-bold">SSD de 512 Go</strong>, idéal pour les tâches du quotidien.
          </p>
          <div className="flex-grow flex items-center justify-center mb-12 w-full">
            <img 
              src="/images/laptop-fifa_revo-free_fifa&shango.png" 
              alt="Revo Free FIFA" 
              className="w-full max-w-[500px] object-contain hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-auto">
            <OrderModal defaultAppareil="REVO FIFA">
              <button 
                className="bg-[#F47639] text-white px-8 py-3.5 font-semibold text-sm hover:bg-[#e06527] transition-colors"
              >
                Commander
              </button>
            </OrderModal>
            <Link 
              href="/ordinateurs/revo-free/fifa" 
              className="border border-[#212121] text-[#212121] px-8 py-3.5 font-semibold text-sm hover:bg-[#212121] hover:text-white transition-colors flex items-center justify-center gap-2 group"
            >
              En savoir plus
              <ArrowRight size={16} className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
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
    </div>
  );
}
