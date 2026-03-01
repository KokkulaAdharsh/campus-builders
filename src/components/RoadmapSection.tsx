import { motion } from "framer-motion";

const phases = [
  {
    num: "01",
    title: "Local Activation",
    tag: "Plant the Seed",
    desc: "Launch flagship AI workshops and industry update sessions in nearby colleges. Build credibility through measurable student outcomes, testimonials, and real feedback loops. Make LYNX the name students talk about.",
  },
  {
    num: "02",
    title: "Multi-College Network",
    tag: "Grow the Movement",
    desc: "Build a connected ecosystem of innovation-driven campuses. Launch inter-college AI hackathons, establish a recognizable LYNX brand, and create a community of campus tech leaders who carry the mission forward.",
  },
  {
    num: "03",
    title: "Scale & Accelerate",
    tag: "Build the Ecosystem",
    desc: "Premium AI bootcamps. Corporate sponsorships. Industry collaboration pipelines. Online learning programs. A student startup accelerator. LYNX becomes the definitive AI campus transformation network across cities.",
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-micro text-xs mb-4"
        >
          Execution Strategy
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4"
        >
          Starting local. Scaling everywhere.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-subtle text-sm mb-12 max-w-xl"
        >
          We are not waiting for the perfect moment. We're building phase by
          phase, campus by campus.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card glass-card-hover light-reflection p-6 md:p-8 rounded-sm group relative overflow-hidden"
            >
              <div className="text-7xl font-heading font-bold text-foreground/[0.03] absolute -bottom-4 -right-2 group-hover:text-accent/[0.06] transition-colors">
                {phase.num}
              </div>
              <span className="text-micro text-accent text-[10px] mb-1 block">
                Phase {phase.num}
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                {phase.title}
              </h3>
              <p className="text-accent text-xs font-medium italic mb-4">
                {phase.tag}
              </p>
              <p className="text-subtle text-sm leading-relaxed relative z-10">
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
