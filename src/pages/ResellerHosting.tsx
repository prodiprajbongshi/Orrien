import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Server, 
  HeadphonesIcon,
  ChevronDown,
  Star,
  Layers,
  DollarSign,
  Settings,
  Lock,
  Clock,
  ArrowRight,
  ExternalLink,
  Database,
  Cpu,
  CloudCog
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
    name: "Starter",
    popular: false,
    price: "$21.45",
    originalPrice: "$29.99",
    period: "/mo",
    features: [
      "50 cPanel accounts",
      "100 GB NVMe storage",
      "Unlimited bandwidth",
      "Free SSL certificates",
      "Free domain reseller",
      "WHMCS included",
      "White-label branding",
      "24/7 support"
    ]
  },
  {
    name: "Plus",
    popular: true,
    price: "$29.99",
    originalPrice: "$39.99",
    period: "/mo",
    features: [
      "100 cPanel accounts",
      "200 GB NVMe storage",
      "Unlimited bandwidth",
      "Free SSL certificates",
      "Free domain reseller",
      "WHMCS included",
      "White-label branding",
      "Priority 24/7 support",
      "Free site migrations"
    ]
  },
  {
    name: "Pro",
    popular: false,
    price: "$39.99",
    originalPrice: "$49.99",
    period: "/mo",
    features: [
      "150 cPanel accounts",
      "300 GB NVMe storage",
      "Unlimited bandwidth",
      "Free SSL certificates",
      "Free domain reseller",
      "WHMCS included",
      "White-label branding",
      "Priority 24/7 support",
      "Free site migrations",
      "Dedicated IP"
    ]
  },
  {
    name: "Max",
    popular: false,
    price: "$49.99",
    originalPrice: "$69.99",
    period: "/mo",
    features: [
      "Unlimited cPanel accounts",
      "Unlimited NVMe storage",
      "Unlimited bandwidth",
      "Free SSL certificates",
      "Free domain reseller",
      "WHMCS included",
      "White-label branding",
      "VIP 24/7 support",
      "Free site migrations",
      "Dedicated IP",
      "Priority resource allocation"
    ]
  }
];

const features = [
  {
    icon: Users,
    title: "Allow your clients to manage their own accounts (and support)",
    description: "Give your customers full cPanel access so they can manage their websites, emails, and files independently."
  },
  {
    icon: DollarSign,
    title: "Manage everything quickly with a powerful control panel",
    description: "WHM gives you complete control over hosting accounts, resource allocation, and server settings."
  },
  {
    icon: Settings,
    title: "Automate your business with auto-pay billing",
    description: "WHMCS automates billing, invoicing, and client management so you can focus on growing your business."
  },
  {
    icon: Shield,
    title: "Protect your clients with enterprise-grade security",
    description: "Free SSL certificates, DDoS protection, and malware scanning keep all hosted sites safe and secure."
  },
  {
    icon: Zap,
    title: "Everything you need to start selling today",
    description: "All the tools, resources, and white-label branding options to launch your hosting business immediately."
  }
];

const whyChooseUs = [
  {
    icon: Globe,
    title: "Global data centres",
    description: "Choose from multiple data center locations worldwide to deliver the fastest experience to your clients."
  },
  {
    icon: HeadphonesIcon,
    title: "Support that's actually helpful",
    description: "Our expert support team is available 24/7/365 to help you and your clients with any issues."
  },
  {
    icon: Server,
    title: "Hosting your clients can grow in",
    description: "Easily upgrade resources as your clients' needs grow. No downtime, no hassle."
  },
  {
    icon: Clock,
    title: "No long-term commitment",
    description: "Month-to-month billing available. Scale up or down as your business requires."
  },
  {
    icon: Layers,
    title: "Your business, on your terms",
    description: "Full white-label branding means your clients see only your brand, never ours."
  },
  {
    icon: Lock,
    title: "Trusted by millions",
    description: "Join thousands of resellers who trust our platform to power their hosting businesses."
  }
];

const trustedTools = [
  { name: "WHM", icon: "WHM" },
  { name: "WordPress", icon: "W" },
  { name: "cPanel", icon: "cPanel" }
];

const crossProducts = [
  {
    icon: Cpu,
    title: "VPS Hosting",
    description: "More control and resources with VPS hosting. Scale your infrastructure with dedicated resources.",
    link: "#"
  },
  {
    icon: Database,
    title: "Managed VPS Hosting",
    description: "Get VPS power without the complexity. We handle server management while you focus on your business.",
    link: "#"
  },
  {
    icon: CloudCog,
    title: "Virtual Dedicated Server",
    description: "Dedicated-level performance at a fraction of the cost. Perfect for high-traffic sites.",
    link: "#"
  }
];

