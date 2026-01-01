import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for personal projects and small websites",
    price: "$4.99",
    period: "/month",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "Weekly Backups",
      "24/7 Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and agencies",
    price: "$9.99",
    period: "/month",
    features: [
      "Unlimited Websites",
      "100 GB NVMe Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificates",
      "Daily Backups",
      "Priority 24/7 Support",
      "Free Domain (1 year)",
      "Staging Environment",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For high-traffic sites requiring premium resources",
    price: "$29.99",
    period: "/month",
    features: [
      "Unlimited Websites",
      "500 GB NVMe Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificates",
      "Real-time Backups",
      "Dedicated Support Manager",
      "Free Domain (forever)",
      "Staging Environment",
      "Advanced DDoS Protection",
      "Custom Firewall Rules",
    ],
    popular: false,
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-secondary to-light text-dark text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      <div
        className={`glass-card p-8 h-full flex flex-col ${
          plan.popular
            ? "border-secondary/50 bg-gradient-to-b from-secondary/10 to-transparent"
            : ""
        }`}
      >
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            {plan.name}
          </h3>
          <p className="text-muted-foreground text-sm">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
              {plan.price}
            </span>
            <span className="text-muted-foreground">{plan.period}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-secondary" />
              </div>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          variant={plan.popular ? "hero" : "outline"}
          size="lg"
          className="w-full"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. No surprises. Choose the plan that fits your needs
            and scale as you grow.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            🔒 30-day money-back guarantee • No contracts • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
