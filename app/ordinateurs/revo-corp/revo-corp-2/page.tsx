import Link from "next/link";
import { ArrowLeft, Cpu, Laptop, Zap, Check } from "lucide-react";
import FigmaImage from "../../../../components/FigmaImage";

export default function RevoCorp2Page() {
  const laptop2Specs = [
    { name: "Moniteur / Écran", value: "15.6” FHD IPS (1920x1080)" },
    { name: "Processeur", value: "Intel i5-1335U (10 Cores, 12 Threads, up to 4.46GHz)" },
    { name: "Mémoire RAM", value: "8 Go DDR5 (3200MHz)" },
    { name: "Stockage", value: "SSD 256 Go M.2 NVMe" },
    { name: "Atout principal", value: "Légèreté, sécurité et finition haut de gamme" }
  ];

  const laptop3Specs = [
    { name: "Moniteur / Écran", value: "15.6” FHD IPS (1920x1080)" },
    { name: "Processeur", value: "Intel i7-1335U (10 Cores, 12 Threads, up to 5.00GHz, 13MB Cache)" },
    { name: "Mémoire RAM", value: "16 Go DDR5 (3200MHz)" },
    { name: "Stockage", value: "SSD 512 Go M.2 NVMe" },
    { name: "Atout principal", value: "Puissance, durabilité et connexion avancée" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Return to catalog */}
      <div className="bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200/50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/ordinateurs/revo-corp" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-primary transition-colors">
            <ArrowLeft size={14} />
            Retour à la gamme Revo Corp
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full w-max">
              Laptops Professionnels
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight text-black dark:text-white">
              REVO CORP 2 & 3
            </h1>
            <p className="font-display font-bold text-lg text-primary uppercase leading-relaxed">
              Laptop premium & professionnel
            </p>
            <p className="text-muted text-sm md:text-base leading-relaxed text-justify">
              Des laptops conçus pour tous les usages : mobilité pour les équipes de terrain, puissance, légèreté et sécurité pour les décideurs et experts.
            </p>
            <div className="flex pt-4">
              <Link
                href="/#contact"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary dark:hover:text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              >
                Demander un devis
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-neutral-200/50 shadow-lg">
            <FigmaImage
              nodeId="419:467"
              alt="REVO CORP 2 & 3 Laptops"
              fallbackType="laptop"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Models Comparison */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase mb-4 text-black dark:text-white">
              Comparez nos deux modèles de Laptops
            </h2>
            <p className="text-muted max-w-lg mx-auto text-sm">
              Choisissez entre l'élégance ultra-mobile du REVO CORP 2 et la puissance brute de calcul du REVO CORP 3.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* REVO CORP 2 Card */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Laptop size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-neutral-450">Modèle Premium</span>
                  <h3 className="font-display font-bold text-2xl uppercase text-black dark:text-white">REVO CORP 2</h3>
                </div>
              </div>
              <ul className="space-y-4 mb-6">
                {laptop2Specs.map((spec, index) => (
                  <li key={index} className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3 text-sm text-black dark:text-white last:border-0 last:pb-0">
                    <span className="font-semibold text-neutral-500">{spec.name}</span>
                    <span className="font-medium text-right ml-4">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* REVO CORP 3 Card */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Laptop size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-neutral-450">Modèle Professionnel</span>
                  <h3 className="font-display font-bold text-2xl uppercase text-black dark:text-white">REVO CORP 3</h3>
                </div>
              </div>
              <ul className="space-y-4 mb-6">
                {laptop3Specs.map((spec, index) => (
                  <li key={index} className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3 text-sm text-black dark:text-white last:border-0 last:pb-0">
                    <span className="font-semibold text-neutral-500">{spec.name}</span>
                    <span className="font-medium text-right ml-4">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
