"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {ingredients.map((item, index) => (
              <CarouselItem key={item.id} className="basis-[85%] md:basis-1/3 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-[400px] md:h-[500px] overflow-hidden bg-zinc-900 w-full"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2 mt-4 md:mt-0 md:block">
            <CarouselPrevious className="static translate-y-0 md:absolute md:-left-12 md:top-1/2 md:-translate-y-1/2 bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800 hover:text-white" />
            <CarouselNext className="static translate-y-0 md:absolute md:-right-12 md:top-1/2 md:-translate-y-1/2 bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
