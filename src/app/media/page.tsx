"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const articles = [
  {
    id: 1,
    source: "Vogue",
    title: "The Scent of Silence: Aether's Radical Approach to Perfumery",
    date: "October 2025",
    image: "/bento/product-1.jpeg",
    quote: "A masterpiece of restraint."
  },
  {
    id: 2,
    source: "Architectural Digest",
    title: "Why Aether is the Fragrance Every Minimalist Needs",
    date: "September 2025",
    image: "/bento/product-2.jpeg",
    quote: "Architecture you can wear."
  },
  {
    id: 3,
    source: "Monocle",
    title: "Design & Scent: The New Frontier",
    date: "August 2025",
    image: "/bento/product-3.jpeg",
    quote: "Redefining the sensory landscape."
  },
  {
    id: 4,
    source: "Hypebeast",
    title: "Aether Drops 'Velum': A Fragrance for the Ghost in the Shell",
    date: "July 2025",
    image: "/bento/product-4.jpeg",
    quote: "Future-proof elegance."
  }
];

export default function MediaPage() {
  return (
    <main className="bg-white min-h-screen text-black">
      
      {/* Hero Video Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden mb-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/aether-velum.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Press Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-3xl font-display font-light uppercase tracking-widest">In The Press</h2>
          <div className="w-12 h-[1px] bg-black/20 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-32">
          {articles.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group cursor-pointer`}
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-8 bg-zinc-100">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs uppercase tracking-widest text-zinc-500 border-b border-black/10 pb-4">
                  <span className="font-bold text-black">{article.source}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-light leading-tight group-hover:underline decoration-1 underline-offset-4">
                  {article.title}
                </h3>
                <p className="font-serif italic text-zinc-600 text-lg">
                  "{article.quote}"
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

    </main>
  );
}
