"use client";

import Link from "next/link";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand presentation */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-md">
              A
            </div>
            <span className="font-display font-extrabold text-xl tracking-wider uppercase">
              Asuka Spirit
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Nous sommes fabricants de produits high-tech. Avec nous votre achat devient un engagement social, humain et environnemental.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        {/* Legal & Navigation Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary">Liens Utiles</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/60">
            <li>
              <Link href="/ordinateurs" className="hover:text-white transition-colors">Catalogue PC</Link>
            </li>
            <li>
              <Link href="/montres" className="hover:text-white transition-colors">Catalogue Wearables</Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Condition générale d'utilisation</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Mention légale</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Assistance</a>
            </li>
          </ul>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary">Contact</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/60">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              <div className="flex flex-col">
                <span>+229 96 96 15 71</span>
                <span>+33 6 03 04 91 96</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:contact@asworld.tech" className="hover:text-white transition-colors">
                contact@asworld.tech
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter signup */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary">Newsletter</h4>
          <p className="text-white/60 text-sm">
            Souscrivez à la newsletter pour recevoir nos actualités et offres exclusives.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 mt-2">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="bg-white/10 text-white border border-white/10 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-primary w-full"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary/80 text-white rounded-full p-2 flex items-center justify-center transition-colors"
            >
              <ArrowUpRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} AS World Tech. Tous droits réservés. Pensé pour l'Afrique, fabriqué pour durer.</p>
      </div>
    </footer>
  );
}
