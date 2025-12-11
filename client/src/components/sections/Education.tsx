import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    "Software Engineering",
    "Database Management",
    "Mobile Development",
    "Web Technologies",
    "Data Structures",
    "Computer Networks",
    "AI Fundamentals",
    "System Analysis",
  ];

  return (
    <section id="education" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">( 04 )</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              EDUCATION /
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl">
            My academic journey and the foundation of my technical knowledge.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative p-8 md:p-10 rounded-2xl border border-border bg-card/30 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3
                      className="text-xl md:text-2xl font-bold text-foreground mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Bachelor in Information Technology
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      Al-Razi University
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 self-start">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">In Progress</span>
                </div>
              </div>

              {/* Details */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary/60" />
                  <span>Expected Graduation: <span className="text-foreground font-medium">2025</span></span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary/60" />
                  <span>Sana'a, Yemen</span>
                </div>
              </div>

              {/* Relevant Courses */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Relevant Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <motion.span
                      key={course}
                      className="px-3 py-1.5 rounded-lg border border-border bg-background/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline decoration */}
        <motion.div
          className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </section>
  );
}
