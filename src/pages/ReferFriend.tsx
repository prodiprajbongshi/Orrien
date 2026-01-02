import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Users, DollarSign, Mail, Copy, Share2, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const ReferFriend = () => {
  const rewards = [
    {
      referrals: "1-5",
      perReferral: "$50",
      total: "Up to $250",
      highlight: false
    },
    {
      referrals: "6-10",
      perReferral: "$75",
      total: "Up to $375",
      highlight: false
    },
    {
      referrals: "11-20",
      perReferral: "$100",
      total: "Up to $1,000",
      highlight: true
    },
    {
      referrals: "21+",
      perReferral: "$130",
      total: "Unlimited",
      highlight: false
    }
  ];

  const steps = [
    {
      icon: Share2,
      title: "Share Your Link",
      description: "Copy your unique referral link and share it with friends, family, or your audience"
    },
    {
      icon: Users,
      title: "Friends Sign Up",
      description: "When someone signs up using your link and makes their first purchase"
    },
    {
      icon: DollarSign,
      title: "You Get Paid",
      description: "Earn up to $130 for each successful referral - paid directly to your account"
    }
  ];

  const benefits = [
    "No limit on referrals - earn unlimited rewards",
    "Friends get 20% off their first purchase",
    "Instant tracking dashboard",
    "Monthly payouts via PayPal or bank transfer",
    "Dedicated referral support team",
    "Promotional materials provided"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Referral Program</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Refer a Friend, <span className="text-primary">Earn Up to $130</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share the hosting you love and get rewarded. Earn cash for every friend who signs up - they get a discount too!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Referring Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Referral Link Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-border/50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Your Referral Link</h2>
                <p className="text-muted-foreground">Share this link with friends to start earning</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Input 
                    value="https://hostinger.com/ref/yourname123"
                    readOnly
                    className="bg-background border-border/50 pr-12"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  Invite via Email
                </Button>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <Button variant="outline" size="sm" className="border-border/50">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="border-border/50">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="border-border/50">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start earning in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card border border-border/50 rounded-2xl p-8 text-center h-full hover:border-primary/50 transition-colors">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Tiers */}
      <section className="py-20 bg-gradient-to-b from-background via-card/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Earn More with <span className="text-primary">More Referrals</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The more friends you refer, the more you earn per referral
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {rewards.map((tier, index) => (
              <motion.div
                key={tier.referrals}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-card border rounded-2xl p-6 text-center ${
                  tier.highlight 
                    ? 'border-primary shadow-lg shadow-primary/20' 
                    : 'border-border/50 hover:border-primary/50'
                } transition-all`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </div>
                )}
                <div className="text-sm text-muted-foreground mb-2">Referrals</div>
                <div className="text-2xl font-bold mb-4">{tier.referrals}</div>
                <div className="text-sm text-muted-foreground mb-1">Per Referral</div>
                <div className="text-3xl font-bold text-primary mb-4">{tier.perReferral}</div>
                <div className="text-sm text-muted-foreground">Total Earnings</div>
                <div className="text-lg font-semibold">{tier.total}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Join Our <span className="text-primary">Referral Program?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our referral program is designed to reward you generously while helping your friends get the best hosting deals.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-border/50 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Your Friend Gets</h3>
                <div className="text-5xl font-bold text-primary mb-2">20% OFF</div>
                <p className="text-muted-foreground mb-6">on their first purchase</p>
                <div className="bg-background/50 border border-border/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    It's a win-win! Your friends save money on premium hosting while you earn cash rewards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-card to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start <span className="text-primary">Earning?</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of happy referrers who are already earning cash rewards. It only takes a minute to get started.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Your Referral Link
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReferFriend;
