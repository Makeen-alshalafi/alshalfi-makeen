import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, Smartphone, Globe, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Wisal Gift Application",
    description: "A comprehensive mobile application for gift customization and ordering. Features include user authentication, real-time order tracking, push notifications, and a seamless checkout experience.",
    technologies: ["Flutter", "Firebase", "Dart", "Push Notifications"],
    category: "Mobile App",
    year: "2024",
    icon: Smartphone,
    highlights: [
      "User authentication & profiles",
      "Order customization system",
      "Real-time updates & notifications",
      "Intuitive mobile UI/UX",
    ],
  },
  {
    id: 2,
    title: "Smart Inventory System",
    description: "A mobile-first inventory management solution designed for warehouse monitoring and stock tracking. Enables businesses to efficiently manage their inventory with real-time data synchronization.",
    technologies: ["Flutter", "MySQL", "REST API", "Mobile"],
    category: "Mobile System",
    year: "2024",
    icon: Package,
    highlights: [
      "Real-time stock monitoring",
      "Warehouse management",
      "Data synchronization",
      "Reporting & analytics",
    ],
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "A full-featured online store platform built to enhance the customer shopping experience. Focused on improved navigation, product discovery, and streamlined purchasing flow.",
    technologies: ["HTML/CSS", "JavaScript", "MySQL", "PHP"],
    category: "Web Development",
    year: "2023",
    icon: Globe,
    highlights: [
      "Product catalog & search",
      "Shopping cart functionality",
      "User-friendly navigation",
      "Responsive design",
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-primary font-mono text-sm">( 03 )</span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                PROJECTS /
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xl">
              Featured projects that showcase my skills and passion for building digital solutions.
            </p>
          </div>

          {/* Project Counter */}
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-primary font-mono">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-muted-foreground">/</span>
            <span className="text-xl text-muted-foreground font-mono">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full border-border hover:border-primary hover:text-primary bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full border-border hover:border-primary hover:text-primary bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Project Display */}
          <motion.div
            key={currentIndex}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Project Visual */}
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Placeholder visual with icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-card to-muted/30">
                {(() => {
                  const IconComponent = projects[currentIndex].icon;
                  return <IconComponent className="w-24 h-24 text-primary/30 mb-4" />;
                })()}
                <span className="text-muted-foreground font-mono text-sm">
                  {projects[currentIndex].category}
                </span>
              </div>
              
              {/* Year Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-xs font-mono text-primary">
                  {projects[currentIndex].year}
                </span>
              </div>
            </motion.div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  {projects[currentIndex].category}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-bold text-foreground mt-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {projects[currentIndex].title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {projects[currentIndex].description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-foreground">Key Features:</span>
                <ul className="grid grid-cols-2 gap-2">
                  {projects[currentIndex].highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {projects[currentIndex].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-border bg-card/50 text-xs font-mono text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View Details
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Project Dots Navigation */}
        <motion.div
          className="flex justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
