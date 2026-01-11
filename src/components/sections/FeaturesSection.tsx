import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  Shield, 
  Globe, 
  Server, 
  Clock, 
  Headphones,
  Lock,
  Cpu
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "NVMe SSD storage and LiteSpeed servers deliver blazing-fast load times for your websites.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced DDoS protection, SSL certificates, and automated backups keep your data safe.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "200+ edge locations worldwide ensure your content loads fast for visitors everywhere.",
  },
  {
    icon: Server,
    title: "Auto Scaling",
    description: "Automatically scale resources based on traffic. Never worry about downtime again.",
  },
  {
    icon: Clock,
    title: "99.99% Uptime",
    description: "Industry-leading uptime SLA with proactive monitoring and instant failover.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Real humans available around the clock via live chat, phone, and email.",
  },
  {
    icon: Lock,
    title: "Free SSL Certificates",
    description: "Unlimited SSL certificates with automatic renewal. Secure every domain for free.",
  },
  {
    icon: Cpu,
    title: "One-Click Apps",
    description: "Deploy WordPress, Laravel, Node.js, and 100+ apps with a single click.",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative cursor-pointer"
    >
      <div className="glass-card p-6 h-full glow-effect transition-all duration-300 hover:border-secondary/50">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-light/10 border border-secondary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <feature.icon className="w-7 h-7 text-secondary group-hover:text-light transition-colors" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--light-dark))_0%,hsl(var(--dark))_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 cursor-pointer"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed Online</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to help your business grow. 
            From lightning-fast servers to enterprise security.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard  key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
