import { motion } from "framer-motion";

const problems = [
  {
    title: "Outdated Curriculum",
    body: "What colleges teach and what companies need are two completely different worlds — and the gap grows wider every year.",
  },
  {
    title: "Zero AI Exposure",
    body: "Most students graduate without ever building an AI-powered project, despite AI becoming the industry's default tool.",
  },
  {
    title: "Theory Without Execution",
    body: "Students can explain algorithms but can't deploy a real app. Learning without building is not learning — it's memorizing.",
  },
  {
    title: "Limited Hackathon Culture",
    body: "The innovation mindset is confined to a few elite institutions. The rest are left behind — not due to talent, but lack of access.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-micro text-xs mb-4"
        >
          The Reality
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-6 max-w-2xl"
        >
          The gap between campus and industry has never been wider.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-subtle max-w-2xl mb-4 text-sm leading-relaxed"
        >
          <p>
            Students graduate with degrees but not skills. Syllabuses teach
            yesterday's tools. Artificial Intelligence is reshaping every
            industry — yet most classrooms haven't even introduced it.
          </p>
          <p className="mt-4 text-foreground font-semibold">
            That's exactly why LYNX exists.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glass-card-hover light-reflection p-6 rounded-sm"
            >
              <div className="text-micro text-[10px] mb-3 text-accent">
                0{i + 1}
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-subtle text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
