import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { 
  Shield, Lock, CheckCircle, ArrowRight, 
  Server, Eye, AlertTriangle, RefreshCw, Star,
  FileText, Clock, Scan, Bug, Database, Users,
  LineChart, Trash2, History, Bell, Zap
} from "lucide-react";

const firewallFeatures = [
  { icon: Shield, text: "Enterprise-grade firewall protection" },
  { icon: Lock, text: "Real-time threat detection" },
  { icon: AlertTriangle, text: "Automatic attack blocking" },
  { icon: Eye, text: "24/7 traffic monitoring" },
];

const wafFeatures = [
  { icon: Shield, text: "SQL injection protection" },
  { icon: Lock, text: "Cross-site scripting (XSS) prevention" },
  { icon: Bug, text: "Bot attack mitigation" },
  { icon: AlertTriangle, text: "Zero-day vulnerability protection" },
];

const securitySuiteFeatures = [
  { icon: Lock, text: "Secure login protection" },
  { icon: Shield, text: "Two-factor authentication ready" },
  { icon: Eye, text: "File change detection" },
  { icon: Scan, text: "Malware scanning" },
];

const malwareCards = [
  {
    icon: Scan,
    title: "Real-time scanning",
    description: "Continuous monitoring detects malware the moment it appears on your site.",
  },
  {
    icon: Trash2,
    title: "Automatic removal",
    description: "Detected threats are automatically quarantined and removed without downtime.",
  },
  {
    icon: Shield,
    title: "Prevention first",
    description: "Proactive measures block malware before it can infect your WordPress site.",
  },
];

const updateCards = [
  {
    icon: RefreshCw,
    title: "Automatic secure minor updates to WordPress",
    description: "Security patches applied automatically within hours of release.",
  },
  {
    icon: Server,
    title: "Immediate rollback if there's problems",
    description: "One-click rollback if any update causes compatibility issues.",
  },
  {
    icon: Clock,
    title: "Update schedule control, or we'll handle it all for you",
    description: "Choose your update schedule or let us manage everything.",
  },
];

const activityFeatures = [
  { icon: FileText, text: "Complete audit trail of all changes" },
  { icon: Users, text: "User activity tracking" },
  { icon: History, text: "90-day log retention" },
  { icon: Bell, text: "Suspicious activity alerts" },
];

const peaceOfMindFeatures = [
  {
    icon: Shield,
    title: "All-in-one WordPress firewall protection",
    description: "Multi-layer security",
  },
  {
    icon: Database,
    title: "Automatic daily backups stored off-site",
    description: "30-day retention",
  },
  {
    icon: Lock,
    title: "Free SSL Certificate included",
    description: "Auto-renewed",
  },
  {
    icon: Zap,
    title: "DDoS protection built-in",
    description: "Always active",
  },
];

const testimonials = [
  {
    name: "Robert Chen",
    role: "Agency Owner",
    content: "Our agency manages 50+ WordPress sites. The security features give us peace of mind knowing all client sites are protected.",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    role: "E-commerce Owner",
    content: "After a hack on our old host, we switched here. Haven't had a single security issue in 2 years. The firewall just works.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Blogger",
    content: "I'm not technical, but the automatic security updates and monitoring mean I don't have to worry about my site.",
    rating: 5,
  },
];

const blogPosts = [
  {
    title: "How to secure your WordPress site in 2024",
    category: "WordPress Security",
    date: "Dec 28, 2024",
    readTime: "6 min read",
  },
  {
    title: "Understanding WordPress firewalls and WAF",
    category: "Security Guide",
    date: "Dec 25, 2024",
    readTime: "5 min read",
  },
  {
    title: "Why automatic updates matter for security",
    category: "Best Practices",
    date: "Dec 22, 2024",
    readTime: "4 min read",
  },
  {
    title: "Recovering from a WordPress hack: Step by step",
    category: "Security Recovery",
    date: "Dec 20, 2024",
    readTime: "8 min read",
  },
];

