import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
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
          <p className="text-primary font-medium mb-2">Hey there, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            Rujhan Verma
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0 mb-8">
            B.Tech student & aspiring developer crafting clean, impactful web
            experiences with modern technologies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Get in Touch
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
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
            <img
              src={profilePhoto}
              alt="Rujhan Verma - B.Tech Student & Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden md:flex justify-center mt-16"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-muted-foreground" size={22} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
