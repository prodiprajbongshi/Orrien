import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    badge: "Livestream",
    badgeColor: "bg-orange-500",
    title: "Why rich content and video will define the future of SEO",
    fullTitle: "Livestream: Why rich content and video will define the future of SEO",
    author: "Daphne Monro",
    role: "Head of Website & Content, hosting.com",
    date: "December 23, 2025",
    readTime: "5 min read",
    gradientClass: "bg-gradient-to-br from-primary/80 via-secondary/60 to-light/40",
  },
  {
    badge: "Office Hours Q&A",
    badgeColor: "bg-secondary/80",
    title: "Should you update WordPress and plugins right away?",
    fullTitle: "Office Hours Q&A: Should you update WordPress and plugins right away?",
    author: "Konstantin Kolarov",
    role: "Senior Copywriter, hosting.com",
    date: "December 22, 2025",
    readTime: "5 min read",
    gradientClass: "bg-gradient-to-br from-secondary/70 via-primary/50 to-light-dark",
  },
  {
    badge: "Events",
    badgeColor: "bg-orange-500",
    title: "Join us at our Bangladesh Launch Event!",
    fullTitle: "Join us at our Bangladesh Launch Event!",
    author: "",
    role: "January 14th",
    date: "December 22, 2025",
    readTime: "5 min read",
    gradientClass: "bg-gradient-to-br from-light-dark via-primary/40 to-secondary/30",
  },
  {
    badge: "Office Hours Q&A",
    badgeColor: "bg-secondary/80",
    title: "What does UTF8MB4 mean in your database?",
    fullTitle: "Office Hours Q&A: What does UTF8MB4 mean in your database?",
    author: "Konstantin Kolarov",
    role: "Senior Copywriter, hosting.com",
    date: "December 19, 2025",
    readTime: "5 min read",
    gradientClass: "bg-gradient-to-br from-secondary/50 via-light/30 to-primary/20",
  },
];

export function BlogSection() {
  return (
    <section className="relative py-20 md:py-28 bg-light-dark">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12"
        >
          Recent hosting news & blog posts
        </motion.h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Card Image Area */}
              <div className={`${post.gradientClass} rounded-2xl p-5 h-56 relative overflow-hidden mb-4`}>
                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`${post.badgeColor} text-white text-xs font-medium px-2 py-1 rounded`}>
                    {post.badge}
                  </span>
                </div>

                {/* Arrow Button */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-dark group-hover:text-white transition-colors" />
                </div>

                {/* Title on Card */}
                <h3 className="text-xl font-semibold text-white leading-tight mt-auto">
                  {post.title}
                </h3>

                {/* Author */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center gap-2">
                  {post.author && (
                    <>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-xs text-white font-medium">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs text-white font-medium">{post.author}</div>
                        <div className="text-xs text-white/70">{post.role}</div>
                      </div>
                    </>
                  )}
                  {!post.author && (
                    <div className="text-xs text-white/80">{post.role}</div>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <h4 className="font-medium text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                {post.fullTitle}
              </h4>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span className="text-secondary">{post.readTime}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}