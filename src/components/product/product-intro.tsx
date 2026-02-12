"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function ProductIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.4], [0, 1, 1]);
  const textScale = useTransform(scrollYProgress, [0.1, 0.4], [0.95, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.4]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full pt-32 pb-0 bg-white text-black overflow-hidden flex flex-col items-center justify-start"
    >
      {/* 1. Header Text Section */}
      <motion.div 
        style={{ opacity: textOpacity, scale: textScale }}
        className="z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center space-y-6"
      >
        <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight">
          Velum. The Essence.
        </h3>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-neutral-800 to-zinc-600 block">
            Eau de Parfum
          </span>
        </h2>

        <p className="text-xl md:text-2xl font-sans font-medium text-zinc-500 max-w-2xl mt-8">
          From the heart of Paris.  <br/> Designed by nature. Perfected by Masters.
        </p>

        <div className="pt-8 pb-16">
          <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300">
            Pre-order now
          </button>
      
        </div>
      </motion.div>

      {/* 2. Product Image Section - Bottom */}
      <motion.div 
        style={{ y: imageY, scale: imageScale }}
        className="relative w-full max-w-5xl mx-auto aspect-[12/9] md:aspect-[18/9] flex items-end justify-center"
      >
         <div className="relative w-full h-full md:w-[80%] md:h-[120%]">
          {/* Using object-contain to ensure the bottle/box is fully visible and centered-bottom */}
           <Image
             src="/product-photo.jpeg"
             alt="Velum Perfume Bottle High Res"
             fill
             className="object-contain object-bottom"
             sizes="(max-width: 768px) 100vw, 80vw"
             priority
           />
         </div>
      </motion.div>
    </section>
  );
}
