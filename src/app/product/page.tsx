"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ChevronDown } from "lucide-react";
import { useCart } from "@/context/cart-context";

const product = {
  id: "velum-50ml",
  name: "Velum",
  price: 180,
  description: "A fragrance that captures the silence of snowfall. Crisp ozone meets the warmth of ambergris, creating a scent that is both present and invisible.",
  images: [
    "/product/bottle-hero.png", // We'll need to ensure these exist or use placeholders
    "/bento/product-1.jpeg",
    "/bento/product-2.jpeg",
    "/bento/product-3.jpeg"
  ],
  notes: [
    { title: "Top", desc: "Ozone, Bergamot, White Pepper" },
    { title: "Heart", desc: "Iris, Rainwater, Salt" },
    { title: "Base", desc: "Ambergris, White Musk, Cedar" }
  ],
  ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citral, Geraniol.",
  shipping: "Free worldwide shipping on all orders. Returns accepted within 30 days of delivery."
};

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleCart } = useCart();
  const [activeAccordion, setActiveAccordion] = useState<string | null>("notes");

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[1] || "/placeholder.jpg"
    });
    // Optional: Open cart after adding
    // toggleCart(); 
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-white text-black pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column: Gallery (Sticky on Desktop) */}
        <div className="space-y-4 md:sticky md:top-32 md:h-fit">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 rounded-sm">
             {/* Main Hero Image Placeholder if file missing, defaulting to bento-1 */}
            <Image
              src={product.images[1]} 
              alt={product.name}
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
             {product.images.slice(2).map((img, idx) => (
               <div key={idx} className="relative aspect-square w-full overflow-hidden bg-zinc-100 rounded-sm">
                 <Image
                  src={img}
                  alt={`${product.name} detail ${idx}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  quality={90}
                 />
               </div>
             ))}
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="flex flex-col justify-center space-y-10 md:max-w-lg">
          
          {/* Header */}
          <div className="space-y-4 border-b border-black/10 pb-10">
            <div className="flex justify-between items-start">
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
                {product.name}
              </h1>
              <span className="text-xl md:text-2xl font-sans tracking-wide">
                ${product.price}
              </span>
            </div>
            <p className="text-zinc-600 font-sans leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Scent Notes (Visual) */}
          <div className="grid grid-cols-3 gap-4 text-center py-4">
             {['Ozone', 'Iris', 'Ambergris'].map((note) => (
               <div key={note} className="space-y-2">
                 <div className="w-full h-[1px] bg-black/5" />
                 <span className="text-xs uppercase tracking-widest text-zinc-500">{note}</span>
               </div>
             ))}
          </div>

          {/* Actions */}
          <div className="space-y-6 pt-6">
            <div className="flex gap-4">
              {/* Quantity */}
              <div className="flex items-center border border-black/10 px-4 h-12 gap-6 rounded-xs">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-black/50 hover:text-black transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-sans w-4 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                   className="text-black/50 hover:text-black transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              {/* Add to Cart */}
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white h-12 uppercase tracking-widest text-xs font-bold hover:bg-zinc-800 transition-colors rounded-xs"
              >
                Add to Cart
              </button>
            </div>
            
            <p className="text-xs text-center text-zinc-400 uppercase tracking-widest">
              Pay in 4 interest-free payments of ${product.price / 4}.
            </p>
          </div>

          {/* Accordions */}
          <div className="border-t border-black/10 mt-12">
            {[
              { id: 'notes', label: 'Olfactory Notes', content: (
                <ul className="space-y-2 text-sm text-zinc-600 pb-6">
                  {product.notes.map(n => (
                    <li key={n.title}><span className="text-black font-medium">{n.title}:</span> {n.desc}</li>
                  ))}
                </ul>
              )},
              { id: 'ingredients', label: 'Ingredients', content: (
                <p className="text-sm text-zinc-600 pb-6 leading-relaxed">
                  {product.ingredients}
                </p>
              )},
              { id: 'shipping', label: 'Shipping & Returns', content: (
                 <p className="text-sm text-zinc-600 pb-6 leading-relaxed">
                  {product.shipping}
                </p>
              )}
            ].map((item) => (
              <div key={item.id} className="border-b border-black/10">
                <button 
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full py-6 flex justify-between items-center text-left group border-none bg-transparent cursor-pointer"
                >
                  <span className="font-display text-sm uppercase tracking-widest group-hover:text-black/70 transition-colors">{item.label}</span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${activeAccordion === item.id ? 'rotate-180 text-black' : 'text-zinc-400 group-hover:text-black'}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
