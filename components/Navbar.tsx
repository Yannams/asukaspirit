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
    { name: "Lunettes", href: "/#wearables" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center"
      style={{
        height: "64px",
        boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="max-w-[1171px] mx-auto w-full px-6 flex justify-between items-center h-[31px]">
        {/* Logo */}
        <Link href="/" className="flex items-center select-none text-black">
          <img src="/logo.svg" alt="Asuka Spirit" className="h-[31px] w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[15px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-normal transition-colors relative py-1 text-[15px] hover:text-primary ${
                  isActive ? "text-primary font-semibold" : "text-[#4E4E4E]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* French flag indicator */}
        <div className="hidden md:flex items-center">
          <img
            src="/images/ellipse_1_I478_1177;78_50.png"
            alt="Français"
            className="w-[31px] h-[31px] rounded-full object-cover select-none"
          />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-neutral-100 transition-colors text-black focus:outline-none"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-xl transition-all duration-300 ease-in-out ${
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
              className="font-semibold py-2 text-sm border-b border-neutral-50 uppercase tracking-wider text-neutral-800 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-between mt-2 pt-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Langue</span>
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
