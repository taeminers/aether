"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="block">
              <span className="text-2xl font-display font-bold tracking-[0.2em] uppercase">
                Aether
              </span>
            </Link>
            <p className="text-sm text-white/50 font-sans max-w-xs">
              Atmospheric precision. Curated scents for the modern enigma.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">
              Explore
            </h4>
            <ul className="space-y-4">
              {['Shop', 'About', 'Journal', 'Stores'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300 block font-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Legal Column */}
           <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">
              Legal
            </h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Shipping', 'Returns'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300 block font-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
             <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">
              Stay Connected
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-white/50 font-sans">
                Join our list for exclusive releases and atmospheric updates.
              </p>
              <form className="flex border-b border-white/20 pb-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent w-full outline-none text-white placeholder-white/30 text-sm font-sans"
                />
                <button type="submit" className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-sans">
          <p>© {currentYear} Aether. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Instagram</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
