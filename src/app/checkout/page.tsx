"use client";

import { useCart } from "@/context/cart-context";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      alert("Order Placed Successfully!");
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-white text-black flex flex-col md:flex-row">
      
      {/* Left Column: Forms */}
      <div className="flex-1 p-6 md:p-12 lg:p-24 order-2 md:order-1">
        <div className="max-w-xl mx-auto space-y-12">
           {/* Header */}
          <div className="flex items-center gap-4">
             <Link href="/product" className="text-sm text-zinc-500 hover:text-black flex items-center gap-2 transition-colors">
               <ChevronLeft size={16} /> Return to Shop
             </Link>
             <span className="text-zinc-300">|</span>
             <span className="font-display font-bold uppercase tracking-widest text-lg">Checkout</span>
          </div>

          <form onSubmit={handlePlaceOrder} className="space-y-12">
            
            {/* Contact */}
            <section className="space-y-6">
              <h2 className="text-2xl font-display font-bold">Contact Information</h2>
              <div className="space-y-4">
                 <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400 bg-transparent"
                />
                 <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <input type="checkbox" id="newsletter" className="accent-black" />
                  <label htmlFor="newsletter">Email me with news and offers</label>
                 </div>
              </div>
            </section>

             {/* Shipping */}
            <section className="space-y-6">
              <h2 className="text-2xl font-display font-bold">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-6">
                 <input 
                  type="text" 
                  placeholder="First name" 
                  required
                  className="w-full border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400 bg-transparent"
                />
                 <input 
                  type="text" 
                  placeholder="Last name" 
                  required
                  className="w-full border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400 bg-transparent"
                />
              </div>
              <input 
                  type="text" 
                  placeholder="Address" 
                  required
                  className="w-full border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400 bg-transparent"
              />
               <input 
                  type="text" 
                  placeholder="Apartment, suite, etc. (optional)" 
                  className="w-full border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400 bg-transparent"
              />
               <div className="grid grid-cols-3 gap-6">
                 <input 
                  type="text" 
                  placeholder="City" 
                  required
                  className="w-full border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400 bg-transparent"
                />
                 <input 
                  type="text" 
                  placeholder="Country" 
                  required
                  className="w-full border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400 bg-transparent"
                />
                 <input 
                  type="text" 
                  placeholder="Postal Code" 
                  required
                  className="w-full border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400 bg-transparent"
                />
              </div>
            </section>

             {/* Payment */}
            <section className="space-y-6">
              <h2 className="text-2xl font-display font-bold">Payment</h2>
              <div className="p-6 border border-black/10 rounded-sm bg-zinc-50 text-center space-y-2">
                 <p className="text-sm font-sans text-zinc-500">All transactions are secure and encrypted.</p>
                 <div className="text-xs text-zinc-400 uppercase tracking-widest">Credit Card • PayPal • Apple Pay</div>
              </div>
               <input 
                  type="text" 
                  placeholder="Card Number" 
                  className="w-full border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400 bg-transparent"
               />
               <div className="grid grid-cols-2 gap-6">
                   <input 
                    type="text" 
                    placeholder="Expiration (MM/YY)" 
                    className="w-full border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400 bg-transparent"
                  />
                   <input 
                    type="text" 
                    placeholder="Security Code" 
                    className="w-full border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400 bg-transparent"
                  />
               </div>
            </section>

            <button 
              type="submit"
              disabled={isProcessing}
              className="w-full py-5 bg-black text-white uppercase tracking-[0.2em] font-bold text-sm hover:bg-zinc-800 transition-colors disabled:opacity-70"
            >
              {isProcessing ? "Processing..." : `Pay $${cartTotal.toFixed(2)}`}
            </button>

          </form>
        </div>
      </div>

      {/* Right Column: Order Summary (Sticky/Sidebar) */}
      <div className="w-full md:w-[450px] bg-zinc-50 border-l border-zinc-200 p-6 md:p-12 order-1 md:order-2">
        <div className="sticky top-12 space-y-8">
           <h2 className="text-lg font-display font-bold uppercase tracking-widest text-zinc-400">Order Summary</h2>
           
           <div className="space-y-6">
             {items.map((item) => (
               <div key={item.id} className="flex gap-4 items-center">
                 <div className="relative w-16 h-16 bg-white border border-zinc-100 rounded-sm overflow-hidden flex-shrink-0">
                    <Image src={item.image || "/placeholder.jpg"} alt={item.name} fill className="object-cover" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                      {item.quantity}
                    </span>
                 </div>
                 <div className="flex-1">
                   <h3 className="font-display font-bold text-sm">{item.name}</h3>
                   <p className="text-xs text-zinc-500">50ml Extrait de Parfum</p>
                 </div>
                 <span className="text-sm font-sans">${(item.price * item.quantity).toFixed(2)}</span>
               </div>
             ))}
           </div>

           <div className="border-t border-black/5 pt-6 space-y-2">
             <div className="flex justify-between text-sm text-zinc-500">
               <span>Subtotal</span>
               <span>${cartTotal.toFixed(2)}</span>
             </div>
             <div className="flex justify-between text-sm text-zinc-500">
               <span>Shipping</span>
               <span>Calculated at next step</span>
             </div>
           </div>

           <div className="border-t border-black/5 pt-6 flex justify-between items-center">
              <span className="font-display font-bold text-lg">Total</span>
              <span className="font-sans text-xl font-medium">${cartTotal.toFixed(2)}</span>
           </div>
        </div>
      </div>

    </main>
  );
}
