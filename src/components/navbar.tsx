"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Brand", href: "/brand" },
  { name: "Product", href: "/product" },
  { name: "Media", href: "/media" },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/50 border-b border-white/5">
      <div className="flex items-center">
        <Link href="/" className="relative w-24 h-8 md:w-32 md:h-10">
          <Image
            src="/logo/aether-logo.png"
            alt="Aether Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-foreground/80 hover:text-foreground transition-colors duration-300 uppercase tracking-widest text-sm font-light mix-blend-difference"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button Placeholder - can be expanded later */}
      <div className="md:hidden">
        <button className="text-foreground p-2">
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className="block w-6 h-px bg-current"></span>
            <span className="block w-6 h-px bg-current"></span>
          </div>
        </button>
      </div>
    </nav>
  );
}
