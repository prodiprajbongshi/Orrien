import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  ArrowRight,
  CheckCircle,
  Shield,
  Globe,
  Zap,
  Users,
  Server,
  Star,
  MessageSquare,
  Clock,
  Lock,
  Inbox,
  Send,
  X
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

const EmailHosting = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const emailPartners = [
    'G Suite',
    'Microsoft 365',
    'Zoho Mail',
  ];

  const emailPlans = [
    {
      name: 'Starter',
      description: 'Perfect for getting started',
      price: '$2.49',
      period: '/mo',
      features: [
        '5 GB storage',
        '1 email account',
        'Webmail access',
        'Mobile sync',
        'Spam protection',
        'Basic support'
      ],
      popular: false
    },
    {
      name: 'Business',
      description: 'For small businesses',
      price: '$3.99',
      period: '/mo',
      features: [
        '25 GB storage',
        '10 email accounts',
        'Webmail access',
        'Mobile sync',
        'Advanced spam filter',
        'Calendar & contacts',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Premium',
      description: 'For growing teams',
      price: '$4.49',
      period: '/mo',
      features: [
        '50 GB storage',
        '25 email accounts',
        'Webmail access',
        'Mobile sync',
        'Advanced spam filter',
        'Calendar & contacts',
        'Collaboration tools',
        '24/7 support'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: '$6.99',
      period: '/mo',
      features: [
        'Unlimited storage',
        'Unlimited accounts',
        'Webmail access',
        'Mobile sync',
        'Enterprise spam filter',
        'Full collaboration suite',
        'Admin controls',
        'Dedicated support'
      ],
      popular: false
    },
  ];

  const comparisonFeatures = [
    { name: 'Storage', starter: '5 GB', business: '25 GB', premium: '50 GB', enterprise: 'Unlimited' },
    { name: 'Email accounts', starter: '1', business: '10', premium: '25', enterprise: 'Unlimited' },
    { name: 'Custom domain', starter: true, business: true, premium: true, enterprise: true },
    { name: 'Webmail', starter: true, business: true, premium: true, enterprise: true },
    { name: 'Mobile sync', starter: true, business: true, premium: true, enterprise: true },
    { name: 'Spam protection', starter: true, business: true, premium: true, enterprise: true },
    { name: 'Calendar', starter: false, business: true, premium: true, enterprise: true },
    { name: 'Contacts sync', starter: false, business: true, premium: true, enterprise: true },
    { name: 'Tasks & Notes', starter: false, business: false, premium: true, enterprise: true },
    { name: 'File sharing', starter: false, business: false, premium: true, enterprise: true },
    { name: 'Video meetings', starter: false, business: false, premium: true, enterprise: true },
    { name: 'Admin console', starter: false, business: false, premium: false, enterprise: true },
    { name: 'Advanced security', starter: false, business: false, premium: false, enterprise: true },
    { name: 'API access', starter: false, business: false, premium: false, enterprise: true },
    { name: 'SLA guarantee', starter: false, business: false, premium: false, enterprise: true },
  ];

  const awards = [
    { name: 'Best Email Service', org: 'Tech Awards 2024' },
    { name: 'Editor\'s Choice', org: 'PC Magazine' },
    { name: 'Top Rated', org: 'G2 Crowd' },
    { name: 'Best Value', org: 'Business Choice' },
    { name: 'Most Secure', org: 'Security Today' },
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
                Email <span className="text-secondary">hosting</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Get the email service that works as hard as you do. Whether you're a sole proprietor or a growing enterprise, we'll help you find the email solution that matches your needs perfectly with premium security and reliability.
              </p>

              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold px-8 py-6 text-lg">
                Compare plans <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://plus.unsplash.com/premium_photo-1661375025352-d5a4d633999b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Email Hosting" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-dark/90 backdrop-blur-sm p-4 rounded-xl border border-primary/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">you@yourbrand.com</div>
                    <div className="text-secondary text-sm">Professional Email</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-dark px-4 py-2 rounded-lg font-semibold shadow-lg flex items-center gap-2">
                <Inbox className="w-4 h-4" /> 99.9% Uptime
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-12 mb-6">
              {emailPartners.map((partner, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-8 h-8 text-secondary" />
                  <span className="text-lg font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Plans Section */}
      <section className="py-20 bg-light-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The best email solutions.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From individual professionals to enterprise organizations, we have the email hosting solution that fits your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {emailPlans.map((plan, index) => (
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
                  <h3 className="font-bold text-foreground text-xl">{plan.name}</h3>
                  <span className="text-sm text-muted-foreground">{plan.description}</span>
                </div>
                <div className="mb-6">
                  <span className="text-sm text-muted-foreground">From</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <Button className={`w-full mb-6 ${plan.popular ? 'bg-secondary hover:bg-semilight text-dark' : 'bg-primary hover:bg-primary/80 text-white'}`}>
                  Buy Now
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

      {/* Professional Email Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600" 
                alt="Professional email" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
            </motion.div>
            
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Professional email, built for how you work
              </h2>
              <p className="text-muted-foreground mb-6">
                Looking for a team to help you get the most out of email? Let email work for you with powerful tools for creating, organizing, and automating your communications.
              </p>
              <p className="text-muted-foreground mb-8">
                Get a professional email address with your own domain, plus access to calendars, file sharing, video meetings, and more collaboration tools that help your team work better together.
              </p>
              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Email Section */}
      <section className="py-20 bg-light-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Business email with room to grow
              </h2>
              <p className="text-muted-foreground mb-6">
                No matter how many team members you're adding or how fast your business is growing, we'll help you find scalable solutions to meet your needs now and in the future.
              </p>
              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold">
                View Plans <ArrowRight className="ml-2 h-5 w-5" />
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
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600" 
                alt="Business email" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
            </motion.div>
          </div>

          {/* Comparison Table */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto"
          >
            <div className="bg-card border border-border/30 rounded-2xl overflow-hidden min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-5 bg-light-dark border-b border-border/30">
                <div className="p-4 font-semibold text-foreground">Features</div>
                <div className="p-4 text-center">
                  <div className="font-semibold text-foreground">Starter</div>
                  <div className="text-secondary font-bold">$2.49<span className="text-muted-foreground text-sm">/mo</span></div>
                </div>
                <div className="p-4 text-center bg-secondary/10 border-x border-secondary/20">
                  <div className="font-semibold text-foreground">Business</div>
                  <div className="text-secondary font-bold">$3.99<span className="text-muted-foreground text-sm">/mo</span></div>
                </div>
                <div className="p-4 text-center">
                  <div className="font-semibold text-foreground">Premium</div>
                  <div className="text-secondary font-bold">$4.49<span className="text-muted-foreground text-sm">/mo</span></div>
                </div>
                <div className="p-4 text-center">
                  <div className="font-semibold text-foreground">Enterprise</div>
                  <div className="text-secondary font-bold">$6.99<span className="text-muted-foreground text-sm">/mo</span></div>
                </div>
              </div>

              {/* Table Body */}
              {comparisonFeatures.map((feature, index) => (
                <div 
                  key={feature.name}
                  className={`grid grid-cols-5 ${index % 2 === 0 ? 'bg-card' : 'bg-light-dark/50'} border-b border-border/20 last:border-b-0`}
                >
                  <div className="p-4 text-muted-foreground">{feature.name}</div>
                  <div className="p-4 text-center">
                    {typeof feature.starter === 'boolean' ? (
                      feature.starter ? <CheckCircle className="w-5 h-5 text-secondary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                    ) : (
                      <span className="text-foreground">{feature.starter}</span>
                    )}
                  </div>
                  <div className="p-4 text-center bg-secondary/5 border-x border-secondary/10">
                    {typeof feature.business === 'boolean' ? (
                      feature.business ? <CheckCircle className="w-5 h-5 text-secondary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                    ) : (
                      <span className="text-foreground">{feature.business}</span>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    {typeof feature.premium === 'boolean' ? (
                      feature.premium ? <CheckCircle className="w-5 h-5 text-secondary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                    ) : (
                      <span className="text-foreground">{feature.premium}</span>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? <CheckCircle className="w-5 h-5 text-secondary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                    ) : (
                      <span className="text-foreground">{feature.enterprise}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Buy Buttons Row */}
              <div className="grid grid-cols-5 bg-light-dark/50 border-t border-border/30">
                <div className="p-4"></div>
                <div className="p-4 text-center">
                  <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-dark">
                    Buy
                  </Button>
                </div>
                <div className="p-4 text-center bg-secondary/5 border-x border-secondary/10">
                  <Button size="sm" className="bg-secondary hover:bg-semilight text-dark">
                    Buy
                  </Button>
                </div>
                <div className="p-4 text-center">
                  <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-dark">
                    Buy
                  </Button>
                </div>
                <div className="p-4 text-center">
                  <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-dark">
                    Buy
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

       
 
      {/* Testimonials Section */}
     <TestimonialsSection/>

      <Footer />
    </div>
  );
};

export default EmailHosting;
