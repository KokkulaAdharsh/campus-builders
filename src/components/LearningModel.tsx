import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Awareness",
    desc: "Understanding the real state of AI, industry evolution, and what actually gets students hired.",
  },
  {
    num: "02",
    title: "Learning",
    desc: "Structured, concept-first sessions backed by live implementation — guided by people who've done it.",
  },
  {
    num: "03",
    title: "Building",
    desc: 'Real projects. Real code. Real products. From "I know about it" to "I have built it."',
  },
  {
    num: "04",
    title: "Exposure",
    desc: "Market realities, career direction, startup thinking, and a community of fellow builders.",
  },
];

const LearningModel = () => {
  return (
    <section id="approach" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-micro text-xs mb-4"
        >
          How We Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4"
        >
          The LYNX Learning Model
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-subtle text-sm mb-12 max-w-xl"
        >
          A four-layer impact structure designed to move every student from
          awareness to full execution.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card glass-card-hover light-reflection p-6 rounded-sm relative group"
            >
              <div className="text-5xl font-heading font-bold text-foreground/5 absolute top-4 right-4 group-hover:text-accent/10 transition-colors">
                {step.num}
              </div>
              <span className="text-micro text-accent text-[10px] mb-3 block">
                Step {step.num}
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-subtle text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningModel;
