import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Adharsh",
    role: "Founder & AI Lead",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Adharsh&backgroundColor=transparent",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Member 2",
    role: "Full-Stack Developer",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Member2&backgroundColor=transparent",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Member 3",
    role: "Community Lead",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Member3&backgroundColor=transparent",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

const TeamCard = ({ member }: { member: (typeof teamMembers)[0] }) => (
  <div className="glass-card-premium light-reflection rounded-sm p-8 w-[260px] shrink-0 mx-3 group flex flex-col items-center text-center">
    {/* Circular profile photo */}
    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border group-hover:border-accent/40 transition-colors duration-500 mb-5 bg-secondary">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        loading="lazy"
      />
    </div>

    <h3 className="font-heading text-base font-bold text-foreground mb-1">
      {member.name}
    </h3>
    <p className="text-subtle text-xs mb-4">{member.role}</p>

    {/* Social icons */}
    <div className="flex gap-3">
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors duration-300"
        aria-label={`${member.name} LinkedIn`}
      >
        <Linkedin size={14} />
      </a>
      <a
        href={member.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors duration-300"
        aria-label={`${member.name} GitHub`}
      >
        <Github size={14} />
      </a>
    </div>
  </div>
);

const TeamSection = () => {
  // Triple the array for seamless infinite scroll
  const scrollItems = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];

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
          Meet the Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-subtle text-sm max-w-xl"
        >
          The builders behind the mission — hackathon winners, community leaders, and AI practitioners.
        </motion.p>
      </div>

      {/* Infinite scroll */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="team-scroll flex whitespace-nowrap py-2">
          {scrollItems.map((member, i) => (
            <TeamCard key={`${member.name}-${i}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
