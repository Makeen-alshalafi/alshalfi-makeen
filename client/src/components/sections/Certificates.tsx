import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, CheckCircle } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Introduction to Data Science",
    issuer: "Credly",
    description: "Foundational knowledge in data science concepts, including data analysis, visualization, and basic statistical methods.",
    skills: ["Data Analysis", "Statistics", "Python", "Visualization"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    title: "AI Fundamentals",
    issuer: "Credly",
    description: "Core concepts of Artificial Intelligence including machine learning basics, neural networks, and AI applications.",
    skills: ["Machine Learning", "Neural Networks", "AI Concepts", "Problem Solving"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    id: 3,
    title: "Million AI Programmers",
    issuer: "Dubai AI Center",
    description: "Comprehensive AI programming certification as part of the Million AI Programmers initiative by Dubai's AI Center.",
    skills: ["AI Programming", "Python", "Deep Learning", "AI Applications"],
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">( 05 )</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              CERTIFICATES /
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl">
            Professional certifications that validate my skills and continuous learning journey.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={`group relative p-6 rounded-2xl border ${cert.borderColor} bg-card/30 overflow-hidden hover:border-primary/50 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {cert.title}
                </h3>
                
                <p className="text-sm text-primary/80 font-medium mb-3">
                  {cert.issuer}
                </p>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-background/50 border border-border text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-0.5 text-xs text-muted-foreground">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* View Link */}
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link">
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            Continuously learning and adding new certifications to expand my expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
