"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ambassadors = [
  {
    id: 1,
    image: "/model/model-1.jpeg",
    name: "Eric Kaowski",
    role: "Art Director, Vogue"
  },
  {
    id: 2,
    image: "/model/model-2.jpeg",
    name: "James Tan",
    role: "Architect"
  },
  {
    id: 3,
    image: "/model/model-3.jpeg",
    name: "Hugo Dias",
    role: "Galerie Owner"
  }
];

export function AmbassadorsSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-foreground text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="block text-sm font-sans tracking-[0.2em] text-zinc-500 uppercase mb-2">
            The Collective
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-background font-bold tracking-tight">
            Ambassadors.
          </h2>
        </motion.div>

        {/* Ambassadors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ambassadors.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative h-[600px] w-full overflow-hidden"
            >
              {/* Image Container */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={`Ambassador ${item.name}`}
                  fill
                  quality={100}
                  className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={true}
                />
                
                {/* Layovers - Subtle on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Overlay - Name & Role only */}
              <div className="absolute inset-x-0 bottom-0 p-8 z-10 flex flex-col items-center text-center space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <h4 className="text-xl font-display font-light tracking-widest uppercase text-white">{item.name}</h4>
                <div className="w-8 h-[1px] bg-white/50 group-hover:w-16 transition-all duration-500" />
                <span className="text-xs text-white/60 font-sans tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.role}</span>
              </div>

              {/* Decorative Border Frame */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 transition-all duration-700 scale-95 group-hover:scale-100 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
