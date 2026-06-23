import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Zap, Users } from "lucide-react";
import FigmaImage from "../../../../components/FigmaImage";

export default function RevoFreeShangoPage() {
  const targets = [
    "Entreprises",
    "Développeurs",
    "Graphistes",
    "Administrateurs"
  ];

  const specs = [
    { name: "Modèle", value: "REVO SHANGO R PRO" },
    { name: "Processeur", value: "Intel Core i7 (13e génération)" },
    { name: "Mémoire RAM", value: "16 Go" },
    { name: "Stockage", value: "SSD 1 To" },
    { name: "Utilisation", value: "Professionnelle / Création / Entreprise" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation bar */}
      <div className="bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200/50 py-4">
        <div className="max-w-[1171px] mx-auto px-6">
          <Link href="/ordinateurs/revo-free" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-primary transition-colors">
            <ArrowLeft size={14} />
            Retour à la gamme Revo Free
          </Link>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-[1171px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3.5 py-1.5 rounded-full w-max">
              <Sparkles size={12} />
              Intel Core i7 (13e Gén.) • 16 Go RAM • SSD 1 To
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight text-black dark:text-white">
              SHANGO R PRO
            </h1>
            <p className="font-display font-bold text-lg text-accent uppercase leading-relaxed">
              La puissance professionnelle au service de vos ambitions
            </p>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              Conçu pour les professionnels, créateurs et utilisateurs exigeants.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-neutral-200/50 dark:border-neutral-900 shadow-lg bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center p-6 h-80 select-none">
            <img
              src="/images/laptop_free.png"
              alt="Revo Free Shango PC"
              className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Tech specs & Targets */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-[1171px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Specs */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 shadow-sm">
            <h2 className="font-display font-extrabold text-xl uppercase mb-6 flex items-center gap-2 text-black dark:text-white">
              <Zap className="text-accent" size={20} />
              CARACTÉRISTIQUES TECHNIQUES
            </h2>
            <p className="text-muted text-sm mb-6 font-semibold">
              Plus de puissance. Plus de rapidité. Plus de possibilités.
            </p>
            <ul className="space-y-4">
              {specs.map((spec, index) => (
                <li key={index} className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3 text-sm text-black dark:text-white">
                  <span className="font-semibold text-neutral-500">{spec.name}</span>
                  <span className="font-medium text-right">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Targets */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="font-display font-extrabold text-xl uppercase mb-6 flex items-center gap-2 text-black dark:text-white">
                <Users className="text-accent" size={20} />
                À QUI S'ADRESSE-T-IL ?
              </h2>
              <ul className="grid grid-cols-2 gap-4">
                {targets.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 p-4 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-100 dark:border-neutral-900 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    <Check size={16} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 text-center font-display font-bold text-sm text-accent leading-relaxed italic">
              "Meilleurs prix, Meilleure qualité, Meilleur design, c'est ça REVO FREE, la révolution"
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
