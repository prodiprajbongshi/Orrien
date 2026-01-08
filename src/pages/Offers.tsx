import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Clock, Zap, Gift, Percent, ArrowRight, Star, Shield, Server } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "50% Off Web Hosting",
    description: "Get premium web hosting at half the price. Perfect for startups and small businesses.",
    discount: "50%",
    originalPrice: "$9.99",
    offerPrice: "$4.99",
    period: "/month",
    badge: "Best Seller",
    features: ["Unlimited Bandwidth", "Free SSL Certificate", "24/7 Support", "99.9% Uptime"],
    icon: Server,
    endsIn: "3 days",
  },
  {
    id: 2,
    title: "WordPress Hosting Deal",
    description: "Optimized WordPress hosting with pre-installed plugins and themes.",
    discount: "40%",
    originalPrice: "$14.99",
    offerPrice: "$8.99",
    period: "/month",
    badge: "Popular",
    features: ["1-Click WordPress Install", "Free Domain", "Auto Updates", "Staging Environment"],
    icon: Zap,
    endsIn: "5 days",
  },
  {
    id: 3,
    title: "VPS Hosting Special",
    description: "High-performance VPS with dedicated resources and full root access.",
    discount: "35%",
    originalPrice: "$29.99",
    offerPrice: "$19.49",
    period: "/month",
    badge: "Limited",
    features: ["4 GB RAM", "2 CPU Cores", "80 GB SSD", "Root Access"],
    icon: Shield,
    endsIn: "7 days",
  },
  {
    id: 4,
    title: "Free Domain Bundle",
    description: "Get a free domain name with any annual hosting plan purchase.",
    discount: "FREE",
    originalPrice: "$12.99",
    offerPrice: "$0.00",
    period: "/year",
    badge: "Bundle",
    features: ["Free .com Domain", "Privacy Protection", "Auto Renewal", "DNS Management"],
    icon: Gift,
    endsIn: "10 days",
  },
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                <Percent className="w-3 h-3 mr-1" />
                Limited Time Offers
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Exclusive <span className="text-secondary">Deals</span> & Offers
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't miss out on our special promotions. Save big on premium hosting solutions with our limited-time offers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-light-dark border border-border rounded-2xl p-6 lg:p-8 hover:border-secondary/50 transition-all duration-300 h-full">
                    {/* Badge */}
                    <div className="absolute -top-3 right-6">
                      <Badge className="bg-secondary text-dark font-semibold px-3 py-1">
                        {offer.badge}
                      </Badge>
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <offer.icon className="w-7 h-7 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                          {offer.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {offer.description}
                        </p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-end gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl lg:text-4xl font-bold text-secondary">
                          {offer.offerPrice}
                        </span>
                        <span className="text-muted-foreground">{offer.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg text-muted-foreground line-through">
                          {offer.originalPrice}
                        </span>
                        <Badge variant="outline" className="text-secondary border-secondary/50">
                          {offer.discount} OFF
                        </Badge>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {offer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-secondary" />
                        Ends in {offer.endsIn}
                      </div>
                      <Button className="bg-secondary hover:bg-secondary/90 text-dark font-semibold gap-2">
                        Get Offer
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need a Custom Deal?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our sales team for personalized offers tailored to your business needs.
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-dark font-semibold gap-2">
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Offers;
