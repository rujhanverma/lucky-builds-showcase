import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "DevConnect",
    description:
      "A social platform for developers to share projects, collaborate, and get feedback from the community.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/lucky",
  },
  {
    title: "TaskFlow",
    description:
      "A Kanban-style task manager with drag-and-drop, real-time updates, and team collaboration features.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com/lucky",
  },
  {
    title: "WeatherNow",
    description:
      "A sleek weather dashboard with location-based forecasts, interactive charts, and daily notifications.",
    stack: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com/lucky",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="section-container">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="bg-card border border-border rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium bg-accent text-accent-foreground px-2.5 py-1 rounded-md"
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
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
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
