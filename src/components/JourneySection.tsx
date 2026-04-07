import { motion } from "framer-motion";
import { Flag, Calendar, Trophy } from "lucide-react";

const milestones = [
  {
    date: "August 2023",
    title: "LYNX Was Founded",
    description:
      "Born out of a mission to bridge classroom learning and industry skills on campus.",
    type: "founding" as const,
    highlight: true,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    date: "November 2023",
    title: "First Workshop Conducted",
    description:
      "Hosted our first hands-on Web Development workshop with 80+ students attending and building real projects.",
    type: "event" as const,
    highlight: false,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    date: "December 2024",
    title: "SIH 2024 Grand Finale",
    description:
      "Represented VBIT at Smart India Hackathon 2024 at the national level — competing against the best in the country.",
    type: "achievement" as const,
    highlight: true,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
  },
];

const typeIcons = {
  founding: Flag,
  event: Calendar,
  achievement: Trophy,
};

const JourneySection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => {
            const Icon = typeIcons[milestone.type];

            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`rounded-sm overflow-hidden transition-all duration-500 group ${
                  milestone.highlight
                    ? "glass-card-premium light-reflection border-accent/30 shadow-[0_0_30px_hsla(82,85%,60%,0.08)]"
                    : "glass-card-premium light-reflection"
                }`}
              >
                {/* Image */}
                <div className="w-full aspect-[3/2] overflow-hidden relative">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  {/* Icon badge */}
                  <div
                    className={`absolute top-3 right-3 w-9 h-9 rounded-sm flex items-center justify-center border ${
                      milestone.highlight
                        ? "bg-accent/20 border-accent/40"
                        : "bg-secondary/80 border-border"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={milestone.highlight ? "text-accent" : "text-muted-foreground"}
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
