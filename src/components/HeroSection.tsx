import { motion } from "framer-motion";

const stats = [
  { value: "5", label: "Core Members" },
  { value: "∞", label: "Students to Impact" },
  { value: "AI", label: "Core Focus" },
  { value: "0 → 1", label: "Our Promise" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(82,85%,60%,0.04)_0%,_transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-micro text-xs mb-6 tracking-[0.2em]"
        >
          AI-Driven Campus Tech Initiative
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-heading text-7xl md:text-9xl font-bold tracking-[0.15em] mb-6 text-foreground"
        >
          LYNX
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-1 mb-8"
        >
          <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground">
            We Don't Just Teach Tech.
          </h2>
          <h2 className="font-heading text-xl md:text-3xl font-bold text-accent accent-glow">
            We Build Builders.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-subtle max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10"
        >
          A team of five hackathon winners, club leaders, and AI practitioners
          transforming local colleges into innovation-powered campuses — one
          workshop, one hackathon, one student at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#programs"
            className="px-8 py-3 bg-foreground text-background font-heading font-semibold text-sm tracking-wide hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Explore Our Programs
          </a>
          <a
            href="#partner-with-us"
            className="px-8 py-3 glass-card glass-card-hover font-heading font-semibold text-sm tracking-wide text-foreground transition-all duration-300"
          >
            Partner With LYNX
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="glass-card light-reflection rounded-sm max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-6 text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-micro text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
