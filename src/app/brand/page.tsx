"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 text-black">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-32 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-light tracking-tight mb-8"
        >
          The Aether Story
        </motion.h1>
         <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-24 h-[1px] bg-black mx-auto" 
        />
      </section>

      {/* The Origin */}
      <section className="max-w-3xl mx-auto px-6 mb-32 space-y-8 leading-relaxed text-lg font-serif text-zinc-800">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          It began not in a laboratory, but in a memory. The distinct silence of a winter morning in Kyoto. The scent of rain hitting hot asphalt in Paris. The ethereal stillness of a fog-covered harbor.
        </motion.p>
        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2 }}
        >
          Aether was founded on the belief that fragrance is not an accessory, but an atmosphere. A silent language that speaks before you do. We sought to capture these fleeting moments—the "aether" between the physical world and pure emotion—and bottle them with uncompromising precision.
        </motion.p>
        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.4 }}
        >
          We reject the loud, the chaotic, and the trends. Our craft is one of subtraction. We remove the noise until only the essential truth of the scent remains.
        </motion.p>
      </section>

      {/* Visual Break - Image would go here, using a placeholder/div for now */}
      <div className="w-full h-[60vh] relative bg-zinc-100 mb-32 overflow-hidden">
         <Image 
            src="/paris-arc.jpg" // Fallback to hero poster if specific brand image missing
            alt="Aether Atmosphere"
            fill
            className="object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-[2s]"
         />
      </div>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { title: "Atmospheric Precision", desc: "Every note is calibrated. Meaning in every molecule. Nothing exists by accident." },
            { title: "Timeless Craft", desc: "We honor the old ways of perfumery while embracing modern restraint. Quality that outlasts the season." },
            { title: "Sustainable Future", desc: "Nature is our palette. Partial proceeds protect the landscapes that inspire our scents." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-display font-bold uppercase tracking-widest">{item.title}</h3>
              <div className="w-8 h-[1px] bg-black/20 mx-auto" />
              <p className="text-zinc-600 font-serif leading-relaxed px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CEO Message */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 bg-zinc-50 border border-zinc-100 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
           <div className="relative w-48 h-48 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-black/10">
              <Image 
                src="/model/model-1.jpeg" // Placeholder for CEO
                alt="Founder"
                fill
                className="object-cover"
              />
           </div>
        </div>
        <div className="md:w-2/3 space-y-6 text-center md:text-left">
          <h2 className="text-2xl font-display font-light uppercase tracking-widest">A Word from the Founder</h2>
          <blockquote className="font-serif italic text-xl leading-relaxed text-zinc-700">
            "In a world that shouts, we choose to whisper. Aether is for those who find power in silence and beauty in the unseen."
          </blockquote>
          <div className="pt-4">
             <p className="font-display font-bold uppercase tracking-widest text-sm">Julian V.</p>
             <p className="text-xs text-zinc-500 uppercase tracking-widest">Founder & Creative Director</p>
          </div>
        </div>
      </section>

    </main>
  );
}
