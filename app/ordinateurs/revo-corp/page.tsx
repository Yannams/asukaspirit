import Link from "next/link";
import { ArrowLeft, Cpu, Monitor, Laptop, Zap, CheckCircle, ArrowRight } from "lucide-react";
import FigmaImage from "../../../components/FigmaImage";

export default function RevoCorpPage() {
  const products = [
    {
      id: "revo-corp-1",
      name: "REVO CORP 1",
      subtitle: "Desktop (Unité centrale + écran)",
      nodeId: "245:724", // desktop rendering
      desc: "Les desktops répondent aux besoins des cadres et assistants grâce à leur puissance et leur fiabilité.",
      specs: [
        { name: "Écran", value: "24” OLED, 60Hz" },
        { name: "Processeur", value: "Intel i5-13400 (10 Cores, 16 Threads)" },
        { name: "RAM", value: "8 GB DDR5" },
        { name: "Stockage", value: "SSD 256 GB M.2 NVMe" }
      ],
      link: "/ordinateurs/revo-corp/revo-corp-1"
    },
    {
      id: "revo-corp-1x",
      name: "REVO CORP 1X",
      subtitle: "Moniteur (écran 27” ELED)",
      nodeId: "203:576", // screen rendering
      desc: "Haute performance professionnelle avec une qualité d'image exceptionnelle et un taux de rafraîchissement fluide.",
      specs: [
        { name: "Écran", value: "27” FHD IPS (1920x1080), 75Hz" },
        { name: "Luminosité", value: "200 à 250 nits, 16.7M couleurs" },
        { name: "Temps réponse", value: "14 ms (OD)" },
        { name: "Connectique", value: "VGA + HDMI" }
      ],
      link: null
    },
    {
      id: "revo-corp-2",
      name: "REVO CORP 2",
      subtitle: "Laptop premium",
      nodeId: "223:640", // laptop premium rendering
      desc: "Légèreté, sécurité et finition haut de gamme pour les déplacements des cadres et décideurs.",
      specs: [
        { name: "Écran", value: "15.6” FHD IPS (1920x1080)" },
        { name: "Processeur", value: "Intel i5-1335U (10 Cores, 12 Threads)" },
        { name: "RAM", value: "8 GB DDR5, 3200MHz" },
        { name: "Stockage", value: "SSD 256 GB M.2 NVMe" }
      ],
      link: "/ordinateurs/revo-corp/revo-corp-2"
    },
    {
      id: "revo-corp-3",
      name: "REVO CORP 3",
      subtitle: "Laptop professionnel",
      nodeId: "225:648", // laptop pro rendering
      desc: "Puissance, durabilité et connexion avancée pour les experts et les charges de travail intensives.",
      specs: [
        { name: "Écran", value: "15.6” FHD IPS (1920x1080)" },
        { name: "Processeur", value: "Intel i7-1335U, 5.0GHz Turbo, 13MB Cache" },
        { name: "RAM", value: "16 GB DDR5, 3200MHz" },
        { name: "Stockage", value: "SSD 512 GB M.2 NVMe" }
      ],
      link: "/ordinateurs/revo-corp/revo-corp-2" // Laptops detailed together in Revo Corp 2 & 3 page
    },
    {
      id: "revo-corp-5",
      name: "REVO CORP 5",
      subtitle: "Desktop All-In-One",
      nodeId: "231:690", // AIO rendering
      desc: "Le modèle tout-en-un le plus élaboré de la marque ASUKA SPIRIT, optimisant l'espace sans compromis.",
      specs: [
        { name: "Écran", value: "23.8” FHD" },
        { name: "Processeur", value: "Intel i5-13400 (10 Cores, 16 Threads)" },
        { name: "RAM", value: "8 GB DDR5, 2 slots, 3200MHz" },
        { name: "Stockage", value: "SSD 256 GB M.2 NVMe" }
      ],
      link: null
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Return to Catalog bar */}
      <div className="bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200/50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/ordinateurs" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-primary transition-colors">
            <ArrowLeft size={14} />
            Retour au Catalogue
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full w-max">
              Gamme Professionnelle
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight">
              Revo Corp
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Revo Corp d'Asuka Spirit, la puissance et la fiabilité au service des administrations et entreprises.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="/#contact"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              >
                Demander un devis
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-neutral-200/50 shadow-lg">
            <FigmaImage
              nodeId="245:724"
              alt="Revo Corp PC portable"
              fallbackType="laptop"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase mb-4 text-black dark:text-white">
              Découvrez nos équipements professionnels
            </h2>
            <p className="text-muted max-w-lg mx-auto text-sm">
              Conçu pour dépasser les exigences du monde de l'entreprise moderne et des administrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase text-primary tracking-wider">{product.subtitle}</span>
                      <h3 className="font-display font-bold text-2xl uppercase mt-1 text-black dark:text-white">
                        {product.name}
                      </h3>
                    </div>
                    {product.name.includes("Laptop") ? (
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Laptop size={20} />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Monitor size={20} />
                      </div>
                    )}
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {product.desc}
                  </p>

                  <div className="rounded-2xl overflow-hidden my-6 border border-neutral-100 dark:border-neutral-800/50 bg-neutral-50 dark:bg-neutral-950 p-4">
                    <FigmaImage
                      nodeId={product.nodeId}
                      alt={product.name}
                      fallbackType={product.subtitle.includes("Laptop") ? "laptop" : "scene"}
                      className="w-full h-44"
                    />
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Spécifications clés</h4>
                    <ul className="space-y-2.5">
                      {product.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex justify-between text-xs border-b border-neutral-100 dark:border-neutral-850 pb-2 last:border-b-0 last:pb-0">
                          <span className="text-neutral-400 font-medium">{spec.name}</span>
                          <span className="text-black dark:text-white font-semibold">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
                  {product.link ? (
                    <Link
                      href={product.link}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:text-primary transition-colors"
                    >
                      En savoir plus
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <span className="text-xs font-semibold text-neutral-400 italic">Détails sur devis</span>
                  )}

                  <Link
                    href="/#contact"
                    className="bg-black hover:bg-primary text-white text-xs font-bold uppercase tracking-wider py-2 px-5 rounded-full transition-colors"
                  >
                    Commander
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
