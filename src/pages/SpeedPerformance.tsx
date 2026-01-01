import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { 
  Zap, Shield, Globe, CheckCircle, ArrowRight, 
  Server, Database, Gauge, Star, Clock, TrendingUp,
  BarChart3, Search, Bot, Rocket, LineChart, Layers
} from "lucide-react";

const performanceMetrics = [
  { label: "Page Load Time", value: "<200ms", description: "Average TTFB" },
  { label: "Global CDN", value: "200+", description: "Edge locations" },
  { label: "Uptime", value: "99.99%", description: "Guaranteed SLA" },
  { label: "Cache Hit Rate", value: "98%+", description: "Static content" },
];

const googleRewardsFeatures = [
  { icon: Search, text: "Better search engine rankings" },
  { icon: TrendingUp, text: "Improved Core Web Vitals" },
  { icon: BarChart3, text: "Lower bounce rates" },
  { icon: Gauge, text: "Higher quality scores" },
];

const cachingFeatures = [
  { icon: Database, text: "Full-page caching" },
  { icon: Layers, text: "Object caching with Redis" },
  { icon: Globe, text: "CDN integration included" },
  { icon: Zap, text: "Browser caching optimized" },
];

const conversionStats = [
  { value: "+40%", label: "Conversion increase" },
  { value: "-50%", label: "Bounce rate reduction" },
  { value: "+25%", label: "Pages per session" },
];

const aiFeatures = [
  { icon: Bot, text: "AI crawler optimization" },
  { icon: Search, text: "Search bot prioritization" },
  { icon: Shield, text: "Bot traffic management" },
];

const wpRocketFeatures = [
  {
    icon: Gauge,
    title: "Improved Site Metrics",
    description: "Boost your Core Web Vitals scores with automatic optimization, lazy loading, and minification of CSS/JS files.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "WP Rocket works perfectly with our hosting stack. No configuration needed - it just works out of the box.",
  },
];

const testimonials = [
  {
    name: "James Mitchell",
    role: "Web Developer",
    content: "We dropped to 0.1s load time. Business outcomes speak for themselves. Our clients are thrilled with the performance.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "E-commerce Manager",
    content: "Excellent, and improved response from users. Our checkout completion rate improved by 35% after switching.",
    rating: 5,
  },
  {
    name: "David Roberts",
    role: "Marketing Director",
    content: "Thanks for the quick help. Your team solved our speed issues in hours, not days. Incredible support.",
    rating: 5,
  },
];

const blogPosts = [
  {
    title: "Why your website speed matters for SEO in 2024",
    category: "WordPress Performance",
    date: "Dec 28, 2024",
    readTime: "5 min read",
  },
  {
    title: "Should my website be using caching? (And right way)",
    category: "Caching Tips",
    date: "Dec 25, 2024",
    readTime: "4 min read",
  },
  {
    title: "WordPress database optimization: A complete guide",
    category: "Database Optimization",
    date: "Dec 22, 2024",
    readTime: "7 min read",
  },
  {
    title: "How to measure and improve your website",
    category: "Performance Metrics",
    date: "Dec 20, 2024",
    readTime: "6 min read",
  },
];

export default function SpeedPerformance() {
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
                WordPress built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-light">
                  speed
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl">
                Hosting optimized from the ground up. LiteSpeed servers, NVMe storage, 
                global CDN, and advanced caching deliver blazing-fast performance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  LiteSpeed servers included at no extra cost
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Object caching ready out of the box
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Enterprise-grade global CDN included
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-dark font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted/30">
                  Learn More
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
                <div className="aspect-video bg-dark/50 rounded-xl flex items-center justify-center">
                  <Zap className="w-24 h-24 text-secondary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built to Perform Section */}
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
              Built to perform
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-light-dark rounded-2xl p-8 border border-border/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Gauge className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Extreme speed</h3>
                  <p className="text-muted-foreground text-sm">Performance you can measure</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8">
                Our WordPress hosting delivers exceptional speed through our optimized stack. 
                Experience sub-200ms TTFB, global CDN delivery, and server-level caching that 
                keeps your site lightning fast for visitors worldwide.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-secondary">{metric.value}</div>
                    <div className="text-sm font-medium text-foreground">{metric.label}</div>
                    <div className="text-xs text-muted-foreground">{metric.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Rewards Section */}
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
                  <Search className="w-20 h-20 text-secondary" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-secondary/20 text-secondary text-xs font-medium px-3 py-1 rounded-full">SEO</span>
                <span className="bg-secondary/20 text-secondary text-xs font-medium px-3 py-1 rounded-full">CORE WEB VITALS</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Google rewards<br />fast websites
              </h2>
              <p className="text-muted-foreground mb-8">
                Page speed is a confirmed Google ranking factor. Fast sites rank higher, 
                get more organic traffic, and provide better user experiences that lead to 
                higher conversions.
              </p>
              <div className="space-y-4">
                {googleRewardsFeatures.map((feature, index) => (
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

      {/* Smart Dynamic Caching Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Smart dynamic caching
              </h2>
              <p className="text-muted-foreground mb-8">
                Our intelligent caching system adapts to your WordPress site. It knows what 
                to cache, when to invalidate, and how to serve content from the fastest 
                location for each visitor.
              </p>
              <div className="space-y-4 mb-8">
                {cachingFeatures.map((feature, index) => (
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
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-8 border border-secondary/20">
                <div className="aspect-video bg-dark/50 rounded-xl flex items-center justify-center">
                  <Database className="w-20 h-20 text-secondary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Higher Conversion Rates Section */}
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
                <div className="grid grid-cols-3 gap-4">
                  {conversionStats.map((stat, index) => (
                    <div key={index} className="bg-dark/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-secondary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
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
                Higher conversion rates
              </h2>
              <p className="text-muted-foreground mb-6">
                Every second of load time costs you conversions. Studies show that a 1-second 
                delay can reduce conversions by 7%. Our optimized hosting keeps your site 
                fast and your visitors engaged.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Faster checkout completion rates
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Reduced cart abandonment
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Higher average session duration
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Crawlers Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Optimised for AI crawlers
              </h2>
              <p className="text-muted-foreground mb-8">
                The future of search includes AI. Our hosting is optimized for both traditional 
                search engines and emerging AI crawlers, ensuring your content is discoverable 
                across all platforms.
              </p>
              <div className="space-y-4 mb-8">
                {aiFeatures.map((feature, index) => (
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
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-8 border border-secondary/20">
                <div className="aspect-video bg-dark/50 rounded-xl flex items-center justify-center">
                  <Bot className="w-20 h-20 text-secondary" />
                </div>
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
              Join thousands of website owners who trust our high-performance WordPress hosting.
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

      {/* WP Rocket Section */}
      <section className="py-20 lg:py-32 bg-light-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Want even faster? Get<br />WP Rocket for free
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground">
                Every hosting plan includes a free WP Rocket license ($49/year value). 
                Combined with our optimized servers, you get the ultimate WordPress 
                performance stack without any extra cost.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {wpRocketFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark rounded-2xl p-8 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
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
              Get in touch with our team to schedule a demo or ask any questions about 
              our high-performance WordPress hosting.
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
            <p className="text-secondary text-sm font-medium mb-2">REVIEWS</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What our customers have to say
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
