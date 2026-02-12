export function BottleShowcase() {
  return (
    <section className="relative w-full py-32 flex flex-col items-center justify-center bg-zinc-900 overflow-hidden">
      <div className="relative w-64 h-96 md:w-80 md:h-[500px] border border-white/20 rounded-t-full rounded-b-lg backdrop-blur-md bg-white/5 shadow-[0_0_100px_rgba(255,255,255,0.05)] overflow-hidden">
        {/* Inner liquid effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/10 opacity-60" />
        
        {/* Glass reflection */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 via-transparent to-transparent opacity-50" />
        
        {/* Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <span className="font-display text-2xl tracking-[0.2em] text-white">VELUM</span>
        </div>
      </div>
      
      {/* Pedestal Shadow */}
      <div className="w-64 h-4 bg-black/50 blur-xl rounded-[100%] mt-8" />

      <h3 className="mt-12 text-sm font-sans uppercase tracking-[0.3em] text-zinc-500">
        The Vessel
      </h3>
    </section>
  );
}
