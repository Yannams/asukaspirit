import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <div className="relative min-h-[calc(100vh-64px)] bg-[#F8F9FA] flex flex-col justify-between overflow-hidden pb-24 lg:pb-32">
        {/* Main Content Area */}
        <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center pt-12 relative">
          {/* Left Side: Text */}
          <div className="flex flex-col items-start z-10 w-full lg:w-1/2 pt-10 lg:pt-0">
            <div className="font-montserrat bg-[#E9E9E9] text-[#222222] h-[32px] rounded-[48px] px-[18px] py-[6px] text-[16px] font-normal leading-none mb-6 flex items-center justify-center w-max">
              Contactez-nous
            </div>
            <h1 className="font-montserrat text-[30px] font-medium leading-[44px] text-[#222222] uppercase max-w-[399px]">
              Contactez-nous, dites-nous comment nous pouvons aider
            </h1>
          </div>
        </div>

        {/* Right Side: Image Absolute on LG */}
        <div className="lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-1/2 w-full h-[400px] lg:h-auto z-0 pointer-events-none">
          <Image
            src="/images/casque.png"
            alt="Person wearing smart glasses"
            fill
            className="object-contain lg:object-cover lg:object-left"
            priority
          />
        </div>
      </div>

      {/* White Background Section */}
      <div className="w-full relative z-10">
        {/* Bottom Contact Cards (overlapping hero) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 lg:-mt-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Email */}
            <div className="bg-[#242424] rounded-2xl p-6 flex items-center gap-4 shadow-xl">
              <div className="bg-[#F8753D] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs mb-1">Adresse mail</span>
                <span className="text-white font-medium text-sm sm:text-base">contact@asworld.tech</span>
              </div>
            </div>

            {/* Card 2: Phone */}
            <div className="bg-[#242424] rounded-2xl p-6 flex items-center gap-4 shadow-xl">
              <div className="bg-[#F8753D] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs mb-1">Téléphone</span>
                <span className="text-white font-medium text-sm sm:text-base">0196961571</span>
              </div>
            </div>

            {/* Card 3: Address */}
            <div className="bg-[#242424] rounded-2xl p-6 flex items-center gap-4 shadow-xl md:col-span-1 lg:col-span-1">
              <div className="bg-[#F8753D] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs mb-1">Notre Showroom</span>
                <span className="text-white font-medium text-xs sm:text-sm leading-tight">
                  12 Avenue Mgr François Steinmetz, Cotonou, Benin<br />
                  Cotonou, Littoral Department, Benin
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form Section Header */}
        <div className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h2 className="font-montserrat text-2xl md:text-[28px] font-semibold text-[#1A1A1A] uppercase text-center mb-12 tracking-wide">
              ENVOYEZ-NOUS UN MESSAGE
            </h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Map Side */}
            <div className="w-full h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg relative bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.590518776098!2d2.41727785!3d6.366403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023544f80e03e51%3A0x63321586716cfb4a!2sCotonou%2C%20Benin!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Form Side */}
            <div className="w-full flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#1A1A1A]">Nom <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Votre nom..." className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F8753D] focus:ring-1 focus:ring-[#F8753D] transition-colors text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#1A1A1A]">Prénom</label>
                  <input type="text" placeholder="Votre prénom..." className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F8753D] focus:ring-1 focus:ring-[#F8753D] transition-colors text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#1A1A1A]">Email <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="Votre adresse email..." className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F8753D] focus:ring-1 focus:ring-[#F8753D] transition-colors text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#1A1A1A]">Téléphone <span className="text-red-500">*</span></label>
                  <input type="tel" placeholder="0158479682..." className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F8753D] focus:ring-1 focus:ring-[#F8753D] transition-colors text-sm" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#1A1A1A]">Message <span className="text-red-500">*</span></label>
                <textarea rows={5} placeholder="Votre message..." className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F8753D] focus:ring-1 focus:ring-[#F8753D] transition-colors text-sm resize-none"></textarea>
              </div>

              <div className="flex justify-end mt-2">
                <button className="bg-[#242424] hover:bg-[#1a1a1a] transition-colors text-white text-sm font-medium rounded-full py-2 pl-6 pr-2 flex items-center gap-4 group">
                  Envoyez le message
                  <div className="bg-[#F8753D] rounded-full p-2 group-hover:scale-105 transition-transform">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

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
    </>
  );
}
