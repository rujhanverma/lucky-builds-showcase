import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="section-container text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Let's <span className="gradient-text">Connect</span> 🤙
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Got a cool idea, collab, or just wanna say hi? I'm always down to chat!
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <a
          href="mailto:lucky@example.com"
          className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold hover-glow text-sm"
        >
          <Mail size={18} /> Email Me 📧
        </a>
        <a
          href="https://github.com/lucky"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 glass rounded-full text-foreground px-6 py-3 font-semibold hover-glow text-sm"
        >
          <Github size={18} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/lucky"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 glass rounded-full text-foreground px-6 py-3 font-semibold hover-glow text-sm"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 glass rounded-full text-foreground px-6 py-3 font-semibold hover-glow text-sm"
        >
          <FileDown size={18} /> Resume
        </a>
      </motion.div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rujhan Verma · made with 💜
      </p>
    </div>
  </section>
);

export default ContactSection;
