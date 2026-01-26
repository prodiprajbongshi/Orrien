import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Cloud Hosting: Trends to Watch in 2026",
    excerpt: "Explore the latest innovations in cloud infrastructure, from edge computing to AI-powered optimization, and learn how these advancements are reshaping the hosting industry.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    author: "Sarah Johnson",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    category: "Cloud Hosting",
    slug: "future-of-cloud-hosting"
  };

  const categories = [
    { name: "All Posts", count: 45 },
    { name: "Web Hosting", count: 12 },
    { name: "WordPress", count: 15 },
    { name: "Security", count: 8 },
    { name: "Performance", count: 6 },
    { name: "Tutorials", count: 10 },
  ];

  const posts = [
    {
      title: "10 Essential WordPress Plugins Every Site Needs",
      excerpt: "Discover the must-have plugins that will enhance your WordPress site's functionality, security, and performance.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=250&fit=crop",
      author: "Mike Chen",
      date: "Dec 25, 2025",
      readTime: "5 min read",
      category: "WordPress",
      slug: "essential-wordpress-plugins"
    },
    {
      title: "Complete Guide to SSL Certificates",
      excerpt: "Everything you need to know about SSL certificates, from types and installation to troubleshooting common issues.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop",
      author: "Emily Davis",
      date: "Dec 22, 2025",
      readTime: "7 min read",
      category: "Security",
      slug: "ssl-certificates-guide"
    },
    {
      title: "Optimizing Website Speed: A Complete Checklist",
      excerpt: "Learn proven techniques to boost your website's loading speed and improve user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      author: "David Wilson",
      date: "Dec 20, 2025",
      readTime: "6 min read",
      category: "Performance",
      slug: "website-speed-optimization"
    },
    {
      title: "Choosing the Right Hosting Plan for Your Business",
      excerpt: "A comprehensive comparison of shared, VPS, and dedicated hosting to help you make the best decision.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      author: "Sarah Johnson",
      date: "Dec 18, 2025",
      readTime: "9 min read",
      category: "Web Hosting",
      slug: "choosing-hosting-plan"
    },
    {
      title: "How to Migrate Your Website Without Downtime",
      excerpt: "Step-by-step guide to seamlessly transferring your website to a new host while keeping it online.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=250&fit=crop",
      author: "Alex Turner",
      date: "Dec 15, 2025",
      readTime: "8 min read",
      category: "Tutorials",
      slug: "website-migration-guide"
    },
    {
      title: "Understanding DDoS Attacks and How to Prevent Them",
      excerpt: "Protect your website from distributed denial-of-service attacks with these essential security measures.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      author: "Emily Davis",
      date: "Dec 12, 2025",
      readTime: "7 min read",
      category: "Security",
      slug: "ddos-protection-guide"
    },
  ];

  const popularPosts = [
    { title: "Getting Started with WooCommerce", date: "Dec 10, 2025", slug: "essential-wordpress-plugins" },
    { title: "DNS Explained: A Beginner's Guide", date: "Dec 8, 2025", slug: "ssl-certificates-guide" },
    { title: "Top 5 CDN Providers Compared", date: "Dec 5, 2025", slug: "website-speed-optimization" },
    { title: "Email Hosting Best Practices", date: "Dec 3, 2025", slug: "choosing-hosting-plan" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
 

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-foreground">Featured Article</h2>
          </motion.div>
          
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="grid lg:grid-cols-2 gap-8 bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
                <span className="text-muted-foreground text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-dark" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{featuredPost.author}</div>
                    <div className="text-muted-foreground text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {featuredPost.date}
                    </div>
                  </div>
                </div>
                <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 mb-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                {categories.map((category, index) => (
                    <Link 
                      key={index}
                      to="/blog"
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {category.name}
                      </span>
                      <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Popular Posts */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Popular Posts</h3>
                <div className="space-y-4">
                {popularPosts.map((post, index) => (
                      <Link 
                        key={index}
                        to={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <h4 className="text-foreground font-medium text-sm group-hover:text-primary transition-colors mb-1">
                          {post.title}
                        </h4>
                        <span className="text-muted-foreground text-xs">{post.date}</span>
                      </Link>
                    ))}
                </div>
              </motion.div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between mb-8"
              >
                <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {post.category}
                          </span>
                          <span className="text-muted-foreground text-xs flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-secondary/30 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-secondary" />
                            </div>
                            <div className="text-xs">
                              <div className="text-foreground font-medium">{post.author}</div>
                              <div className="text-muted-foreground">{post.date}</div>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-dark">
                  Load More Articles
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-lightDark to-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-light/80 mb-8">
              Get the latest articles, tutorials, and hosting tips delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-light/10 border-light/20 text-light placeholder:text-light/50"
              />
              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
