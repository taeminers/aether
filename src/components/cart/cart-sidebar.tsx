"use client";

import { useCart } from "@/context/cart-context";
import { X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CartItemRow } from "./cart-item";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CartSidebar() {
  const { isCartOpen, toggleCart, items, cartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const router = useRouter();

  const handleCheckout = () => {
    setIsCheckingOut(true);
    toggleCart(); // Close sidebar
    router.push("/checkout");
    setIsCheckingOut(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[60] h-full w-full md:w-[450px] bg-black border-l border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-display font-light uppercase tracking-widest text-white">
                Your Selection
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-white/30 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-light tracking-wide uppercase text-sm">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {items.map((item) => (
                    <CartItemRow key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-zinc-950">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-sans uppercase tracking-widest text-white/60">
                    Subtotal
                  </span>
                  <span className="text-xl font-display text-white">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-4 bg-white text-black font-display uppercase tracking-[0.2em] text-sm hover:bg-white/90 transition-colors disabled:opacity-50"
                >
                  {isCheckingOut ? "Processing..." : "Checkout"}
                </button>
                <p className="mt-4 text-center text-xs text-white/30">
                  Taxes and shipping calculated at checkout.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
