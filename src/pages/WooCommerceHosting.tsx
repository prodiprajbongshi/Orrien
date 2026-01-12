import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Zap, Shield, Clock, Headphones, CheckCircle, ArrowRight, 
  Server, Globe, Database, Lock, Gauge, Users, Star, ShoppingCart,
  CreditCard, Package, TrendingUp, BarChart3, RefreshCw, Award
} from "lucide-react";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const trustedLogos = [
  { name: "TrustPilot", rating: "4.9/5" },
  { name: "G2Crowd", rating: "4.8/5" },
  { name: "Capterra", rating: "4.7/5" },
  { name: "GetApp", rating: "4.9/5" },
  { name: "Forbes", rating: "Featured" },
];

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for new online stores",
    price: "$5.99",
    period: "/mo",
    features: [
      "1 WooCommerce Website",
      "10GB NVMe Storage",
      "Free SSL Certificate",
      "Daily Backups",
      "24/7 Support",
      "Free CDN",
    ],
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing eCommerce businesses",
    price: "$9.99",
    period: "/mo",
    features: [
      "3 WooCommerce Websites",
      "50GB NVMe Storage",
      "Free SSL Certificates",
      "Daily Backups",
      "Priority Support",
      "Advanced CDN",
      "Staging Environment",
    ],
    popular: true,
  },
  {
    name: "Pro",
    description: "For high-traffic stores",
    price: "$14.99",
    period: "/mo",
    features: [
      "5 WooCommerce Websites",
      "100GB NVMe Storage",
      "Free SSL Certificates",
      "Real-time Backups",
      "24/7 Priority Support",
      "Premium CDN",
      "Staging + Dev Environment",
      "White-Glove Migration",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: "$24.99",
    period: "/mo",
    features: [
      "Unlimited WooCommerce Sites",
      "200GB NVMe Storage",
      "Free SSL Certificates",
      "Real-time Backups",
      "Dedicated Account Manager",
      "Enterprise CDN",
      "Multi-site Staging",
      "Custom Solutions",
    ],
    popular: false,
  },
];

const speedFeatures = [
  { icon: Zap, text: "LiteSpeed caching for instant page loads" },
  { icon: Globe, text: "Global CDN with 200+ edge locations" },
  { icon: Database, text: "Optimized MySQL for fast queries" },
  { icon: Gauge, text: "Server-level caching included" },
];

const securityFeatures = [
  { icon: Shield, text: "Free SSL certificates included" },
  { icon: Lock, text: "DDoS protection & firewall" },
  { icon: RefreshCw, text: "Automatic malware scanning" },
  { icon: Database, text: "Daily automated backups" },
];

const saleFeatures = [
  { icon: Clock, text: "99.99% uptime guarantee" },
  { icon: TrendingUp, text: "Auto-scaling for traffic spikes" },
  { icon: CreditCard, text: "Optimized checkout performance" },
  { icon: Package, text: "Real-time inventory sync" },
];

const whyUsFeatures = [
  {
    icon: Zap,
    title: "Ultra-Fast Performance",
    description: "NVMe storage and LiteSpeed servers deliver blazing-fast load times for your store.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Multi-layer security with SSL, DDoS protection, and real-time threat detection.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "WooCommerce specialists available 24/7 via chat, phone, and ticket.",
  },
  {
    icon: BarChart3,
    title: "Scalable Infrastructure",
    description: "Automatically scale resources during high-traffic events like sales.",
  },
  {
    icon: RefreshCw,
    title: "Free Migration",
    description: "Our experts will migrate your existing store at no extra cost.",
  },
  {
    icon: Award,
    title: "99.99% Uptime",
    description: "Industry-leading uptime guarantee backed by SLA credits.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Store Owner",
    content: "Switching to this hosting was the best decision for our store. Page load times dropped by 60% and our conversion rate increased significantly.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Electronics Retailer",
    content: "The Black Friday traffic used to crash our site. Now it handles 10x the traffic without breaking a sweat. Incredible infrastructure!",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Handmade Goods Store",
    content: "As a non-technical person, the support team has been amazing. They helped me optimize my store and it's faster than ever.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Can I migrate my existing WooCommerce store?",
    answer: "Yes! We offer free migration services. Our expert team will handle the entire process, ensuring zero downtime and a seamless transition for your store.",
  },
  {
    question: "What makes your hosting optimized for WooCommerce?",
    answer: "Our servers are specifically configured for WooCommerce with LiteSpeed caching, optimized PHP settings, MySQL tuning, and pre-installed performance plugins.",
  },
  {
    question: "Do you offer staging environments?",
    answer: "Yes, our Growth plan and above include staging environments where you can test changes, updates, and new features before pushing them live.",
  },
  {
    question: "How do you handle traffic spikes during sales?",
    answer: "Our infrastructure automatically scales to handle traffic spikes. Whether it's Black Friday or a flash sale, your store will remain fast and accessible.",
  },
  {
    question: "What security measures are in place?",
    answer: "We provide multi-layer security including free SSL, DDoS protection, web application firewall, malware scanning, and automatic security patches.",
  },
];

