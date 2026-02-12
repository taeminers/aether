import { ProductIntro } from "@/components/product/product-intro";
import { OlfactoryBreakdown } from "@/components/product/olfactory-breakdown";
import { BottleShowcase } from "@/components/product/bottle-showcase";
import { PurchaseCTA } from "@/components/product/purchase-cta";
import { Hero } from "@/components/hero";
import { IngredientsShowcase } from "@/components/product/ingredients-showcase";
import { BentoGrid } from "@/components/product/bento-grid";
import { AmbassadorsSection } from "@/components/product/ambassadors-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Hero Section */}
      <Hero />

      {/* Product Details Flow */}
      <ProductIntro />
      <IngredientsShowcase />
      <BentoGrid />
      <AmbassadorsSection />
    </main>
  );
}
