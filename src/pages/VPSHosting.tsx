import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Shield, 
  Zap, 
  Globe, 
  Server, 
  HeadphonesIcon,
  Star,
  Clock,
  HardDrive,
  Cpu,
  Database,
  Settings,
  Lock,
  Activity,
  RefreshCw,
  Cloud,
  Gauge,
  Users,
  Terminal,
  Code,
  ChevronRight,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const pricingPlans = [
  {
    name: "VPS 1",
    popular: false,
    price: "$9.99",
    originalPrice: "$14.99",
    period: "/mo",
    specs: {
      cpu: "1 vCPU Core",
      ram: "2 GB RAM",
      storage: "40 GB NVMe",
      bandwidth: "1 TB"
    }
  },
  {
    name: "VPS 2",
    popular: true,
    price: "$19.99",
    originalPrice: "$29.99",
    period: "/mo",
    specs: {
      cpu: "2 vCPU Cores",
      ram: "4 GB RAM",
      storage: "80 GB NVMe",
      bandwidth: "2 TB"
    }
  },
  {
    name: "VPS 3",
    popular: false,
    price: "$29.99",
    originalPrice: "$44.99",
    period: "/mo",
    specs: {
      cpu: "4 vCPU Cores",
      ram: "8 GB RAM",
      storage: "160 GB NVMe",
      bandwidth: "3 TB"
    }
  },
  {
    name: "VPS 4",
    popular: false,
    price: "$54.99",
    originalPrice: "$79.99",
    period: "/mo",
    specs: {
      cpu: "6 vCPU Cores",
      ram: "16 GB RAM",
      storage: "240 GB NVMe",
      bandwidth: "4 TB"
    }
  }
];

const smartSolutions = [
  {
    icon: Zap,
    title: "Full root access",
    description: "Complete control over your server with SSH root access. Install anything, configure everything."
  },
  {
    icon: Terminal,
    title: "Custom software stack",
    description: "Install and run any software you need. No restrictions on what you can deploy."
  },
  {
    icon: Shield,
    title: "DDoS protection",
    description: "Built-in DDoS mitigation to keep your server online and protected from attacks."
  },
  {
    icon: Gauge,
    title: "Guaranteed resources",
    description: "Your CPU, RAM, and storage are dedicated to you. No overselling, no noisy neighbors."
  },
  {
    icon: Globe,
    title: "Global data centers",
    description: "Choose from multiple data center locations for optimal latency and performance."
  }
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Instant deployment",
    description: "Your VPS is ready in minutes. Start building immediately after signup."
  },
  {
    icon: Server,
    title: "High-performance hardware",
    description: "Latest generation AMD EPYC processors and NVMe SSDs for blazing speed."
  },
  {
    icon: Shield,
    title: "Enterprise security",
    description: "Hardware firewalls, DDoS protection, and secure data centers."
  },
  {
    icon: Clock,
    title: "99.9% uptime SLA",
    description: "We guarantee your server stays online with our uptime commitment."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 support",
    description: "Expert technical support available around the clock when you need help."
  },
  {
    icon: RefreshCw,
    title: "Easy scaling",
    description: "Upgrade your resources anytime with zero downtime."
  }
];

const osOptions = [
  { name: "CentOS", icon: "🐧" },
  { name: "Debian", icon: "🔴" },
  { name: "Ubuntu", icon: "🟠" },
  { name: "Fedora", icon: "🔵" }
];

const addOns = [
  {
    icon: Database,
    title: "cPanel license",
    description: "Easy-to-use control panel for server management"
  },
  {
    icon: Lock,
    title: "SSL Certificates",
    description: "Secure your applications with industry-standard encryption"
  },
  {
    icon: HardDrive,
    title: "Extra storage",
    description: "Add additional NVMe storage as your needs grow"
  },
  {
    icon: Cloud,
    title: "Automated backups",
    description: "Daily backups with easy one-click restore"
  }
];

