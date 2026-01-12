import { motion } from "framer-motion";
import { Check, ShoppingCart, Server, Clock, Shield, Headphones, ArrowRight, Star, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { PricingSection } from "@/components/sections/PricingSection";

const SiteMigration = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const partners = [
    { name: "cPanel", logo: "cPanel" },
    { name: "Starter", logo: "Starter" },
    { name: "MR", logo: "MR" },
    { name: "Starter", logo: "Starter" },
    { name: "G2", logo: "G2" },
    { name: "Starter", logo: "Starter" },
  ];

  const migrationSteps = [
    {
      step: "Step 1: Complete Your Order",
      description: "Complete your order with all the details.",
      icon: ShoppingCart,
    },
    {
      step: "Step 2: Submit Request",
      description: "Get in touch with us and submit your migration request using the form.",
      icon: Server,
    },
    {
      step: "Step 3: We Handle It",
      description: "From there we'll migrate and optimize your website and DNS records.",
      icon: Clock,
    },
  ];

  const pricingPlans = [
    {
      name: "Basic Migration",
      price: "$0.00",
      period: "/site",
      features: [
        "Single website migration",
        "Database migration",
        "Email migration",
        "DNS configuration",
        "24/7 support",
      ],
      popular: false,
    },
    {
      name: "Standard Migration",
      price: "$1.00",
      period: "/site",
      features: [
        "Up to 5 websites",
        "All databases",
        "All email accounts",
        "Full DNS setup",
        "Priority support",
        "SSL installation",
      ],
      popular: true,
    },
    {
      name: "Premium Migration",
      price: "$5.00",
      period: "/site",
      features: [
        "Unlimited websites",
        "All databases",
        "All email accounts",
        "Full DNS & CDN setup",
        "24/7 priority support",
        "SSL installation",
        "Performance optimization",
      ],
      popular: false,
    },
    {
      name: "Enterprise Migration",
      price: "$10.00",
      period: "/site",
      features: [
        "Complex migrations",
        "Custom configurations",
        "Dedicated migration specialist",
        "Zero downtime guarantee",
        "Post-migration audit",
        "30-day support",
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Lightning-fast",
      description: "Complete migration in under 24 hours with minimal interruption to your business.",
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your data is encrypted and protected throughout the entire migration process.",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Our migration specialists handle everything so you can focus on your business.",
    },
  ];

  const stats = [
    { value: "3 million", label: "Websites migrated successfully" },
    { value: "40+", label: "Countries served worldwide" },
    { value: "700,000+", label: "Happy customers" },
  ];

  
  const faqs = [
    {
      question: "How long does the migration process take?",
      answer: "Most migrations are completed within 24 hours. Complex sites may take up to 48 hours.",
    },
    {
      question: "Will there be any downtime during migration?",
      answer: "We use a seamless migration process that ensures zero or minimal downtime for your website.",
    },
    {
      question: "What information do you need from me?",
      answer: "We'll need your current hosting credentials, domain registrar access, and any specific requirements for your site.",
    },
    {
      question: "Do you migrate email accounts?",
      answer: "Yes, we migrate all email accounts, contacts, and email data as part of our migration service.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-lightDark to-dark" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Free Migration Service
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-6 leading-tight">
                Free migration. Faster hosting. Zero downtime.
              </h1>
              <p className="text-light/80 text-lg mb-8 leading-relaxed">
                Let our expert team handle your website migration completely free. We ensure a seamless transition with no data loss and minimal downtime.
              </p>
              
              <ul className="space-y-3 mb-8">
                {["Free website migration", "Zero downtime guarantee", "Expert support 24/7", "Complete data transfer"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-light/90">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-dark font-semibold px-8">
                  Start Free Migration
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-light/30 text-light hover:bg-light/10">
                  Learn More
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-lightDark/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center p-4 bg-dark/50 rounded-xl">
                      <benefit.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-light text-sm font-medium">{benefit.title}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-dark/70 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2 font-mono text-sm text-light/80">
                    <p>$ Migrating your website...</p>
                    <p className="text-primary">✓ Files transferred</p>
                    <p className="text-primary">✓ Database migrated</p>
                    <p className="text-primary">✓ DNS configured</p>
                    <p className="text-secondary">Migration complete!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">Trusted by the world's best companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-colors"
              >
                {partner.logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps to Migrate */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Steps to migrate
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow these simple steps to migrate your website to our platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {migrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border border-secondary/60">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl border border-secondary/40 flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{step.step}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Migration Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Seamless site migrations in less than 24 hours
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our expert team ensures your website is migrated quickly and securely with zero data loss and minimal downtime.
              </p>
              <ul className="space-y-4">
                {["Worry-free WordPress migration", "Complete database transfer", "Email accounts migration", "DNS configuration included"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark rounded-2xl p-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3 font-mono text-sm">
                <p className="text-light/60">// Worry-free WordPress</p>
                <p className="text-primary">import &#123; migrate &#125; from 'hosting';</p>
                <p className="text-light">const site = await migrate(&#123;</p>
                <p className="text-secondary pl-4">source: 'old-host',</p>
                <p className="text-secondary pl-4">destination: 'rocket-host',</p>
                <p className="text-secondary pl-4">options: &#123; zeroDowntime: true &#125;</p>
                <p className="text-light">&#125;);</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
   <PricingSection/>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                "Let us do the heavy lifting so you can focus on building stuff"
              </h2>
              <p className="text-muted-foreground text-lg">
                Our migration specialists handle everything from start to finish, ensuring a smooth transition to your new hosting environment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-background rounded-full flex items-center justify-center">
                  <Server className="w-24 h-24 text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
 
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-lightDark to-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
              The stats speak for themselves
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-light/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-foreground">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SiteMigration;
