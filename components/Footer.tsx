"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] py-16 px-4 md:px-8 border-t border-neutral-900 select-none">
      <div className="bg-white text-black rounded-[40px] p-8 md:p-12 max-w-[1171px] mx-auto w-full flex flex-col lg:flex-row justify-between items-stretch gap-12 border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        {/* Left Column: Logo, Description & General Links */}
        <div className="flex flex-col justify-between items-start gap-8 lg:w-[45%]">
          {/* Logo Section */}
          <div className="flex flex-col">
            <img src="/logo.svg" alt="Asuka Spirit" className="h-[48px] sm:h-[56px] w-auto" />
          </div>

          {/* Description */}
          <p className="text-[#4A4A4A] text-[14px] sm:text-[15px] leading-relaxed max-w-sm">
            Nous sommes fabricants de produits high-tech. Avec nous votre achat devient un engagement social, humain et environnemental
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#4A4A4A] font-normal mt-2">
            <Link href="#" className="hover:text-black transition-colors underline underline-offset-4">
              Condition générale d'utilisation
            </Link>
            <Link href="#" className="hover:text-black transition-colors underline underline-offset-4">
              Mention légale
            </Link>
          </div>
        </div>

        {/* Right Column: Newsletter Signup, Contact Details & Socials */}
        <div className="flex flex-col justify-between items-stretch lg:items-end gap-10 lg:w-[50%]">
          {/* Newsletter Signup */}
          <div className="flex flex-col gap-2.5 w-full max-w-[340px] lg:self-end">
            <span className="text-[13px] text-[#4A4A4A] font-normal lg:text-right">
              Souscrivez à la newsletter
            </span>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 w-full">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="bg-[#3E3E3E] text-white text-[13px] px-4 py-3 rounded-[10px] focus:outline-none w-full placeholder:text-neutral-400"
                required
              />
              <button
                type="submit"
                className="bg-[#f47639] hover:bg-[#d9632a] text-white w-[46px] h-[46px] rounded-[10px] flex items-center justify-center shrink-0 transition-colors"
              >
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>

          {/* Contact Details & Links inline */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#4A4A4A] font-normal lg:justify-end lg:text-right w-full mt-auto">
            <span>+229 96961571 | +33 603049196</span>
            <a href="mailto:contact@asworld.tech" className="hover:text-black transition-colors">
              contact@asworld.tech
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Assistance
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 lg:justify-end">
            <a href="#" className="w-[32px] h-[32px] rounded-full bg-black hover:opacity-80 flex items-center justify-center text-white transition-opacity">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" className="w-[32px] h-[32px] rounded-full bg-black hover:opacity-80 flex items-center justify-center text-white transition-opacity">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="#" className="w-[32px] h-[32px] rounded-full bg-black hover:opacity-80 flex items-center justify-center text-white transition-opacity">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-[32px] h-[32px] rounded-full bg-black hover:opacity-80 flex items-center justify-center text-white transition-opacity">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163c-.272-.98-1.077-1.752-2.097-2.015C19.544 3.5 12 3.5 12 3.5s-7.544 0-9.401.648c-1.02.263-1.825 1.035-2.097 2.015C.5 7.974.5 12 .5 12s0 4.026.5 5.837c.272.98 1.077 1.752 2.097 2.015 1.857.648 9.401.648 9.401.648s7.544 0 9.401-.648c1.02-.263 1.825-1.035 2.097-2.015.5-1.811.5-5.837.5-5.837s0-4.026-.5-5.837zm-14.041 9.38v-7.086l6.342 3.543-6.342 3.543z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
