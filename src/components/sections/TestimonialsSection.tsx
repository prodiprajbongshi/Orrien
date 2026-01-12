import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "Migrating to Orrien was the best decision we made. Our site loads 3x faster and we haven't had a single minute of downtime in 2 years.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Founder of DigitalFirst",
    img: "https://randomuser.me/api/portraits/women/57.jpg",
    content:
      "The support team is incredible. They helped us optimize our server configuration and reduced our costs by 40%. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Developer at Startupify",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    content:
      "One-click deployments, automatic scaling, and the best dashboard I've ever used. Orrien makes hosting actually enjoyable.",
    rating: 5,
  },
];

const logos = [
  "TechCorp",
  "StartupHub",
  "DigitalWave",
  "CloudNine",
  "DataFlow",
  "NetScale",
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card p-6 md:p-8 relative hover:shadow-sm shadow-primary cursor-pointer transition-all duration-200 ease-linear"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-12 h-12 text-secondary" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground text-lg mb-6 leading-relaxed">
        "{testimonial.content
    }"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-light flex items-center justify-center text-dark font-semibold overflow-hidden">
          <img
            className=""
            src={testimonial.img}
            alt="Image"
          />
        </div>
        <div>
          <div className="font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--light-dark))_0%,hsl(var(--dark))_70%)]" />

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
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">10,000+ Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about their experience with
            Orrien.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Powering websites for industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-xl font-display font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
