import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Sparkles, Zap, Globe } from "lucide-react";

const serviceCards = [
  {
    icon: Server,
    title: "Fast Shared Hosting",
    price: "$1.99",
    bgClass: "bg-light-dark border-border/30",
    textClass: "text-foreground",
    priceClass: "text-foreground",
    linkClass: "text-secondary",
  },
  {
    icon: Sparkles,
    title: "AI Sitebuilder",
    price: "$4.99",
    bgClass: "bg-light-dark border-border/30",
    textClass: "text-foreground",
    priceClass: "text-foreground",
    linkClass: "text-secondary",
  },
  {
    icon: Zap,
    title: "Ultrafast VPS",
    price: "$9.99",
     bgClass: "bg-light-dark border-border/30",
    textClass: "text-foreground",
    priceClass: "text-foreground",
    linkClass: "text-secondary",
  },
  {
    icon: Globe,
    title: "Hosting for WordPress",
    price: "$1.00",
    bgClass: "bg-light-dark border-border/30",
    textClass: "text-foreground",
    priceClass: "text-foreground",
    linkClass: "text-secondary",
  },
];

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

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className={`${card.bgClass} border rounded-2xl p-6 hover:scale-105  duration-250 cursor-pointer hover:shadow-light hover:shadow-sm transition-all ease-linear `}
              >
                <div className={`w-12 h-12 rounded-xl ${card.bgClass === "bg-white border-white/20" || card.bgClass === "bg-secondary border-secondary" ? "bg-dark/10" : "bg-secondary/20"} flex items-center justify-center mb-4`}>
                  <card.icon className={`w-6 h-6 ${card.bgClass === "bg-white border-white/20" ? "text-primary" : card.bgClass === "bg-secondary border-secondary" ? "text-dark" : "text-secondary"}`} />
                </div>
                <h3 className={`font-semibold ${card.textClass} mb-2`}>{card.title}</h3>
                <p className={`text-sm ${card.textClass} opacity-70 mb-1`}>Starting at</p>
                <p className={`text-3xl font-display font-bold ${card.priceClass} mb-4`}>{card.price}</p>
                <a href="#" className={`inline-flex items-center gap-1 text-sm font-medium ${card.linkClass} hover:gap-2 transition-all`}>
                  Find out more <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
