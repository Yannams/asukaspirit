"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { name: "Ordinateurs", href: "/ordinateurs" },
    { name: "Montres", href: "/montres" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="font-display font-extrabold text-xl tracking-wider uppercase group-hover:text-primary transition-colors">
            Asuka Spirit
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors relative py-2 text-sm uppercase tracking-wider hover:text-primary ${
                  isActive ? "text-primary font-semibold" : "text-foreground/80"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#contact"
            className="bg-black hover:bg-primary text-white hover:text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 hover:shadow-lg shadow-black/10"
          >
            Se Connecter
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-border transition-colors text-foreground focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-border shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-medium py-2 text-lg border-b border-border/50 uppercase tracking-wider hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="bg-black text-white px-6 py-3 rounded-full text-center text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
          >
            Se Connecter
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