const comparisonData = [
  { feature: "Server management", managed: "Fully managed", unmanaged: "Self-managed" },
  { feature: "Root access", managed: "Available", unmanaged: "Full access" },
  { feature: "Security updates", managed: "Automated", unmanaged: "Manual" },
  { feature: "Control panel", managed: "Included", unmanaged: "Optional" },
  { feature: "Technical support", managed: "Full support", unmanaged: "Infrastructure only" },
  { feature: "Price", managed: "Higher", unmanaged: "Lower" },
  { feature: "Best for", managed: "Businesses", unmanaged: "Developers" }
];

const products = [
  {
    title: "Managed VPS Hosting",
    description: "Get powerful VPS performance with complete server management. Our experts handle security, updates, and optimization while you focus on your business.",
    link: "/managed-vps-hosting",
    featured: true
  }
];

const testimonials = [
  {
    name: "Alex Thompson",
    role: "DevOps Engineer",
    content: "The root access and NVMe performance are exactly what I needed for my development projects.",
    rating: 5
  },
  {
    name: "Maria Garcia",
    role: "Startup Founder",
    content: "Incredible value for the specs. Deployed my entire stack in under an hour.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Freelance Developer",
    content: "Finally, a VPS provider that doesn't restrict what I can install. Complete freedom.",
    rating: 5
  }
];

const faqs = [
  {
    question: "What is VPS hosting?",
    answer: "VPS (Virtual Private Server) hosting provides you with dedicated resources on a virtualized server. Unlike shared hosting, you get guaranteed CPU, RAM, and storage that's not shared with other users, plus full root access to configure your server however you need."
  },
  {
    question: "What's the difference between managed and unmanaged VPS?",
    answer: "With unmanaged VPS, you have full control and responsibility for server administration, including security updates, software installation, and troubleshooting. Managed VPS includes all server administration handled by our expert team."
  },
  {
    question: "Can I install custom software on my VPS?",
    answer: "Absolutely! With root access, you can install any software compatible with your chosen operating system. There are no restrictions on what you can deploy—Docker, custom applications, game servers, and more."
  },
  {
    question: "Do I need technical knowledge to use unmanaged VPS?",
    answer: "Yes, unmanaged VPS is designed for users with Linux command-line experience who can handle server administration tasks. If you're not comfortable with server management, consider our managed VPS option."
  },
  {
    question: "Can I upgrade my VPS resources later?",
    answer: "Yes, you can easily upgrade your VPS resources at any time through your control panel. Upgrades are applied with minimal downtime, and you only pay the difference in pricing."
  }
];

const blogPosts = [
  {
    title: "Getting started with your first VPS",
    description: "A complete beginner's guide to setting up and securing your new VPS.",
    category: "Tutorial"
  },
  {
    title: "10 essential security practices for VPS",
    description: "Protect your server with these must-know security configurations.",
    category: "Security"
  },
  {
    title: "Docker on VPS: Complete setup guide",
    description: "Learn how to install and configure Docker for containerized deployments.",
    category: "DevOps"
  },
  {
    title: "Optimizing NGINX for high traffic",
    description: "Performance tuning tips for handling thousands of concurrent connections.",
    category: "Performance"
  }
];

