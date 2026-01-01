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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-light/20 to-secondary/20 rounded-3xl blur-2xl opacity-50" />
            
            {/* Dashboard Card */}
            <div className="relative glass-card p-2 rounded-2xl">
              <div className="bg-dark rounded-xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-light-dark/50 border-b border-border/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-secondary/50" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-full max-w-md mx-auto h-6 rounded-md bg-muted/30 flex items-center justify-center text-xs text-muted-foreground">
                      dashboard.cloudhost.com
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 md:p-8 min-h-[300px] grid md:grid-cols-3 gap-4">
                  {[
                    { label: "Active Servers", value: "12", change: "+2 this week" },
                    { label: "Bandwidth Used", value: "847 GB", change: "of 2 TB" },
                    { label: "Avg. Response", value: "42ms", change: "-8ms today" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted/20 border border-border/30">
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      <div className="text-2xl font-display font-bold text-foreground">{item.value}</div>
                      <div className="text-xs text-secondary mt-1">{item.change}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
