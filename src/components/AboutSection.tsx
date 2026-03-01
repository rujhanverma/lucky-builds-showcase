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

const cards = [
  {
    icon: <GraduationCap size={24} />,
    emoji: "🎓",
    title: "Education",
    desc: "2nd year B.Tech in CS — obsessed with software engineering, DSA, and building things that matter.",
  },
  {
    icon: <Code size={24} />,
    emoji: "💻",
    title: "What I Do",
    desc: "Full-stack web apps, creative UI experiments, and turning caffeine into pixel-perfect products.",
  },
  {
    icon: <Lightbulb size={24} />,
    emoji: "✨",
    title: "Interests",
    desc: "Open-source, UI/UX design, competitive programming, and vibing with AI/ML explorations.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="section-container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          About <span className="gradient-text">Me</span> 🧑‍💻
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          A quick look at who I am and what drives me
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="glass rounded-2xl p-6 hover-glow group"
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-3xl mb-3">{card.emoji}</div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              {card.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed glass rounded-2xl p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        I'm a curious dev who thrives on learning new things. When I'm not
        coding, I'm exploring tech Twitter, tinkering with side projects, or
        brainstorming the next big idea. Let's build something cool together 🤝
      </motion.p>
    </div>
  </section>
);

export default AboutSection;
