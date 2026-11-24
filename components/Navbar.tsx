"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { totalCount, openDrawer } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const asukaCardUrl =
    process.env.NEXT_PUBLIC_ASUKA_CARD_URL || "https://www.asukacard.com/";
  const etudiantConnecteUrl =
    process.env.NEXT_PUBLIC_ETUDIANT_CONNECTE_URL ||
    "https://etudiant-connecte.asukaspirit.com";

  const navLinks: Array<{
    name: string;
    href: string;
    dropdown?: Array<{ name: string; href: string; external?: boolean }>;
  }> = [
    {
      name: "Ordinateurs",
      href: "/ordinateurs",
      dropdown: [
        { name: "REVO CORP", href: "/ordinateurs/revo-corp" },
        { name: "REVO FREE", href: "/ordinateurs/revo-free" },
      ],
    },
    {
      name: "Montres",
      href: "/montres",
      dropdown: [
        { name: "AS Watch 1", href: "/montres/as-watch-1" },
        { name: "AS Watch 2", href: "/montres/as-watch-2" },
        { name: "AS Watch 3", href: "/montres/as-watch-3" },
      ],
    },
    {
      name: "Lunettes",
      href: "/lunettes",
      dropdown: [
        { name: "Shaka X4", href: "/lunettes/shaka-x4" },
        { name: "Aviator", href: "/lunettes#savoir-aviator" },
        { name: "Alpha", href: "/lunettes#savoir-alpha" },
      ],
    },
    {
      name: "Services",
      href: "/#solutions",
      dropdown: [
        { name: "Asuka Card", href: asukaCardUrl, external: true },
      ],
    },
    {
      name: "Programmes",
      href: "/#programmes",
      dropdown: [
        { name: "Étudiant Connecté", href: etudiantConnecteUrl, external: true },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center"
      style={{
        height: "64px",
        boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="max-w-[1171px] mx-auto w-full px-6 flex justify-between items-center h-[31px] relative">
        {/* Logo */}
        <Link href="/" className="flex items-center select-none text-black">
          <img src="/logo.svg" alt="Asuka Spirit" className="h-[31px] w-auto" />
        </Link>

        {/* Desktop Links centered absolute */}
        <div
          className="hidden lg:flex items-center gap-[22px] absolute"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && !link.href.startsWith("/#") && pathname.startsWith(link.href));
            return (
              <div
                key={link.name}
                className="relative group flex items-center h-full py-4"
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 font-normal transition-colors text-[15px] hover:text-[#FF5A00] whitespace-nowrap ${
                    isActive ? "text-[#FF5A00] font-semibold" : "text-[#4E4E4E]"
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className="opacity-70 mt-[2px] transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.1)] rounded-xl py-3 min-w-[180px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    {link.dropdown.map((sublink) =>
                      sublink.external ? (
                        <a
                          key={sublink.name}
                          href={sublink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-6 py-2.5 text-[14px] text-[#4E4E4E] hover:text-[#FF5A00] hover:bg-neutral-50 transition-colors whitespace-nowrap"
                        >
                          {sublink.name}
                        </a>
                      ) : (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-6 py-2.5 text-[14px] text-[#4E4E4E] hover:text-[#FF5A00] hover:bg-neutral-50 transition-colors whitespace-nowrap"
                        >
                          {sublink.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right actions: Flag + Cart icon */}
        <div className="flex items-center gap-3">
          <img
            src="/images/ellipse_1_I478_1177;78_50.png"
            alt="Français"
            className="hidden lg:block w-[31px] h-[31px] rounded-full object-cover select-none"
          />

          <button
            type="button"
            onClick={openDrawer}
            className="relative w-[34px] h-[34px] rounded-full flex items-center justify-center text-neutral-800 hover:text-[#FF5A00] hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Ouvrir le panier"
          >
            <ShoppingBag size={20} />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#FF5A00] text-white text-[10px] font-bold flex items-center justify-center leading-none shadow-sm">
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-neutral-100 transition-colors text-black focus:outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-semibold py-2 text-sm border-b border-neutral-50 uppercase tracking-wider text-neutral-800 hover:text-[#FF5A00] transition-colors flex justify-between items-center"
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="flex flex-col pl-4 mt-2 mb-2 gap-2 border-l-2 border-neutral-100 ml-2">
                  {link.dropdown.map((sublink) =>
                    sublink.external ? (
                      <a
                        key={sublink.name}
                        href={sublink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="text-[13px] text-neutral-600 hover:text-[#FF5A00] py-1 transition-colors"
                      >
                        {sublink.name}
                      </a>
                    ) : (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        onClick={() => setIsOpen(false)}
                        className="text-[13px] text-neutral-600 hover:text-[#FF5A00] py-1 transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center justify-between mt-2 pt-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              Langue
            </span>
            <img
              src="/images/ellipse_1_I478_1177;78_50.png"
              alt="Français"
              className="w-[31px] h-[31px] rounded-full object-cover select-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
