import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Zap, value: "99.99%", label: "Uptime" },
  { icon: Shield, value: "24/7", label: "Support" },
  { icon: Clock, value: "<50ms", label: "Response" },
];

// Remove pt-20 since DomainSearchBar handles spacing now

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--light-dark))_0%,hsl(var(--dark))_70%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] hero-glow opacity-40 animate-pulse-glow" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-[15%] w-20 h-20 rounded-2xl bg-secondary/10 border border-secondary/20 animate-float" />
      <div className="absolute bottom-32 right-[10%] w-32 h-32 rounded-full bg-light/5 border border-light/10 animate-float-delayed" />
      <div className="absolute top-1/2 right-[20%] w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-light animate-pulse" />
            <span className="text-sm font-medium text-secondary">New: AI-Powered Infrastructure</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Hosting That{" "}
            <span className="text-gradient">Powers</span>
            <br />
            Your Success
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Lightning-fast cloud hosting with enterprise-grade security. 
            Deploy in seconds, scale without limits, and focus on what matters most.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
