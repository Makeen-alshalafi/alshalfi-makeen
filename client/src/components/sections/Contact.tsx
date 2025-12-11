import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alshalafimakeen@gmail.com",
    href: "mailto:alshalafimakeen@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sana'a, Yemen",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:alshalafimakeen@gmail.com",
    color: "hover:text-red-400",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-400",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    href: "https://t.me",
    color: "hover:text-sky-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.85 0.2 140 / 0.05) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.15 180 / 0.05) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">( 06 )</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              GET IN TOUCH /
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <motion.div
            className="relative p-8 md:p-12 rounded-3xl border border-border bg-card/30 overflow-hidden mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 text-center">
              <motion.h3
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Let's Build Something{" "}
                <span className="text-primary">Amazing</span> Together
              </motion.h3>

              <motion.p
                className="text-muted-foreground max-w-lg mx-auto mb-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                Whether you have a project idea, a question, or just want to say hello, 
                feel free to reach out. I'm always open to discussing new opportunities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium gap-2"
                >
                  <a href="mailto:alshalafimakeen@gmail.com">
                    <Send className="w-4 h-4" />
                    Send Me an Email
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
                Contact Info
              </h4>
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:border-primary/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
                Connect With Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-xl border border-border bg-card/30 hover:border-primary/30 transition-all group ${link.color}`}
                  >
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-current transition-colors" />
                    <span className="text-foreground group-hover:text-current transition-colors">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
