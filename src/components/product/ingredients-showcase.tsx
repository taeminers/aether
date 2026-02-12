"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ingredients = [
  {
    id: "coffee",
    title: "Coffee",
    description: "Robust depth from Arabica beans.",
    image: "/coffee.jpeg"
  },
  {
    id: "rum",
    title: "Rum",
    description: "Aged warmth with caramel notes.",
    image: "/rum.jpeg"
  },
  {
    id: "tobacco",
    title: "Tobacco",
    description: "Earthy richness, smooth finish.",
    image: "/tobacco.jpeg"
  }
];

export function IngredientsShowcase() {
  return (
    <section className="w-full py-24 md:py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-6"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            The Trinity.
          </h2>
          <p className="text-lg text-zinc-500 font-sans max-w-2xl">
            A precise composition of three dominant notes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-zinc-900"
            >
              {/* Card Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-display font-bold mb-2 text-white drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-zinc-200 text-sm font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
              </div>

              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={100}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
