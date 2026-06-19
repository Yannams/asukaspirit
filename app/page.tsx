"use client";

import Link from "next/link";
import { ArrowUpRight, Play, Cpu, ShieldCheck, Truck, Headphones, Users, Award, Zap } from "lucide-react";
import FigmaImage from "../components/FigmaImage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-28 overflow-hidden bg-white dark:bg-black">
        {/* Cercles décoratifs d'arrière-plan */}
        <div className="absolute top-1/4 left-1/12 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -z-10 animate-pulse" />
        <div className="absolute top-1/3 right-1/12 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Badge ASUKA SPIRIT */}
          <div className="inline-flex items-center gap-2 bg-[#E9E9E9] text-[#222222] dark:bg-neutral-800 dark:text-neutral-200 text-sm font-medium py-1.5 px-6 rounded-full mb-6">
            ASUKA SPIRIT
          </div>

          {/* Badge Brillons ensemble */}
          <div className="inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black text-[12px] font-semibold py-1 px-4 rounded-full mb-8 shadow-sm">
            <span className="w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white text-[8px]">
              ★
            </span>
            Brillons ensemble
          </div>

          {/* Titre principal exact Figma */}
          <h1 className="font-display font-light text-[40px] md:text-[85px] leading-tight tracking-tight text-black dark:text-white uppercase max-w-5xl mx-auto mb-8 text-center">
            La marque <br />
            <span className="font-extrabold text-primary">Africaine n°1</span> <br />
            des équipements !
          </h1>

          {/* Description exacte Figma */}
          <p className="text-[#848484] text-sm md:text-[18px] max-w-2xl mx-auto mb-12 leading-relaxed">
            Ordinateurs, lunettes connectées, montres connectées, <br className="hidden md:inline" />
            services & solutions pensés pour l'Afrique, fabriqués pour durer.
          </p>

          {/* Widget de bouton premium exact Figma */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/ordinateurs" className="group flex items-center h-[58px]">
              <div className="bg-black text-white dark:bg-white dark:text-black px-8 h-full rounded-l-full flex items-center justify-center text-sm font-semibold tracking-wider transition-colors group-hover:bg-primary group-hover:text-white">
                Découvrez nos produits
              </div>
              <div className="bg-primary text-white w-[58px] h-full rounded-r-full flex items-center justify-center transition-transform group-hover:scale-105">
                <ArrowUpRight size={20} />
              </div>
            </Link>

            <a
              href="#solutions"
              className="border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-white px-8 py-[18px] rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 w-full sm:w-auto text-center"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* 2. Section Vidéo */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative group rounded-[32px] overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 aspect-video bg-neutral-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <FigmaImage
              nodeId="122:355"
              alt="Présentation Vidéo"
              fallbackType="scene"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <button className="z-20 w-20 h-20 rounded-full bg-primary hover:bg-primary/95 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play size={28} className="fill-white translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Section Ordinateurs Highlights - REVO CORP (Light Section) */}
      <section className="py-24 bg-[#FCFCFC] dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Revo Corp */}
          <div className="text-center mb-16 flex flex-col items-center gap-3">
            <span className="text-[12px] font-medium uppercase tracking-wider text-black dark:text-white bg-neutral-100 dark:bg-neutral-900 px-4 py-1 rounded-full">
              Nos Ordinateurs
            </span>
            <span className="text-[18px] text-[#3E3E3E] dark:text-neutral-400">
              (Pro / Entreprise)
            </span>
            <h2 className="font-display font-extrabold text-[40px] md:text-[50px] uppercase text-black dark:text-white tracking-tight">
              Gamme REVO CORP
            </h2>
            <p className="text-[#848484] text-sm md:text-[15px] max-w-xl mx-auto">
              Taillée pour les professionnels qui ne font pas de compromis.
            </p>
          </div>

          {/* Body Revo Corp */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <p className="font-display font-light text-[24px] md:text-[25px] leading-relaxed text-black dark:text-white text-justify">
                Robustesse, performance et fiabilité la gamme REVO CORP est conçue pour les entreprises, les équipes exigeantes et les environnements intensifs.
              </p>
              
              <Link href="/ordinateurs/revo-corp" className="group flex items-center h-[58px] w-max">
                <div className="bg-black text-white dark:bg-white dark:text-black px-6 h-full rounded-l-full flex items-center justify-center text-xs font-semibold tracking-wider uppercase transition-colors group-hover:bg-primary group-hover:text-white">
                  Voir la gamme CORP
                </div>
                <div className="bg-primary text-white w-[58px] h-full rounded-r-full flex items-center justify-center transition-transform group-hover:scale-105">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            </div>

            <div className="lg:col-span-7 rounded-[32px] overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 p-8 shadow-sm">
              <FigmaImage
                nodeId="245:724"
                alt="Ordinateur Revo Corp"
                fallbackType="laptop"
                className="w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section Ordinateurs Highlights - REVO FREE (Dark Section) */}
      <section className="py-24 bg-black text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Revo Free */}
          <div className="text-center mb-16 flex flex-col items-center gap-3">
            <span className="text-[12px] font-medium uppercase tracking-wider text-white bg-white/10 px-4 py-1 rounded-full">
              Nos Ordinateurs
            </span>
            <span className="text-[18px] text-primary">
              (Grand public / Étudiant)
            </span>
            <h2 className="font-display font-extrabold text-[40px] md:text-[50px] uppercase tracking-tight text-white">
              Gamme REVO FREE
            </h2>
            <p className="text-white/60 text-sm md:text-[15px] max-w-xl mx-auto">
              La liberté de travailler, apprendre et créer sans se ruiner.
            </p>
          </div>

          {/* Body Revo Free */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-8 lg:order-2">
              <p className="font-display font-light text-[24px] md:text-[25px] leading-relaxed text-justify text-white/90">
                Légère, accessible et puissante, la gamme REVO FREE accompagne les étudiants, créatifs et utilisateurs du quotidien partout où ils vont.
              </p>
              
              <Link href="/ordinateurs/revo-free" className="group flex items-center h-[58px] w-max">
                <div className="bg-white text-black px-6 h-full rounded-l-full flex items-center justify-center text-xs font-semibold tracking-wider uppercase transition-colors group-hover:bg-primary group-hover:text-white">
                  Voir la gamme FREE
                </div>
                <div className="bg-primary text-white w-[58px] h-full rounded-r-full flex items-center justify-center transition-transform group-hover:scale-105">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            </div>

            <div className="lg:col-span-7 lg:order-1 rounded-[32px] overflow-hidden border border-white/10 bg-neutral-900 p-8 shadow-inner">
              <FigmaImage
                nodeId="268:1115"
                alt="Ordinateur Revo Free"
                fallbackType="laptop"
                className="w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section Wearables (Asymmetric Side-by-Side) */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-[12px] font-medium uppercase tracking-wider text-black dark:text-white bg-neutral-100 dark:bg-neutral-900 px-4 py-1 rounded-full mb-4">
              Wearables & Smart Devices
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Lunettes (Light card layout) */}
            <div className="bg-[#FCFCFC] dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/50 rounded-[32px] p-8 md:p-12 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-center md:text-left">
                  <span className="text-[18px] text-[#3E3E3E] dark:text-neutral-400">
                    (Smart Eyewear)
                  </span>
                  <h3 className="font-display font-extrabold text-[36px] md:text-[40px] uppercase text-black dark:text-white leading-tight">
                    Lunettes Connectées
                  </h3>
                  <p className="text-sm font-medium text-black/80 dark:text-white/80">
                    Vois le monde autrement. Connecté, en permanence.
                  </p>
                </div>
                
                <div className="rounded-2xl overflow-hidden my-6 border border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-900 p-4">
                  <FigmaImage
                    nodeId="122:438"
                    alt="Lunettes Connectées"
                    fallbackType="scene"
                    className="w-full h-[280px]"
                  />
                </div>

                <p className="font-display font-light text-[18px] md:text-[20px] leading-relaxed text-justify text-black dark:text-white/95">
                  Les lunettes connectées ASUKA fusionnent style africain contemporain et technologie embarquée : notifications, audio, photos, vidéos, IA, navigation. Tout dans votre regard.
                </p>
              </div>

              <Link href="#contact" className="group flex items-center h-[58px] mt-8 w-max mx-auto md:mx-0">
                <div className="bg-black text-white dark:bg-white dark:text-black px-6 h-full rounded-l-full flex items-center justify-center text-xs font-semibold tracking-wider uppercase transition-colors group-hover:bg-primary group-hover:text-white">
                  Découvrir nos lunettes
                </div>
                <div className="bg-primary text-white w-[58px] h-full rounded-r-full flex items-center justify-center transition-transform group-hover:scale-105">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            </div>

            {/* Right Column: Montres (Dark card layout) */}
            <div className="bg-black text-white border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-center md:text-left">
                  <span className="text-[18px] text-white/80">
                    (Smart Watch)
                  </span>
                  <h3 className="font-display font-extrabold text-[36px] md:text-[40px] uppercase text-white leading-tight">
                    Montres Connectées
                  </h3>
                  <p className="text-sm font-medium text-white/80">
                    Votre vie au poignet. Santé, temps, connexion.
                  </p>
                </div>
                
                <div className="rounded-2xl overflow-hidden my-6 border border-white/5 bg-neutral-900 p-4">
                  <FigmaImage
                    nodeId="427:528"
                    alt="Montres Connectées"
                    fallbackType="watch"
                    className="w-full h-[280px]"
                  />
                </div>

                <p className="font-display font-light text-[18px] md:text-[20px] leading-relaxed text-justify text-white/90">
                  Conçue pour l'Africain actif : suivi santé, alertes intelligentes, autonomie longue durée. Une montre qui travaille autant que vous.
                </p>
              </div>

              <Link href="/montres" className="group flex items-center h-[58px] mt-8 w-max mx-auto md:mx-0">
                <div className="bg-white text-black px-6 h-full rounded-l-full flex items-center justify-center text-xs font-semibold tracking-wider uppercase transition-colors group-hover:bg-primary group-hover:text-white">
                  Découvrir nos montres
                </div>
                <div className="bg-primary text-white w-[58px] h-full rounded-r-full flex items-center justify-center transition-transform group-hover:scale-105">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section Dr ASUKA */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Maintenance & Réparation Pro
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase tracking-tight">
              Dr ASUKA
            </h2>
            <p className="text-white/70 leading-relaxed text-sm md:text-base text-justify">
              Dr ASUKA est une marque déposée de AS WORLD TECH, ayant pour mission d'apporter un professionnalisme aux standards internationaux dans le secteur de la réparation et de la maintenance des équipements électroniques.
            </p>
            <div className="flex mt-4">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                En savoir plus
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
            <FigmaImage
              nodeId="122:496"
              alt="Dr ASUKA Atelier"
              fallbackType="scene"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* 7. Section Solutions & Financement */}
      <section id="solutions" className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase mb-4">
              Nos Solutions & Services
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Des innovations financières et de couverture pour démocratiser l'accès à la technologie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* AS Pay */}
            <div className="p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-2">AS Pay</h3>
                <p className="text-muted text-sm leading-relaxed">
                  AS Pay supprime la barrière du prix. Financement immédiat via votre banque, remboursement progressif la tech ASUKA est accessible à tous, tout de suite.
                </p>
              </div>
            </div>

            {/* Assuk Assur */}
            <div className="p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-2">Assuk Assur</h3>
                <p className="text-muted text-sm leading-relaxed">
                  En partenariat avec SUNU Assurances, Assuk Assur couvre casse, vol, dégâts et surtensions. Réparation ou remplacement rapide tu investis une fois, on protège pour longtemps.
                </p>
              </div>
            </div>
          </div>

          {/* Section Chiffres (Figma Statistics) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-black border border-neutral-800 rounded-3xl p-8 md:p-10 shadow-xl">
            {/* Stat 1 */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-primary shrink-0">
                <Truck size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-[40px] leading-tight text-primary">+120</span>
                <span className="text-white text-xs leading-tight tracking-wide font-medium">Produits de qualité supérieure</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-primary shrink-0">
                <Users size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-[40px] leading-tight text-primary">2.5M+</span>
                <span className="text-white text-xs leading-tight tracking-wide font-medium">Clients satisfaits</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-primary shrink-0">
                <Award size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-[40px] leading-tight text-primary">98%</span>
                <span className="text-white text-xs leading-tight tracking-wide font-medium">Taux de satisfaction</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-primary shrink-0">
                <Headphones size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-[40px] leading-tight text-primary">24/7</span>
                <span className="text-white text-xs leading-tight tracking-wide font-medium">Assistance d'expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section Ils Confiance */}
      <section className="py-20 bg-[#FCFCFC] dark:bg-neutral-950 border-y border-neutral-100 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-primary mb-8">
            ILS NOUS FONT CONFIANCE
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-display font-extrabold text-2xl uppercase tracking-wider text-black dark:text-white">Revo Corp</span>
            <span className="font-display font-extrabold text-2xl uppercase tracking-wider text-black dark:text-white">AS WORLD</span>
            <span className="font-display font-extrabold text-2xl uppercase tracking-wider text-black dark:text-white">Dr ASUKA</span>
            <span className="font-display font-extrabold text-2xl uppercase tracking-wider text-black dark:text-white">Assuk Assur</span>
          </div>
        </div>
      </section>

      {/* 8. Contact Form Section */}
      <section id="contact" className="py-24 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase mb-4 text-black dark:text-white">
              Envoyez-nous un message
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Avez-vous une question ? Une plainte ? Ou avez-vous besoin d'aide pour choisir le bon produit chez Zalomi. N'hésitez pas à nous contacter
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Nom <span className="text-primary">*</span></label>
                <input
                  type="text"
                  placeholder="Votre nom..."
                  className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary w-full text-black dark:text-white"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Prénom <span className="text-primary">*</span></label>
                <input
                  type="text"
                  placeholder="Votre prénom..."
                  className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary w-full text-black dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Email <span className="text-primary">*</span></label>
                <input
                  type="email"
                  placeholder="Votre adresse email..."
                  className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary w-full text-black dark:text-white"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Téléphone <span className="text-primary">*</span></label>
                <input
                  type="tel"
                  placeholder="0158479682..."
                  className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary w-full text-black dark:text-white"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Message <span className="text-primary">*</span></label>
              <textarea
                placeholder="Votre message..."
                rows={5}
                className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary w-full text-black dark:text-white"
                required
              />
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-8 rounded-full uppercase text-xs tracking-wider transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                Envoyez le message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
