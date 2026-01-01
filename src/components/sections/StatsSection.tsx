import { motion } from "framer-motion";

const stats = [
  {
    value: "3 million",
    label: "websites hosted.",
    description: "Trusted by millions for fast, secure, always-online hosting.",
  },
  {
    value: "40+",
    label: "locations around the world.",
    description: "Global network ensures peak performance wherever your visitors are.",
  },
  {
    value: "700,000+",
    label: "valued customers.",
    description: "Supporting businesses with reliable hosting and real human support.",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-light-dark to-primary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,hsl(var(--secondary)/0.15)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16"
        >
          The stats speak for themselves.
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-left"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary mb-4">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}