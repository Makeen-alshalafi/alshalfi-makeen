import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Database, Brain, Globe, Zap } from "lucide-react";

const highlights = [
  { icon: Smartphone, label: "Mobile Dev", description: "Flutter & Native" },
  { icon: Code2, label: "Web Dev", description: "Frontend & Backend" },
  { icon: Database, label: "Databases", description: "MySQL & Firebase" },
  { icon: Brain, label: "AI/ML", description: "Fundamentals & Basics" },
  { icon: Globe, label: "Languages", description: "Arabic & English" },
  { icon: Zap, label: "Automation", description: "Scripts & Tools" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">( 01 )</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ABOUT ME /
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl">
            Get to know me better — my background, what drives me, and what I bring to the table.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I am an <span className="text-primary font-medium">Information Technology student</span> at 
                Al-Razi University, expected to graduate in 2025. My journey in tech has been driven by 
                curiosity and a passion for building solutions that make a difference.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I specialize in <span className="text-foreground">Flutter development</span> for cross-platform 
                mobile applications, along with <span className="text-foreground">Python programming</span> for 
                automation, data analysis, and backend services. My expertise extends to database management 
                with MySQL and Firebase, enabling me to build full-stack solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Beyond development, I have a growing interest in <span className="text-foreground">AI and Machine Learning</span>, 
                having completed foundational courses in data science and AI fundamentals. I believe in continuous 
                learning and staying updated with modern technologies.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new tech trends, playing football, or 
                working on personal projects that challenge my skills and creativity.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div>
                <div className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  3+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  3
                </div>
                <div className="text-sm text-muted-foreground mt-1">Certificates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  2025
                </div>
                <div className="text-sm text-muted-foreground mt-1">Graduation</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="group p-5 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
