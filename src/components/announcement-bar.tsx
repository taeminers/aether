"use client";

export function AnnouncementBar() {
  return (
    <div className="bg-foreground backdrop-blur-sm border-b border-white/5 py-3 px-4 text-center z-[60] relative">
      <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-background">
        Complimentary Shipping on all orders over $150
      </p>
    </div>
  );
}
