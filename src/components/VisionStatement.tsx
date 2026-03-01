import { motion } from "framer-motion";

const VisionStatement = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card light-reflection p-10 md:p-16 rounded-sm"
        >
          <p className="font-heading text-xl md:text-3xl font-bold text-foreground leading-relaxed mb-8">
            "Students don't lack talent.
            <br />
            They lack exposure, direction,
            <br />
            and a reason to build."
          </p>
          <p className="text-subtle text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            LYNX was built to be that reason. We are a movement that bridges
            ambition and opportunity — by bringing real AI education, industry
            insight, and execution culture straight to the campus.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default VisionStatement;
