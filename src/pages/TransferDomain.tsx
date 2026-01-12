import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Globe, 
  Search, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Lock,
  RefreshCw,
  Clock,
  Zap,
  Server,
  Headphones,
  Star,
  MessageSquare
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from '@/components/sections/BlogSection';

const TransferDomain = () => {
  const [searchDomain, setSearchDomain] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const heroFeatures = [
    'Free domain renewal',
    'Free DNS hosting',
    'Free WHOIS privacy',
    'Domain theft protection',
    '24/7 expert support',
  ];

  const trustedProviders = [
    { name: 'GoDaddy', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100' },
    { name: 'Namecheap', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100' },
    { name: 'Google Domains', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100' },
  ];

  const transferFeatures = [
    { 
      icon: RefreshCw, 
      title: 'Custom nameservers', 
      description: 'Configure your own nameservers for complete DNS control' 
    },
    { 
      icon: Clock, 
      title: '99.9% uptime, guaranteed', 
      description: 'Reliable DNS service backed by our uptime guarantee' 
    },
    { 
      icon: Shield, 
      title: 'ID protection option', 
      description: 'Hide your personal information from WHOIS lookups' 
    },
    { 
      icon: Lock, 
      title: 'Domain theft protection', 
      description: 'Advanced security to prevent unauthorized transfers' 
    },
    { 
      icon: Headphones, 
      title: '24/7/365 support', 
      description: 'Expert help available whenever you need it' 
    },
  ];
 

  const faqs = [
    {
      question: 'Domain transfer: how do I manage my domains?',
      answer: 'After transferring your domain, you can manage all settings through our intuitive control panel. This includes DNS management, nameserver configuration, and domain settings.'
    },
    {
      question: 'Is there a difference between a domain transfer and a migration?',
      answer: 'Yes! A domain transfer moves your domain registration to a new registrar. A migration typically refers to moving your website files and email to a new hosting provider. You can do both with us!'
    },
    {
      question: 'What is a domain transfer?',
      answer: 'A domain transfer is the process of moving your domain registration from one registrar to another. This allows you to consolidate your domains and take advantage of better pricing and features.'
    },
    {
      question: 'Domain hosting, web domains and hosting difference?',
      answer: 'Domain hosting refers to the registration and management of your domain name. Web hosting is the service that stores your website files. You need both for a live website, but they are separate services.'
    },
    {
      question: 'Can I transfer my existing domain to hosting.com?',
      answer: 'Yes! You can transfer most domain extensions to us. Simply unlock your domain at your current registrar, get the authorization code, and start the transfer process with us.'
    },
    {
      question: 'Can I keep my site before DNS is pointed to hosting.com?',
      answer: 'Absolutely! Your website will continue to work normally during the transfer. DNS changes only take effect when you choose to update your nameservers.'
    },
  ];

   

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-dark via-lightDark to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
                Fast domain transfers
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transfer a <span className="text-secondary">domain</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Moving your domain to Orrien means faster loading times. We'll help you take care of your domain from start to finish — no hidden fees, just quality hosting at a better price and with robust 24/7 customer support when you need it most.
              </p>
              
              <p className="text-muted-foreground mb-4">Bring us a domain and enjoy free for the first year:</p>
              
              {/* Features List */}
              <div className="space-y-3 mb-8">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600" 
                alt="Domain transfer" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-dark/90 backdrop-blur-sm p-4 rounded-xl border border-primary/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">yourwebsite.com</div>
                    <div className="text-secondary text-sm">Transfer in progress...</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-dark px-4 py-2 rounded-lg font-semibold shadow-lg">
                Easy Transfer
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Providers Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Trusted providers
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 mb-6">
              {['GoDaddy', 'Namecheap', 'Google Domains'].map((provider, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="w-8 h-8" />
                  <span className="text-lg font-medium">{provider}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">We transfer domains from top registrars</p>
          </motion.div>
        </div>
      </section>

      {/* Transfer Search Section */}
      <section className="py-20 bg-light-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Begin your transfer by typing your domain below
            </h2>
            
            {/* Domain Search Bar */}
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-4 mt-8 border border-secondary/60">
              <div className="flex flex-col sm:flex-row gap-3  ">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Put your domain here..." 
                    className="pl-12 h-14 bg-background border-border/30 text-foreground text-lg"
                    value={searchDomain}
                    onChange={(e) => setSearchDomain(e.target.value)}
                  />
                </div>
                <Button className="bg-secondary hover:bg-semilight text-dark font-semibold h-14 px-8 text-lg">
                  Start
                </Button>
              </div>
            </div>

            {/* Transfer Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 bg-card border border-border/30 rounded-2xl p-6 inline-block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Unlock your domain first</div>
                  <div className="text-muted-foreground text-sm">Get your auth code from current registrar</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Easy Transfers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 py-6">
          

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {transferFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border/30 rounded-2xl p-6 text-center hover:border-secondary/50 transition-colors "
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/20  border border-secondary/40 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{feature.title}</h3>
                <p className="text-muted-foreground text-xs">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
    <TestimonialsSection/>

 

      {/* FAQ Section */}
      <section className="py-20 bg-light-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Domain registration & buying domains FAQs
              </h2>
            </motion.div>
            
            <motion.div {...fadeInUp}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border/30 rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-foreground hover:text-secondary text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <Button variant="link" className="text-secondary mt-4">
                See more articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
    <BlogSection/>

      <Footer />
    </div>
  );
};

export default TransferDomain;
