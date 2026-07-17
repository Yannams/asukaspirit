"use client";

import { useState } from "react";
import { X, ArrowUpRight, Check } from "lucide-react";

export default function OrderModal({ children, defaultAppareil = "" }: { children: React.ReactNode, defaultAppareil?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);

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
      <div onClick={(e) => { e.preventDefault(); setIsOpen(true); }} className="contents cursor-pointer">
        {children}
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div 
            className="bg-white rounded-[40px] w-full max-w-3xl p-8 md:p-12 relative shadow-2xl"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 bg-[#E60000] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
            >
              <X size={18} strokeWidth={3} />
            </button>

            {!isSuccess ? (
              <div className="flex flex-col">
                <h2 className="text-black font-bold text-[24px] md:text-[28px] mb-8">
                  Passer la commande
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nom */}
                    <div className="flex flex-col gap-2">
                      <label className="text-black font-medium text-[14px]">Nom</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Votre nom..." 
                        className="w-full bg-[#F5F6F8] border border-transparent focus:border-[#FF5A00] focus:bg-white rounded-full px-6 py-4 outline-none transition-all text-[15px]"
                      />
                    </div>
                    {/* Prénom */}
                    <div className="flex flex-col gap-2">
                      <label className="text-black font-medium text-[14px]">Prénom</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Votre Prénom..." 
                        className="w-full bg-[#F5F6F8] border border-transparent focus:border-[#FF5A00] focus:bg-white rounded-full px-6 py-4 outline-none transition-all text-[15px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-black font-medium text-[14px]">Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Votre email..." 
                        className="w-full bg-[#F5F6F8] border border-transparent focus:border-[#FF5A00] focus:bg-white rounded-full px-6 py-4 outline-none transition-all text-[15px]"
                      />
                    </div>
                    {/* Téléphone */}
                    <div className="flex flex-col gap-2">
                      <label className="text-black font-medium text-[14px]">Téléphone</label>
                      <div className="flex items-center w-full bg-[#F5F6F8] border border-transparent focus-within:border-[#FF5A00] focus-within:bg-white rounded-full px-6 py-4 transition-all">
                        <div className="flex items-center gap-2 border-r border-neutral-300 pr-3 mr-3">
                          <span className="text-[18px]">🇧🇯</span>
                          <span className="text-[14px] text-neutral-600">+229</span>
                        </div>
                        <input 
                          type="tel" 
                          required
                          className="w-full bg-transparent outline-none text-[15px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Appareils */}
                    <div className="flex flex-col gap-2">
                      <label className="text-black font-medium text-[14px]">Appareils</label>
                      <input 
                        type="text" 
                        defaultValue={defaultAppareil}
                        placeholder="AS SHAKA X4" 
                        className="w-full bg-[#F5F6F8] border border-transparent focus:border-[#FF5A00] focus:bg-white rounded-full px-6 py-4 outline-none transition-all text-[15px] font-medium"
                      />
                    </div>
                    {/* Quantité */}
                    <div className="flex flex-col gap-2">
                      <label className="text-black font-medium text-[14px]">Quantité(s)</label>
                      <div className="flex items-center gap-4 py-2">
                        <button 
                          type="button" 
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-200 text-black hover:bg-neutral-300 transition-colors"
                        >
                          -
                        </button>
                        <span className="font-bold text-[18px] w-4 text-center">{quantity}</span>
                        <button 
                          type="button" 
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FF5A00] text-white hover:bg-orange-600 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remarque */}
                  <div className="flex flex-col gap-2">
                    <label className="text-black font-medium text-[14px]">Remarque</label>
                    <textarea 
                      placeholder="Votre message..." 
                      rows={4}
                      className="w-full bg-[#F5F6F8] border border-transparent focus:border-[#FF5A00] focus:bg-white rounded-3xl px-6 py-4 outline-none transition-all text-[15px] resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end mt-4">
                    <button 
                      type="submit"
                      className="inline-flex items-center justify-between gap-4 bg-[#222222] hover:bg-black text-white font-medium text-[15px] rounded-full pl-[24px] pr-[4px] h-[55px] transition-all duration-300 group"
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
                <div className="w-20 h-20 bg-[#22C55E] mask mask-hexagon flex items-center justify-center text-white mb-8 rounded-2xl" style={{ clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' }}>
                  <Check size={40} strokeWidth={3} />
                </div>
                <h2 className="text-black font-bold text-[32px] md:text-[40px] mb-4">
                  Message envoyé
                </h2>
                <p className="text-neutral-500 text-[15px] max-w-[400px] leading-relaxed mb-10">
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
        </div>
      )}
    </>
  );
}
