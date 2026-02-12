"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";

const bentoItems = [
  {
    id: "item-1",
    type: "image",
    src: "/bento/product-1.jpeg",
    title: "Unspoken Confidence",
    description: "A presence that enters the room before you do.",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2"
  },
  {
    id: "item-2",
    type: "image",
    src: "/bento/product-2.jpeg",
    title: "Daily Ritual",
    description: "The moment of clarity.",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
  },
  {
    id: "item-4",
    type: "info",
    src: "", // No image
    title: "Global Reach",
    description: "Free worldwide shipping on all orders.",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    id: "item-3",
    type: "image",
    src: "/bento/product-3.jpeg",
    title: "Essential Form",
    description: "Designed to be held.",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  }
];

export function BentoGrid() {
  return (
    <section className="w-full py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="block text-sm font-sans tracking-[0.2em] text-zinc-500 uppercase mb-2">
            The Lifestyle
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Beyond the Scent.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 auto-rows-[300px] md:auto-rows-[300px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden ${
                item.type === 'image' ? 'bg-zinc-100' : 'bg-amber-950 text-white'
              } ${item.colSpan} ${item.rowSpan} min-h-[300px]`}
            >
              {item.type === 'image' ? (
                <>
                  {/* Image */}
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                     <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      quality={90}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Animated Mesh Gradient Background */}
                  <div className="absolute inset-0 bg-[#0c0a09] overflow-hidden">
                    <div className="absolute top-[-25%] left-[-25%] w-[150%] h-[150%] animate-spin-slow opacity-90 bg-gradient-to-tr from-stone-700 via-amber-900/40 to-transparent blur-[30px]" />
                    <div className="absolute bottom-[-25%] right-[-25%] w-[150%] h-[150%] animate-spin-slow opacity-80 bg-gradient-to-bl from-white/20 via-stone-500/20 to-transparent blur-[30px] direction-reverse" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8 space-y-6">
                   
                    
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-3xl font-display font-bold tracking-tight text-amber-50">
                        {item.description}
                      </h3>
                      <p className="text-amber-200/60 text-xs font-sans tracking-widest uppercase">
                         Sent from Paris
                      </p>
                    </div>

                     <div className="flex items-center gap-2 text-xs font-medium text-amber-100/80 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Policy</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
