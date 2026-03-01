import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { useState } from "react";

const benefits = [
  "Free Introductory Session",
  "Custom Workshop Design",
  "Student Feedback Reports",
  "Flexible Scheduling",
];

const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", college: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.college.trim()) return;
    setSubmitted(true);
  };

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
            href="#contact-form"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Collaboration info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-premium light-reflection p-8 rounded-sm"
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

          {/* Contact form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-premium light-reflection p-8 rounded-sm"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Check size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  Request Received!
                </h3>
                <p className="text-subtle text-sm">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  Get In Touch
                </h3>
                <p className="text-subtle text-xs mb-4">
                  Fill out the form and our team will reach out.
                </p>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  maxLength={100}
                  className="w-full px-4 py-2.5 text-sm bg-background/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  maxLength={255}
                  className="w-full px-4 py-2.5 text-sm bg-background/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="College / Institution Name"
                  value={form.college}
                  onChange={(e) => setForm({ ...form, college: e.target.value })}
                  required
                  maxLength={200}
                  className="w-full px-4 py-2.5 text-sm bg-background/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                />
                <textarea
                  placeholder="Tell us more (optional)"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  rows={3}
                  className="w-full px-4 py-2.5 text-sm bg-background/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-accent text-accent-foreground font-heading font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
                >
                  <Send size={14} />
                  Send Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
