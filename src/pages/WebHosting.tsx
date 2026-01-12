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
  HardDrive,
  Cloud,
  Users,
  BarChart3,
  Layers,
  RefreshCw,
  Wifi,
  Mail,
  FileCode,
  Palette,
  ShoppingCart,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const trustedProviders = [
  { name: "WordPress", icon: "W" },
  { name: "cPanel", icon: "◎" },
  { name: "CloudLinux", icon: "☁" },
  { name: "LiteSpeed", icon: "⚡" },
  { name: "Softaculous", icon: "◈" },
];

const pricingPlans = [
  {
    name: "Starter",
    originalPrice: "$9.99",
    price: "$2.99",
    period: "/mo",
    description: "Perfect for personal websites",
    features: [
      "1 Website",
      "10 GB NVMe Storage",
      "Free SSL Certificate",
      "Weekly Backups",
      "1 Email Account",
    ],
    popular: false,
  },
  {
    name: "Professional",
    originalPrice: "$14.99",
    price: "$4.99",
    period: "/mo",
    description: "Great for small businesses",
    features: [
      "Unlimited Websites",
      "50 GB NVMe Storage",
      "Free SSL Certificate",
      "Daily Backups",
      "Unlimited Email Accounts",
      "Free Domain",
    ],
    popular: true,
  },
  {
    name: "Business",
    originalPrice: "$24.99",
    price: "$9.99",
    period: "/mo",
    description: "For growing businesses",
    features: [
      "Unlimited Websites",
      "100 GB NVMe Storage",
      "Free SSL Certificate",
      "Daily Backups",
      "Unlimited Email Accounts",
      "Free Domain",
      "Priority Support",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    originalPrice: "$49.99",
    price: "$19.99",
    period: "/mo",
    description: "Maximum power & features",
    features: [
      "Unlimited Websites",
      "200 GB NVMe Storage",
      "Wildcard SSL",
      "Real-time Backups",
      "Unlimited Email Accounts",
      "Free Domain",
      "Dedicated Support",
      "Advanced Security",
    ],
    popular: false,
  },
];

const stats = [
  { value: "97%", label: "Customer Satisfaction" },
  { value: "1.8M+", label: "Websites Hosted" },
  { value: "181", label: "Countries Served" },
];

const featuresGrid = [
  {
    icon: Server,
    title: "cPanel Control",
    description: "Easy-to-use control panel",
  },
  {
    icon: Shield,
    title: "Free SSL",
    description: "Secure your site instantly",
  },
  {
    icon: Zap,
    title: "LiteSpeed Cache",
    description: "Lightning fast performance",
  },
  {
    icon: Database,
    title: "Daily Backups",
    description: "Never lose your data",
  },
  { icon: Globe, title: "Free Domain", description: "Get your domain free" },
  {
    icon: Mail,
    title: "Email Hosting",
    description: "Professional email accounts",
  },
  { icon: Lock, title: "DDoS Protection", description: "Stay protected 24/7" },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Always here to help",
  },
];

const advancedFeatures = [
  {
    icon: Cpu,
    title: "High-Performance Servers",
    description:
      "Latest gen AMD EPYC processors with NVMe SSDs for blazing fast speeds",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Advanced firewall, malware scanning, and DDoS protection included",
  },
  {
    icon: RefreshCw,
    title: "Auto-Scaling Resources",
    description: "Automatically scale CPU and RAM based on traffic demands",
  },
  {
    icon: Cloud,
    title: "Global CDN",
    description: "Content delivery network for faster loading worldwide",
  },
  {
    icon: Database,
    title: "Managed Databases",
    description: "MySQL, PostgreSQL, and Redis with automatic optimization",
  },
  {
    icon: Settings,
    title: "Developer Tools",
    description: "Git, SSH, WP-CLI, and staging environments included",
  },
];

const hostingTypes = [
  {
    icon: Server,
    title: "Shared Hosting",
    description:
      "Perfect for beginners and small websites. Cost-effective and easy to manage.",
    link: "/web-hosting",
  },
  {
    icon: Cloud,
    title: "VPS Hosting",
    description:
      "More power and control with dedicated resources for growing sites.",
    link: "#",
  },
  {
    icon: HardDrive,
    title: "Dedicated Servers",
    description: "Maximum performance with your own physical server hardware.",
    link: "#",
  },
];

const whyChoose = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "99.9% uptime guarantee with premium hardware",
  },
  {
    icon: Shield,
    title: "Secure & Protected",
    description: "Enterprise-grade security for your peace of mind",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "24/7/365 support from hosting professionals",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Data centers across 6 continents",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Small Business Owner",
    content:
      "Switching to Orrien was the best decision for my business. My site is faster than ever!",
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "Freelance Developer",
    content:
      "The developer tools and SSH access make my workflow so much smoother.",
    avatar: "MJ",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "E-commerce Store Owner",
    content:
      "99.9% uptime is not just a promise - they actually deliver it consistently.",
    avatar: "ED",
    rating: 5,
  },
];

const platforms = [
  { name: "WordPress", icon: FileCode },
  { name: "Joomla", icon: Layers },
  { name: "Drupal", icon: Globe },
  { name: "Magento", icon: ShoppingCart },
  { name: "PrestaShop", icon: ShoppingCart },
  { name: "OpenCart", icon: ShoppingCart },
];

