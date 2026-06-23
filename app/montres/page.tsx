import Link from "next/link";
import { ArrowLeft, Watch, Heart, Flame, ShieldAlert, Award } from "lucide-react";
import FigmaImage from "../../components/FigmaImage";

export default function MontresPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Return to home */}
      <div className="bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200/50 py-4">
        <div className="max-w-[1171px] mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-primary transition-colors">
            <ArrowLeft size={14} />
            Retour à l'Accueil
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-[1171px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full w-max">
              Wearables & Objets Connectés
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight">
              AS WATCH
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Les montres connectées ASUKA allient élégance et technologie pour vous accompagner au quotidien. Suivi d’activité, surveillance de la santé, notifications intelligentes et contrôle de la musique : tout est conçu pour rester connecté, actif et organisé avec confort et autonomie.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-neutral-200/50 shadow-lg">
            <FigmaImage
              nodeId="464:686"
              alt="AS Watch Collection"
              fallbackType="watch"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Watch models */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-[1171px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase mb-4 text-black dark:text-white">
              Trois styles pour votre quotidien
            </h2>
            <p className="text-muted max-w-md mx-auto text-sm">
              Découvrez notre collection sportive, classique ou tactique selon votre rythme de vie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1171px] mx-auto">
            {/* Model 1: AS Watch 1 - Sport Dynamique */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <span className="text-xs font-bold uppercase text-primary tracking-wider">AS Watch 1</span>
                <h3 className="font-display font-bold text-2xl uppercase mt-2 mb-3 text-black dark:text-white">Série Sport Dynamique</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Pensée pour les jeunes, les professionnels dynamiques et les sportifs, cette montre incarne la vitalité et la robustesse. Elle accompagne les entraînements, les journées intenses et les instants de détente avec une même fiabilité.
                </p>
              </div>
              <div className="mb-6 rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-2">
                <FigmaImage
                  nodeId="517:722"
                  alt="AS Watch 1 Sport"
                  fallbackType="watch"
                  className="h-56 w-full"
                />
              </div>
              <div className="text-xs text-neutral-450 mb-6 bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-800">
                <span className="font-bold uppercase tracking-wider block mb-1">Boîtier</span>
                <span className="text-neutral-550 dark:text-neutral-400">Alliage noir mat ou doré (rose gold)</span>
              </div>
              <a
                href="#contact"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary dark:hover:text-white py-3 rounded-full text-center text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Demander plus d'informations
              </a>
            </div>

            {/* Model 2: AS Watch 2 - Silver Classic */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <span className="text-xs font-bold uppercase text-primary tracking-wider">AS Watch 2</span>
                <h3 className="font-display font-bold text-2xl uppercase mt-2 mb-3 text-black dark:text-white">Série Argentée Classique</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Avec la montre connectée ASUKA Argent Classique, l’élégance rencontre l’efficacité. Discrète, légère et raffinée, elle s’adapte à votre rythme professionnel et personnel. Recevez vos notifications, suivez vos performances et améliorez votre bien-être sans jamais perdre en style.
                </p>
              </div>
              <div className="mb-6 rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-2">
                <FigmaImage
                  nodeId="464:721"
                  alt="AS Watch 2 Argent"
                  fallbackType="watch"
                  className="h-56 w-full"
                />
              </div>
              <div className="text-xs text-neutral-450 mb-6 bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-800">
                <span className="font-bold uppercase tracking-wider block mb-1">Boîtier</span>
                <span className="text-neutral-550 dark:text-neutral-400">Alliage argent brossé premium</span>
              </div>
              <a
                href="#contact"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary dark:hover:text-white py-3 rounded-full text-center text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Demander plus d'informations
              </a>
            </div>

            {/* Model 3: AS Watch 3 - Outdoor Tactical */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <span className="text-xs font-bold uppercase text-primary tracking-wider">AS Watch 3</span>
                <h3 className="font-display font-bold text-2xl uppercase mt-2 mb-3 text-black dark:text-white">Série Outdoor Tactique</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  La montre ASUKA Outdoor Tactique est plus qu’un accessoire : c’est un outil. Forgée pour résister aux environnements les plus rudes, elle accompagne les professionnels et explorateurs du quotidien. Sa solidité inspire confiance, ses capteurs avancés assurent sécurité et performance.
                </p>
              </div>
              <div className="mb-6 rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-2">
                <FigmaImage
                  nodeId="464:730"
                  alt="AS Watch 3 Tactique"
                  fallbackType="watch"
                  className="h-56 w-full"
                />
              </div>
              <div className="text-xs text-neutral-450 mb-6 bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-800">
                <span className="font-bold uppercase tracking-wider block mb-1">Boîtier</span>
                <span className="text-neutral-550 dark:text-neutral-400">Alliage renforcé anti-chocs mat</span>
              </div>
              <a
                href="#contact"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary dark:hover:text-white py-3 rounded-full text-center text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Demander plus d'informations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Health Features */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-[1171px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase mb-4">
              Fonctionnalités Santé & Sport
            </h2>
            <p className="text-muted max-w-md mx-auto text-sm">
              Suivez vos progrès physiques et restez à l'écoute de votre corps en temps réel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200/50 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Heart size={24} />
              </div>
              <h3 className="font-display font-bold text-lg uppercase">Rythme Cardiaque</h3>
              <p className="text-muted text-sm leading-relaxed">
                Suivi précis du rythme cardiaque et de l'oxygénation sanguine 24h/24 pour votre sécurité.
              </p>
            </div>

            <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200/50 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Flame size={24} />
              </div>
              <h3 className="font-display font-bold text-lg uppercase">Calories & Activité</h3>
              <p className="text-muted text-sm leading-relaxed">
                Suivez vos pas, la distance parcourue et les calories brûlées au cours de vos entraînements.
              </p>
            </div>

            <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200/50 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Award size={24} />
              </div>
              <h3 className="font-display font-bold text-lg uppercase">Modes sportifs</h3>
              <p className="text-muted text-sm leading-relaxed">
                Plus de 10 modes d'activités sportives dédiés (course, vélo, randonnée, natation) pour optimiser vos entraînements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
