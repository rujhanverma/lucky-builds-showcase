import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    emoji: "⚡",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    emoji: "🧩",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Tools & Platforms",
    emoji: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Docker", "Firebase", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Other",
    emoji: "🎯",
    skills: ["REST APIs", "Figma", "Linux", "Agile", "Problem Solving"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="section-container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Tech <span className="gradient-text">Stack</span> 💡
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          My go-to tools and technologies
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.category}
            className="glass rounded-2xl p-6 hover-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.4 }}
          >
            <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="text-lg">{cat.emoji}</span>
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="bg-white/[0.06] border border-white/[0.1] text-foreground/90 text-sm font-medium px-3 py-1.5 rounded-full hover:border-primary/40 hover:bg-primary/10 transition-all duration-200 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
