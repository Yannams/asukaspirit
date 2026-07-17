import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Cpu, Monitor, Zap, Check, ArrowUpRight } from "lucide-react";
import FigmaImage from "../../../../components/FigmaImage";
import FloatingOrderButton from '@/components/FloatingOrderButton';

export default function RevoCorp1Page() {
  const specs = [
    { name: "Moniteur / Écran", value: "24” OLED, 60Hz (527.04 x 296.46 mm)" },
    { name: "Processeur", value: "Intel Core i5-13400 13th Gen (10 Cores, 16 Threads, up to 4.60GHz)" },
    { name: "Mémoire RAM", value: "8 Go DDR5" },
    { name: "Stockage", value: "SSD 256 Go M.2 NVMe" },
    { name: "Accessoires inclus", value: "Unité centrale, Écran, Enceintes, Hub de connexion" }
  ];

  const highlights = [
    "Solution tout-en-un performante pour les bureaux et les administrations",
    "Haute fidélité d'affichage avec l'écran OLED 24 pouces",
    "Multitâche rapide soutenu par 10 cœurs de processeur",
    "Connectivité simplifiée grâce au hub et aux enceintes incluses"
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Header */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-[1171px] mx-auto px-6 flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="bg-[#E9E9E9] rounded-[48px] px-[18px] py-[6px] mb-6 flex gap-2">
            <span className="font-[family-name:var(--font-montserrat)] text-[16px] text-[#F47639]">Desktop</span>
            <span className="font-[family-name:var(--font-montserrat)] text-[16px] text-black">(Unité centrale + écran)</span>
          </div>

          {/* Title */}
          <h1 className="font-[family-name:var(--font-montserrat)] font-normal text-[50px] text-black dark:text-white uppercase mb-6">
            REVO CORP 1
          </h1>

          {/* Description */}
          <p className="font-[family-name:var(--font-montserrat)] text-[18px] leading-[28px] text-black dark:text-white max-w-[928px] mx-auto mb-12">
            Les desktops répondent aux besoins des cadres et assistants grâce à leur puissance et leur fiabilité.<br />
            <span className="font-bold text-[#F47639]">Le REVO CORP 1,</span> composé <span className="font-bold">d’une unité centrale, d’un écran, d’enceintes et d’un hub</span>, offre une solution complète, performante et adaptée aux besoins professionnels du quotidien.
          </p>

          {/* Image */}
          <div className="w-full flex justify-center">
            <Image
              src="/images/bureau_revo-corp_revo-corp-1.png"
              alt="REVO CORP 1 Desktop"
              width={1000}
              height={600}
              className="max-w-full h-auto object-contain"
            />
          </div>

        </div>
      </section>
      {/* Screen Section */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
        {/* Gray Background Block - Bleeds to the left edge of the viewport */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[90%] md:w-[60vw] lg:w-[70vw] h-full md:h-[350px] bg-[#F5F5F5] dark:bg-neutral-900 z-0"></div>

        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center relative z-10">
          
          <div className="w-full md:w-1/2 pl-6 md:pl-[10%] xl:pl-[15%] pr-6 py-12 md:py-0">
            <p className="font-[family-name:var(--font-montserrat)] text-[16px] md:text-[18px] leading-[28px] text-black dark:text-white max-w-[420px]">
              Doté d'un <span className="font-bold">écran de 23,8 pouces aux dimensions de 527,04 mm × 296,46 mm</span>, cet ordinateur offre un excellent confort visuel et intègre une <span className="font-bold">webcam HD de 3,0 MP</span> pour des visioconférences nettes, fluides et professionnelles.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0">
            <div className="relative w-full h-[400px] md:h-[600px]">
              <Image
                src="/images/bureau-front_revo-corp_revo-corp-1X.png"
                alt="Écran REVO CORP 1"
                fill
                className="object-contain md:object-right md:scale-[1.15] md:translate-x-12"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Tower Section */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
        {/* Dark Background Block - Bleeds to the right edge of the viewport */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] md:w-[65vw] lg:w-[60vw] h-full md:h-[450px] bg-[#1A1A1A] dark:bg-neutral-900 z-0"></div>

        <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center relative z-10">
          
          <div className="w-full md:w-1/2 flex justify-start mt-8 md:mt-0">
            <div className="relative w-full h-[500px] md:h-[700px] ml-10">
              <Image
                src="/images/unite_centrale-revo_corp_1-unite.png"
                alt="Unité centrale REVO CORP 1"
                fill
                className="object-contain md:object-left md:scale-[1.1] md:-translate-x-8"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 pr-6 md:pr-[10%] xl:pr-[15%] pl-6 py-12 md:py-0">
            <div className="space-y-6 max-w-[500px] mx-auto md:ml-0 md:mr-auto">
              <p className="font-[family-name:var(--font-montserrat)] text-[15px] md:text-[16px] leading-[26px] text-neutral-300">
                Avec une unité centrale intégrant un processeur Intel Core i5-13400 de 13e génération, 10 cœurs et 16 threads, ainsi que 8 Go de RAM DDR5 à 4800 MHz et un SSD M.2 NVMe de 256 Go, ce système garantit rapidité et efficacité au quotidien.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-[15px] md:text-[16px] leading-[26px] text-neutral-300">
                Il permet de gérer facilement le multitâche, les logiciels professionnels et les tâches de bureautique avec fluidité.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-[15px] md:text-[16px] leading-[26px] text-neutral-300">
                Sa connectivité complète comprenant Wi-Fi 5, Bluetooth 5.0, Ethernet Gigabit ainsi que plusieurs ports HDMI, VGA, USB et un lecteur de carte SD assure une grande flexibilité d'utilisation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-24 bg-white dark:bg-black relative">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center">
          
          <div className="w-full md:w-1/2 pl-6 md:pl-[10%] xl:pl-[15%] pr-6 py-12 md:py-0">
            <p className="font-[family-name:var(--font-montserrat)] text-[16px] md:text-[18px] leading-[28px] text-black dark:text-white max-w-[460px]">
              Avec des accessoires tels que des <span className="font-bold">enceintes et un hub</span>, cet ordinateur offre une expérience d'utilisation encore plus complète et polyvalente. Ces équipements facilitent la connectivité de vos périphériques tout en améliorant votre confort audio et votre productivité au quotidien. Une solution pensée pour répondre efficacement aux besoins des professionnels comme des particuliers.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 pr-6 md:pr-[10%] xl:pr-[15%]">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/images/accessoires-revo_corp_1-accessoires.png"
                alt="Accessoires REVO CORP 1"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Conclusion Section */}
      <section className="relative bg-white dark:bg-black pt-24">
        {/* Gray Background Top Half */}
        <div className="absolute top-0 left-0 w-full h-[65%] bg-[#F9F9F9] dark:bg-neutral-900 z-0"></div>

        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <p className="font-[family-name:var(--font-montserrat)] text-[16px] md:text-[18px] leading-[28px] text-neutral-800 dark:text-neutral-200">
            Pensé pour les administrations, les entreprises et les organisations, REVO CORP allie design professionnel, performance, fiabilité et durabilité pour répondre aux exigences des environnements de travail modernes.
          </p>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto mt-12 flex justify-center px-6">
          <div className="relative w-full h-[300px] md:h-[600px]">
            <Image
              src="/images/bureau-revo_corp_1-built_for.png"
              alt="REVO CORP 1 Setup Complet"
              fill
              className="object-contain scale-[2.5]"
            />
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="py-10 md:py-16 bg-white dark:bg-black flex items-center justify-center px-6 border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="w-full max-w-[1171px] bg-[#222222] rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 relative">
          
          {/* Left Text Content */}
          <div className="flex flex-col text-center md:text-left z-10 w-full md:w-1/2">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-3xl md:text-4xl text-white mb-6 uppercase">
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
              <div className="w-[49px] h-[49px] rounded-full bg-[#F47639] flex items-center justify-center text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
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
   
    
      <FloatingOrderButton appareilName="REVO CORP 1" />
    </div>
  );
}
