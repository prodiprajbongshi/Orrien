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
  ChevronRight,
  Layers,
  Award
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

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
    name: "VDS Premium 14",
    popular: false,
    price: "$124.50",
    originalPrice: "$149.99",
    period: "/mo",
    specs: [
      "14 Dedicated Cores",
      "32 GB DDR5 RAM",
      "500 GB NVMe SSD",
      "10 TB Bandwidth",
      "Full Root Access"
    ]
  },
  {
    name: "VDS Premium 21",
    popular: true,
    price: "$249.50",
    originalPrice: "$299.99",
    period: "/mo",
    specs: [
      "21 Dedicated Cores",
      "64 GB DDR5 RAM",
      "1 TB NVMe SSD",
      "15 TB Bandwidth",
      "Full Root Access"
    ]
  },
  {
    name: "VDS Premium 28",
    popular: false,
    price: "$449.50",
    originalPrice: "$549.99",
    period: "/mo",
    specs: [
      "28 Dedicated Cores",
      "128 GB DDR5 RAM",
      "2 TB NVMe SSD",
      "20 TB Bandwidth",
      "Full Root Access"
    ]
  },
  {
    name: "VDS Premium 221",
    popular: false,
    price: "$699.50",
    originalPrice: "$849.99",
    period: "/mo",
    specs: [
      "42 Dedicated Cores",
      "256 GB DDR5 RAM",
      "4 TB NVMe SSD",
      "Unlimited Bandwidth",
      "Full Root Access"
    ]
  }
];

const serverGreatness = [
  {
    icon: Cpu,
    title: "Dedicated power",
    description: "Real dedicated cores, not shared vCPUs. Get consistent performance for demanding workloads."
  },
  {
    icon: Zap,
    title: "Instant scalability",
    description: "Scale your resources instantly without migration or downtime."
  },
  {
    icon: Shield,
    title: "Rock-solid security",
    description: "Enterprise-grade security with DDoS protection, firewalls, and monitoring."
  },
  {
    icon: HeadphonesIcon,
    title: "Expert support",
    description: "24/7 expert support team ready to help with any server issues."
  },
  {
    icon: Clock,
    title: "99.9% uptime",
    description: "Industry-leading uptime guarantee backed by our SLA."
  }
];

const whatWorks = [
  {
    title: "Speed for fast-paced demand",
    description: "Enterprise-grade NVMe storage and dedicated cores deliver lightning-fast performance for your most demanding applications."
  },
  {
    title: "Expert team, always there",
    description: "Our certified experts manage your server 24/7, handling security, updates, and optimization."
  },
  {
    title: "No price gotchas",
    description: "Transparent pricing with no hidden fees. What you see is what you pay, always."
  },
  {
    title: "24/7 performance monitoring",
    description: "Continuous monitoring ensures your server runs at peak performance around the clock."
  }
];

const alternativeProducts = [
  {
    icon: Server,
    title: "Shared Hosting",
    description: "Perfect for blogs and small websites with easy management.",
    link: "/web-hosting"
  },
  {
    icon: Layers,
    title: "Reseller Hosting",
    description: "Start your own hosting business with white-label solutions.",
    link: "/reseller-hosting"
  },
  {
    icon: Cloud,
    title: "Managed Hosting",
    description: "VPS power with complete management by our experts.",
    link: "/managed-vps-hosting"
  },
  {
    icon: HardDrive,
    title: "Dedicated Servers",
    description: "Maximum power with dedicated physical hardware.",
    link: "#"
  },
  {
    icon: Lock,
    title: "SSL Certificates",
    description: "Secure your site with industry-standard encryption.",
    link: "#"
  }
];

const testimonials = [
  {
    name: "Robert Chen",
    role: "CTO, TechStartup Inc",
    content: "The VDS performance is incredible. We migrated from AWS and cut our costs by 40% while improving response times.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "E-commerce Director",
    content: "Our online store handles Black Friday traffic with ease. The dedicated resources make all the difference.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "DevOps Engineer",
    content: "Finally, a hosting provider that delivers on performance promises. The management is top-notch.",
    rating: 5
  }
];

