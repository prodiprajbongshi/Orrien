import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  ArrowRight,
  CheckCircle,
  Lock,
  Globe,
  Zap,
  Eye,
  Award,
  Server,
  Star,
  MessageSquare,
  BadgeCheck
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from '@/components/sections/BlogSection';

const SSLCertificates = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const heroFeatures = [
    'Protect GDPR & PCI-e SSL Certificates',
    'Validated by a Trusted Certificate Authority',
    'HTTPS Encrypted Traffic',
    '256-bit Encryption',
  ];

  const certifiedPartners = [
    'RapidSSL',
    'Sectigo',
    'GeoTrust',
    'DigiCert',
  ];

  const sslPlans = [
    {
      name: 'RapidSSL Single Domain (DV SSL)',
      type: 'Domain Validation',
      price: '$2.50',
      period: '/mo',
      features: [
        'Single domain protection',
        '99.9% browser compatibility',
        '$10,000 warranty',
        'Unlimited server licenses',
        'Quick issuance (minutes)',
        '256-bit encryption'
      ],
      popular: true
    },
    {
      name: 'Sectigo DV',
      type: 'Domain Validation',
      price: '$12.50',
      period: '/mo',
      features: [
        'Single domain protection',
        '99.9% browser compatibility',
        '$500,000 warranty',
        'Unlimited server licenses',
        'Free site seal',
        '256-bit encryption'
      ],
      popular: false
    },
    {
      name: 'GeoTrust True Wildcard',
      type: 'Wildcard SSL',
      price: '$16.67',
      period: '/mo',
      features: [
        'Unlimited subdomains',
        '99.9% browser compatibility',
        '$500,000 warranty',
        'Unlimited server licenses',
        'Free site seal',
        '256-bit encryption'
      ],
      popular: false
    },
    {
      name: 'RapidSSL DV SSL',
      type: 'Domain Validation',
      price: '$19.17',
      period: '/mo',
      features: [
        'Single domain protection',
        '99.9% browser compatibility',
        '$10,000 warranty',
        'Unlimited server licenses',
        'Quick issuance',
        '256-bit encryption'
      ],
      popular: false
    },
    {
      name: 'Sectigo OV Wildcard',
      type: 'Organization Validation',
      price: '$37.50',
      period: '/mo',
      features: [
        'Unlimited subdomains',
        'Organization validation',
        '$1,000,000 warranty',
        'Unlimited server licenses',
        'Company name in certificate',
        '256-bit encryption'
      ],
      popular: false
    },
  ];

  const sslBenefits = [
    { 
      icon: Eye, 
      title: 'Improved conversion rate', 
      description: 'Visitors trust sites with SSL, leading to higher conversion rates and more sales.' 
    },
    { 
      icon: BadgeCheck, 
      title: 'You\'ll get a secured label', 
      description: 'Show visitors your site is secure with the trusted padlock icon in browsers.' 
    },
    { 
      icon: Award, 
      title: 'You stay on the right side of the law', 
      description: 'SSL helps you comply with GDPR, PCI DSS, and other data protection regulations.' 
    },
    { 
      icon: Globe, 
      title: 'Future-proofing your site', 
      description: 'Modern browsers flag non-SSL sites as insecure. Stay ahead with SSL protection.' 
    },
  ];
 

  const faqs = [
    {
      question: 'What is an SSL certificate?',
      answer: 'An SSL certificate is a digital certificate that authenticates a website\'s identity and enables an encrypted connection. SSL stands for Secure Sockets Layer, a security protocol that creates an encrypted link between a web server and a web browser.'
    },
    {
      question: 'Are SSL certificates necessary?',
      answer: 'Yes! SSL certificates are essential for protecting sensitive data, building trust with visitors, improving SEO rankings, and meeting compliance requirements. Google also marks sites without SSL as "Not Secure."'
    },
    {
      question: 'How does an SSL certificate work?',
      answer: 'SSL certificates work by using a cryptographic key pair to establish an encrypted connection. When a browser connects to your site, the SSL certificate initiates a secure session that protects all data transferred between the user and the server.'
    },
    {
      question: 'What is the purpose of an SSL certificate?',
      answer: 'SSL certificates serve three main purposes: encrypting data in transit, authenticating the identity of websites, and providing integrity to ensure data hasn\'t been tampered with during transfer.'
    },
    {
      question: 'How many SSL certificates do I need?',
      answer: 'This depends on your setup. A single domain SSL covers one domain. If you have subdomains, a wildcard SSL covers unlimited subdomains. For multiple different domains, you may need multiple certificates or a multi-domain SSL.'
    },
    {
      question: 'What SSL certificate do I need?',
      answer: 'For most websites, a Domain Validation (DV) SSL is sufficient. E-commerce sites and businesses handling sensitive data should consider Organization Validation (OV) or Extended Validation (EV) certificates for enhanced trust indicators.'
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                SSL <span className="text-secondary">Certificates</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                We want to help to secure websites and make it a safe place for everyone. Get a trusted SSL certificate for your website and protect your visitors' data with industry-standard encryption.
              </p>
              
              {/* Features List */}
              <div className="space-y-3 mb-8">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold px-8 py-6 text-lg">
                Get SSL Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" 
                alt="SSL Security" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-dark/90 backdrop-blur-sm p-4 rounded-xl border border-primary/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">SSL Status</div>
                    <div className="text-secondary text-sm">Active & Secure</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-dark px-4 py-2 rounded-lg font-semibold shadow-lg flex items-center gap-2">
                <Lock className="w-4 h-4" /> HTTPS
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certified Partners Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">
              We're certified by the best
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 mb-6">
              {certifiedPartners.map((partner, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="w-8 h-8 text-secondary" />
                  <span className="text-lg font-medium">{partner}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">Trusted Certificate Authorities</p>
          </motion.div>
        </div>
      </section>

      {/* SSL Plans Section */}
      <section className="py-20 bg-light-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose the SSL certificate for your needs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From basic domain validation to enterprise-grade extended validation, we have the right SSL for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sslPlans.slice(0, 3).map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card border ${plan.popular ? 'border-secondary' : 'border-border/30'} rounded-2xl p-6 relative hover:border-secondary/50 transition-colors`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-dark text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="font-bold text-foreground text-lg">{plan.name}</h3>
                  <span className="text-sm text-muted-foreground">{plan.type}</span>
                </div>
                <div className="mb-6">
                  <span className="text-sm text-muted-foreground">From</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <Button className={`w-full mb-6 ${plan.popular ? 'bg-secondary hover:bg-semilight text-dark' : 'bg-primary hover:bg-primary/80 text-white'}`}>
                  Add to Cart
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
            {sslPlans.slice(3).map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border/30 rounded-2xl p-6 hover:border-secondary/50 transition-colors"
              >
                <div className="mb-4">
                  <h3 className="font-bold text-foreground text-lg">{plan.name}</h3>
                  <span className="text-sm text-muted-foreground">{plan.type}</span>
                </div>
                <div className="mb-6">
                  <span className="text-sm text-muted-foreground">From</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <Button className="w-full mb-6 bg-primary hover:bg-primary/80 text-white">
                  Add to Cart
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits of<br />SSL certificates
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sslBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border/30 rounded-2xl p-6 hover:border-secondary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Break It Down Section */}
      <section className="py-20 bg-light-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Let's break it down a bit more.
              </h2>
              <p className="text-muted-foreground mb-6">
                To understand why SSL certificates are necessary for the safety of your website data, it is helpful to understand what SSL is. Certified SSL means that there is a level of authentication happening before a connection is established to verify the server's identity.
              </p>
              <p className="text-muted-foreground mb-6">
                This verification process is called the SSL handshake. It's an invisible handshake between your browser and the website's server to ensure you're connecting to who you think you're connecting to.
              </p>
              <p className="text-muted-foreground mb-8">
                During this handshake, your browser checks the website's SSL certificate validity, verifies the certificate chain of trust, and establishes an encrypted connection for secure data transfer.
              </p>
              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1554098415-788601c80aef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="SSL explanation" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
              <div className="absolute bottom-6 left-6 bg-dark/90 backdrop-blur-sm p-4 rounded-xl border border-secondary/30">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-secondary" />
                  <span className="text-white font-medium">256-bit Encryption</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
 <TestimonialsSection/>

 

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                SSL certificate FAQs
              </h2>
              <p className="text-muted-foreground">
                Got questions about SSL certificates? We've got answers to the most common questions.
              </p>
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

export default SSLCertificates;
