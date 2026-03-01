import { motion } from "framer-motion";

const programs = [
  {
    num: "01",
    title: "AI-Focused Workshops",
    desc: "From Machine Learning fundamentals to Generative AI tools, prompt engineering, and building AI-powered apps — we make AI accessible, practical, and immediately applicable.",
    tags: ["GenAI", "ML", "Prompt Engineering", "AI Apps"],
  },
  {
    num: "02",
    title: "Industry Update Sessions",
    desc: "Regular curated sessions on what's actually happening in tech — hiring trends, emerging frameworks, startup ecosystems, and the real tools that companies use daily.",
    tags: ["Tech Trends", "Hiring Intel", "Startups"],
  },
  {
    num: "03",
    title: "Hands-On Tech Workshops",
    desc: "MERN Stack, API development, Git & GitHub, cloud fundamentals — structured sessions that end with a deployed project, not just a participation certificate.",
    tags: ["MERN Stack", "APIs", "GitHub", "Cloud"],
  },
  {
    num: "04",
    title: "Hackathons & Innovation Challenges",
    desc: "AI-themed hackathons with real-world problem statements, live mentorship during the event, structured evaluation, and post-hackathon growth sessions.",
    tags: ["AI Hackathons", "Mentorship", "Problem Solving"],
  },
  {
    num: "05",
    title: "Structured Bootcamps",
    desc: "3–7 day immersive programs that transform beginners into builders. AI + development integrated curriculum with a live project showcase and real deployment.",
    tags: ["3–7 Days", "AI + Dev", "Live Projects"],
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-micro text-xs mb-4"
        >
          What We Deliver
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-12"
        >
          Programs built for real-world impact.
        </motion.h2>

        <div className="space-y-4">
          {programs.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card glass-card-hover light-reflection p-6 md:p-8 rounded-sm group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <span className="text-micro text-accent text-xs shrink-0">
                  {p.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-subtle text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-micro px-3 py-1 border border-border rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card light-reflection p-6 mt-8 rounded-sm text-center"
        >
          <p className="text-subtle text-sm">
            <span className="text-foreground font-semibold">Our Promise:</span>{" "}
            Every LYNX program is built around one principle — students leave
            having{" "}
            <span className="text-accent font-semibold">
              built something real.
            </span>{" "}
            No passive listening. No slide-only sessions. Only execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
