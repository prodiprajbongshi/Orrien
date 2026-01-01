import { motion } from "framer-motion";
import { Zap, HeadphonesIcon, ShieldCheck, Users } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster performance",
    description: "Our platform is tuned for speed with LiteSpeed caching and smart resource management, ensuring your site runs smoothly and efficiently under any load.",
  },
  {
    icon: HeadphonesIcon,
    title: "Guru crew support",
    description: "Our in-house team is available 24/7/365. Real people ready to help, whether it's 3 p.m. or 3 a.m.",
  },
  {
    icon: ShieldCheck,
    title: "Security built in, not bolted on",
    description: "Every plan includes free SSL certificates, DDoS protection, brute force defence, and malware scanning to keep your site safe from day one.",
  },
  {
    icon: Users,
    title: "We move your site for free",
    description: "Switching hosts? We'll handle the migration of your site, databases, files, and emails. Minimal downtime, no drama.",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#f0f7f4]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-16 max-w-2xl"
        >
          Features built for better hosting, with hosting.com
        </motion.h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-light flex items-center justify-center mb-5">
                <benefit.icon className="w-6 h-6 text-dark" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-dark/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}