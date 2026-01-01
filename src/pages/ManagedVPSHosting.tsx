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
  ArrowRight,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    name: "Managed Linux VPS 1",
    popular: false,
    price: "$38.00",
    originalPrice: "$49.99",
    period: "/mo",
    specs: {
      cpu: "2 vCPU Cores",
      ram: "4 GB RAM",
      storage: "80 GB NVMe",
      bandwidth: "Unlimited"
    }
  },
  {
    name: "Managed Linux VPS 2",
    popular: true,
    price: "$43.50",
    originalPrice: "$59.99",
    period: "/mo",
    specs: {
      cpu: "4 vCPU Cores",
      ram: "8 GB RAM",
      storage: "160 GB NVMe",
      bandwidth: "Unlimited"
    }
  },
  {
    name: "Managed Linux VPS 3",
    popular: false,
    price: "$85.50",
    originalPrice: "$109.99",
    period: "/mo",
    specs: {
      cpu: "6 vCPU Cores",
      ram: "16 GB RAM",
      storage: "240 GB NVMe",
      bandwidth: "Unlimited"
    }
  },
  {
    name: "Managed Linux VPS 4",
    popular: false,
    price: "$160.50",
    originalPrice: "$199.99",
    period: "/mo",
    specs: {
      cpu: "8 vCPU Cores",
      ram: "32 GB RAM",
      storage: "320 GB NVMe",
      bandwidth: "Unlimited"
    }
  }
];

const featuresAndBenefits = [
  {
    icon: Settings,
    title: "Fully managed server expertise",
    description: "Our expert team handles all server management, updates, and optimization so you can focus on your business."
  },
  {
    icon: Zap,
    title: "Unlock the speed of dedicated resources",
    description: "Guaranteed CPU, RAM, and storage means consistent high performance without noisy neighbors."
  },
  {
    icon: Shield,
    title: "Enterprise-grade security included",
    description: "Advanced firewall, DDoS protection, malware scanning, and automatic security patches included."
  },
  {
    icon: Clock,
    title: "Zero Worry Disaster Recovery",
    description: "Automated daily backups with one-click restore. Your data is always safe and recoverable."
  },
  {
    icon: Globe,
    title: "Scalable performance when you need",
    description: "Easily upgrade your resources as your needs grow. No downtime, no migration hassles."
  }
];

const managedFeatures = [
  {
    icon: Activity,
    title: "24x7 server monitoring",
    description: "Our team monitors your server around the clock, proactively identifying and resolving issues before they affect you."
  },
  {
    icon: Gauge,
    title: "Performance tuning & load optimization",
    description: "We continuously optimize your server for peak performance and efficient resource utilization."
  },
  {
    icon: RefreshCw,
    title: "Always up-to-date software stack",
    description: "We keep your server software updated and patched, ensuring security and compatibility."
  },
  {
    icon: Lock,
    title: "Enterprise security & hardening",
    description: "Our security experts configure and harden your server against the latest threats and vulnerabilities."
  }
];

const addOns = [
  {
    icon: Lock,
    title: "SSL Certificates",
    description: "Secure your site with industry-standard SSL encryption",
    active: true
  },
  {
    icon: Database,
    title: "cPanel license",
    description: "Easy-to-use control panel for complete server management"
  },
  {
    icon: HardDrive,
    title: "Extra storage",
    description: "Add additional NVMe storage as your data grows"
  },
  {
    icon: Cloud,
    title: "Cloud backups",
    description: "Off-site backup storage for disaster recovery"
  }
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Build it. Secure it.",
    description: "Enterprise-grade security with DDoS protection, firewalls, and malware scanning."
  },
  {
    icon: RefreshCw,
    title: "Keep traffic flowing smoothly",
    description: "Optimized network infrastructure for fast, reliable connectivity worldwide."
  },
  {
    icon: Globe,
    title: "Perfect for growth with you",
    description: "Easily scale resources up or down based on your changing needs."
  },
  {
    icon: HeadphonesIcon,
    title: "Technical transparency",
    description: "Full visibility into your server performance and resource usage."
  },
  {
    icon: Zap,
    title: "Performance that lasts",
    description: "Latest generation hardware ensures consistent high performance."
  },
  {
    icon: Users,
    title: "Trusted by millions",
    description: "Join thousands of businesses that trust us with their infrastructure."
  }
];

const comparisonData = [
  { feature: "Server management", managed: "Fully managed", unmanaged: "Self-managed" },
  { feature: "Security updates", managed: "Automated", unmanaged: "Manual" },
  { feature: "Server monitoring", managed: "24/7 proactive", unmanaged: "DIY" },
  { feature: "Control panel", managed: "Included", unmanaged: "Optional" },
  { feature: "Technical support", managed: "Full support", unmanaged: "Limited" },
  { feature: "Root access", managed: "Available", unmanaged: "Full access" },
  { feature: "Best for", managed: "Businesses & agencies", unmanaged: "Developers & sysadmins" }
];

