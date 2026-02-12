"use client";

export function AnnouncementBar() {
  return (
    <div className="bg-foreground backdrop-blur-sm border-b border-white/5 py-4 px-4 text-center z-50 relative">
      <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-background/80">
        Complimentary Shipping on all orders over $150
      </p>
    </div>
  );
}