export default function Security() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-dark via-dark to-light-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your WordPress site{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-light">
                  stays safe, always
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl">
                Enterprise-grade security built into every hosting plan. Firewalls, malware scanning, 
                automatic updates, and 24/7 monitoring keep your site protected.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Dual firewall protection included
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Automatic malware scanning & removal
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Free SSL certificate with auto-renewal
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-dark font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-8 border border-secondary/30 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600" 
                  alt="WordPress security protection" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual Firewall Protection Section */}
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
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600" 
                  alt="Dual firewall protection" 
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
                Dual firewall protection
              </h2>
              <p className="text-muted-foreground mb-8">
                Every request to your site passes through two layers of firewall protection. 
                Our network-level firewall blocks malicious traffic before it reaches your server, 
                while our application firewall protects against WordPress-specific threats.
              </p>
              <div className="space-y-4">
                {firewallFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
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

      {/* WAF Section */}
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
                Always-on WordPress<br />website firewall (WAF)
              </h2>
              <p className="text-muted-foreground mb-8">
                Our Web Application Firewall is specifically tuned for WordPress. It understands 
                WordPress attack patterns and blocks them before they can compromise your site.
              </p>
              <div className="space-y-4">
                {wafFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
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
              className="relative"
            >
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-8 border border-secondary/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600" 
                  alt="Web application firewall" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Suite Section */}
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
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600" 
                  alt="Security suite scanning" 
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
                Pre-configured<br />WordPress security suite
              </h2>
              <p className="text-muted-foreground mb-8">
                Every WordPress installation comes with our security suite pre-configured. 
                Secure defaults, hardened settings, and ongoing protection—all set up for you.
              </p>
              <div className="space-y-4">
                {securitySuiteFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
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
      <section className="py-16 bg-secondary">
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
              Protect your WordPress site with enterprise-grade security today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-dark hover:bg-dark/90 text-foreground">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-dark text-dark hover:bg-dark/10">
                View Plans
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Malware Protection Section */}
      <section className="py-20 lg:py-32 bg-light-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Malware<br />protection<br />& cleanup
              </h2>
              <p className="text-muted-foreground">
                Our automated malware detection runs continuously, identifying and removing 
                threats before they can cause damage to your site or visitors.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {malwareCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark rounded-2xl p-6 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automatic Updates Section */}
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
              Automatic<br />WordPress updates
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Security vulnerabilities in outdated WordPress core, themes, and plugins are the 
              #1 cause of WordPress hacks. We keep everything updated automatically.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {updateCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light-dark rounded-2xl p-6 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Logging Section */}
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
                  <FileText className="w-20 h-20 text-secondary" />
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
                WordPress activity logging
              </h2>
              <p className="text-muted-foreground mb-8">
                Know exactly what's happening on your site. Every login, edit, plugin change, 
                and user action is logged and searchable for security auditing.
              </p>
              <div className="space-y-4">
                {activityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
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

      {/* Peace of Mind Section */}
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
              Automatic peace of mind
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Security that works in the background so you can focus on your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {peaceOfMindFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light-dark rounded-2xl p-6 border border-border/50 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Migration Section */}
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
                  <Server className="w-20 h-20 text-secondary" />
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
                Free WordPress<br />migrations (done for you)
              </h2>
              <p className="text-muted-foreground mb-6">
                Moving from an insecure host? Our migration team will move your WordPress site 
                for free and ensure all security features are properly configured.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Zero downtime migration
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Security audit included
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Malware cleanup if needed
                </li>
              </ul>
              <Button className="bg-secondary hover:bg-secondary/90 text-dark">
                Start Free Migration
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-dark via-light-dark to-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to see<br />Orrien in action?
            </h2>
            <p className="text-muted-foreground">
              Get in touch with our security team to discuss your WordPress protection needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <form className="space-y-4">
              <Input 
                type="text" 
                placeholder="Your name" 
                className="bg-light-dark border-border/50 text-foreground"
              />
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-light-dark border-border/50 text-foreground"
              />
              <Input 
                type="text" 
                placeholder="Company (optional)" 
                className="bg-light-dark border-border/50 text-foreground"
              />
              <Input 
                type="text" 
                placeholder="How can we help?" 
                className="bg-light-dark border-border/50 text-foreground"
              />
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-dark">
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-light-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What our customers<br />have to say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark rounded-2xl p-6 border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Recent news & blog posts
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-secondary/20 rounded-xl aspect-video mb-4 flex items-center justify-center">
                  <LineChart className="w-12 h-12 text-secondary" />
                </div>
                <div className="text-xs text-secondary mb-2">{post.category}</div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <div className="text-xs text-muted-foreground">
                  {post.date} • {post.readTime}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
