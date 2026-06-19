import Link from "next/link";
import { ArrowLeft, Cpu, Monitor, Zap, Check } from "lucide-react";
import FigmaImage from "../../../../components/FigmaImage";

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
              Ordinateur de Bureau
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight text-black dark:text-white">
              REVO CORP 1
            </h1>
            <p className="font-display font-bold text-lg text-primary uppercase leading-relaxed">
              Desktop (Unité centrale + écran)
            </p>
            <p className="text-muted text-sm md:text-base leading-relaxed text-justify">
              Les desktops répondent aux besoins des cadres et assistants grâce à leur puissance et leur fiabilité. Le REVO CORP 1, composé d’une unité centrale, d’un écran, d’enceintes et d’un hub, offre une solution complète, performante et adaptée aux besoins professionnels du quotidien.
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
              nodeId="394:621"
              alt="REVO CORP 1 Desktop"
              fallbackType="scene"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-24 bg-neutral-55 dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tech specs */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 shadow-sm">
            <h2 className="font-display font-extrabold text-xl uppercase mb-6 text-black dark:text-white flex items-center gap-2">
              <Zap className="text-primary" size={20} />
              Caractéristiques Techniques
            </h2>
            <ul className="space-y-4">
              {specs.map((spec, index) => (
                <li key={index} className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3 text-sm text-black dark:text-white last:border-0 last:pb-0">
                  <span className="font-semibold text-neutral-500">{spec.name}</span>
                  <span className="font-medium text-right ml-4">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="font-display font-extrabold text-xl uppercase mb-6 text-black dark:text-white">
                Haute performance bureautique
              </h2>
              <ul className="space-y-4">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                    <Check size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 text-center font-display font-bold text-sm text-primary leading-relaxed italic">
              "La technologie souveraine conçue pour les professionnels exigeants."
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
