export function OlfactoryBreakdown() {
  const notes = [
    {
      title: "Top Notes",
      description: "The initial impact.",
      ingredients: ["Ozone", "Bergamot", "White Pepper"],
    },
    {
      title: "Heart Notes",
      description: "The core identity.",
      ingredients: ["Iris", "Rainwater", "Salt"],
    },
    {
      title: "Base Notes",
      description: "The lingering trace.",
      ingredients: ["Ambergris", "White Musk", "Cedar"],
    },
  ];

  return (
    <section className="w-full py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {notes.map((note, index) => (
            <div key={index} className="flex flex-col items-center text-center pt-12 md:pt-0 md:px-4 space-y-4">
              <h3 className="text-xl font-display uppercase tracking-widest text-white/90">
                {note.title}
              </h3>
              <p className="text-sm font-sans text-white/40 italic">
                {note.description}
              </p>
              <ul className="space-y-2 mt-4">
                {note.ingredients.map((ingredient, i) => (
                  <li key={i} className="text-lg font-light text-white/70">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