export default function VPSHosting() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-dark via-light-dark to-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-2 border border-secondary/40 rounded-full text-sm font-medium mb-4">
                <Terminal className="w-4 h-4" />
                Full Root Access
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Take full control with self-managed VPS hosting
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Powerful VPS hosting with complete root access. Install anything, configure everything, and scale on demand. Built for developers who want total control.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "Full root access with SSH",
                  "Choice of Linux distributions",
                  "Guaranteed dedicated resources",
                  "99.9% uptime guarantee"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-dark font-semibold px-8">
                Get Started
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600" 
                  alt="VPS server terminal access" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose the right plan for you
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All plans include root access, DDoS protection, and 24/7 infrastructure support.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                className={`relative rounded-2xl p-6 ${
                  plan.popular 
                    ? "bg-gradient-to-b from-secondary/20 to-primary/10 border-2 border-secondary" 
                    : "bg-card border border-border"
                }  hover:shadow-sm hover:shadow-primary`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-dark text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}/mo</span>
                </div>

                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? "bg-secondary hover:bg-secondary/90 text-dark" 
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </Button>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <Cpu className="w-4 h-4 text-secondary" />
                    <span>{plan.specs.cpu}</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <Database className="w-4 h-4 text-secondary" />
                    <span>{plan.specs.ram}</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <HardDrive className="w-4 h-4 text-secondary" />
                    <span>{plan.specs.storage}</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <Globe className="w-4 h-4 text-secondary" />
                    <span>{plan.specs.bandwidth}</span>
                  </li>
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Smart Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Smart solutions for your online growth
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Everything you need to deploy, manage, and scale your applications.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {smartSolutions.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Managed vs Unmanaged Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-light-dark to-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Managed or unmanaged VPS hosting?
              </h2>
              <p className="text-muted-foreground mb-6">
                Choose the level of control that's right for you. Unmanaged VPS is perfect for developers and sysadmins who want complete control. Managed VPS is ideal for businesses that want to focus on growth while we handle the technical details.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm  bg-secondary/20 border border-secondary/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <Terminal className="w-4 h-4 text-secondary " />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Unmanaged VPS</h4>
                    <p className="text-sm text-muted-foreground">Full root access, complete control, lower cost. You handle all server administration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm  bg-primary/20 border border-secondary/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <Settings className="w-4 h-4 text-primary " />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Managed VPS</h4>
                    <p className="text-sm text-muted-foreground">We handle security, updates, and optimization. You focus on your business.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl px-6 py-8 border border-secondary/20">
                <div className="flex items-center justify-center gap-8 ">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 border border-secondary/40 flex items-center justify-center mx-auto mb-3">
                      <Terminal className="w-8 h-8 text-secondary" />
                    </div>
                    <p className="font-medium text-foreground">Developers</p>
                    <p className="text-xs text-muted-foreground">Choose Unmanaged</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-secondary/40 flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">Businesses</p>
                    <p className="text-xs text-muted-foreground">Choose Managed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Experience</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              We're the Smarter Choice
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on enterprise-grade infrastructure with the flexibility developers need.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OS Options Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              OS Options
            </h2>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {osOptions.map((os, index) => (
                <div key={index} className="flex items-center gap-3 bg-card px-6 py-3 rounded-xl border border-border">
                  <span className="text-2xl">{os.icon}</span>
                  <span className="font-medium text-foreground">{os.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Extend your VPS with add-ons
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center mb-4 mx-auto">
                  <addon.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {addon.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {addon.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Managed vs. Unmanaged Servers
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-muted/50 p-4">
                <div className="font-medium text-foreground">Feature</div>
                <div className="font-medium text-primary text-center">Managed VPS</div>
                <div className="font-medium text-secondary text-center">Unmanaged VPS</div>
              </div>
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 p-4 ${index !== comparisonData.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="text-muted-foreground">{row.feature}</div>
                  <div className="text-center text-foreground">{row.managed}</div>
                  <div className="text-center text-secondary">{row.unmanaged}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-dark">
                <a href="/managed-vps-hosting">Explore Managed VPS</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Which Product Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Which product is right for you?
              </h2>
              <p className="text-muted-foreground">
                Not sure if unmanaged VPS is right for you? Explore our managed options for a hassle-free experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {products.map((product, index) => (
                <a 
                  key={index}
                  href={product.link}
                  className="block bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-6 border border-secondary/30 hover:border-secondary transition-colors"
                >
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <span className="text-secondary font-medium flex items-center gap-1">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
   <TestimonialsSection/>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Unmanaged VPS hosting FAQs
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <BlogSection/>
      <Footer />
    </div>
  );
}
