import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    title: "I love hosting.com",
    content: "Best internet support I have had since 1993 when internet first went public. I have been through several hosts with my media company and school and hosting.com support staff are knowledgeable, thorough, pleasant and treat clients with respect and understanding. I can't say enough. Keep up the great work. Thank you for saving my domains and email from hackers.",
  },
  {
    title: "Hosting.com as an alternative to Hostgator",
    content: "I had tons of troubles with Hostgator and decided to move 6 months earlier. Hosting.com (previously A2 Hosting) was a price match but I was also looking for cPanel and cPanel migration and a few other features. I am super happy with the speed of my websites and support desk seem to be A class. Hostgator was good only at the beginning, in the past two years everything has gone south bit by bit.",
  },
  {
    title: "This is my second Reseller program",
    content: "This is my second Reseller program, along with maintaining a few individual sites for friends, and I'm again glad I've gone with hosting.com (formerly A2). I've had a few hiccups on my end but the important thing, your people have been incredibly helpful. Timely and helpful communication. Issues can always pop-up of course, but it's how well people work to resolve them that matters to me.",
  },
];

const TrustpilotStars = () => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
        <Star className="w-3 h-3 text-white fill-white" />
      </div>
    ))}
  </div>
);

export function CustomerReviewsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-dark">
      <div className="container mx-auto px-4">
        {/* Trustpilot Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Star className="w-5 h-5 text-[#00b67a] fill-[#00b67a]" />
          <span className="text-foreground font-semibold">Trustpilot</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16"
        >
          What our customers have to say
        </motion.h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-light-dark border border-border/30 rounded-2xl p-6 hover:border-secondary/30 transition-all"
            >
              <TrustpilotStars />
              <h3 className="text-xl font-semibold text-foreground mt-5 mb-4">
                {review.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {review.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}