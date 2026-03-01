import { motion } from "framer-motion";
import { GraduationCap, Code, Lightbulb } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary/40">
    <div className="section-container">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          {
            icon: <GraduationCap size={28} />,
            title: "Education",
            desc: "Pursuing B.Tech in Computer Science — passionate about software engineering, algorithms, and building real-world solutions.",
          },
          {
            icon: <Code size={28} />,
            title: "What I Do",
            desc: "I build responsive web apps, experiment with full-stack technologies, and love turning ideas into polished digital products.",
          },
          {
            icon: <Lightbulb size={28} />,
            title: "Interests",
            desc: "Open-source contribution, UI/UX design, competitive programming, and exploring emerging technologies like AI/ML.",
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-accent-foreground mb-4">
              {card.icon}
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              {card.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        I'm a curious developer who thrives on learning. When I'm not coding,
        you'll find me exploring tech blogs, tinkering with side projects, or
        brainstorming the next big idea.
      </motion.p>
    </div>
  </section>
);

export default AboutSection;
