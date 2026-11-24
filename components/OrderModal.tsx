"use client";

import { useState, useSyncExternalStore, cloneElement, isValidElement } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpRight, Check, ShoppingBag, Loader2 } from "lucide-react";
import { useCart, API_BASE_URL } from "./CartContext";

type ChildElementProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

export default function OrderModal({
  children,
  defaultAppareil = "",
}: {
  children: React.ReactNode;
  defaultAppareil?: string;
}) {
  // Temporarily disable ordering on the front-office
  const ORDER_DISABLED = false;

  const { products, findProductByAppareil, addToCart, openDrawer } = useCart();

  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [createdOrderNum, setCreatedOrderNum] = useState<string | number>("");

  const [selectedProductId, setSelectedProductId] = useState<number>(0);
  const [selectedVariantId, setSelectedVariantId] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Cotonou");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (ORDER_DISABLED) {
    if (isValidElement(children)) {
      const childProps = (children as React.ReactElement<ChildElementProps>).props;
      // Preserve "Rejoindre ASUKA SPIRIT" CTA if wrapped inside OrderModal
      const isJoinCta =
        typeof childProps.children === "object" &&
        JSON.stringify(childProps.children || "").includes("Rejoindre ASUKA SPIRIT");
      if (isJoinCta) {
        return cloneElement(children as React.ReactElement<ChildElementProps>, {
          onClick: () => {
            window.location.href = "/contact";
          },
        });
      }
      return cloneElement(children as React.ReactElement<ChildElementProps>, {
        disabled: true,
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          e.stopPropagation();
        },
        className: `${childProps.className || ""} opacity-50 cursor-not-allowed pointer-events-none select-none`,
        title: "Les commandes en ligne sont temporairement désactivées",
      });
    }
    return (
      <span
        className="opacity-50 cursor-not-allowed pointer-events-none select-none"
        title="Les commandes en ligne sont temporairement désactivées"
      >
        {children}
      </span>
    );
  }

  const matchedDefault = findProductByAppareil(defaultAppareil);
  const currentProduct =
    products.find((p) => p.id === selectedProductId) ||
    matchedDefault ||
    products[0];
  const currentVariant =
    currentProduct?.variants.find((v) => v.id === selectedVariantId) ||
    currentProduct?.variants[0];

  const unitPrice = currentVariant?.price || 0;
  const totalPrice = unitPrice * quantity;

  const handleProductChange = (prodId: number) => {
    setSelectedProductId(prodId);
    const prod = products.find((p) => p.id === prodId);
    if (prod && prod.variants[0]) {
      setSelectedVariantId(prod.variants[0].id);
    }
  };

  const handleAddToCart = () => {
    if (!currentProduct || !currentVariant) return;
    addToCart(
      {
        variantId: currentVariant.id,
        productId: currentProduct.id,
        productName: currentProduct.name,
        productSlug: currentProduct.slug,
        variantLabel: currentVariant.label,
        unitPrice: currentVariant.price,
        maxStock: currentVariant.stock,
      },
      quantity
    );
    setIsOpen(false);
    openDrawer();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const cleanPhone = phone.trim().startsWith("+")
        ? phone.trim()
        : `+229${phone.trim().replace(/\s+/g, "")}`;

      const payload: Record<string, unknown> = {
        customerName: `${firstName.trim()} ${lastName.trim()}`.trim() || "Client",
        customerPhone: cleanPhone,
        customerEmail: email.trim() || undefined,
        city: city.trim() || "Cotonou",
        address: address.trim() || "Cotonou",
        notes: notes.trim() || undefined,
        totalAmount: String(totalPrice),
        ...(currentVariant
          ? {
              items: [
                {
                  variantId: currentVariant.id,
                  quantity,
                },
              ],
            }
          : {}),
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

      setCreatedOrderNum(data.orderNumber || data.id || "");
      setIsSuccess(true);
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Erreur lors de l'envoi de votre commande. Veuillez réessayer."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setErrorMsg("");
    }, 300);
  };

  return (
    <>
      {isValidElement(children) ? (
        cloneElement(
          children as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
          {
            onClick: (e: React.MouseEvent<HTMLElement>) => {
              e.preventDefault();
              setIsOpen(true);
              const childProps = (
                children as React.ReactElement<React.HTMLAttributes<HTMLElement>>
              ).props;
              if (childProps.onClick) {
                childProps.onClick(e);
              }
            },
          }
        )
      ) : (
        <span
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
          className="cursor-pointer"
        >
          {children}
        </span>
      )}

      {mounted && isOpen
        ? createPortal(
            <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md transition-opacity overflow-y-auto">
              <div
                className="bg-white text-black rounded-[28px] md:rounded-[40px] w-full max-w-3xl p-6 sm:p-8 md:p-10 relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] my-auto max-h-[92vh] overflow-y-auto border border-neutral-200"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 md:top-8 md:right-8 w-8 h-8 bg-[#E60000] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors z-20 shrink-0 shadow-md cursor-pointer"
                  aria-label="Fermer"
                >
                  <X size={18} strokeWidth={3} />
                </button>

                {!isSuccess ? (
                  <div className="flex flex-col">
                    <div className="mb-5 pr-8">
                      <h2 className="text-black font-bold text-[22px] md:text-[28px]">
                        Passer la commande
                      </h2>
                      <p className="text-xs text-neutral-500 mt-1">
                        Ajoutez cet appareil à votre panier ou envoyez directement votre demande de commande.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="mb-4 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                        {errorMsg}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                      {/* Appareil & Variante */}
                      <div className="p-4 rounded-3xl bg-[#F5F6F8] border border-neutral-200 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-black font-semibold text-[13px]">
                              Appareil
                            </label>
                            {products.length > 0 ? (
                              <select
                                value={currentProduct?.id || ""}
                                onChange={(e) => handleProductChange(Number(e.target.value))}
                                className="w-full bg-white border border-neutral-200 focus:border-[#FF5A00] rounded-full px-5 py-3 outline-none text-[14px] text-black font-semibold"
                              >
                                {products.map((p) => (
                                  <option key={p.id} value={p.id}>
                                    {p.name}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input
                                type="text"
                                defaultValue={defaultAppareil}
                                readOnly
                                className="w-full bg-white border border-neutral-200 rounded-full px-5 py-3 text-[14px] text-black font-semibold"
                              />
                            )}
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-black font-semibold text-[13px]">
                              Configuration / Modèle
                            </label>
                            <select
                              value={currentVariant?.id || ""}
                              onChange={(e) => setSelectedVariantId(Number(e.target.value))}
                              className="w-full bg-white border border-neutral-200 focus:border-[#FF5A00] rounded-full px-5 py-3 outline-none text-[14px] text-black font-medium"
                            >
                              {(currentProduct?.variants || []).map((v) => (
                                <option key={v.id} value={v.id}>
                                  {v.label} — {v.price.toLocaleString("fr-FR")} FCFA
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-neutral-200/80">
                          <div className="flex items-center gap-3">
                            <span className="text-black font-semibold text-[13px]">
                              Quantité :
                            </span>
                            <button
                              type="button"
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-neutral-300 text-black hover:bg-neutral-100 font-bold cursor-pointer"
                            >
                              -
                            </button>
                            <span className="font-bold text-[16px] text-black w-5 text-center">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQuantity(quantity + 1)}
                              className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FF5A00] text-white hover:bg-orange-600 font-bold cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <span className="text-xs text-neutral-500 block">
                                Total estimé
                              </span>
                              <span className="font-bold text-lg text-[#FF5A00]">
                                {totalPrice.toLocaleString("fr-FR")} FCFA
                              </span>
                            </div>

                            {currentVariant && (
                              <button
                                type="button"
                                onClick={handleAddToCart}
                                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-900 hover:text-white text-black border border-neutral-300 font-semibold text-xs px-4 py-2.5 rounded-full transition-colors cursor-pointer"
                              >
                                <ShoppingBag size={14} />
                                Ajouter au panier
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Coordonnées client */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-black font-medium text-[13px]">Nom *</label>
                          <input
                            type="text"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Votre nom..."
                            className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-5 py-3 outline-none transition-all text-[14px] text-black"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-black font-medium text-[13px]">Prénom *</label>
                          <input
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Votre prénom..."
                            className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-5 py-3 outline-none transition-all text-[14px] text-black"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-black font-medium text-[13px]">Email</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Votre adresse email..."
                            className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-5 py-3 outline-none transition-all text-[14px] text-black"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-black font-medium text-[13px]">Téléphone *</label>
                          <div className="flex items-center w-full bg-[#F5F6F8] border border-neutral-200 focus-within:border-[#FF5A00] focus-within:bg-white rounded-full px-5 py-3 transition-all">
                            <div className="flex items-center gap-1.5 border-r border-neutral-300 pr-2.5 mr-2.5 shrink-0">
                              <span className="text-[16px]">🇧🇯</span>
                              <span className="text-[13px] text-neutral-700 font-medium">+229</span>
                            </div>
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Votre numéro..."
                              className="w-full bg-transparent outline-none text-[14px] text-black"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-black font-medium text-[13px]">Ville *</label>
                          <input
                            type="text"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Cotonou"
                            className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-5 py-3 outline-none transition-all text-[14px] text-black"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-black font-medium text-[13px]">
                            Quartier / Adresse de livraison *
                          </label>
                          <input
                            type="text"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Ex: Haie Vive, Rue 380..."
                            className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-full px-5 py-3 outline-none transition-all text-[14px] text-black"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-black font-medium text-[13px]">Remarque</label>
                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Votre message..."
                          rows={2}
                          className="w-full bg-[#F5F6F8] border border-neutral-200 focus:border-[#FF5A00] focus:bg-white rounded-2xl px-5 py-3 outline-none transition-all text-[14px] text-black resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-center sm:justify-end mt-1">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="inline-flex items-center justify-between gap-4 bg-[#222222] hover:bg-black disabled:opacity-60 text-white font-medium text-[15px] rounded-full pl-[24px] pr-[4px] h-[55px] transition-all duration-300 group w-full sm:w-auto cursor-pointer"
                        >
                          <span>
                            {submitting ? "Envoi en cours..." : "Envoyer ma commande directe"}
                          </span>
                          <div className="w-[47px] h-[47px] rounded-full bg-[#FF5A00] flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45 shrink-0">
                            {submitting ? (
                              <Loader2 size={20} className="animate-spin" />
                            ) : (
                              <ArrowUpRight size={22} strokeWidth={2.5} />
                            )}
                          </div>
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-12 md:py-16">
                    <div
                      className="w-20 h-20 bg-[#22C55E] flex items-center justify-center text-white mb-6 rounded-2xl"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
                      }}
                    >
                      <Check size={40} strokeWidth={3} />
                    </div>
                    <h2 className="text-black font-bold text-[28px] md:text-[36px] mb-2">
                      Commande enregistrée !
                    </h2>
                    {createdOrderNum && (
                      <p className="text-xs font-bold uppercase tracking-wider text-[#FF5A00] mb-3">
                        Référence : #{createdOrderNum}
                      </p>
                    )}
                    <p className="text-neutral-600 text-[15px] max-w-[420px] leading-relaxed mb-8">
                      Nous avons bien reçu votre demande de commande. Notre équipe commerciale vous contactera dans les plus brefs délais.
                      <br />
                      Merci de votre confiance !
                    </p>
                    <button
                      onClick={handleClose}
                      className="bg-[#222222] hover:bg-black text-white font-medium text-[15px] px-8 py-4 rounded-full transition-colors cursor-pointer"
                    >
                      Retour à la page précédente
                    </button>
                  </div>
                )}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