const faqs = [
  {
    question: "Why is a VDS so much faster than a VPS and why does it cost less?",
    answer: "VDS uses dedicated physical cores instead of shared vCPUs, providing consistent performance. Our infrastructure efficiency and scale allow us to offer premium dedicated resources at competitive prices."
  },
  {
    question: "Is it easy to switch?",
    answer: "Yes! Our expert migration team handles the entire process for free. We'll move your data, configure your applications, and ensure zero downtime during the transition."
  },
  {
    question: "Is Zilexa included?",
    answer: "Yes, our proprietary Zilexa management panel is included with all VDS plans, providing easy server management, monitoring, and one-click installations."
  },
  {
    question: "Can I upgrade later?",
    answer: "Absolutely! You can upgrade your VDS resources anytime with just a few clicks. Upgrades are applied instantly with no downtime or data migration required."
  },
  {
    question: "What is the difference between a VDS and VPS?",
    answer: "A VDS (Virtual Dedicated Server) uses real dedicated CPU cores, while a VPS uses shared virtual cores. This means VDS provides consistent, guaranteed performance without 'noisy neighbor' issues."
  },
  {
    question: "What's included with every plan?",
    answer: "Every plan includes full root access, DDoS protection, 24/7 monitoring, free SSL certificates, automated backups, and our expert support team."
  }
];

const trustedLogos = [
  { name: "WHM", display: "WHM" },
  { name: "cPanel", display: "cPanel" }
];

export default function ManagedVDSHosting() {
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
                Premium VDS
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Virtual dedicated servers
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Dedicated-level performance at VPS prices. Real dedicated cores, enterprise hardware, and expert management for mission-critical applications.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "Dedicated cores, not shared vCPUs",
                  "Managed by hosting experts 24/7",
                  "Enterprise-grade NVMe storage",
                  "99.9% uptime guarantee with SLA"
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
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center">
                        <Cpu className="w-8 h-8 text-secondary" />
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <p className="text-lg text-foreground font-medium">Dedicated Power</p>
                    <p className="text-muted-foreground">Real cores, real performance</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-background">
        <div className="container mx-auto px-4">
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
                  {plan.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Server Greatness Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Everything you need</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Get ready for server greatness
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Enterprise-grade infrastructure with the simplicity of managed hosting.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {serverGreatness.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">
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

      {/* Uptime Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              99.9% uptime commitment
            </h2>
            <p className="text-muted-foreground mb-8">
              Our enterprise infrastructure is designed for maximum reliability. We guarantee 99.9% uptime backed by our Service Level Agreement, ensuring your applications stay online when it matters most.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-dark font-semibold">
              View Our SLA
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What is Managed VDS Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is Managed VDS?
              </h2>
              <p className="text-muted-foreground mb-6">
                A Virtual Dedicated Server (VDS) combines the power of dedicated hardware with the flexibility of virtualization. Unlike traditional VPS that uses shared vCPUs, VDS provides real dedicated CPU cores for consistent, predictable performance.
              </p>
              <p className="text-muted-foreground mb-6">
                With our managed service, our expert team handles all server administration—security updates, performance optimization, monitoring, and troubleshooting—so you can focus on your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Cpu className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Dedicated Cores</h4>
                    <p className="text-sm text-muted-foreground">Real CPU cores, not shared virtual processors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Settings className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Fully Managed</h4>
                    <p className="text-sm text-muted-foreground">Our experts handle all server administration</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-dark to-light-dark rounded-2xl p-8 border border-border/50"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Best Managed VDS plans, by Orrien, for you.
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience dedicated-level performance with the convenience of expert management. Our VDS plans are designed for businesses that demand reliability without the complexity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">42</div>
                  <div className="text-sm text-muted-foreground">Max Cores</div>
                </div>
                <div className="bg-card/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">256GB</div>
                  <div className="text-sm text-muted-foreground">Max RAM</div>
                </div>
                <div className="bg-card/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">4TB</div>
                  <div className="text-sm text-muted-foreground">Max Storage</div>
                </div>
                <div className="bg-card/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* We Know What Works Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-light-dark to-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              We know what works
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whatWorks.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
              >
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

      {/* Not the Right Fit Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Not the right fit?
            </h2>
            <p className="text-muted-foreground">
              Explore our other hosting solutions to find the perfect match for your needs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {alternativeProducts.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Link
                  to={product.link}
                  className="block bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 transition-colors h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <product.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Best Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Industry best
            </h2>
            <p className="text-secondary font-medium mb-8">solutions, since 2003.</p>
            <div className="flex justify-center items-center gap-8 flex-wrap mb-6">
              {trustedLogos.map((logo, index) => (
                <div key={index} className="flex items-center gap-2 bg-card px-6 py-3 rounded-xl border border-border">
                  <span className="font-bold text-lg text-foreground">{logo.display}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of businesses worldwide for reliable, high-performance hosting solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-light-dark to-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What our customers have to say
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Questions CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Questions? We've got answers.
              </h2>
              <p className="text-muted-foreground">
                Our expert team is ready to help you find the perfect VDS solution.
              </p>
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-dark font-semibold whitespace-nowrap">
              Contact Sales
            </Button>
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