const solutions = [
  {
    icon: Cloud,
    title: "VPS Hosting",
    description: "Get root access and full control with our unmanaged VPS hosting. Perfect for developers who want complete flexibility.",
    link: "#",
    featured: true
  },
  {
    icon: Server,
    title: "Virtual Dedicated Server",
    description: "Dedicated-level performance at a fraction of the cost. Ideal for high-traffic sites and applications.",
    link: "#"
  },
  {
    icon: HardDrive,
    title: "Dedicated Server",
    description: "Full physical server for maximum performance and control. Enterprise-grade hardware for mission-critical applications.",
    link: "#"
  }
];

const faqs = [
  {
    question: "What is managed VPS hosting?",
    answer: "Managed VPS hosting is a virtual private server where our expert team handles all server administration tasks including setup, maintenance, security updates, monitoring, and optimization. You get dedicated resources with the convenience of full management."
  },
  {
    question: "How is managed VPS different from unmanaged VPS?",
    answer: "With managed VPS, our team handles all server management tasks. With unmanaged VPS, you're responsible for server configuration, security, updates, and troubleshooting. Managed is ideal for businesses, while unmanaged suits developers who want full control."
  },
  {
    question: "Why should I use managed VPS hosting?",
    answer: "Managed VPS hosting saves you time and provides peace of mind. You get expert server management, 24/7 monitoring, automatic updates, enhanced security, and professional support—all while focusing on your core business."
  },
  {
    question: "Is managed VPS expensive?",
    answer: "Managed VPS provides excellent value when you consider the cost of hiring server administrators, the time saved on maintenance, and the peace of mind from professional monitoring and support."
  },
  {
    question: "Does managed VPS come with a control panel?",
    answer: "Yes, all our managed VPS plans include a powerful control panel (cPanel/WHM or Plesk) for easy website and server management through an intuitive interface."
  },
  {
    question: "Is managed VPS hosting secure?",
    answer: "Absolutely. Our managed VPS includes enterprise-grade security with DDoS protection, firewall configuration, malware scanning, automatic security patches, and regular security audits."
  }
];

export default function ManagedVPSHosting() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-dark via-light-dark to-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Server className="w-4 h-4" />
                Enterprise VPS
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Managed VPS Hosting
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Powerhouse VPS with full management. Guaranteed resources, expert management, and enterprise-grade security. No server headaches—just seamless performance.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "Full cPanel access for complete control",
                  "99.99% uptime guarantee with SLA",
                  "Managed security and automatic updates",
                  "24/7 expert monitoring and support"
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
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600" 
                  alt="Managed VPS server infrastructure" 
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
              Choose your plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All plans include full management, 24/7 monitoring, and expert support.
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
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-dark text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-display text-sm font-bold text-foreground mb-2">{plan.name}</h3>
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

      {/* Features and Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Features and benefits
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuresAndBenefits.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
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

      {/* Managed Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Managed features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our expert team takes care of everything so you can focus on your business.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {managedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
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

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-light-dark to-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Extend your VPS with add-ons
              </h2>
              <p className="text-muted-foreground mb-8">
                Customize your VPS with powerful add-ons designed to enhance performance, security, and management capabilities.
              </p>
              
              <div className="space-y-4">
                {addOns.map((addon, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-xl border transition-colors ${
                      addon.active 
                        ? "bg-secondary/10 border-secondary/50" 
                        : "bg-card/50 border-border/50 hover:border-secondary/30"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <addon.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{addon.title}</h4>
                      <p className="text-sm text-muted-foreground">{addon.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Why add-ons matter</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-secondary">Enterprise-level security</strong><br />
                  Protect your applications with SSL certificates, advanced firewalls, and malware protection that meets enterprise compliance standards.
                </p>
                <p>
                  <strong className="text-secondary">Complete flexibility and control</strong><br />
                  Choose exactly what you need. Add storage as you grow, install control panels for easy management, or configure automated backups for peace of mind.
                </p>
                <p>
                  <strong className="text-secondary">Seamless scalability</strong><br />
                  Start with what you need and add more as your business grows. All add-ons can be provisioned instantly without any downtime.
                </p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Orrien
            </h2>
            <p className="text-muted-foreground">
              Built for speed, security, and simplicity
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
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
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
                <div className="font-medium text-secondary text-center">Managed VPS</div>
                <div className="font-medium text-muted-foreground text-center">Unmanaged VPS</div>
              </div>
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 p-4 ${index !== comparisonData.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="text-muted-foreground">{row.feature}</div>
                  <div className="text-center text-foreground">{row.managed}</div>
                  <div className="text-center text-muted-foreground">{row.unmanaged}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore our solutions
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-2xl p-6 border transition-colors ${
                  solution.featured 
                    ? "bg-gradient-to-br from-secondary/20 to-primary/10 border-secondary/50" 
                    : "bg-card border-border hover:border-secondary/50"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {solution.description}
                </p>
                <a href={solution.link} className="text-secondary hover:text-light text-sm font-medium flex items-center gap-1">
                  Learn more <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about managed VPS hosting.
              </p>
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

      <Footer />
    </div>
  );
}
