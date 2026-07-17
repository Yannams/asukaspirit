import Link from "next/link";
import { ArrowLeft, Cpu, Monitor, Laptop, Zap, CheckCircle, ArrowRight, ArrowUpRight } from "lucide-react";
import FigmaImage from "../../../components/FigmaImage";

export default function RevoCorpPage() {
  const products = [
    {
      id: "revo-corp-1",
      name: "REVO CORP 1",
      subtitle: "Desktop (Unité centrale + écran)",
      nodeId: "245:724", // desktop rendering
      image: "/images/bureau_revo-corp_revo-corp-1.png",
      tagline: "Haute performance bureautique",
      desc: "Les desktops répondent aux besoins des cadres et assistants grâce à leur puissance et leur fiabilité.",
      specs: [
        { name: "Écran", value: "24\", 527.04(w)x296.46(H)mm, OLED, 60Hz" },
        { name: "RAM", value: "8 GB DDR5" },
        { name: "Processeur", value: "Intel Core i5-13400 13th Gen, 10 Cores, 16 threads, 2.50GHz à 4.60GHz Turbo" },
        { name: "Stockage", value: "SSD 256 GB M.2 NVMe" }
      ],
      link: "/ordinateurs/revo-corp/revo-corp-1"
    },
    {
      id: "revo-corp-1x",
      name: "REVO CORP 1X",
      subtitle: "Moniteur (Écran 27”)",
      nodeId: "203:576", // screen rendering
      layout: "revo-1x",
      images: [
        "/images/bureau-front_revo-corp_revo-corp-1X.png",
        "/images/bureau-back_revo-corp_revo-corp-1X.png"
      ],
      tagline: "Haute performance professionnelle",
      desc: "Haute performance professionnelle avec une qualité d'image exceptionnelle et un taux de rafraîchissement fluide.",
      specs: [
        { name: "Taille de l'écran :", value: "597,888 x 336,312 mm" },
        { name: "Résolution :", value: "FHD IPS 1920 x 1080 (16:9)" },
        { name: "Luminosité :", value: "200 à 250 nits" },
        { name: "Couleurs :", value: "16,7 millions" },
        { name: "Taux de rafraichissement :", value: "75 Hz" },
        { name: "Temps de réponse (OD) :", value: "14 ms" },
        { name: "Alimentation :", value: "Adaptateur 12V / 3A" },
        { name: "Norme :", value: "CE" },
        { name: "Ports :", value: "VGA + HDMI" }
      ],
      link: null
    },
    {
      id: "revo-corp-2",
      name: "REVO CORP 2",
      subtitle: "Laptop premium",
      layout: "revo-2",
      nodeId: "223:640", // laptop premium rendering
      image: "/images/laptop_revo-corp_revo-corp-2.png",
      tagline: "Légèreté, sécurité et finition haut de gamme",
      desc: "Légèreté, sécurité et finition haut de gamme pour les déplacements des cadres et décideurs.",
      specs: [
        { name: "ÉCRAN", value: "15.6” FHD IPS 1920x1080" },
        { name: "RAM", value: "8 GB DDR5, 3200mhz" },
        { name: "PROCESSEUR", value: "Intel Core i5-1335U, 10 Cores, 12 threads, 2.30GHz à 4.46GHz Turbo" },
        { name: "STOCKAGE", value: "SSD 256 GB M.2 NVME" }
      ],
      link: "/ordinateurs/revo-corp/revo-corp-2"
    },
    {
      id: "revo-corp-3",
      name: "REVO CORP 3",
      subtitle: "Laptop professionnel",
      layout: "revo-3",
      nodeId: "225:648", // laptop pro rendering
      image: "/images/laptop_revo-corp_revo-corp-3.png",
      tagline: "Puissance, durabilité et connection avancée",
      desc: "Puissance, durabilité et connexion avancée pour les experts et les charges de travail intensives.",
      specs: [
        { name: "ÉCRAN", value: "15.6” FHD IPS 1920*1080" },
        { name: "RAM", value: "16 GB DDR5, 3200mhz" },
        { name: "PROCESSEUR", value: "Intel Core i7-1335U, 10 Cores, 12 threads, 2.50GHz à 5.0Ghz Turbo, 13MB Intel Smart Cache" },
        { name: "STOCKAGE", value: "SSD 512 GB M.2 NVME" }
      ],
      link: "/ordinateurs/revo-corp/revo-corp-2" // Laptops detailed together in Revo Corp 2 & 3 page
    },
    {
      id: "revo-corp-5",
      name: "REVO CORP 5",
      subtitle: "Desktop All-In-One",
      layout: "revo-5",
      nodeId: "231:690", // AIO rendering
      image: "/images/all-in-one_revo_corp_revo_corp_5.png",
      tagline: "Le modèle tout en un le plus élaboré de la marque ",
      desc: "",
      specs: [
        { name: "ÉCRAN", value: "23.8\", 527.04(W)x 296.46(H)mm" },
        { name: "RAM", value: "8 GB DDR5, 2*slots, 3200mhz" },
        { name: "PROCESSEUR", value: "Intel Core i5-13400 13th Gen, 10 Cores, 16 threads, 2.50GHz à 4.60GHz Turbo" },
        { name: "STOCKAGE", value: "SSD 256 GB M.2 NVME" }
      ],
      link: "/ordinateurs/revo-corp/revo-corp-5"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="relative w-full h-[600px] md:h-[900px] flex flex-col items-center justify-start pt-24 md:pt-40 overflow-hidden bg-[#1a1a1a]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img 
            src="/images/ordinateur_revo_corp_hero.png" 
            alt="Ordinateur Revo Corp" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <h1 className="text-primary text-[20px] font-normal uppercase mb-4">
            Revo Corp
          </h1>
          <p className="text-white text-[22px] md:text-[30px] font-normal leading-snug md:leading-[47px] max-w-[762px]">
            Revo Corp d'Askua Spirit, la puissance et la fiabilité au service des administrations et entreprises
          </p>
        </div>
      </section>

      {/* Product Catalog */}
      <div className="flex flex-col w-full">
        {products.map((product, index) => {
          if (product.layout === "revo-1x") {
            return (
              <section key={product.id} className="relative w-full py-24 overflow-hidden bg-white dark:bg-neutral-950">
                {/* Background Rectangle 48 for the left side */}
                <div className="absolute top-0 left-0 w-full lg:w-[50vw] h-full bg-[#FCFCFC] dark:bg-neutral-900 z-0" />
                
                <div className="max-w-[1171px] mx-auto px-6 relative z-10">
                  <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                    {/* Details Section (Left) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left py-12 lg:py-0">
                      <div className="relative z-10 w-full">
                        <h3 className="font-display font-semibold text-[30px] leading-[47px] text-[#070707] dark:text-white uppercase">
                          {product.name}
                        </h3>
                        <p className="font-display font-light text-[25px] leading-[47px] text-[#070707] dark:text-neutral-300 mb-8">
                          {product.subtitle}
                        </p>

                        <div className="w-[130px] h-[2px] bg-[#D9D9D9] mb-[50px]" />

                        <div className="w-full mb-8">
                          <h4 className="text-primary font-bold text-base md:text-lg mb-6">Caractéristiques</h4>
                          <p className="text-[#070707] dark:text-white font-bold text-[15px] mb-4">
                            Moniteur ELED 27 pouces
                          </p>
                          <div className="flex flex-col gap-[10px]">
                            {product.specs.map((spec, sIdx) => (
                              <div key={sIdx} className="text-[#070707] dark:text-neutral-300 text-[14px]">
                                <span className="font-bold">{spec.name}</span> <span className="font-light">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {product.tagline && (
                          <p className="font-display font-bold text-[18px] text-primary mb-8 max-w-[200px] leading-snug">
                            {product.tagline}
                          </p>
                        )}

                        <div className="flex flex-wrap items-center gap-4">
                          <Link
                            href="/#contact"
                            className="bg-[#212121] hover:bg-black text-white text-[15px] font-medium py-3.5 px-8 transition-colors flex items-center justify-center min-w-[160px]"
                          >
                            Commander
                          </Link>
                          {product.link ? (
                            <Link
                              href={product.link}
                              className="bg-white hover:bg-neutral-50 text-[#212121] border border-neutral-300 hover:border-[#212121] text-[15px] font-medium py-3.5 px-8 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
                            >
                              En savoir plus <ArrowUpRight size={18} />
                            </Link>
                          ) : (
                            <span className="bg-white text-[#212121] border border-neutral-300 text-[15px] font-medium py-3.5 px-8 flex items-center justify-center gap-2 min-w-[160px] opacity-60">
                              En savoir plus <ArrowUpRight size={18} />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Image Section (Right) */}
                    <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px] flex items-start justify-center lg:-mt-24">
                      <div className="absolute top-0 right-0 w-[85%] h-[80%] z-0">
                        <img src={product.images?.[0]} alt="Front" className="w-full h-full object-contain object-top" />
                      </div>
                      <div className="absolute -bottom-8 md:-bottom-16 -left-16 lg:-left-32 w-[85%] h-[85%] z-10 drop-shadow-2xl">
                        <img src={product.images?.[1]} alt="Back" className="w-full h-full object-contain object-bottom -scale-x-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (product.layout === "revo-2") {
            return (
              <section key={product.id} className="relative w-full py-24 bg-[#212121]">
                <div className="max-w-[1171px] mx-auto px-6 relative z-10">
                  <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Column (Image) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
                      <div className="w-full max-w-[706px] relative aspect-square flex items-center justify-center mb-8">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                        ) : (
                          <div className="w-full h-full bg-neutral-800 rounded-[50px] overflow-hidden flex items-center justify-center p-8">
                             <FigmaImage nodeId={product.nodeId} alt={product.name} fallbackType="laptop" className="w-full h-full object-contain" />
                          </div>
                        )}
                      </div>
                      {product.tagline && (
                        <p className="relative z-10 -mt-24 font-display font-light italic text-[20px] lg:text-[25px] leading-snug lg:leading-[47px] text-white whitespace-nowrap">
                          {product.tagline}
                        </p>
                      )}
                    </div>

                    {/* Right Column (Details) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                      <h3 className="font-display font-semibold text-[30px] leading-[47px] text-white uppercase">
                        {product.name}
                      </h3>
                      <p className="font-display font-light text-[25px] leading-[47px] text-[#F47639] mb-8">
                        {product.subtitle}
                      </p>

                      <div className="w-full mb-12">
                        <h4 className="text-white text-base md:text-lg mb-8 font-medium">Caractéristiques</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                          {product.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex flex-col items-start">
                              <div className="flex items-center gap-3 mb-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                  <circle cx="7" cy="7" r="7" fill="#F47639"/>
                                  <path d="M4.5 7L6.5 9L9.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-white font-bold text-[14px] uppercase tracking-wider">{spec.name}</span>
                              </div>
                              <span className="text-[#A1A1A1] text-[13px] font-light pl-[26px] leading-relaxed">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <Link
                          href="/#contact"
                          className="bg-[#F47639] hover:bg-[#e0652d] text-white text-[15px] font-medium py-3 px-6 transition-colors flex items-center justify-center min-w-[133px]"
                        >
                          Commander
                        </Link>
                        {product.link ? (
                          <Link
                            href={product.link}
                            className="bg-transparent hover:bg-white/5 text-white border border-white text-[15px] font-medium py-3 px-6 transition-colors flex items-center justify-center gap-2"
                          >
                            En savoir plus <ArrowUpRight size={18} />
                          </Link>
                        ) : (
                          <span className="bg-transparent text-neutral-400 border border-neutral-600 text-[15px] font-medium py-3 px-6 flex items-center justify-center gap-2 opacity-60">
                            En savoir plus <ArrowUpRight size={18} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (product.layout === "revo-3") {
            return (
              <section key={product.id} className="relative w-full py-24 bg-white dark:bg-neutral-950 overflow-hidden">
                <div className="max-w-[1171px] mx-auto px-6 relative z-10">
                  <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Column (Details) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                      <h3 className="font-display font-semibold text-[30px] leading-[47px] text-[#212121] dark:text-white uppercase">
                        {product.name}
                      </h3>
                      <p className="font-display font-light text-[25px] leading-[47px] text-[#F47639] mb-8">
                        {product.subtitle}
                      </p>

                      <div className="w-[130px] h-[2px] bg-[#D9D9D9] mb-[50px]" />

                      <div className="w-full mb-8">
                        <h4 className="text-[#212121] dark:text-white font-medium text-base md:text-lg mb-8">Caractéristiques</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                          {product.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex flex-col items-start">
                              <div className="flex items-center gap-3 mb-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                  <circle cx="7" cy="7" r="7" fill="#F47639"/>
                                  <path d="M4.5 7L6.5 9L9.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-[#212121] dark:text-white font-bold text-[14px] uppercase tracking-wider">{spec.name}</span>
                              </div>
                              <span className="text-[#6B6B6B] dark:text-neutral-400 text-[13px] font-light pl-[26px] leading-relaxed max-w-[200px]">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {product.tagline && (
                        <p className="font-display italic text-[23px] text-[#212121] dark:text-neutral-300 font-normal mb-8">
                          <span className="font-bold text-[#A71B1B] mr-2">*</span>
                          {product.tagline}
                        </p>
                      )}

                      <div className="flex flex-wrap items-center gap-4">
                        <Link
                          href="/#contact"
                          className="bg-[#212121] hover:bg-black text-white text-[15px] font-medium py-3 px-6 transition-colors flex items-center justify-center min-w-[133px]"
                        >
                          Commander
                        </Link>
                        {product.link ? (
                          <Link
                            href={product.link}
                            className="bg-white hover:bg-neutral-50 text-[#212121] border border-[#212121] text-[15px] font-medium py-3 px-6 transition-colors flex items-center justify-center gap-2"
                          >
                            En savoir plus <ArrowUpRight size={18} />
                          </Link>
                        ) : (
                          <span className="bg-transparent text-neutral-400 border border-neutral-600 text-[15px] font-medium py-3 px-6 flex items-center justify-center gap-2 opacity-60">
                            En savoir plus <ArrowUpRight size={18} />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right Column (Image) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center text-center relative">
                      <div className="w-full max-w-[562px] relative aspect-square flex items-center justify-center z-10">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-xl" />
                        ) : (
                          <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 rounded-[50px] overflow-hidden flex items-center justify-center p-8">
                             <FigmaImage nodeId={product.nodeId} alt={product.name} fallbackType="laptop" className="w-full h-full object-contain" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (product.layout === "revo-5") {
            return (
              <section key={product.id} className="relative z-10 w-full py-24 bg-[#FCFCFC] dark:bg-neutral-950">
                <div className="max-w-[1171px] mx-auto px-6 relative z-10">
                  <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Column (Image) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
                      <div className="w-full max-w-[766px] relative aspect-square flex items-center justify-center mb-8 lg:mb-0 -mt-24 lg:-mt-[200px] scale-[1.15] lg:scale-[1.3] z-30">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                        ) : (
                          <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 rounded-[50px] overflow-hidden flex items-center justify-center p-8">
                             <FigmaImage nodeId={product.nodeId} alt={product.name} fallbackType="laptop" className="w-full h-full object-contain" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column (Details) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                      <h3 className="font-display font-semibold text-[33px] leading-[47px] text-black dark:text-white uppercase mb-1">
                        {product.name}
                      </h3>
                      <p className="font-display font-light text-[25px] leading-[38px] text-[#F47639] mb-6">
                        {product.subtitle}
                      </p>

                      <p className="font-display text-[#212121] dark:text-neutral-300 font-light text-[25px] leading-[38px] mb-10 max-w-[453px]">
                        {product.tagline}
                        <span className="font-semibold">ASUKA SPIRIT</span>
                      </p>

                      <div className="w-full mb-8">
                        <h4 className="text-[#F47639] font-medium text-base md:text-lg mb-8">Caractéristiques</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                          {product.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex flex-col items-start">
                              <div className="flex items-center gap-3 mb-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                  <circle cx="7" cy="7" r="7" fill="#F47639"/>
                                  <path d="M4.5 7L6.5 9L9.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-black dark:text-white font-bold text-[20px] uppercase tracking-wider leading-none">{spec.name}</span>
                              </div>
                              <span className="text-[#6B6B6B] dark:text-neutral-400 text-[13px] font-light pl-[26px] leading-relaxed max-w-[200px]">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-4">
                        <Link
                          href="/#contact"
                          className="bg-[#212121] hover:bg-black text-white text-[15px] font-medium py-3 px-6 transition-colors flex items-center justify-center min-w-[133px]"
                        >
                          Commander
                        </Link>
                        {product.link ? (
                          <Link
                            href={product.link}
                            className="bg-transparent hover:bg-neutral-50 text-[#212121] border border-[#212121] text-[15px] font-medium py-3 px-6 transition-colors flex items-center justify-center gap-2"
                          >
                            En savoir plus <ArrowUpRight size={18} />
                          </Link>
                        ) : (
                          <span className="bg-transparent text-[#212121] border border-[#212121] text-[15px] font-medium py-3 px-6 flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-50 transition-colors">
                            En savoir plus <ArrowUpRight size={18} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          return (
            <section
              key={product.id}
              className="w-full py-24 bg-white dark:bg-neutral-950"
            >
              <div className="max-w-[1171px] mx-auto px-6">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                  <div className="w-full relative aspect-square md:aspect-[4/3] flex items-center justify-center mb-4">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-2xl" />
                    ) : (
                      <div className="w-full h-full bg-neutral-50 dark:bg-neutral-900 rounded-[50px] overflow-hidden flex items-center justify-center p-8">
                         <FigmaImage nodeId={product.nodeId} alt={product.name} fallbackType={product.subtitle.includes("Laptop") ? "laptop" : "scene"} className="w-full h-full object-contain" />
                      </div>
                    )}
                  </div>
                  {product.tagline && (
                    <p className="font-display italic font-light text-[18px] md:text-[22px] text-[#212121] dark:text-neutral-300 text-center">
                      <span className="text-primary font-bold mr-2">*</span>
                      {product.tagline}
                    </p>
                  )}
                </div>

                {/* Details Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                  <h3 className="font-display font-semibold text-[30px] leading-[47px] text-[#212121] dark:text-white uppercase">
                    {product.name}
                  </h3>
                  <p className="font-display font-light text-[20px] md:text-[25px] leading-snug md:leading-[47px] text-primary mb-8">
                    {product.subtitle}
                  </p>

                  <div className="w-full bg-[#212121] rounded-[25px] p-8 md:p-10 mb-8 shadow-xl">
                    <h4 className="text-white text-base md:text-lg mb-8 font-medium">Caractéristiques</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                      {product.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex flex-col items-start">
                          <div className="flex items-center gap-3 mb-2">
                            {/* Orange Icon */}
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                              <circle cx="7" cy="7" r="7" fill="#F47639"/>
                              <path d="M4.5 7L6.5 9L9.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-white font-bold text-sm uppercase tracking-wider">{spec.name}</span>
                          </div>
                          <span className="text-[#A1A1A1] text-sm font-light pl-[26px] leading-relaxed">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/#contact"
                      className="bg-[#212121] hover:bg-black text-white text-[15px] font-medium py-3.5 px-8 transition-colors flex items-center justify-center min-w-[160px]"
                    >
                      Commander
                    </Link>
                    {product.link ? (
                      <Link
                        href={product.link}
                        className="bg-white hover:bg-neutral-50 text-[#212121] border border-neutral-300 hover:border-[#212121] text-[15px] font-medium py-3.5 px-8 transition-colors flex items-center justify-center gap-2 min-w-[160px]"
                      >
                        En savoir plus <ArrowUpRight size={18} />
                      </Link>
                    ) : (
                      <span className="text-[15px] font-medium text-neutral-400 italic py-3.5 px-8 border border-transparent">
                        Détails sur devis
                      </span>
                    )}
                  </div>
                  </div>
                </div>
              </div>
            </section>
            );
        })}
      </div>

      {/* Call to Action (CTA) */}
      <section className="py-10 md:py-16 bg-white dark:bg-neutral-950 flex items-center justify-center px-6">
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
