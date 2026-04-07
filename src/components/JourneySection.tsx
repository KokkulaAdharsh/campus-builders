import { motion } from "framer-motion";
import { Flag, Calendar, Trophy, Rocket } from "lucide-react";

const milestones = [
  {
    date: "August 2023",
    title: "LYNX Was Founded",
    description:
      "Born out of a mission to bridge classroom learning and industry skills on campus.",
    type: "founding" as const,
    highlight: true,
  },
  {
    date: "November 2023",
    title: "First Workshop Conducted",
    description:
      "Hosted our first hands-on Web Development workshop with 80+ students attending and building real projects.",
    type: "event" as const,
    highlight: false,
  },
  {
    date: "December 2024",
    title: "SIH 2024 Grand Finale",
    description:
      "Represented VBIT at Smart India Hackathon 2024 at the national level — competing against the best in the country.",
    type: "achievement" as const,
    highlight: true,
  },
];

const typeIcons = {
  founding: Flag,
  event: Calendar,
  launch: Rocket,
  achievement: Trophy,
};

const JourneySection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-micro text-xs mb-4 text-center"
        >
          Our Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4 text-center"
        >
          Milestones that shaped LYNX.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-subtle text-sm mb-16 max-w-xl mx-auto text-center"
        >
          From a spark of an idea to national-level impact — here's how the journey unfolded.
        </motion.p>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {milestones.map((milestone, index) => {
            const Icon = typeIcons[milestone.type];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-start mb-16 last:mb-0 md:justify-${isLeft ? "start" : "end"}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 border-2 transition-all duration-300 ${
                    milestone.highlight
                      ? "bg-accent/20 border-accent shadow-[0_0_20px_hsla(82,85%,60%,0.3)]"
                      : "bg-secondary border-border"
                  }`}
                >
                  <Icon
                    size={18}
                    className={milestone.highlight ? "text-accent" : "text-muted-foreground"}
                  />
                </div>

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                    isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                  }`}
                >
                  <div
                    className={`rounded-sm p-6 transition-all duration-500 ${
                      milestone.highlight
                        ? "glass-card-premium light-reflection border-accent/30 shadow-[0_0_30px_hsla(82,85%,60%,0.08)]"
                        : "glass-card-premium light-reflection"
                    }`}
                  >
                    <span
                      className={`text-micro text-[10px] mb-2 block ${
                        milestone.highlight ? "text-accent" : ""
                      }`}
                    >
                      {milestone.date}
                    </span>
                    <h3 className="font-heading text-base font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-subtle text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
