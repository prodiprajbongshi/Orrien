import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Check,
  Server,
  Shield,
  Zap,
  Globe,
  Clock,
  HeadphonesIcon,
  Database,
  Lock,
  ArrowRight,
  ChevronRight,
  Star,
  Play,
  Cpu,
  Cloud,
  Users,
  Layers,
  RefreshCw,
  Sparkles,
  Bot,
  FileCode,
  Settings,
  Gauge,
  Eye,
  Rocket,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const trustedProviders = [
  { name: "WordPress.org", rating: "4.9/5" },
  { name: "G2", rating: "4.8/5" },
  { name: "Trustpilot", rating: "4.7/5" },
];

const pricingPlans = [
  {
    name: "WP Starter",
    originalPrice: "$11.99",
    price: "$3.99",
    period: "/mo",
    description: "Perfect for personal blogs",
    features: [
      "1 WordPress Site",
      "10 GB NVMe Storage",
      "Free SSL Certificate",
      "Auto WordPress Updates",
      "Daily Backups",
    ],
    popular: false,
  },
  {
    name: "WP Professional",
    originalPrice: "$19.99",
    price: "$6.99",
    period: "/mo",
    description: "For growing WordPress sites",
    features: [
      "Unlimited WordPress Sites",
      "50 GB NVMe Storage",
      "Free SSL Certificate",
      "Staging Environment",
      "Auto WordPress Updates",
      "Daily Backups",
      "Free Domain",
    ],
    popular: true,
  },
  {
    name: "WP Business",
    originalPrice: "$29.99",
    price: "$12.99",
    period: "/mo",
    description: "For business websites",
    features: [
      "Unlimited WordPress Sites",
      "100 GB NVMe Storage",
      "Free SSL Certificate",
      "Staging Environment",
      "Auto WordPress Updates",
      "Real-time Backups",
      "Free Domain",
      "WP-CLI Access",
    ],
    popular: false,
  },
  {
    name: "WP Enterprise",
    originalPrice: "$59.99",
    price: "$24.99",
    period: "/mo",
    description: "Maximum WordPress power",
    features: [
      "Unlimited WordPress Sites",
      "200 GB NVMe Storage",
      "Wildcard SSL",
      "Staging Environment",
      "Auto WordPress Updates",
      "Real-time Backups",
      "Free Domain",
      "Priority Support",
      "Advanced Caching",
    ],
    popular: false,
  },
];

const wpFeatures = [
  {
    icon: Zap,
    title: "LiteSpeed Cache",
    description: "Built-in caching for blazing fast WordPress",
  },
  {
    icon: Shield,
    title: "Security Hardening",
    description: "WordPress-specific security rules",
  },
  {
    icon: RefreshCw,
    title: "Auto Updates",
    description: "Automatic WordPress core & plugin updates",
  },
  {
    icon: Database,
    title: "Daily Backups",
    description: "Automated daily WordPress backups",
  },
  {
    icon: Layers,
    title: "Staging Sites",
    description: "Test changes before going live",
  },
  {
    icon: Globe,
    title: "Free SSL",
    description: "Free SSL for all WordPress sites",
  },
  {
    icon: Settings,
    title: "WP-CLI Access",
    description: "Command-line WordPress management",
  },
  {
    icon: HeadphonesIcon,
    title: "WP Experts",
    description: "WordPress-specialized support team",
  },
];

const aiFeatures = [
  {
    icon: Bot,
    title: "AI Content Assistant",
    description: "Generate blog posts, pages, and product descriptions with AI",
  },
  {
    icon: Eye,
    title: "AI Image Optimization",
    description: "Automatically optimize images for faster load times",
  },
  {
    icon: Shield,
    title: "AI Security Scanning",
    description: "Intelligent malware detection and removal",
  },
  {
    icon: Sparkles,
    title: "AI SEO Suggestions",
    description: "Get smart recommendations to boost your rankings",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Builder",
    description: "Create custom chatbots for your WordPress site",
  },
  {
    icon: Gauge,
    title: "AI Performance Analysis",
    description: "Intelligent insights to speed up your site",
  },
];

const stats = [
  { value: "<1m", label: "Average page load time" },
  { value: "<15m", label: "Average support response" },
  { value: "97%", label: "Customer satisfaction rate" },
];

const testimonials = [
  {
    name: "David Miller",
    role: "WordPress Developer",
    content:
      "The WordPress-specific optimizations make a huge difference. My client sites load in under a second now.",
    avatar: "DM",
  },
  {
    name: "Lisa Thompson",
    role: "Blogger & Content Creator",
    content:
      "The AI content assistant has transformed how I create blog posts. It's like having a writing partner.",
    avatar: "LT",
  },
  {
    name: "James Wilson",
    role: "Agency Owner",
    content:
      "Managing 50+ WordPress sites is a breeze with staging environments and one-click updates.",
    avatar: "JW",
  },
];

const faqs = [
  {
    question: "Can I migrate my existing WordPress site?",
    answer:
      "Yes! We offer free WordPress migration by our expert team. We'll handle everything from files to databases, ensuring zero downtime.",
  },
  {
    question: "Do you support WooCommerce?",
    answer:
      "Absolutely! All our WordPress hosting plans are fully compatible with WooCommerce. Our higher-tier plans are optimized for e-commerce performance.",
  },
  {
    question: "What WordPress version do you support?",
    answer:
      "We always support the latest WordPress version and keep your installation automatically updated for security and performance.",
  },
  {
    question: "Can I install custom plugins and themes?",
    answer:
      "Yes, you have full freedom to install any WordPress plugins and themes. We also provide one-click installation for popular options.",
  },
  {
    question: "Is there a staging environment?",
    answer:
      "Yes, our Professional plan and above include staging environments where you can test changes before pushing them live.",
  },
];

