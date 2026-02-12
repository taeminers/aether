export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover -z-10"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>



      <div className="relative z-10 flex flex-col items-center justify-center p-24 text-center">
        <h2 className="text-xl md:text-3xl font-bold text-white tracking-widest uppercase mb-4">
          VELUM
        </h2>
        <p className="text-xl md:text-xl text-white/80 font-light tracking-wide">
          Atmospheric Precision
        </p>
      </div>
    </main>
  );
}
