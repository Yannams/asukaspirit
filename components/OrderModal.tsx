"use client";

import { useState, useEffect, cloneElement, isValidElement } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpRight, Check } from "lucide-react";

export default function OrderModal({ children, defaultAppareil = "" }: { children: React.ReactNode, defaultAppareil?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSuccess(true);
    }, 500);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setIsSuccess(false), 300); // Reset after closing animation
  };

  return (
    <>
      {isValidElement(children) ? (
        cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
          onClick: (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            setIsOpen(true);
            const childProps = (children as React.ReactElement<React.HTMLAttributes<HTMLElement>>).props;
            if (childProps.onClick) {
              childProps.onClick(e);
            }
          }
        })
      ) : (
        <span onClick={(e) => { e.preventDefault(); setIsOpen(true); }} className="cursor-pointer">
          {children}
        </span>
      )}
      
      {mounted && isOpen ? createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md transition-opacity overflow-y-auto">
          <div 
            className="bg-white text-black rounded-[28px] md:rounded-[40px] w-full max-w-3xl p-6 sm:p-8 md:p-10 relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] my-auto max-h-[90vh] overflow-y-auto border border-neutral-200"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
          >
            <button 
              onClick={handleClose}
              className="absolute top-5 right-5 md:top-8 md:right-8 w-8 h-8 bg-[#E60000] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors z-20 shrink-0 shadow-md"
              aria-label="Fermer"
            >
              <X size={18} strokeWidth={3} />
            </button>

            {!isSuccess ? (
              <div className="flex flex-col">
                <h2 className="text-black font-bold text-[22px] md:text-[28px] mb-6 md:mb-8 pr-8">
                  Passer la commande
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Nom */}
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <label className="text-black font-medium text-[14px]">Nom</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Votre nom..." 
                        className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-6 py-3.5 outline-none transition-all text-[15px] text-black placeholder:text-neutral-400"
                      />
                    </div>
                    {/* Prénom */}
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <label className="text-black font-medium text-[14px]">Prénom</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Votre prénom..." 
                        className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-6 py-3.5 outline-none transition-all text-[15px] text-black placeholder:text-neutral-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <label className="text-black font-medium text-[14px]">Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Votre adresse email..." 
                        className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-6 py-3.5 outline-none transition-all text-[15px] text-black placeholder:text-neutral-400"
                      />
                    </div>
                    {/* Téléphone */}
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <label className="text-black font-medium text-[14px]">Téléphone</label>
                      <div className="flex items-center w-full bg-[#F5F6F8] border border-neutral-200 focus-within:border-[#FF5A00] focus-within:bg-white rounded-full px-6 py-3.5 transition-all">
                        <div className="flex items-center gap-2 border-r border-neutral-300 pr-3 mr-3 shrink-0">
                          <span className="text-[18px]">🇧🇯</span>
                          <span className="text-[14px] text-neutral-700 font-medium">+229</span>
                        </div>
                        <input 
                          type="tel" 
                          required
                          placeholder="Votre numéro..."
                          className="w-full bg-transparent outline-none text-[15px] text-black placeholder:text-neutral-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Appareils */}
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <label className="text-black font-medium text-[14px]">Appareils</label>
                      <input 
                        type="text" 
                        defaultValue={defaultAppareil}
                        placeholder="AS SHAKA X4" 
                        className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-6 py-3.5 outline-none transition-all text-[15px] text-black font-medium placeholder:text-neutral-400"
                      />
                    </div>
                    {/* Quantité */}
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <label className="text-black font-medium text-[14px]">Quantité(s)</label>
                      <div className="flex items-center gap-4 py-1.5">
                        <button 
                          type="button" 
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-200 text-black hover:bg-neutral-300 transition-colors font-bold text-lg"
                        >
                          -
                        </button>
                        <span className="font-bold text-[18px] text-black w-4 text-center">{quantity}</span>
                        <button 
                          type="button" 
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-9 h-9 rounded-full flex items-center justify-center bg-[#FF5A00] text-white hover:bg-orange-600 transition-colors font-bold text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remarque */}
                  <div className="flex flex-col gap-1.5 md:gap-2">
                    <label className="text-black font-medium text-[14px]">Remarque</label>
                    <textarea 
                      placeholder="Votre message..." 
                      rows={3}
                      className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-2xl md:rounded-3xl px-6 py-3.5 outline-none transition-all text-[15px] text-black placeholder:text-neutral-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center sm:justify-end mt-2">
                    <button 
                      type="submit"
                      className="inline-flex items-center justify-between gap-4 bg-[#222222] hover:bg-black text-white font-medium text-[15px] rounded-full pl-[24px] pr-[4px] h-[55px] transition-all duration-300 group w-full sm:w-auto"
                    >
                      <span>Envoyez ma commande</span>
                      <div className="w-[47px] h-[47px] rounded-full bg-[#FF5A00] flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45 shrink-0">
                        <ArrowUpRight size={22} strokeWidth={2.5} />
                      </div>
                    </button>
                  </div>

                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-12 md:py-20">
                <div className="w-20 h-20 bg-[#22C55E] flex items-center justify-center text-white mb-8 rounded-2xl" style={{ clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' }}>
                  <Check size={40} strokeWidth={3} />
                </div>
                <h2 className="text-black font-bold text-[32px] md:text-[40px] mb-4">
                  Message envoyé
                </h2>
                <p className="text-neutral-600 text-[15px] max-w-[400px] leading-relaxed mb-10">
                  Nous avons bien reçu votre commande. Notre équipe vous contactera dans les plus brefs délais.<br />Merci de votre confiance !
                </p>
                <button 
                  onClick={handleClose}
                  className="bg-[#222222] hover:bg-black text-white font-medium text-[15px] px-8 py-4 rounded-full transition-colors"
                >
                  Retour à la page précédente
                </button>
              </div>
            )}

          </div>
        </div>,
        document.body
      ) : null}
    </>
  );
}
