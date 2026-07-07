"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { BUNDLES, findBundle } from "@/lib/content";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

type CartContextValue = {
  cart: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (id: string) => void;
  changeQty: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  subtotal: number;
  totalQty: number;
  shippingCost: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  function addToCart(id: string) {
    const bundle = findBundle(id);
    if (!bundle) return;
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: bundle.id, name: bundle.name, price: bundle.price, qty: 1 }];
    });
    setCartOpen(true);
  }

  function changeQty(id: string, delta: number) {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  }

  function removeItem(id: string) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  const subtotal = useMemo(() => cart.reduce((sum, i) => sum + i.price * i.qty, 0), [cart]);
  const totalQty = useMemo(() => cart.reduce((sum, i) => sum + i.qty, 0), [cart]);
  const shippingBottles = useMemo(
    () =>
      cart.reduce((sum, i) => {
        const b = BUNDLES.find((bundle) => bundle.id === i.id);
        return sum + (b ? b.qty * i.qty : 0);
      }, 0),
    [cart]
  );
  const shippingCost = shippingBottles >= 3 ? 0 : 60;

  const value: CartContextValue = {
    cart,
    cartOpen,
    setCartOpen,
    addToCart,
    changeQty,
    removeItem,
    subtotal,
    totalQty,
    shippingCost,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
