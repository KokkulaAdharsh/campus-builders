import { motion } from "framer-motion";
import { Linkedin, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import meghamshImg from "@/assets/meghamsh.png";
import rakeshImg from "@/assets/rakesh.png";
import rohiniImg from "@/assets/rohini.png";
import saiTejaImg from "@/assets/sai_teja.jpeg";
import adharshImg from "@/assets/adharsh.png";

const teamMembers = [
  {
    name: "Adharsh",
    image: adharshImg,
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Meghamsh",
    image: meghamshImg,
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Rakesh",
    image: rakeshImg,
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Rohini",
    image: rohiniImg,
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Sai Teja",
    image: saiTejaImg,
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

const TeamCard = ({ member }: { member: (typeof teamMembers)[0] }) => (
  <div className="glass-card-premium light-reflection rounded-sm w-[220px] md:w-[240px] shrink-0 group flex flex-col items-center text-center overflow-hidden">
    <div className="w-full aspect-square overflow-hidden relative">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>

    <div className="p-5 w-full">
      <h3 className="font-heading text-base font-bold text-foreground mb-3">
        {member.name}
      </h3>

      <div className="flex justify-center gap-3">
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
  </div>
);

const TeamSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    setIsUserInteracting(true);
    if (scrollContainerRef.current) {
      const scrollAmount = 236;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 5000);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 236;
    const singleSetWidth = cardWidth * teamMembers.length;
    container.scrollLeft = singleSetWidth;

    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
      
      autoScrollIntervalRef.current = setInterval(() => {
        if (!isUserInteracting && container) {
          container.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
          });
        }
      }, 3000);
    };

    const handleScroll = () => {
      if (container.scrollLeft >= singleSetWidth * 2 - 10) {
        container.scrollLeft = singleSetWidth;
      } else if (container.scrollLeft <= 10) {
        container.scrollLeft = singleSetWidth;
      }
    };

    container.addEventListener('scroll', handleScroll);
    startAutoScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    };
  }, [isUserInteracting]);

  const handleUserScroll = () => {
    setIsUserInteracting(true);
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 5000);
  };

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

      <div className="relative">
        {/* Desktop: Auto-scroll animation */}
        <div className="hidden md:block">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="team-scroll flex whitespace-nowrap py-2 gap-6">
            {[...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers].map((member, i) => (
              <TeamCard key={`${member.name}-${i}`} member={member} />
            ))}
          </div>
        </div>

        {/* Mobile: Infinite loop carousel */}
        <div className="md:hidden relative px-6">
          <div 
            ref={scrollContainerRef}
            onTouchStart={() => setIsUserInteracting(true)}
            onTouchEnd={handleUserScroll}
            onMouseDown={() => setIsUserInteracting(true)}
            onMouseUp={handleUserScroll}
            className="flex overflow-x-auto gap-4 scrollbar-hide pb-2"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {[...teamMembers, ...teamMembers, ...teamMembers].map((member, i) => (
              <TeamCard key={`${member.name}-${i}`} member={member} />
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-card-premium flex items-center justify-center text-foreground hover:text-accent transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-card-premium flex items-center justify-center text-foreground hover:text-accent transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
