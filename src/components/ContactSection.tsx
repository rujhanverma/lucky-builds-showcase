import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="section-container text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>
      <motion.p
        className="text-muted-foreground mb-10 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        I'm always open to new opportunities, collaborations, or just a friendly
        chat. Drop me a line!
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <a
          href="mailto:lucky@example.com"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          <Mail size={18} /> Email Me
        </a>
        <a
          href="https://github.com/lucky"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-border text-foreground px-5 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
        >
          <Github size={18} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/lucky"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-border text-foreground px-5 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-border text-foreground px-5 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
        >
          <FileDown size={18} /> Resume
        </a>
      </motion.div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rujhan Verma. Built with ♥
      </p>
    </div>
  </section>
);

export default ContactSection;
