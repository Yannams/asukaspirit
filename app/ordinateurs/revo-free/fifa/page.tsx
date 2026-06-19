import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Zap, Users } from "lucide-react";
import FigmaImage from "../../../../components/FigmaImage";

export default function RevoFreeFifaPage() {
  const benefits = [
    "Design moderne et élégant",
    "Démarrage rapide grâce au SSD",
    "Navigation fluide pour les tâches courantes",
    "Stockage généreux pour vos documents et fichiers",
    "Excellent rapport qualité-prix"
  ];

  const idealFor = [
    "Les étudiants",
    "Les tâches bureautiques",
    "La navigation internet",
    "Les e-mails et visioconférences",
    "Le multimédia et le divertissement",
    "La gestion de documents"
  ];

  const specs = [
    { name: "Modèle", value: "REVO FIFA", desc: "PC portable pour les besoins quotidiens." },
    { name: "Processeur", value: "Intel Celeron", desc: "Adapté aux tâches courantes." },
    { name: "Mémoire RAM", value: "4 Go", desc: "Assure une utilisation fluide." },
    { name: "Stockage", value: "SSD 512 GO", desc: "Rapide et spacieux." },
    { name: "Gamme", value: "Light", desc: "Simple, pratique et accessible." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation bar */}
      <div className="bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200/50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/ordinateurs/revo-free" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-primary transition-colors">
            <ArrowLeft size={14} />
            Retour à la gamme Revo Free
          </Link>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3.5 py-1.5 rounded-full w-max">
              <Sparkles size={12} />
              Meilleurs prix • Meilleure qualité • Meilleur design
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight text-black dark:text-white">
              REVO FIFA
            </h1>
            <p className="font-display font-bold text-lg text-accent uppercase leading-relaxed">
              Le PC essentiel pour vos besoins quotidiens
            </p>
            <p className="text-muted text-sm md:text-base leading-relaxed text-justify">
              Le REVO FIFA est un ordinateur portable conçu pour répondre efficacement aux besoins du quotidien. Léger, pratique et accessible, il offre les performances nécessaires pour la navigation internet, la bureautique, les cours en ligne, les réseaux sociaux et le multimédia.
            </p>
            <p className="text-muted text-sm leading-relaxed text-justify">
              Que vous soyez étudiant, professionnel ou particulier, le REVO FIFA vous accompagne dans toutes vos tâches essentielles.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-neutral-200/50 shadow-lg">
            <FigmaImage
              nodeId="304:1396"
              alt="Revo Free FIFA PC"
              fallbackType="laptop"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits & Ideal For */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-100 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Why choose */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 shadow-sm">
            <h2 className="font-display font-extrabold text-xl uppercase mb-6 text-black dark:text-white">
              Pourquoi choisir le REVO FIFA ?
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal for */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 shadow-sm">
            <h2 className="font-display font-extrabold text-xl uppercase mb-6 text-black dark:text-white">
              Le REVO FIFA est idéal pour :
            </h2>
            <ul className="space-y-4">
              {idealFor.map((target, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech specs & Detailed text */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Tech table */}
          <div className="lg:col-span-7 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 shadow-sm">
            <h2 className="font-display font-extrabold text-xl uppercase mb-6 text-black dark:text-white flex items-center gap-2">
              <Zap className="text-accent" size={20} />
              CARACTÉRISTIQUES TECHNIQUES
            </h2>
            <ul className="space-y-4">
              {specs.map((spec, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 text-sm text-black dark:text-white last:border-b-0 last:pb-0">
                  <div className="flex flex-col">
                    <span className="font-semibold text-neutral-500">{spec.name}</span>
                    <span className="text-xs text-muted mt-0.5">{spec.desc}</span>
                  </div>
                  <span className="font-bold sm:self-center mt-1 sm:mt-0 text-accent">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core descriptions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-display font-bold text-lg text-accent uppercase">
              REVO FREE, la révolution
            </h3>
            <p className="text-muted text-sm leading-relaxed text-justify">
              Grâce à son SSD de 512 Go, le REVO FIFA offre un démarrage rapide du système et une meilleure réactivité des applications. Son processeur Intel Celeron associé à 4 Go de RAM garantit une expérience fluide pour les usages essentiels.
            </p>
            <p className="text-muted text-sm leading-relaxed text-justify">
              Avec le REVO FIFA, profitez d'un ordinateur fiable, élégant et performant pour toutes vos activités quotidiennes, sans compromis sur votre budget.
            </p>
            <div className="mt-4 p-4 border-l-4 border-accent bg-accent/5 rounded-r-xl">
              <p className="font-display font-bold text-sm text-accent uppercase tracking-wider">
                REVO FIFA, c’est l'essentiel de la performance au meilleur prix.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
