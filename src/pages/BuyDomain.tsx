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
  Settings,
  Zap,
  Server,
  Mail,
  Clock,
  ChevronDown,
  Star
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

const BuyDomain = () => {
  const [searchDomain, setSearchDomain] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const domainExtensions = [
    { extension: '.com', price: 'Free for 1 year', popular: true },
    { extension: '.org', price: '$22.00', popular: false },
    { extension: '.net', price: '$24.00', popular: false },
    { extension: '.info', price: '$5.98 for 1 year', popular: false },
    { extension: '.us', price: '$6.98 for 1 year', popular: false },
    { extension: '.co', price: '$21.99', popular: false },
  ];

  const heroFeatures = [
    'Free your first year when you sign up for a hosting plan',
    'Free WHOIS Privacy Protection Forever',
    'Free business email for 30 days',
    '24/7 expert support',
    'Over 450+ domain extensions to choose from',
  ];

  const domainFeatures = [
    { 
      icon: Lock, 
      title: 'Free permanent Private DNS protection', 
      description: 'Keep your personal info hidden from public WHOIS lookups forever' 
    },
    { 
      icon: Settings, 
      title: 'Simple subdomain management', 
      description: 'Create and manage unlimited subdomains with ease' 
    },
    { 
      icon: Zap, 
      title: 'Fast DNS management with easy-to-use controls', 
      description: 'Update DNS records in seconds with our intuitive interface' 
    },
    { 
      icon: Shield, 
      title: 'DNSSEC privacy (auto-enable) (Advanced)', 
      description: 'Extra layer of security to protect your domain from attacks' 
    },
    { 
      icon: RefreshCw, 
      title: 'Works better with premium hosting', 
      description: 'Seamless integration with our hosting for best performance' 
    },
  ];

  const whyChooseFeatures = [
    { icon: Server, title: 'Global datacenter for faster loading', description: 'Servers worldwide for optimal speed' },
    { icon: Clock, title: '24/7/365 support at no extra charge', description: 'Expert help whenever you need it' },
    { icon: RefreshCw, title: 'No hidden fees on renewal', description: 'Transparent pricing always' },
    { icon: Globe, title: 'Great infrastructure (AWS, GCP, Azure)', description: 'Built on enterprise cloud' },
    { icon: Shield, title: 'Trusted by 5M+ websites (MDA)', description: 'Proven reliability and trust' },
  ];

  const testimonials = [
    {
      rating: 5,
      title: 'Best support on the net',
      text: 'I have never experienced such fast and friendly support. They helped me migrate my domain and set up everything in minutes.',
      author: 'James Wilson',
      role: 'E-commerce Owner'
    },
    {
      rating: 5,
      title: 'Hosting.com is an alternative to HostGator',
      text: 'The migration was smooth and the performance boost was immediately noticeable. My website loads faster than ever.',
      author: 'Sarah Chen',
      role: 'Blogger'
    },
    {
      rating: 5,
      title: 'You have gone beyond the call of duty',
      text: 'Their team went above and beyond to help me set up my domain and email. Highly recommended for beginners.',
      author: 'Michael Brown',
      role: 'Small Business Owner'
    },
  ];

  const faqs = [
    {
      question: 'What is a domain name?',
      answer: 'A domain name is the address people type into their browser to visit your website (like example.com). It\'s your unique identity on the internet.'
    },
    {
      question: 'How do I register a domain?',
      answer: 'Simply search for your desired domain name using our search tool above, check its availability, and complete the purchase. The process takes just a few minutes.'
    },
    {
      question: 'Can I transfer my domain to hosting.com?',
      answer: 'Yes! We offer free domain transfers with no downtime. Our experts will handle the entire migration process for you.'
    },
    {
      question: 'What\'s the difference between a domain name and web hosting?',
      answer: 'A domain name is your website\'s address, while web hosting is the service that stores your website files and makes them accessible online. You need both to have a live website.'
    },
    {
      question: 'What domain extensions (TLDs) are available?',
      answer: 'We offer over 450+ domain extensions including popular ones like .com, .org, .net, .io, .co, and country-specific extensions like .us, .uk, .de, and many more.'
    },
    {
      question: 'How long does a domain registration last?',
      answer: 'Domain registrations typically last for 1 year, but you can register for up to 10 years at a time. We also offer auto-renewal to ensure you never lose your domain.'
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Find your domain. <span className="text-secondary">Make it yours.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Whether you're starting fresh or rebranding, claim a domain name that sets your brand apart and makes your site easy to find.
              </p>
              
              {/* Domain Search Bar */}
              <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-4 mb-8 border border-border/30">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                      placeholder="Search for a domain name..." 
                      className="pl-12 h-14 bg-background/80 border-border/30 text-foreground text-lg"
                      value={searchDomain}
                      onChange={(e) => setSearchDomain(e.target.value)}
                    />
                  </div>
                  <Button className="bg-secondary hover:bg-semilight text-dark font-semibold h-14 px-8 text-lg">
                    Search
                  </Button>
                </div>
                
                {/* Popular Extensions */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {['.com', '.org', '.net', '.io', '.co'].map((ext) => (
                    <span 
                      key={ext} 
                      className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium cursor-pointer hover:bg-secondary/30 transition-colors"
                    >
                      {ext}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Features List */}
              <div className="space-y-3">
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" 
                alt="Domain registration dashboard" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-dark/90 backdrop-blur-sm p-4 rounded-xl border border-primary/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">yourdomain.com</div>
                    <div className="text-secondary text-sm">Available!</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-dark px-4 py-2 rounded-lg font-semibold shadow-lg">
                Domain Transfer Connector
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domain Extensions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pick your perfect match
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from hundreds of domain extensions to find the perfect fit for your brand and make your website stand out.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {domainExtensions.map((domain, index) => (
              <motion.div
                key={domain.extension}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card border ${domain.popular ? 'border-secondary' : 'border-border/30'} rounded-2xl p-6 text-center hover:border-secondary/50 transition-colors relative`}
              >
                {domain.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-dark text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="text-4xl font-bold text-secondary mb-4">{domain.extension}</div>
                <div className="text-muted-foreground mb-4">{domain.price}</div>
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-dark">
                  Check Availability
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Features Section */}
      <section className="py-20 bg-light-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Domain features that work for you
              </h2>
              <p className="text-muted-foreground mb-8">
                Our domain management tools are designed to give you complete control while keeping things simple and secure.
              </p>
              
              <div className="space-y-6">
                {domainFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600" 
                alt="Domain management features" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Buy Domain Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600" 
                alt="Buy a domain" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
              <div className="absolute bottom-6 left-6 bg-dark/90 backdrop-blur-sm p-4 rounded-xl border border-secondary/30">
                <div className="flex items-center gap-2 text-secondary font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  Domain transfer successful!
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Buy a domain: register popular gTLDs & ccTLD
              </h2>
              <p className="text-muted-foreground mb-6">
                Buy a domain now — get any TLD from classic .com domains to creative new extensions like .io, .co, .tech and more.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Instant domain registration and activation',
                  'Free WHOIS privacy protection included',
                  'Easy domain management dashboard',
                  'Connect to any hosting provider'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold px-8 py-6 text-lg">
                Buy Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-light-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why people choose hosting.com
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of customers who trust us with their domains and hosting needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border/30 rounded-2xl p-6 text-center hover:border-secondary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer Domain Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need more than a domain?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transfer your existing domain to us for seamless management and better performance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border/30 rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                <RefreshCw className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Transfer your domain</h3>
              <p className="text-muted-foreground mb-6">
                Want to hold up your site? Keep everything with us and we handle it. From renewal, DNS management, and everything in between. It's that easy.
              </p>
              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold">
                Start Transfer <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border/30 rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Get a hosting plan</h3>
              <p className="text-muted-foreground mb-6">
                Need more? Pair your domain with our powerful hosting plans. Get speed, security, and support all in one place.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-dark">
                View Plans <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-light-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What people are saying
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border/30 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <h3 className="font-semibold text-foreground mb-3">{testimonial.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-semibold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{testimonial.author}</div>
                    <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Frequently asked questions
            </h2>
            
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
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-lightDark to-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to claim your domain?
            </h2>
            <p className="text-gray-300 mb-8">
              Start your online journey today with a domain that represents your brand perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold px-8 py-6 text-lg">
                Search Domains <Search className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-dark px-8 py-6 text-lg">
                Transfer Domain <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuyDomain;
