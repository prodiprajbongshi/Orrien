import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  ArrowRight,
  CheckCircle,
  Wand2,
  Palette,
  Globe,
  Smartphone,
  Sparkles,
  Layers,
  Clock,
  Star,
  MessageSquare,
  MousePointer,
  Code,
  Image,
  Type
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const AISitebuilder = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const heroFeatures = [
    'Build a complete website in minutes',
    'No coding knowledge required',
    'AI-powered design suggestions',
    'Mobile-responsive by default',
    'SEO optimized automatically',
  ];

  const aiFeatures = [
    { 
      icon: Wand2, 
      title: 'AI-Powered Design', 
      description: 'Describe your vision and watch as AI creates a stunning website tailored to your needs.' 
    },
    { 
      icon: Palette, 
      title: 'Smart Color Schemes', 
      description: 'AI analyzes your brand and suggests perfect color combinations that resonate with your audience.' 
    },
    { 
      icon: Type, 
      title: 'Content Generation', 
      description: 'Generate compelling copy, headlines, and descriptions with AI-powered content writing.' 
    },
    { 
      icon: Image, 
      title: 'Image Selection', 
      description: 'AI picks the perfect images from millions of options to match your content and style.' 
    },
    { 
      icon: Smartphone, 
      title: 'Responsive Design', 
      description: 'Every site automatically adapts to look perfect on desktop, tablet, and mobile devices.' 
    },
    { 
      icon: Globe, 
      title: 'SEO Optimization', 
      description: 'Built-in AI optimizes your site for search engines to help you get found online.' 
    },
  ];

  const howItWorks = [
    { 
      step: '01', 
      title: 'Describe Your Vision', 
      description: 'Tell AI what kind of website you want. Describe your business, style preferences, and goals.' 
    },
    { 
      step: '02', 
      title: 'AI Creates Your Site', 
      description: 'Watch as AI generates a complete website with layouts, content, and images in seconds.' 
    },
    { 
      step: '03', 
      title: 'Customize & Refine', 
      description: 'Use our intuitive editor to tweak anything. Drag, drop, and adjust to perfection.' 
    },
    { 
      step: '04', 
      title: 'Publish & Go Live', 
      description: 'One click to publish. Your site is live with hosting, SSL, and CDN included.' 
    },
  ];

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for personal projects',
      price: '$4.99',
      period: '/mo',
      features: [
        '1 AI-generated website',
        '5 AI regenerations/month',
        'Free subdomain',
        'Mobile responsive',
        'Basic SEO tools',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      price: '$9.99',
      period: '/mo',
      features: [
        '5 AI-generated websites',
        'Unlimited AI regenerations',
        'Custom domain',
        'Mobile responsive',
        'Advanced SEO tools',
        'AI content writer',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Business',
      description: 'For agencies & teams',
      price: '$19.99',
      period: '/mo',
      features: [
        'Unlimited websites',
        'Unlimited AI regenerations',
        'Custom domains',
        'White-label option',
        'Advanced SEO & analytics',
        'AI content & image tools',
        'Team collaboration',
        'Dedicated support'
      ],
      popular: false
    },
  ];

  const testimonials = [
    {
      rating: 5,
      title: 'Built my site in 10 minutes!',
      text: 'I described my bakery business and the AI created a beautiful website with all the right sections. Just amazing!',
      author: 'Lisa Thompson',
      role: 'Bakery Owner'
    },
    {
      rating: 5,
      title: 'No more expensive designers',
      text: 'As a freelancer, I used to pay thousands for websites. Now I create professional sites myself in minutes.',
      author: 'Mark Stevens',
      role: 'Freelance Consultant'
    },
    {
      rating: 5,
      title: 'Perfect for my agency',
      text: 'We use AI Sitebuilder for quick client mockups. It\'s revolutionized our proposal process.',
      author: 'Rachel Kim',
      role: 'Agency Director'
    },
  ];

  const showcaseTemplates = [
    { name: 'Restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400' },
    { name: 'Portfolio', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400' },
    { name: 'E-commerce', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400' },
    { name: 'Agency', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-dark via-lightDark to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-semilight rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 inline mr-2" />
                AI-Powered
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI <span className="text-secondary">Sitebuilder</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Stress-free sites, built by you in minutes. Just describe what you want and let AI create a stunning, professional website instantly. No coding, no design skills needed.
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-secondary hover:bg-semilight text-dark font-semibold px-8 py-6 text-lg">
                  Try AI Builder Free <Wand2 className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-dark px-8 py-6 text-lg">
                  Watch Demo
                </Button>
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
                alt="AI Sitebuilder" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-dark/90 backdrop-blur-sm p-4 rounded-xl border border-primary/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-semilight flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-dark" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">AI is building...</div>
                    <div className="text-secondary text-sm">Your site is 87% ready</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-dark px-4 py-2 rounded-lg font-semibold shadow-lg flex items-center gap-2">
                <Zap className="w-4 h-4" /> Build in Seconds
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI does the heavy lifting
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI understands your vision and creates professional websites with intelligent design choices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border/30 rounded-2xl p-6 hover:border-secondary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-light-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How it works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From idea to live website in four simple steps. No technical knowledge required.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-border/30 rounded-2xl p-6 h-full">
                  <div className="text-6xl font-bold text-secondary/20 mb-4">{step.step}</div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-secondary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See what AI can build
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore websites created entirely by AI. From restaurants to portfolios, the possibilities are endless.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseTemplates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{template.name}</h3>
                  <p className="text-gray-300 text-sm">AI Generated</p>
                </div>
                <div className="absolute top-4 right-4 bg-secondary text-dark text-xs font-semibold px-2 py-1 rounded">
                  <Sparkles className="w-3 h-3 inline mr-1" /> AI
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-light-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start building for free. Upgrade when you're ready to go live.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
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
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <Button className={`w-full mb-6 ${plan.popular ? 'bg-secondary hover:bg-semilight text-dark' : 'bg-primary hover:bg-primary/80 text-white'}`}>
                  Get Started
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

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Loved by creators worldwide
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-lightDark to-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to build your dream website?
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of creators who are building stunning websites with AI. No credit card required to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold px-8 py-6 text-lg">
                Start Building Free <Wand2 className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-dark px-8 py-6 text-lg">
                Contact Sales <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISitebuilder;
