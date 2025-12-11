import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 2500);
      }}
    >
      {/* Logo / Name */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Makeen
        </h1>
        <p className="text-muted-foreground text-sm md:text-base tracking-widest">
          © Portfolio 2025
        </p>
      </motion.div>

      {/* Loading Bar */}
      <motion.div
        className="mt-12 w-48 md:w-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="h-[2px] bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Version / Loading Text */}
      <motion.div
        className="absolute bottom-8 left-8 right-8 flex justify-between text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="font-mono">Version 1.0</span>
        <motion.span
          className="font-mono"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.span>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.2 140 / 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.75 0.15 180 / 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
    </motion.div>
  );
}
