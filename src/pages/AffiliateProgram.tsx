import { motion } from "framer-motion";
import { DollarSign, Users, TrendingUp, Zap, Headphones, CreditCard, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AffiliateProgram = () => {
  const commissionTiers = [
    { range: "1-10 sales", commission: "$50", perSale: "Earn $50 per sale", icon: "💰" },
    { range: "11-15 sales", commission: "$75", perSale: "Earn $75 per sale", icon: "💵" },
    { range: "16-20 sales", commission: "$100", perSale: "Earn $100 per sale", icon: "💸" },
    { range: "21+ sales", commission: "$125", perSale: "Earn $125 per sale", icon: "🤑" },
  ];

  const steps = [
    { number: "1", title: "Signup", description: "Complete your affiliate application and wait for approval." },
    { number: "2", title: "Promote", description: "Share your unique link with your friends, job, or blog readers." },
    { number: "3", title: "Get paid", description: "We'll automatically send your commissions every Friday." },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "High conversion rates",
      description: "Our website has been designed from the ground up to maximize conversion rates. That means more money in your pocket.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    },
    {
      icon: Users,
      title: "Customer first company",
      description: "Star hosting companies to enhance clients. With our customer first mentality, we keep churn to a minimum.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop"
    },
    {
      icon: CreditCard,
      title: "Automated payouts",
      description: "Never miss a payday because you forgot to request it. At hosting.com, we'll take care of that for you automatically.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
    },
    {
      icon: Headphones,
      title: "Dedicated affiliate team",
      description: "Our dedicated affiliate team is here to help you succeed. Whenever you need, feel free to reach out and we'll be happy to help.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop"
    },
  ];

  const faqs = [
    { question: "How do I apply for the hosting.com affiliate program?", answer: "Simply click the 'Create affiliate account' button and fill out our application form. Our team will review your application within 24-48 hours and notify you of the decision via email." },
    { question: "How much does it cost to be a hosting.com affiliate?", answer: "Nothing! Joining the hosting.com affiliate program is completely free. There are no fees or hidden costs involved." },
    { question: "What is a second tier commission?", answer: "A second tier commission means you earn a percentage when affiliates you referred make sales. This allows you to build a team and earn passive income from their efforts." },
    { question: "How long does it take for a sale to show up on my account?", answer: "Sales typically appear in your affiliate dashboard within 24 hours. However, commissions are held for a 30-day period to account for potential refunds before becoming available for payout." },
    { question: "I just made a sale. Where can I see it?", answer: "Log into your affiliate dashboard and navigate to the 'Sales' or 'Commissions' tab. There you'll see all your tracked sales and pending commissions." },
    { question: "Can I PPC bid to promote hosting.com?", answer: "Yes, you can use PPC advertising to promote hosting.com. However, bidding on our brand terms (hosting.com, hosting, etc.) is not allowed. Please review our affiliate terms for complete PPC guidelines." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-lightDark to-primary" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-light mb-6">
                Refer and earn!
              </h1>
              <p className="text-lg text-light/80 mb-8 leading-relaxed">
                Join the hosting.com affiliate program today and start earning up to $125/sale!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-semilight text-dark font-semibold">
                  Create affiliate account
                </Button>
                <Button size="lg" variant="outline" className="border-light/30 text-light hover:bg-light/10">
                  Log in
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop" 
                  alt="Affiliate working"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl">
                  <div className="text-sm text-muted-foreground">Total earnings</div>
                  <div className="text-2xl font-bold text-secondary">$14,032</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-secondary text-dark px-4 py-2 rounded-full font-semibold text-sm">
                  Top Affiliate
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sell More Earn More Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sell more. Earn more.
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              The more new customers you refer to hosting.com each month, the more you 
              earn per sale! Refer just one customer per day and you could make $3750!
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {commissionTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl">{tier.icon}</span>
                </div>
                <div className="text-2xl font-bold text-secondary mb-1">{tier.commission}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{tier.range}</div>
                <div className="text-sm text-muted-foreground">{tier.perSale}</div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-muted-foreground text-sm">
            Think your traffic is worth more than $125/sale? Contact our dedicated affiliate 
            manager to discuss a custom commission rate.
          </p>
        </div>
      </section>

      {/* Earn In Steps Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Earn in ...
            </h2>
            <p className="text-muted-foreground">
              It only takes 3 steps to start earning with the hosting.com affiliate program.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-dark">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm mt-8"
          >
            Think your traffic is worth more than $125/sale? Contact our dedicated affiliate 
            manager to discuss a custom commission rate.
          </motion.p>
        </div>
      </section>

      {/* Why Promote Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-light">
              Why promote hosting.com?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-lightDark border border-border/30 rounded-xl overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-light mb-3">{benefit.title}</h3>
                  <p className="text-light/70 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-lightDark to-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-light mb-6">
                Start earning up to $125 today!
              </h2>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-semilight text-dark font-semibold">
                  Create affiliate account
                </Button>
                <Button size="lg" variant="outline" className="border-light/30 text-light hover:bg-light/10">
                  Have a question?
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="bg-card/10 backdrop-blur-sm border border-light/20 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-light/80 text-sm">Affiliate Dashboard</span>
                    <span className="text-light/60 text-xs">×</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-light/10 rounded-lg p-4">
                      <div className="text-light/60 text-xs mb-1">This Month</div>
                      <div className="text-3xl font-bold text-secondary">$2,450</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-light/10 rounded-lg p-3">
                        <div className="text-light/60 text-xs mb-1">Clicks</div>
                        <div className="text-xl font-bold text-light">1,234</div>
                      </div>
                      <div className="bg-light/10 rounded-lg p-3">
                        <div className="text-light/60 text-xs mb-1">Conversions</div>
                        <div className="text-xl font-bold text-secondary">88%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently<br />asked questions
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-foreground font-medium hover:no-underline text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <a href="#" className="inline-flex items-center gap-1 text-primary font-medium mt-6 hover:text-secondary transition-colors">
                Show more questions <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffiliateProgram;
