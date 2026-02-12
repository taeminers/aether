import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { AnnouncementBar } from "@/components/announcement-bar";
import { CartProvider } from "@/context/cart-context";
import { CartSidebar } from "@/components/cart/cart-sidebar";

import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AETHER",
  description: "Atmospheric Precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistSans.variable} antialiased`}
      >
        <CartProvider>
          <CartSidebar />
          <header className="fixed top-0 left-0 right-0 z-50">
            <AnnouncementBar />
            <Navbar />
          </header>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
