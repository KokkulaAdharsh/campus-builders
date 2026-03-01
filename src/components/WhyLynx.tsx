import { motion } from "framer-motion";

const reasons = [
  {
    title: "We Are Hackathon Winners",
    desc: "Not event organizers who read about hackathons — actual competitors who've built, lost, won, and learned from every iteration.",
  },
  {
    title: "We Live Inside Tech Communities",
    desc: "Active contributors to multiple tech clubs and communities — we know the culture, the gaps, and what actually drives student growth.",
  },
  {
    title: "We Teach What Industry Uses",
    desc: "No outdated syllabuses. No irrelevant demos. We teach the exact tools, frameworks, and AI systems that companies are deploying today.",
  },
  {
    title: "We Understand Student Struggles",
    desc: "The confusion of where to start, the imposter syndrome, the gap between theory and practice — we've felt it all, and we know how to close it.",
  },
];

const badges = [
  "Hackathon Winners",
  "Club Leaders",
  "AI Practitioners",
  "Real Builders",
  "Student Mentors",
];

const WhyLynx = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-micro text-xs mb-4"
        >
          Why LYNX
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4"
        >
          Built by builders. For builders.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-subtle text-sm mb-12 max-w-xl"
        >
          We have stood exactly where students stand today — confused about where
          to start, eager to build something real, and searching for a mentor who
          gets it.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glass-card-hover light-reflection p-6 rounded-sm"
            >
              <h3 className="font-heading text-base font-bold text-foreground mb-2">
                {r.title}
              </h3>
              <p className="text-subtle text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Positioning Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card light-reflection p-8 rounded-sm text-center"
        >
          <p className="font-heading text-4xl font-bold text-accent mb-2">5</p>
          <p className="text-micro text-xs mb-4">
            tech enthusiasts with a shared mission
          </p>
          <p className="font-heading text-xl font-bold text-foreground mb-6">
            "Students Who Build Students."
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="text-[10px] text-micro px-4 py-1.5 border border-border rounded-sm hover:border-accent/30 transition-colors"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyLynx;