const faqs = [
  {
    question: "What is reseller hosting?",
    answer: "Reseller hosting allows you to purchase hosting resources in bulk and resell them to your own clients under your own brand. You get access to WHM for account management and can use WHMCS for automated billing."
  },
  {
    question: "How do I manage my clients with Reseller Hosting?",
    answer: "You'll use WHM (Web Host Manager) to create and manage cPanel accounts for your clients. Each client gets their own cPanel to manage their websites, while you maintain control through WHM."
  },
  {
    question: "How much do reseller hosting cost?",
    answer: "Our reseller hosting plans start at $21.45/month and include all the tools you need to start your hosting business, including WHMCS, white-label branding, and 24/7 support."
  },
  {
    question: "What is the difference between shared and reseller hosting?",
    answer: "Shared hosting is for hosting your own websites, while reseller hosting allows you to create and sell hosting accounts to others. With reseller hosting, you get WHM access and can manage multiple client accounts."
  },
  {
    question: "How do I start a hosting reseller business?",
    answer: "Simply choose a reseller plan, set up your brand, configure your pricing, and start selling. We provide WHMCS for billing automation and full white-label support so clients only see your brand."
  },
  {
    question: "What are the advantages of hosting.com reseller hosting?",
    answer: "We offer enterprise-grade infrastructure, free WHMCS, full white-label branding, 24/7 expert support, free SSL certificates, and the flexibility to create custom hosting packages for your clients."
  }
];

const resources = [
  {
    title: "Why do I want to sell hosting with Orrien?",
    description: "Learn about our platform and why thousands of resellers trust us to power their business.",
    link: "#",
    tag: "Article"
  },
  {
    title: "$0.25 less than regular WHMCS pricing",
    description: "How having WHMCS included can save you more on your hosting business.",
    link: "#",
    tag: "Pricing"
  },
  {
    title: "How to start a hosting reseller business",
    description: "A complete guide to starting and growing your web hosting business.",
    link: "#",
    tag: "Guide"
  },
  {
    title: "White labeling your reseller hosting",
    description: "How to set up Mark's Partner and ensure a seamless experience for your clients.",
    link: "#",
    tag: "Tutorial"
  }
];

const testimonials = [
  {
    name: "Michael Chen",
    role: "Web Agency Owner",
    content: "The reseller platform is incredibly easy to use. WHMCS integration made billing a breeze and my clients love the cPanel interface.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Freelance Developer",
    content: "I've tried other reseller programs but this one stands out. The white-label branding is perfect and support is always there when I need them.",
    rating: 5
  },
  {
    name: "David Rodriguez",
    role: "IT Consultant",
    content: "Started with the starter plan and now I'm on Max. The scalability is amazing and my hosting business has grown 300% in just one year.",
    rating: 5
  }
];

export default function ResellerHosting() {
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
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Your hosting business,<br />
                <span className="text-secondary">our powerful platform</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Buy your own plans and resell web hosting to your clients. Get a fully-featured platform with WHM control panel, WHMCS billing automation, and white-label branding.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "White-label control panel and branding",
                  "WHMCS included for automated billing",
                  "Create and manage unlimited websites",
                  "24/7/365 expert support for you and your clients"
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
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600" 
                  alt="Reseller hosting business" 
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
              Pick the plan that gives you everything for you to succeed. All plans include a free domain reseller.
            </p>
          </motion.div>

          {/* Plan Toggle */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-secondary" /> Free domain reseller account
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-secondary" /> WHMCS included
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-secondary" /> Money-back guarantee
            </span>
          </div>

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
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{plan.name}</h3>
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
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
            {features.map((feature, index) => (
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-light-dark to-dark">
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
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
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

      {/* Trusted Tools Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Industry-standard tools you can trust
            </h2>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {trustedTools.map((tool, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                    <span className="font-bold text-lg text-foreground">{tool.icon}</span>
                  </div>
                  <span className="font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              With industry-leading tools at your fingertips, you can focus on growing your hosting business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cross Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cross-products and hosting solutions
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {crossProducts.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <a href={product.link} className="text-secondary hover:text-light text-sm font-medium flex items-center gap-1">
                  Read more <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Help CTA Section */}
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
                Questions? We're here to help
              </h2>
              <p className="text-muted-foreground">
                Our experienced team is ready to answer all your questions about reseller hosting.
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
              <p className="text-muted-foreground">
                Everything you need to know about reseller hosting.
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

      {/* Resources Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reseller hosting resources
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                variants={fadeInUp}
                className="group bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-border hover:border-secondary/50 transition-all"
              >
                <span className="inline-block bg-secondary/20 text-secondary text-xs font-medium px-2 py-1 rounded mb-3">
                  {resource.tag}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {resource.description}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by resellers worldwide
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
                className="bg-card rounded-2xl p-6 border border-border"
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

      <Footer />
    </div>
  );
}
