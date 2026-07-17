"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Recevoir et gérer les appels directement depuis la montre",
    imgSrc: "/images/image1-aw1-carousel.jpg"
  },
  {
    title: "Contrôler la musique sans sortir le téléphone",
    imgSrc: "/images/image2-aw1-carousel.jpg"
  },
  {
    title: "Consulter les notifications (SMS, WhatsApp, Facebook, etc.)",
    imgSrc: "/images/image3-aw1-carousel.jpg"
  },
  {
    title: "Suivre vos performances et analyser votre activité",
    imgSrc: "/images/image4-aw1-carousel.jpg"
  }
];

export default function FeaturesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = 320; // approximate width of card + gap
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      return () => currentRef.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto pl-6 md:pl-10 lg:pl-20">
        
        {/* Slider Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="relative shrink-0 w-[280px] md:w-[320px] h-[400px] md:h-[480px] rounded-[24px] overflow-hidden snap-center md:snap-start group cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={feature.imgSrc} 
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              
              {/* Text */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-center flex items-end justify-center h-full">
                <p className="font-sans text-[15px] md:text-[16px] text-white leading-snug">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}

          {/* Empty space at the end to allow the last item to be scrolled fully on desktop */}
          <div className="shrink-0 w-6 md:w-20"></div>
        </div>

        {/* Navigation & Pagination */}
        <div className="pr-6 md:pr-10 lg:pr-20 mt-6 flex items-center justify-between">
          
          {/* Dots */}
          <div className="flex items-center gap-2">
            {features.map((_, idx) => (
              <div 
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  activeIndex === idx ? "bg-[#F26A3B]" : "bg-[#EEEEEE]"
                }`}
              ></div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-[#F26A3B] hover:bg-[#E05A2B] flex items-center justify-center transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
