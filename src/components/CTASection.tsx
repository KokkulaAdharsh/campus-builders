import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Free Introductory Session",
  "Custom Workshop Design",
  "Student Feedback Reports",
  "Flexible Scheduling",
];

const CTASection = () => {
  return (
    <section id="partner-with-us" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-micro text-xs mb-4 text-center"
        >
          The Future Doesn't Wait
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4 text-center"
        >
          Ready to bring LYNX to your campus?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-subtle text-sm mb-10 max-w-xl mx-auto text-center"
        >
          Whether you're a college principal, tech club lead, or a student who
          wants to make something happen — we're ready to build with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#partner-with-us"
            className="px-8 py-3 bg-accent text-accent-foreground font-heading font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300"
          >
            Invite LYNX →
          </a>
          <a
            href="#programs"
            className="px-8 py-3 glass-card glass-card-hover font-heading font-semibold text-sm tracking-wide text-foreground transition-all duration-300"
          >
            View Programs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card light-reflection p-8 md:p-10 rounded-sm max-w-2xl mx-auto"
        >
          <h3 className="font-heading text-lg font-bold text-foreground mb-2">
            For College Collaborations
          </h3>
          <p className="text-subtle text-sm mb-6 leading-relaxed">
            We partner with institutions to conduct workshops, seminars, and
            hackathons tailored to your student community. No overhead, all
            impact.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <Check size={14} className="text-accent shrink-0" />
                <span className="text-sm text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