export default function WordPressHosting() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-dark via-light-dark to-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6 border border-secondary/40">
                <span className="text-sm text-secondary font-medium">
                  WordPress Optimized
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Powerful & Secure
                <br />
                <span className="text-gradient">Hosting for WordPress</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Experience WordPress hosting built for speed, security, and
                simplicity. Get your site online with one-click installation and
                expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-primary text-dark font-semibold px-8"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                {trustedProviders.map((provider) => (
                  <div key={provider.name} className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-secondary text-secondary"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {provider.rating} on {provider.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl" />
                <div className="relative bg-light-dark border border-border rounded-2xl p-6 overflow-hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-muted-foreground ml-2">
                      WordPress Dashboard
                    </span>
                  </div>
                  <div className="bg-dark/50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-foreground font-medium">
                        Site Health
                      </span>
                      <span className="text-xs text-light bg-light/20 px-2 py-1 rounded">
                        Excellent
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">
                          Performance
                        </span>
                        <div className="flex-1 mx-3 h-1.5 bg-muted rounded-full">
                          <div className="w-[95%] h-full bg-light rounded-full" />
                        </div>
                        <span className="text-light">95%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Security</span>
                        <div className="flex-1 mx-3 h-1.5 bg-muted rounded-full">
                          <div className="w-[100%] h-full bg-secondary rounded-full" />
                        </div>
                        <span className="text-secondary">100%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">SEO Score</span>
                        <div className="flex-1 mx-3 h-1.5 bg-muted rounded-full">
                          <div className="w-[88%] h-full bg-primary rounded-full" />
                        </div>
                        <span className="text-primary">88%</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-dark/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-gradient">
                        0.8s
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Load Time
                      </div>
                    </div>
                    <div className="bg-dark/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-gradient">
                        99.99%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Uptime
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Speed Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-primary/30 via-secondary/20 to-light/20 border border-border rounded-2xl p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-4">
                      <Zap className="w-10 h-10 text-secondary" />
                    </div>
                    <div className="text-5xl font-bold text-gradient mb-2">
                      3x
                    </div>
                    <div className="text-lg text-foreground">
                      Faster than standard hosting
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Thanks to LiteSpeed, NVMe SSDs & built-in caching
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Orrien is
                <br />
                <span className="text-gradient">the fastest</span> platform
              </h2>
              <p className="text-muted-foreground mb-6">
                Our WordPress hosting is specifically optimized for speed. With
                LiteSpeed web servers, NVMe SSD storage, and built-in caching,
                your WordPress site will load faster than ever.
              </p>
              <ul className="space-y-4">
                {[
                  "LiteSpeed Cache for WordPress",
                  "Object caching with Redis",
                  "Optimized PHP workers",
                  "Global CDN included",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Enterprise level
                <br />
                <span className="text-gradient">protection</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Your WordPress site is protected by enterprise-grade security
                including Web Application Firewall, malware scanning, and
                automatic patching.
              </p>
              <ul className="space-y-4">
                {[
                  "WordPress-specific WAF rules",
                  "Real-time malware scanning",
                  "Automatic security patching",
                  "DDoS protection included",
                  "Two-factor authentication",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <div className="relative bg-light-dark border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Security Status
                      </div>
                      <div className="text-sm text-light">
                        All systems secure
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Firewall",
                      "Malware Scanner",
                      "SSL Certificate",
                      "Brute Force Protection",
                    ].map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center justify-between p-3 bg-dark/50 rounded-lg"
                      >
                        <span className="text-sm text-foreground">{item}</span>
                        <span className="text-xs text-light bg-light/20 px-2 py-1 rounded">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-light/20 rounded-3xl blur-3xl" />
                <div className="relative bg-light-dark border border-border rounded-2xl p-6">
                 <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6 border border-secondary/40">
                <span className="text-sm text-secondary font-medium">
                  WordPress Manager
                </span>
              </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-dark/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <RefreshCw className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-foreground">
                          Auto Updates
                        </span>
                      </div>
                      <div className="w-10 h-5 bg-secondary rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-dark rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-dark/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Database className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">
                          Daily Backups
                        </span>
                      </div>
                      <div className="w-10 h-5 bg-secondary rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-dark rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-dark/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Layers className="w-4 h-4 text-light" />
                        <span className="text-sm text-foreground">
                          Staging Site
                        </span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs"
                      >
                        Create
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Simple WordPress
                <br />
                <span className="text-gradient">management</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Manage your WordPress sites with ease. One-click staging,
                automatic updates, and a powerful dashboard designed
                specifically for WordPress.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "One-click WordPress install",
                  "Staging environments",
                  "Plugin & theme management",
                  "Database optimization",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let AI do the <span className="text-gradient">heavy lifting</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leverage artificial intelligence to create content, optimize
              images, and enhance security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-light-dark border border-border rounded-2xl p-6 hover:border-secondary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl border border-secondary/40 bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              WordPress support
              <br />
              <span className="text-gradient">you can count on</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our WordPress experts are available 24/7 to help you succeed.
            </p>
          </div>

         

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wpFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-light-dark border border-border rounded-xl p-5 text-center hover:border-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 border border-secondary/40 rounded-lg bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
            <TestimonialsSection/>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/20 via-secondary/10 to-light/10 border border-border rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of WordPress users who trust Orrien for their
              hosting needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-primary text-dark font-semibold px-8"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                Compare Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Frequently
                <br />
                <span className="text-gradient">asked questions</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Got questions? We've got answers. If you can't find what you're
                looking for, our support team is available 24/7.
              </p>
              <Button className="bg-secondary hover:bg-primary text-dark">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-light-dark border border-border rounded-xl p-5 border border-secondary/40"
                >
                  <h4 className="font-medium text-foreground mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