const faqs = [
  {
    question: "What is web hosting?",
    answer:
      "Web hosting is a service that allows you to publish your website on the internet. When you purchase hosting, you're renting space on a server to store your website files.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes! We offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied, we'll refund your purchase.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade your hosting plan at any time. The price difference will be prorated for the remaining billing period.",
  },
  {
    question: "Is SSL included for free?",
    answer:
      "Yes, all our hosting plans include free SSL certificates to keep your website secure and boost your SEO rankings.",
  },
];

export default function WebHosting() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-dark via-light-dark to-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Fast, reliable,
                <br />
                <span className="text-gradient">secure web hosting</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Get your website online with our powerful hosting solutions.
                Enjoy lightning-fast speeds, 99.9% uptime, and 24/7 expert
                support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-primary text-dark font-semibold px-8"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                   
                      <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"            
                        alt="Emily Davis"
                        className="w-8 h-8 rounded-full border-2 border-dark hover:scale-110 transition-transform duration-200 cursor-pointer"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/women/70.jpg"            
                        alt="Emily Davis"
                        className="w-8 h-8 rounded-full border-2 border-dark hover:scale-110 transition-transform duration-200 cursor-pointer"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/women/85.jpg"            
                        alt="Emily Davis"
                        className="w-8 h-8 rounded-full border-2 border-dark hover:scale-110 transition-transform duration-200 cursor-pointer"
                      />
                 
                  </div>
                  <span className="text-md text-muted-foreground">
                    500+ happy customers
                  </span>
                </div>
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
                <div className="relative bg-light-dark border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Server className="w-5 h-5 text-secondary" />
                      <div className="flex-1 h-2 bg-secondary/30 rounded-full">
                        <div className="w-4/5 h-2 bg-secondary rounded-full" />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        CPU: 80%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-primary" />
                      <div className="flex-1 h-2 bg-primary/30 rounded-full">
                        <div className="w-3/5 h-2 bg-primary rounded-full" />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        RAM: 60%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-5 h-5 text-light" />
                      <div className="flex-1 h-2 bg-light/30 rounded-full">
                        <div className="w-2/5 h-2 bg-light rounded-full" />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Storage: 40%
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-dark/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground">
                        Server Status
                      </span>
                      <span className="flex items-center gap-1 text-xs text-light">
                        <span className="w-2 h-2 rounded-full bg-light animate-pulse" />
                        Online
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gradient">
                      99.99% Uptime
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Providers */}
      <section className="py-12 bg-muted/30 border-y border-border/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted technologies we use
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustedProviders.map((provider) => (
              <div
                key={provider.name}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-2xl">{provider.icon}</span>
                <span className="font-medium">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

 
      {/* Pricing Section */}
     <PricingSection/>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Features and <span className="text-gradient">benefits</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to host your website successfully
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresGrid.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-light-dark border border-border rounded-xl p-5 text-center hover:border-secondary/50 transition-colors"
              >
               <div className="w-12 h-12 rounded-lg bg-secondary/20 border border-secondary/50 flex items-center justify-center mx-auto mb-4">
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

      {/* Advanced Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advanced <span className="text-gradient">features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade infrastructure at your fingertips
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-light-dark to-dark border border-border rounded-2xl p-6 hover:border-secondary/50 transition-all group"
              >
          <div className="w-14 h-14 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
  <feature.icon className="w-7 h-7 text-secondary" />
</div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Perfect Plan */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find the perfect hosting
              <br />
              <span className="text-gradient">plan for your needs</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {hostingTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-light-dark border border-border rounded-2xl p-6 hover:border-secondary/50 transition-all group"
              >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/30 to-primary/30 border border-secondary/40 flex items-center justify-center mb-4">
  <type.icon className="w-7 h-7 text-secondary" />
</div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <Link
                  to={type.link}
                  className="inline-flex items-center text-secondary hover:text-light transition-colors font-medium"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why <span className="text-gradient">Orrien</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                We've been in the hosting industry for over a decade, serving
                millions of customers worldwide with reliable, fast, and secure
                hosting solutions.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChoose.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center flex-shrink-0">
  <item.icon className="w-6 h-6 text-secondary" />
</div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-light-dark to-dark border border-border rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <HeadphonesIcon className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Industry best solutions
                    </h3>
                    <p className="text-muted-foreground">Expert support 24/7</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our team of hosting experts is available around the clock to
                  help you with any questions or issues.
                </p>
                <Button className="bg-secondary hover:bg-primary text-dark">
                  Contact Support
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection/>

      {/* Platforms */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What platforms do{" "}
              <span className="text-gradient">you support?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              One-click installation for all major CMS and e-commerce platforms
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-light-dark border border-border rounded-xl px-6 py-4 hover:border-secondary/50 transition-colors"
              >
                <platform.icon className="w-6 h-6 text-secondary" />
                <span className="font-medium text-foreground">
                  {platform.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & FAQ */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Want to get started,{" "}
                <span className="text-gradient">at bulk?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Get in touch with our sales team for custom enterprise solutions
                and volume discounts.
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-primary text-dark"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Frequently asked questions
              </h3>
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
                    <p className="text-sm text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
