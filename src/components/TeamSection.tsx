import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Arjun Mehta",
    role: "AI Lead & Strategist",
    tags: ["GenAI", "ML", "Strategy"],
    initial: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Full-Stack Developer",
    tags: ["MERN", "Cloud", "APIs"],
    initial: "PS",
  },
  {
    name: "Karan Verma",
    role: "Hackathon Architect",
    tags: ["Innovation", "Mentorship"],
    initial: "KV",
  },
  {
    name: "Sneha Iyer",
    role: "Community Builder",
    tags: ["Outreach", "Partnerships"],
    initial: "SI",
  },
  {
    name: "Rohan Das",
    role: "Workshop Designer",
    tags: ["Curriculum", "AI Apps"],
    initial: "RD",
  },
];

const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <div className="glass-card-premium light-reflection rounded-sm p-6 w-[280px] shrink-0 mx-3 group">
    <div className="w-16 h-16 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-500">
      <span className="font-heading text-xl font-bold text-accent">{member.initial}</span>
    </div>
    <h3 className="font-heading text-base font-bold text-foreground mb-1">
      {member.name}
    </h3>
    <p className="text-subtle text-xs mb-3">{member.role}</p>
    <div className="flex flex-wrap gap-1.5">
      {member.tags.map((tag) => (
        <span
          key={tag}
          className="text-[9px] text-micro px-2 py-0.5 border border-border rounded-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const TeamSection = () => {
  const doubled = [...teamMembers, ...teamMembers];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-micro text-xs mb-4"
        >
          The Team
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4"
        >
          5 builders. One mission.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-subtle text-sm max-w-xl"
        >
          Every member of LYNX has been in the trenches — building, competing, and mentoring.
        </motion.p>
      </div>

      {/* Endless scroll */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="team-scroll flex whitespace-nowrap py-2">
          {doubled.map((member, i) => (
            <TeamCard key={`${member.name}-${i}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
