"use client";

import { useCart } from "@/context/cart-context";

export function PurchaseCTA() {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "velum-50ml",
      name: "Velum - 50ml",
      price: 180,
      quantity: 1,
      image: "/product-photo.jpeg"
    });
  };

  return (
    <section className="w-full py-32 bg-black flex flex-col items-center justify-center">
        <button 
          className="group relative px-12 py-4 border border-white/30 text-white font-display uppercase tracking-[0.15em] text-sm hover:bg-white hover:text-black transition-all duration-500 ease-out overflow-hidden"
          onClick={handleAddToCart}
        >
          <span className="relative z-10">Acquire — $180</span>
        </button>
        <p className="mt-6 text-xs text-zinc-600 font-sans uppercase tracking-wide">
          Complimentary shipping worldwide
        </p>
    </section>
  );
}
