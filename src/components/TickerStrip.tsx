const items = [
  "AI WORKSHOPS",
  "HACKATHONS",
  "INDUSTRY UPDATES",
  "BOOTCAMPS",
  "PROJECT BUILDING",
  "MENTORSHIP",
  "CAMPUS ACTIVATION",
  "REAL-WORLD SKILLS",
];

const TickerStrip = () => {
  const repeated = [...items, ...items];

  return (
    <div className="w-full border-y border-border py-4 overflow-hidden bg-secondary/50">
      <div className="ticker-scroll flex whitespace-nowrap gap-8">
        {repeated.map((item, i) => (
          <span key={i} className="text-micro text-xs flex items-center gap-8">
            <span className="text-accent">◆</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerStrip;
