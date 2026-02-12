"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cart-context";
  import { ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Brand", href: "/brand" },
  { name: "Product", href: "/product" },
  { name: "Media", href: "/media" },
];

export function Navbar() {
  const { toggleCart, cartCount } = useCart();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Assume all pages except home (/) and media (/media) are "light" pages with white backgrounds
  const isLightPage = pathname !== "/" && pathname !== "/media";
  const textColor = (isLightPage && !hasBackground) ? "text-black" : "text-white";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Hide when scrolling down and not at top
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Add background only when scrolled down (scrolling up or down, but not at top)
    if (latest > 50) {
      setHasBackground(true);
    } else {
      setHasBackground(false);
    }
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${
          isMobileMenuOpen 
            ? "bg-zinc-950 border-b border-zinc-800" 
            : hasBackground
              ? "backdrop-blur-md bg-black/80 border-b border-white/5" 
              : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center">
          <Link href="/" className="relative w-24 h-8 md:w-32 md:h-10" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/logo/aether-logo.png"
              alt="Aether Logo"
              fill
              className={`object-contain transition-all duration-300 ${isLightPage && !hasBackground && !isMobileMenuOpen ? "invert" : ""}`}
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${textColor} hover:opacity-70 transition-all duration-300 uppercase tracking-widest text-sm font-light`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={toggleCart}
            className={`relative ${isMobileMenuOpen ? "text-white" : textColor} hover:opacity-70 transition-all`}
          >
            <ShoppingBag size={20} strokeWidth={1} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-white text-black text-[10px] font-bold flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-[60]">
            <button 
              onClick={toggleMobileMenu}
              className={`${isMobileMenuOpen ? "text-white" : textColor} p-2 hover:opacity-70 transition-colors relative z-[60]`}
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: "100vh" } : { height: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-40 bg-zinc-950 md:hidden overflow-hidden"
      >
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-display font-light text-white hover:text-white/70 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
