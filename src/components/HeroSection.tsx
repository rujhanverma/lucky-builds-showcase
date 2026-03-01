import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center section-padding pt-28"
  >
    <div className="section-container w-full">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-sm text-muted-foreground font-medium">available for opportunities</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            Hey, I'm{" "}
            <span className="gradient-text">Rujhan</span>
            <span className="inline-block animate-float ml-2">👋</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            2nd year B.Tech student who loves{" "}
            <span className="text-foreground font-medium">design</span>,{" "}
            <span className="text-foreground font-medium">code</span> &{" "}
            <span className="text-foreground font-medium">creativity</span>.
            Building cool stuff for the web. 🚀
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-gradient-to-r from-primary to-accent text-white px-7 py-3.5 rounded-full font-semibold hover-glow text-sm"
            >
              View Projects ⚡
            </a>
            <a
              href="#contact"
              className="glass rounded-full text-foreground px-7 py-3.5 font-semibold hover-glow text-sm gradient-border"
            >
              Let's Talk 💬
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-glow-cyan blur-2xl opacity-30 scale-110 animate-pulse-glow" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden gradient-border glow-md">
              <img
                src={profilePhoto}
                alt="Rujhan Verma - B.Tech Student & Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden md:flex justify-center mt-16"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" aria-label="Scroll down" className="glass rounded-full p-2">
          <ArrowDown className="text-muted-foreground" size={20} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
