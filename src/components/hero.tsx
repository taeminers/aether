export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-32">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 text-center mb-8">
        <h2 className="text-xl md:text-3xl font-display font-light tracking-[0.3em] uppercase mb-4 text-white drop-shadow-lg">
          VELUM
        </h2>
        <p className="text-sm md:text-lg font-sans font-light tracking-widest text-white/80">
          Atmospheric Precision
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </div>
    </div>
  );
}