export default function WooCommerceHosting() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-dark via-dark to-light-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6">
                <ShoppingCart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">WooCommerce Optimized</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Fast, secure, scalable{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-light">
                  WooCommerce hosting
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Power your online store with hosting built for speed, security, and sales. 
                Optimized infrastructure that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-dark font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted/30">
                  View Plans
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-8 border border-secondary/30">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                  <div className="bg-dark/80 rounded-xl p-4 border border-border/50">
                    <ShoppingCart className="w-8 h-8 text-secondary mb-3" />
                    <div className="text-2xl font-bold text-foreground">50K+</div>
                    <div className="text-sm text-muted-foreground">Stores Hosted</div>
                  </div>
                  <div className="bg-dark/80 rounded-xl p-4 border border-border/50">
                    <TrendingUp className="w-8 h-8 text-secondary mb-3" />
                    <div className="text-2xl font-bold text-foreground">99.99%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="bg-dark/80 rounded-xl p-4 border border-border/50">
                    <Zap className="w-8 h-8 text-secondary mb-3" />
                    <div className="text-2xl font-bold text-foreground">&lt;200ms</div>
                    <div className="text-sm text-muted-foreground">Avg Response</div>
                  </div>
                  <div className="bg-dark/80 rounded-xl p-4 border border-border/50">
                    <Users className="w-8 h-8 text-secondary mb-3" />
                    <div className="text-2xl font-bold text-foreground">24/7</div>
                    <div className="text-sm text-muted-foreground">Expert Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-light-dark border-y border-border/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">Trusted by the world's top enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustedLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-lg font-semibold text-muted-foreground">{logo.name}</div>
                <div className="text-sm text-secondary">{logo.rating}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed That Sells Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-8 border border-secondary/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" 
                  alt="Speed performance analytics" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Speed that sells
              </h2>
              <p className="text-muted-foreground mb-8">
                Every millisecond counts in eCommerce. Our optimized stack ensures your store loads 
                instantly, keeping customers engaged and ready to buy.
              </p>
              <div className="space-y-4">
                {speedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Worry-Free Hosting Section */}
      <section className="py-20 lg:py-32 bg-light-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Worry-free hosting
              </h2>
              <p className="text-muted-foreground mb-8">
                Focus on growing your business while we handle security, updates, and maintenance. 
                Your store is protected 24/7 with enterprise-grade security.
              </p>
              <div className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-8 border border-secondary/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600" 
                  alt="Secure hosting protection" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Never Miss a Sale Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-8 border border-secondary/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" 
                  alt="Sales growth analytics" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Never miss a sale
              </h2>
              <div className="inline-block bg-secondary/20 text-secondary border border-secondary/40 text-sm font-medium px-3 py-1 rounded-full mb-6">
                99.99% UPTIME SLA
              </div>
              <p className="text-muted-foreground mb-8">
                Your store stays online when it matters most. Our infrastructure automatically 
                scales during traffic spikes, ensuring zero lost sales.
              </p>
              <div className="space-y-4">
                {saleFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20  border border-secondary/40 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
              Ready to get started?
            </h2>
            <p className="text-dark/80 mb-8 max-w-2xl mx-auto">
              Join thousands of successful store owners who trust us with their WooCommerce hosting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-dark hover:bg-dark/90 text-foreground">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-dark text-dark hover:bg-dark/10">
                Talk to Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Freedom to Build Section */}
      <section className="py-20 lg:py-32 bg-light-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                The freedom to<br />build properly
              </h2>
              <p className="text-muted-foreground mb-6">
                No restrictions, no limitations. Install any plugin, customize any theme, 
                and build your store exactly the way you want it.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Full access to WordPress files and database
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Install any WooCommerce extensions
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Custom PHP configurations available
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  SSH and WP-CLI access included
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-8 border border-secondary/20">
                <div className="aspect-video bg-dark/50 rounded-xl flex items-center justify-center">
                  <Server className="w-20 h-20 text-secondary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pick your plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible hosting plans designed to scale with your store. All plans include our core 
              WooCommerce optimizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-light-dark rounded-2xl p-6 border ${
                  plan.popular ? "border-secondary" : "border-border/50"
                } hover:border hover:border-secondary/40 transition-all duration-300 `}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-dark text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-secondary hover:bg-secondary/90 text-dark" 
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Switch Without Stress Section */}
      <section className="py-20 lg:py-32 bg-light-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-8 border border-secondary/20">
                <div className="aspect-video bg-dark/50 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-20 h-20 text-secondary" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Switch without the stress
              </h2>
              <p className="text-muted-foreground mb-6">
                Our migration experts handle everything. We'll move your store, products, 
                customers, and orders with zero downtime.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Free migration included with all plans
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Zero downtime guaranteed
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  All data preserved and verified
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Post-migration support included
                </li>
              </ul>
              <Button className="bg-secondary hover:bg-secondary/90 text-dark">
                Start Free Migration
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Orrien for WooCommerce?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've optimized every aspect of our platform specifically for WooCommerce stores.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light-dark rounded-2xl p-6 border border-border/50 hover:border-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-dark via-light-dark to-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to see Orrien in action?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the fastest WooCommerce hosting with a risk-free trial. 
              No credit card required to get started.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-dark">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
  <TestimonialsSection/>
      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently<br />Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Have questions? We've got answers. Can't find what you're looking for? 
                Our support team is here to help.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-light-dark rounded-xl p-6  border border-secondary/40"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
