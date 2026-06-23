import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Smartphone, Globe, Shield } from "lucide-react";
import FigmaImage from "../../../components/FigmaImage";

export default function RevoFreePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Return to Catalog bar */}
      <div className="bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200/50 py-4">
        <div className="max-w-[1171px] mx-auto px-6">
          <Link href="/ordinateurs" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-primary transition-colors">
            <ArrowLeft size={14} />
            Retour au Catalogue
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-[1171px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3.5 py-1.5 rounded-full w-max">
              Gamme Grand Public
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight">
              Revo FREE
            </h1>
            <h2 className="font-display font-medium text-lg md:text-xl text-accent uppercase leading-relaxed">
              La technologie neuve accessible à tous, avec deux modèles adaptés à chaque besoin.
            </h2>
            <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-900">
              <h3 className="font-display font-bold text-sm uppercase text-neutral-400 mb-2">La naissance de la gamme Revo free</h3>
              <p className="text-muted text-sm leading-relaxed">
                Chez ASUKA SPIRIT, nous croyons fermement que chacun mérite un accès facile à la technologie neuve et de qualité. En écoutant les besoins de notre communauté, nous avons choisi de créer la gamme REVO FREE. L’idée était simple : proposer des ordinateurs neufs, fiables et faciles à choisir, pour que chacun trouve rapidement l’outil qui lui convient.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-neutral-200/50 dark:border-neutral-900 shadow-lg bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center p-6 h-80 select-none">
            <img
              src="/images/laptop_free.png"
              alt="Revo Free Concept"
              className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Models list */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-[1171px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">FIFA & SHANGO</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase mt-2 mb-4">
              Une offre simple et épurée
            </h2>
            <p className="text-muted max-w-xl mx-auto text-sm">
              Plutôt que d’inonder nos clients de choix complexes, nous avons opté pour une offre épurée avec deux modèles clés :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Model 1: Revo Free Shango */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              <div>
                <span className="text-xs font-bold uppercase text-accent tracking-wider">REVO SHANGO</span>
                <h3 className="font-display font-bold text-3xl uppercase mt-2 mb-3">Revo Free Shango</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Notre modèle « pro » est doté d’un Intel Core i7 (13ᵉ génération), de 16 Go de RAM et d’un SSD de 1 To, parfait pour les utilisateurs exigeants.
                </p>
              </div>
              <div className="mb-6 rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center p-4 h-48 select-none">
                <img
                  src="/images/laptop_free.png"
                  alt="Revo Free Shango"
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <Link
                href="/ordinateurs/revo-free/shango"
                className="bg-black hover:bg-accent text-white py-3.5 rounded-full text-center text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                Découvrir Shango
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Model 2: Revo Free FIFA */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              <div>
                <span className="text-xs font-bold uppercase text-accent tracking-wider">REVO FIFA</span>
                <h3 className="font-display font-bold text-3xl uppercase mt-2 mb-3">Revo Free FIFA</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Ce modèle « light » embarque un processeur Intel Celeron, 4 Go de RAM et un SSD de 512 Go, idéal pour les tâches du quotidien.
                </p>
              </div>
              <div className="mb-6 rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center p-4 h-48 select-none">
                <img
                  src="/images/laptop_free.png"
                  alt="Revo Free FIFA"
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <Link
                href="/ordinateurs/revo-free/fifa"
                className="bg-black hover:bg-accent text-white py-3.5 rounded-full text-center text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                Découvrir FIFA
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
