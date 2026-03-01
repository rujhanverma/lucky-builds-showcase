import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: "DevConnect",
    description:
      "A social platform for developers to share projects, collaborate, and get feedback from the community.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/lucky",
    emoji: "🔗",
  },
  {
    title: "TaskFlow",
    description:
      "A Kanban-style task manager with drag-and-drop, real-time updates, and team collaboration features.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com/lucky",
    emoji: "📋",
  },
  {
    title: "WeatherNow",
    description:
      "A sleek weather dashboard with location-based forecasts, interactive charts, and daily notifications.",
    stack: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com/lucky",
    emoji: "🌤️",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="section-container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          My <span className="gradient-text">Projects</span> 🛠️
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Stuff I've built that I'm proud of
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="glass rounded-2xl p-6 flex flex-col hover-glow group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="text-3xl mb-3">{p.emoji}</div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium bg-white/[0.06] border border-white/[0.1] text-foreground/80 px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={16} /> Code
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink size={16} /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
