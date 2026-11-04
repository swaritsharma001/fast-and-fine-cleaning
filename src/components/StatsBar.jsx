const STATS = [
  { value: '13+', label: 'Years of Experience' },
  { value: '5',   label: 'Cleaning Categories' },
  { value: '🇦🇪', label: 'Dubai & UAE Based', isEmoji: true },
  { value: '★',   label: 'Client-Focused Service', isEmoji: true },
];

export default function StatsBar() {
  return (
    <section className="bg-green-primary w-full py-8 sm:py-10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-white/20">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center px-2 sm:px-4">
              <div className={`font-extrabold text-white mb-1 ${stat.isEmoji ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'}`}>
                {stat.value}
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
