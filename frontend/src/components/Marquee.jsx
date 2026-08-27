const items = [
  "Good Coffee",
  "Satara Road · Pune",
  "Fresh Beverages",
  "Open 11 AM – 11 PM",
  "Café Food",
  "Good Conversations",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div data-testid="marquee" className="overflow-hidden border-y border-cream/10 bg-espresso py-5" aria-hidden="true">
      <div className="animate-marquee-slow flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className={`whitespace-nowrap px-6 font-display text-lg md:text-xl font-light tracking-wide text-latte/85 ${i % 2 ? "italic text-caramel" : ""}`}>
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-caramel/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
