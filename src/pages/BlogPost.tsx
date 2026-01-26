import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Clock, Tag, Share2, Facebook, Twitter, Linkedin, BookOpen } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

// Blog post data - in a real app, this would come from an API/database
const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
}> = {
  "future-of-cloud-hosting": {
    title: "The Future of Cloud Hosting: Trends to Watch in 2026",
    excerpt: "Explore the latest innovations in cloud infrastructure, from edge computing to AI-powered optimization.",
    content: `
      <p>The cloud hosting industry is evolving at an unprecedented pace, with new technologies and methodologies reshaping how businesses deploy and manage their digital infrastructure. As we look ahead to 2026, several key trends are emerging that will define the future of cloud hosting.</p>
      
      <h2>Edge Computing Revolution</h2>
      <p>Edge computing is moving from concept to reality, with major cloud providers investing heavily in edge infrastructure. This shift brings computing power closer to end-users, reducing latency and improving performance for applications that require real-time processing.</p>
      <p>For hosting providers, this means adapting infrastructure to support distributed workloads while maintaining security and reliability standards. The integration of edge nodes with traditional cloud architecture creates hybrid environments that offer the best of both worlds.</p>
      
      <h2>AI-Powered Optimization</h2>
      <p>Artificial intelligence is transforming how hosting resources are managed and allocated. Machine learning algorithms can now predict traffic patterns, automatically scale resources, and identify potential issues before they impact performance.</p>
      <p>These AI-driven optimizations not only improve performance but also reduce costs by ensuring resources are used efficiently. Expect to see more hosting providers offering AI-powered management tools as standard features.</p>
      
      <h2>Green Hosting Initiatives</h2>
      <p>Sustainability is becoming a critical factor in hosting decisions. Data centers consume significant amounts of energy, and businesses are increasingly seeking eco-friendly hosting options. Providers are responding with renewable energy initiatives, improved cooling systems, and carbon offset programs.</p>
      
      <h2>Enhanced Security Measures</h2>
      <p>With cyber threats becoming more sophisticated, cloud hosting security is evolving to meet new challenges. Zero-trust architecture, advanced encryption, and AI-powered threat detection are becoming standard features rather than premium add-ons.</p>
      
      <h2>Conclusion</h2>
      <p>The future of cloud hosting is bright, with innovations that promise better performance, enhanced security, and more sustainable operations. Businesses that stay informed about these trends will be well-positioned to leverage the latest technologies for competitive advantage.</p>
    `,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    author: "Sarah Johnson",
    authorRole: "Chief Technology Officer",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    category: "Cloud Hosting"
  },
  "essential-wordpress-plugins": {
    title: "10 Essential WordPress Plugins Every Site Needs",
    excerpt: "Discover the must-have plugins that will enhance your WordPress site's functionality, security, and performance.",
    content: `
      <p>WordPress powers over 40% of all websites on the internet, and much of its flexibility comes from its extensive plugin ecosystem. Whether you're building a blog, business site, or e-commerce store, these essential plugins will help you create a more powerful and secure website.</p>
      
      <h2>1. Yoast SEO</h2>
      <p>Search engine optimization is crucial for any website, and Yoast SEO makes it accessible even for beginners. This plugin provides real-time content analysis, XML sitemap generation, and social media integration to help your content rank higher in search results.</p>
      
      <h2>2. Wordfence Security</h2>
      <p>Security should never be an afterthought. Wordfence provides a comprehensive security solution including a firewall, malware scanner, and login security features to protect your site from threats.</p>
      
      <h2>3. WP Rocket</h2>
      <p>Page speed is a critical ranking factor and user experience metric. WP Rocket offers caching, file optimization, and lazy loading to dramatically improve your site's performance without complex configuration.</p>
      
      <h2>4. UpdraftPlus</h2>
      <p>Regular backups are essential for any website. UpdraftPlus makes it easy to schedule automatic backups and store them securely in cloud storage services like Google Drive, Dropbox, or Amazon S3.</p>
      
      <h2>5. Elementor</h2>
      <p>For those who want more design flexibility without coding, Elementor provides a powerful drag-and-drop page builder with hundreds of templates and widgets.</p>
      
      <h2>Conclusion</h2>
      <p>These plugins form the foundation of a well-optimized WordPress site. Start with these essentials and expand your plugin collection based on your specific needs.</p>
    `,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop",
    author: "Mike Chen",
    authorRole: "WordPress Specialist",
    date: "Dec 25, 2025",
    readTime: "5 min read",
    category: "WordPress"
  },
  "ssl-certificates-guide": {
    title: "Complete Guide to SSL Certificates",
    excerpt: "Everything you need to know about SSL certificates, from types and installation to troubleshooting common issues.",
    content: `
      <p>SSL (Secure Sockets Layer) certificates are essential for any website that handles sensitive information. They encrypt data transmitted between your server and visitors' browsers, protecting everything from login credentials to payment information.</p>
      
      <h2>What is an SSL Certificate?</h2>
      <p>An SSL certificate is a digital certificate that authenticates a website's identity and enables an encrypted connection. When installed, it changes your URL from HTTP to HTTPS and displays a padlock icon in browsers.</p>
      
      <h2>Types of SSL Certificates</h2>
      <p><strong>Domain Validation (DV):</strong> The most basic type, verifying only domain ownership. Ideal for blogs and personal sites.</p>
      <p><strong>Organization Validation (OV):</strong> Requires verification of the organization behind the domain. Suitable for business websites.</p>
      <p><strong>Extended Validation (EV):</strong> The highest level of validation, displaying the organization name in the browser. Best for e-commerce and financial sites.</p>
      
      <h2>Installation Process</h2>
      <p>Installing an SSL certificate typically involves generating a Certificate Signing Request (CSR), submitting it to a Certificate Authority (CA), and installing the issued certificate on your server. Most hosting providers offer one-click SSL installation.</p>
      
      <h2>Common Issues and Solutions</h2>
      <p>Mixed content warnings occur when your HTTPS page loads some resources over HTTP. Resolve this by updating all resource URLs to use HTTPS or relative paths.</p>
      
      <h2>Conclusion</h2>
      <p>SSL certificates are no longer optional—they're essential for security, SEO, and user trust. Choose the right type for your needs and ensure proper installation for maximum protection.</p>
    `,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=600&fit=crop",
    author: "Emily Davis",
    authorRole: "Security Analyst",
    date: "Dec 22, 2025",
    readTime: "7 min read",
    category: "Security"
  },
  "website-speed-optimization": {
    title: "Optimizing Website Speed: A Complete Checklist",
    excerpt: "Learn proven techniques to boost your website's loading speed and improve user experience.",
    content: `
      <p>Website speed is crucial for user experience, SEO rankings, and conversion rates. Studies show that even a one-second delay in page load time can reduce conversions by 7%. Here's your complete checklist for optimizing website speed.</p>
      
      <h2>Image Optimization</h2>
      <p>Images often account for the majority of a page's weight. Compress images using tools like TinyPNG or ImageOptim, use modern formats like WebP, and implement lazy loading for images below the fold.</p>
      
      <h2>Enable Caching</h2>
      <p>Browser caching stores static resources locally, reducing load times for returning visitors. Server-side caching with tools like Redis or Memcached can dramatically reduce database queries.</p>
      
      <h2>Minify Resources</h2>
      <p>Remove unnecessary characters from HTML, CSS, and JavaScript files. Tools like UglifyJS and CSSNano automate this process without affecting functionality.</p>
      
      <h2>Use a CDN</h2>
      <p>Content Delivery Networks distribute your content across global servers, reducing latency for users regardless of their location. Popular options include Cloudflare, AWS CloudFront, and Fastly.</p>
      
      <h2>Optimize Core Web Vitals</h2>
      <p>Google's Core Web Vitals—LCP, FID, and CLS—are now ranking factors. Focus on reducing Largest Contentful Paint time, minimizing First Input Delay, and eliminating Cumulative Layout Shift.</p>
      
      <h2>Conclusion</h2>
      <p>Speed optimization is an ongoing process. Regularly test your site with tools like Google PageSpeed Insights and GTmetrix to identify and address performance issues.</p>
    `,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    author: "David Wilson",
    authorRole: "Performance Engineer",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    category: "Performance"
  },
  "choosing-hosting-plan": {
    title: "Choosing the Right Hosting Plan for Your Business",
    excerpt: "A comprehensive comparison of shared, VPS, and dedicated hosting to help you make the best decision.",
    content: `
      <p>Selecting the right hosting plan is one of the most important decisions for your online business. The wrong choice can lead to poor performance, security vulnerabilities, and scalability issues. Let's compare your options.</p>
      
      <h2>Shared Hosting</h2>
      <p>Multiple websites share server resources, making it the most affordable option. Best for small websites, blogs, and businesses just starting out. Limitations include reduced performance during traffic spikes and limited customization.</p>
      
      <h2>VPS Hosting</h2>
      <p>Virtual Private Servers provide dedicated resources within a virtualized environment. You get more control and better performance than shared hosting at a moderate price point. Ideal for growing businesses and medium-traffic websites.</p>
      
      <h2>Dedicated Servers</h2>
      <p>An entire physical server dedicated to your website or application. Offers maximum performance, security, and customization. Best for large enterprises, high-traffic sites, and applications with specific compliance requirements.</p>
      
      <h2>Cloud Hosting</h2>
      <p>Resources are distributed across multiple servers, providing excellent scalability and reliability. Pay-as-you-go pricing makes it cost-effective for variable traffic patterns.</p>
      
      <h2>How to Choose</h2>
      <p>Consider your traffic volume, technical expertise, budget, and growth projections. Start with a plan that meets current needs with room to scale, and choose a provider that makes upgrades seamless.</p>
      
      <h2>Conclusion</h2>
      <p>There's no one-size-fits-all solution. Evaluate your specific requirements and choose a hosting plan that balances performance, cost, and scalability for your business needs.</p>
    `,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    author: "Sarah Johnson",
    authorRole: "Chief Technology Officer",
    date: "Dec 18, 2025",
    readTime: "9 min read",
    category: "Web Hosting"
  },
  "website-migration-guide": {
    title: "How to Migrate Your Website Without Downtime",
    excerpt: "Step-by-step guide to seamlessly transferring your website to a new host while keeping it online.",
    content: `
      <p>Migrating your website to a new host can seem daunting, but with proper planning, you can complete the transfer with minimal or zero downtime. Follow this comprehensive guide for a smooth migration.</p>
      
      <h2>Pre-Migration Preparation</h2>
      <p>Start by creating a complete backup of your website files and database. Document your current hosting configuration, including PHP version, server settings, and any custom configurations.</p>
      
      <h2>Set Up the New Environment</h2>
      <p>Configure your new hosting account to match your current setup. Install necessary software, create databases, and set up email accounts before transferring files.</p>
      
      <h2>Transfer Your Files</h2>
      <p>Use FTP, SFTP, or your hosting provider's migration tools to transfer all website files. For large sites, consider using SSH and rsync for faster transfers.</p>
      
      <h2>Migrate Your Database</h2>
      <p>Export your database from the old host using phpMyAdmin or command-line tools. Import it to the new server and update your website's configuration files with the new database credentials.</p>
      
      <h2>Test Before DNS Update</h2>
      <p>Use your hosts file or the new server's IP address to test the migrated site before updating DNS. Check all functionality, including forms, shopping carts, and dynamic content.</p>
      
      <h2>Update DNS Records</h2>
      <p>Once testing is complete, update your domain's DNS records to point to the new server. Keep the old hosting active for 48-72 hours while DNS propagates globally.</p>
      
      <h2>Conclusion</h2>
      <p>With careful planning and testing, website migration doesn't have to mean downtime. Many hosting providers, including ours, offer free migration services to handle the technical details for you.</p>
    `,
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=600&fit=crop",
    author: "Alex Turner",
    authorRole: "Migration Specialist",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    category: "Tutorials"
  },
  "ddos-protection-guide": {
    title: "Understanding DDoS Attacks and How to Prevent Them",
    excerpt: "Protect your website from distributed denial-of-service attacks with these essential security measures.",
    content: `
      <p>DDoS (Distributed Denial-of-Service) attacks remain one of the most common and disruptive cyber threats facing websites today. Understanding how these attacks work and implementing proper defenses is crucial for maintaining your online presence.</p>
      
      <h2>What is a DDoS Attack?</h2>
      <p>A DDoS attack overwhelms your server with traffic from multiple sources, making your website unavailable to legitimate users. Attackers use networks of compromised computers (botnets) to generate massive amounts of traffic.</p>
      
      <h2>Types of DDoS Attacks</h2>
      <p><strong>Volume-based attacks:</strong> Flood your bandwidth with massive traffic volumes.</p>
      <p><strong>Protocol attacks:</strong> Exploit weaknesses in network layer protocols.</p>
      <p><strong>Application layer attacks:</strong> Target specific applications with seemingly legitimate requests.</p>
      
      <h2>Prevention Strategies</h2>
      <p>Implement rate limiting to restrict the number of requests from individual IP addresses. Use a CDN with built-in DDoS protection to absorb attack traffic. Configure your firewall to block traffic from known malicious sources.</p>
      
      <h2>Using DDoS Protection Services</h2>
      <p>Professional DDoS protection services can detect and mitigate attacks in real-time. Services like Cloudflare, AWS Shield, and Akamai offer various levels of protection for different needs and budgets.</p>
      
      <h2>Conclusion</h2>
      <p>DDoS attacks are a serious threat, but with proper preparation and protection, you can minimize their impact. Invest in robust protection before an attack occurs—reactive measures during an attack are far more costly and less effective.</p>
    `,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
    author: "Emily Davis",
    authorRole: "Security Analyst",
    date: "Dec 12, 2025",
    readTime: "7 min read",
    category: "Security"
  }
};

