import Link from "next/link";
import { ArrowRight, Monitor, Layers, Cpu, Compass } from "lucide-react";
import FigmaImage from "../../components/FigmaImage";

export default function OrdinateursPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-black py-20 border-b border-neutral-100 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 inline-block">
            Gamme Ordinateurs
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-7xl uppercase max-w-4xl mx-auto mb-6 tracking-tight leading-none">
            La technologie africaine conçue pour tous les usages.
          </h1>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Des ordinateurs fiables, performants et accessibles pour les particuliers, les entreprises et les institutions.
          </p>
        </div>
      </section>

      {/* Brand Vision Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase">
              La vision d'ASUKA SPIRIT
            </h2>
            <h3 className="text-primary font-display font-bold text-xl uppercase">
              Construire la souveraineté technologique africaine.
            </h3>
            <p className="text-muted leading-relaxed">
              ASUKA SPIRIT développe des solutions informatiques conçues pour répondre aux réalités du continent tout en respectant les standards internationaux de qualité, de performance et de durabilité.
            </p>
            <p className="text-muted leading-relaxed text-sm">
              Conçu au cœur de l'innovation, Asuka Spirit fusionne puissance brute et design raffiné pour créer les outils de demain, accessibles dès aujourd'hui.
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden border border-neutral-200/50">
            <FigmaImage
              nodeId="361:419"
              alt="Vision Asuka Spirit"
              fallbackType="scene"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase mb-4">
              Explorez nos gammes
            </h2>
            <p className="text-muted max-w-md mx-auto">
              Choisissez la gamme qui correspond à votre profil d'utilisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: Revo Corp */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Monitor size={24} />
                </div>
                <span className="text-xs font-bold uppercase text-primary tracking-wider">Administration / Pro</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl uppercase mb-3">REVO CORP</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Conçu pour les administrations publiques, les grandes entreprises et les professionnels de la tech. Fiabilité, puissance de calcul avancée et sécurité renforcée.
                </p>
              </div>
              <Link
                href="/ordinateurs/revo-corp"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black dark:text-white group-hover:text-primary transition-colors mt-4"
              >
                Découvrir la gamme pro
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Box 2: Revo Free */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Layers size={24} />
                </div>
                <span className="text-xs font-bold uppercase text-accent tracking-wider">Grand Public / Budget</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl uppercase mb-3">REVO FREE</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Le meilleur rapport qualité-prix. Des ordinateurs de dernière génération pour les étudiants, les freelances et les foyers africains.
                </p>
              </div>
              <Link
                href="/ordinateurs/revo-free"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black dark:text-white group-hover:text-accent transition-colors mt-4"
              >
                Découvrir la gamme budget
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Call to Action */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl uppercase mb-6 tracking-tight">
            Prêt à vous équiper avec Asuka Spirit ?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            Trouvez le revendeur le plus proche ou contactez nos conseillers d'affaires pour les devis institutionnels.
          </p>
          <div className="flex justify-center">
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary/95 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-primary/20"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
