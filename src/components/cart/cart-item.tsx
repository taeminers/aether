"use client";

import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { type CartItem, useCart } from "@/context/cart-context";

export function CartItemRow({ item }: { item: CartItem }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex gap-4 py-6 border-b border-white/10">
      <div className="relative w-20 h-20 bg-white/5 rounded-sm overflow-hidden flex-shrink-0">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/10 text-xs text-white/50">
            NO IMG
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h4 className="text-sm font-display uppercase tracking-wider text-white">
            {item.name}
          </h4>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-white/40 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-3 border border-white/20 rounded-full px-2 py-1">
            <button
              onClick={() => {
                if (item.quantity > 1) updateQuantity(item.id, -1);
              }}
              className="text-white/60 hover:text-white disabled:opacity-30"
              disabled={item.quantity <= 1}
            >
              <Minus size={12} />
            </button>
            <span className="text-xs font-mono w-4 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, 1)}
              className="text-white/60 hover:text-white"
            >
              <Plus size={12} />
            </button>
          </div>
          <p className="text-sm font-light text-white/80">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
