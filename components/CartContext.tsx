"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4002";

export interface CatalogVariant {
  id: number;
  productId: number;
  label: string;
  price: number;
  stock: number;
  isActive: boolean;
}

export interface CatalogProduct {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  isActive: boolean;
  categoryName?: string;
  variants: CatalogVariant[];
}

export interface CartItem {
  variantId: number;
  productId: number;
  productName: string;
  productSlug: string;
  variantLabel: string;
  unitPrice: number;
  quantity: number;
  maxStock: number;
}

interface CartContextType {
  products: CatalogProduct[];
  loadingCatalog: boolean;
  items: CartItem[];
  totalCount: number;
  totalAmount: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  updateQuantity: (variantId: number, quantity: number) => void;
  removeFromCart: (variantId: number) => void;
  clearCart: () => void;
  findProductByAppareil: (nameOrSlug?: string) => CatalogProduct | undefined;
}

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "asuka_spirit_cart_v1";

function normalizeKey(str: string): string {
  return str
    .toLowerCase()
    .replace(/revo\s+free\s+/g, "revo ")
    .replace(/[^a-z0-9]/g, "");
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [loadingCatalog, setLoadingCatalog] = useState(true);
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load saved cart from localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setItems(parsed);
          }
        }
      } catch {
        // ignore
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  // Fetch products + variants from NestJS backend
  useEffect(() => {
    let active = true;
    async function loadCatalog() {
      setLoadingCatalog(true);
      try {
        const res = await fetch(`${API_BASE_URL}/products`);
        if (res.ok) {
          const data = await res.json();
          if (active && Array.isArray(data)) {
            interface RawVariant {
              id: number | string;
              label?: string;
              price?: number | string;
              stock?: number | string;
              isActive?: boolean;
            }
            interface RawProduct {
              id: number | string;
              name: string;
              slug: string;
              description?: string;
              image?: string;
              isActive?: boolean;
              category?: { name?: string };
              categoryName?: string;
              variants?: RawVariant[];
            }
            const mapped: CatalogProduct[] = (data as RawProduct[])
              .filter((p) => p.isActive !== false)
              .map((p) => ({
                id: Number(p.id),
                name: p.name,
                slug: p.slug,
                description: p.description,
                image: p.image,
                isActive: p.isActive !== false,
                categoryName: p.category?.name || p.categoryName,
                variants: Array.isArray(p.variants)
                  ? p.variants
                      .filter((v) => v.isActive !== false)
                      .map((v) => ({
                        id: Number(v.id),
                        productId: Number(p.id),
                        label: v.label || "Standard",
                        price: Number(v.price || 0),
                        stock: Number(v.stock ?? 0),
                        isActive: v.isActive !== false,
                      }))
                  : [],
              }));
            setProducts(mapped);
          }
        }
      } catch (err) {
        console.warn("Catalogue API non joignable:", err);
      } finally {
        if (active) setLoadingCatalog(false);
      }
    }
    loadCatalog();
    return () => {
      active = false;
    };
  }, []);

  const findProductByAppareil = (nameOrSlug?: string): CatalogProduct | undefined => {
    if (!nameOrSlug || products.length === 0) return products[0];
    const target = normalizeKey(nameOrSlug);
    return (
      products.find(
        (p) =>
          normalizeKey(p.name) === target ||
          normalizeKey(p.slug) === target ||
          normalizeKey(p.name).includes(target) ||
          target.includes(normalizeKey(p.name))
      ) || products[0]
    );
  };

  const addToCart = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.variantId === item.variantId);
      if (existing) {
        return prev.map((i) =>
          i.variantId === item.variantId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const updateQuantity = (variantId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(variantId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.variantId === variantId ? { ...i, quantity } : i))
    );
  };

  const removeFromCart = (variantId: number) => {
    setItems((prev) => prev.filter((i) => i.variantId !== variantId));
  };

  const clearCart = () => setItems([]);

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalAmount = items.reduce(
    (sum, i) => sum + i.unitPrice * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        products,
        loadingCatalog,
        items,
        totalCount,
        totalAmount,
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        findProductByAppareil,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
}