const relatedPosts = [
  { title: "Getting Started with WooCommerce", slug: "essential-wordpress-plugins", date: "Dec 10, 2025" },
  { title: "DNS Explained: A Beginner's Guide", slug: "ssl-certificates-guide", date: "Dec 8, 2025" },
  { title: "Top 5 CDN Providers Compared", slug: "website-speed-optimization", date: "Dec 5, 2025" },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-primary hover:bg-primary/90 text-dark">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-dark via-light-dark to-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="text-muted-foreground text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{post.author}</div>
                  <div className="text-muted-foreground text-sm flex items-center gap-2">
                    <span>{post.authorRole}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm mr-2">Share:</span>
                <button className="w-9 h-9 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3 prose prose-lg prose-invert max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="sticky top-24 space-y-6"
              >
                {/* Table of Contents */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    In This Article
                  </h3>
                  <nav className="space-y-2">
                    <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm py-1">
                      Introduction
                    </a>
                    <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm py-1">
                      Key Concepts
                    </a>
                    <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm py-1">
                      Best Practices
                    </a>
                    <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm py-1">
                      Conclusion
                    </a>
                  </nav>
                </div>

                {/* Related Posts */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost, index) => (
                      <Link 
                        key={index}
                        to={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <h4 className="text-foreground font-medium text-sm group-hover:text-primary transition-colors mb-1">
                          {relatedPost.title}
                        </h4>
                        <span className="text-muted-foreground text-xs">{relatedPost.date}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Need Hosting?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get started with our premium hosting solutions today.
                  </p>
                  <Link to="/web-hosting">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-dark font-semibold">
                      View Plans
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-dark via-light-dark to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Enjoyed This Article?
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for more hosting tips, tutorials, and industry insights.
            </p>
            <Link to="/blog">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-dark">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse More Articles
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
