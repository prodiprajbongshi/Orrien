import { motion } from "framer-motion";
import { HeadphonesIcon, RefreshCw, PiggyBank, Server } from "lucide-react";

const expertFeatures = [
  {
    badge: "20x",
    icon: null,
    title: "Up to 20X faster turbo",
    description: "That means better SEO rankings, lower bounce rates & higher conversion rates!",
    bgClass: "bg-gradient-to-br from-dark to-light-dark",
  },
  {
    badge: null,
    icon: HeadphonesIcon,
    title: "Support that never clocks out",
    description: "Our in-house team is available 24/7/365. Real people ready to help, whether it's 3 p.m. or 3 a.m.",
    bgClass: "bg-gradient-to-br from-light-dark to-primary/20",
  },
  {
    badge: null,
    icon: RefreshCw,
    title: "Free account migration",
    description: "Already have a Website? Let us do the hard work for you and transfer it for free! Ask us how!",
    bgClass: "bg-gradient-to-br from-primary/30 to-secondary/20",
  },
  {
    badge: null,
    icon: PiggyBank,
    title: "Money-back guarantee",
    description: "Give our high-speed hosting service a try completely risk-free!",
    bgClass: "bg-gradient-to-br from-secondary/20 to-light-dark",
  },
  {
    badge: "99%",
    icon: null,
    title: "99.9% uptime commitment",
    description: "Hosting.com is the host you can depend on with ultra-reliable servers!",
    bgClass: "bg-gradient-to-br from-secondary/30 to-light/20",
  },
];

export function ExpertsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Built by experts for experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We keep your site fast, stable, and ready for whatever's next. Every plan runs on serious hardware AMD EPYC processors, Samsung NVMe storage, and Anycast DNS. Built to scale, so you're covered whether it's a personal blog or a global ecommerce empire.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {expertFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${feature.bgClass} border border-border/30 rounded-2xl p-6 hover:border-secondary/30 hover:scale-105 transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-light flex items-center justify-center mb-5">
                {feature.badge ? (
                  <span className="text-sm font-bold text-dark">{feature.badge}</span>
                ) : feature.icon ? (
                  <feature.icon className="w-6 h-6 text-dark" />
                ) : null}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}