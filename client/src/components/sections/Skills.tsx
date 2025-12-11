import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Mobile UI/UX", level: 75 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Python", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 80 },
      { name: "REST APIs", level: 75 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML/CSS", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 65 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    title: "AI & Data",
    skills: [
      { name: "Machine Learning Basics", level: 60 },
      { name: "Data Analysis", level: 70 },
      { name: "Python for AI", level: 65 },
      { name: "Automation", level: 75 },
    ],
  },
];

const techStack = [
  "Flutter", "Python", "MySQL", "Firebase", "Git", "VS Code",
  "Android Studio", "Figma", "REST APIs", "JSON", "Dart", "HTML/CSS"
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">( 02 )</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              SKILLS /
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="p-6 rounded-xl border border-border bg-card/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h3
                className="text-lg font-semibold text-foreground mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3
            className="text-lg font-semibold text-foreground mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-foreground font-mono hover:border-primary hover:text-primary transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          className="absolute top-1/2 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, oklch(0.85 0.2 140 / 0.05) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
