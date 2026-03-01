import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Docker", "Firebase", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Other",
    skills: ["REST APIs", "Figma", "Linux", "Agile", "Problem Solving"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-secondary/40">
    <div className="section-container">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Skills & Tools
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.4 }}
          >
            <h3 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="bg-card border border-border text-foreground text-sm font-medium px-3 py-1.5 rounded-lg hover:border-primary/40 transition-colors"
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
