import { motion } from "framer-motion";
import { ArrowDown, MapPin, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.85 0.2 140 / 0.08) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.15 180 / 0.06) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.85 0.2 140) 1px, transparent 1px),
                              linear-gradient(90deg, oklch(0.85 0.2 140) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.8 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
          >
            Hi, I'm{" "}
            <span className="text-primary">Makeen Alshalafi</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
          >
            IT Student & Mobile / Web Developer
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.4 }}
          >
            Crafting modern mobile and web applications with Flutter, Python, and cutting-edge technologies. 
            Passionate about creating seamless digital experiences.
          </motion.p>

          {/* Location */}
          <motion.div
            className="flex items-center gap-2 text-muted-foreground mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.6 }}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Sana'a, Yemen</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.8 }}
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium"
            >
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection("#projects")}
              variant="outline"
              className="border-border hover:border-primary hover:text-primary px-8 py-6 text-base font-medium bg-transparent"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 4 }}
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Connect</span>
            <div className="w-12 h-px bg-border" />
            <div className="flex items-center gap-3">
              <a
                href="mailto:alshalafimakeen@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 4.2 }}
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}
