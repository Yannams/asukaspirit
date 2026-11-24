"use client";

import { useState } from "react";
import { X, Trash2, ShoppingBag, ArrowUpRight, Check, Loader2, Plus, Minus } from "lucide-react";
import { useCart, API_BASE_URL } from "./CartContext";

export default function CartDrawer() {
  const {
    items,
    totalCount,
    totalAmount,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [createdOrderNumber, setCreatedOrderNumber] = useState<string | number>("");

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Cotonou");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  if (!isDrawerOpen) return null;

  const handleClose = () => {
    closeDrawer();
    setTimeout(() => {
      setStep("cart");
      setErrorMsg("");
    }, 250);
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setSubmitting(true);
    setErrorMsg("");

    try {
      const cleanPhone = phone.trim().startsWith("+")
        ? phone.trim()
        : `+229${phone.trim().replace(/\s+/g, "")}`;

      const payload = {
        customerName: `${firstName.trim()} ${lastName.trim()}`.trim(),
        customerPhone: cleanPhone,
        customerEmail: email.trim() || undefined,
        city: city.trim() || "Cotonou",
        address: address.trim() || "Cotonou",
        notes: notes.trim() || undefined,
        totalAmount: String(totalAmount),
        items: items.map((i) => ({
          variantId: i.variantId,
          quantity: i.quantity,
        })),
      };

      const res = await fetch(`${API_BASE_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = Array.isArray(data?.message)
          ? data.message.join(", ")
          : data?.message || "Impossible d'enregistrer la commande";
        throw new Error(msg);
      }

      setCreatedOrderNumber(data.orderNumber || data.id || "");
      clearCart();
      setStep("success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erreur réseau lors de l'envoi de la commande";
      setErrorMsg(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm transition-opacity"
      style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
    >
      <div className="bg-white text-black w-full max-w-lg h-full flex flex-col shadow-2xl relative animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-6 py-5 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF5A00]/10 text-[#FF5A00] flex items-center justify-center">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h2 className="font-bold text-lg text-black leading-tight">
                {step === "cart" && `Mon Panier (${totalCount})`}
                {step === "checkout" && "Finaliser ma demande"}
                {step === "success" && "Demande confirmée"}
              </h2>
              <p className="text-xs text-neutral-500">
                Demande de commande sans paiement en ligne immédiat
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-black transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {step === "cart" && (
            <>
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                    <ShoppingBag size={28} />
                  </div>
                  <h3 className="font-bold text-base text-black mb-1">
                    Votre panier est vide
                  </h3>
                  <p className="text-sm text-neutral-500 max-w-xs">
                    Parcourez nos ordinateurs REVO, montres AS Watch ou lunettes Shaka X4 et cliquez sur « Commander ».
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.variantId}
                      className="p-4 rounded-2xl border border-neutral-200 bg-[#F9FAFB] flex flex-col gap-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-bold text-sm text-black">
                            {item.productName}
                          </h4>
                          <p className="text-xs text-neutral-500 mt-0.5">
                            {item.variantLabel}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.variantId)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                          title="Retirer du panier"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-neutral-200/70">
                        <div className="flex items-center gap-2.5">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.variantId, item.quantity - 1)
                            }
                            className="w-7 h-7 rounded-full bg-white border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 cursor-pointer"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="font-bold text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.variantId, item.quantity + 1)
                            }
                            className="w-7 h-7 rounded-full bg-[#FF5A00] text-white flex items-center justify-center hover:bg-orange-600 cursor-pointer"
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="font-bold text-sm text-black">
                            {(item.unitPrice * item.quantity).toLocaleString("fr-FR")} FCFA
                          </div>
                          {item.quantity > 1 && (
                            <div className="text-[11px] text-neutral-400">
                              {item.unitPrice.toLocaleString("fr-FR")} FCFA / unité
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {step === "checkout" && (
            <form id="cart-checkout-form" onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/60 text-xs text-neutral-700 flex justify-between items-center">
                <span>
                  <strong>{totalCount}</strong> article{totalCount > 1 ? "s" : ""} sélectionné{totalCount > 1 ? "s" : ""}
                </span>
                <span className="font-bold text-sm text-[#FF5A00]">
                  {totalAmount.toLocaleString("fr-FR")} FCFA
                </span>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-black block mb-1">Nom *</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Votre nom"
                    className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-4 py-2.5 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-black block mb-1">Prénom *</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Votre prénom"
                    className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-4 py-2.5 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-black block mb-1">Téléphone *</label>
                  <div className="flex items-center bg-[#F5F6F8] border border-neutral-200 focus-within:border-[#FF5A00] focus-within:bg-white rounded-full px-4 py-2.5">
                    <span className="text-xs font-semibold text-neutral-600 pr-2 mr-2 border-r border-neutral-300">
                      🇧🇯 +229
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01 97 00 00 00"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-black block mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemple@mail.com"
                    className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-4 py-2.5 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-black block mb-1">Ville *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Cotonou"
                    className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-4 py-2.5 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-black block mb-1">Quartier / Adresse *</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Haie Vive, Cotonou"
                    className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-4 py-2.5 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-black block mb-1">Remarque (Optionnel)</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Précisions sur la livraison ou votre besoin..."
                  className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-2xl px-4 py-2.5 text-sm outline-none resize-none"
                />
              </div>
            </form>
          )}

          {step === "success" && (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-20 h-20 bg-[#22C55E] flex items-center justify-center text-white mb-6 rounded-3xl shadow-lg">
                <Check size={40} strokeWidth={3} />
              </div>
              <h3 className="font-bold text-2xl text-black mb-2">
                Demande de commande envoyée !
              </h3>
              {createdOrderNumber && (
                <p className="text-xs font-bold uppercase tracking-wider text-[#FF5A00] mb-3">
                  Référence : #{createdOrderNumber}
                </p>
              )}
              <p className="text-sm text-neutral-600 max-w-sm leading-relaxed mb-8">
                Votre demande a bien été transmise à notre équipe commerciale Asuka Spirit. Vous serez recontacté(e) très rapidement pour confirmer la livraison.
              </p>
              <button
                onClick={handleClose}
                className="bg-[#222222] hover:bg-black text-white font-medium text-sm px-8 py-3.5 rounded-full transition-colors cursor-pointer"
              >
                Continuer ma visite
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {step === "cart" && items.length > 0 && (
          <div className="p-6 border-t border-neutral-200 bg-white space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-500 font-medium">Total estimé</span>
              <span className="text-xl font-bold text-black">
                {totalAmount.toLocaleString("fr-FR")} FCFA
              </span>
            </div>
            <button
              onClick={() => setStep("checkout")}
              className="w-full flex items-center justify-between bg-[#222222] hover:bg-black text-white font-medium text-sm rounded-full pl-6 pr-1.5 h-13 transition-all cursor-pointer"
            >
              <span>Valider ma demande de commande</span>
              <div className="w-10 h-10 rounded-full bg-[#FF5A00] flex items-center justify-center text-white">
                <ArrowUpRight size={18} />
              </div>
            </button>
          </div>
        )}

        {step === "checkout" && (
          <div className="p-6 border-t border-neutral-200 bg-white flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep("cart")}
              className="px-5 py-3 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
            >
              Retour au panier
            </button>
            <button
              type="submit"
              form="cart-checkout-form"
              disabled={submitting}
              className="flex-1 flex items-center justify-between bg-[#222222] hover:bg-black disabled:opacity-60 text-white font-medium text-sm rounded-full pl-6 pr-1.5 h-12 transition-all cursor-pointer"
            >
              <span>{submitting ? "Envoi en cours..." : "Envoyer ma commande"}</span>
              <div className="w-9 h-9 rounded-full bg-[#FF5A00] flex items-center justify-center text-white">
                {submitting ? <Loader2 size={16} className="animate-spin" /> : <ArrowUpRight size={18} />}
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
