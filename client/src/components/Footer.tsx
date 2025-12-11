import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:alshalafimakeen@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://t.me", label: "Telegram" },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-12 border-t border-border bg-card/20">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(oklch(0.85 0.2 140) 1px, transparent 1px),
                            linear-gradient(90deg, oklch(0.85 0.2 140) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Makeen
            </button>
            <p className="text-sm text-muted-foreground mt-2">
              IT Student & Mobile / Web Developer
            </p>
          </div>

          {/* Center - Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right - Social Links */}
          <div className="flex justify-end gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Makeen Alshalafi. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
