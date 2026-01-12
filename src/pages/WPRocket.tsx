import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  Zap, 
  FileCode, 
  Image, 
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Gauge,
  BarChart3,
  TrendingUp,
  Timer,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const WPRocket = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const heroFeatures = [
    'Fastest load times',
    'Better SEO',
    'Improved vitals',
    'Reduced requests'
  ];

  const topFeatures = [
    { icon: Database, title: 'Page caching', description: 'Instantly creates static HTML files for faster loading' },
    { icon: Zap, title: 'Cache Preloading', description: 'Automatically builds the cache for immediate performance' },
    { icon: FileCode, title: 'GZIP compression', description: 'Compresses files to reduce bandwidth and load times' },
    { icon: FileCode, title: 'File optimization', description: 'Minifies CSS and JavaScript for smaller file sizes' },
    { icon: Image, title: 'Lazy load', description: 'Loads images only when they enter the viewport' }
  ];

  const results = [
    { 
      icon: Gauge, 
      title: 'Elevated PageSpeed scores', 
      description: 'Drive improved Google PageSpeed through WP Rocket\'s intelligent caching, minification, and efficient lazy loading.',
      stat: '95+',
      label: 'PageSpeed Score'
    },
    { 
      icon: Timer, 
      title: 'Reduced Bounce Rates', 
      description: 'Instantly serving visitors fast and responsive sites, achieved through caching, GZIP, and other optimizations.',
      stat: '40%',
      label: 'Lower Bounce Rate'
    },
    { 
      icon: BarChart3, 
      title: 'Boosted core web vitals', 
      description: 'See substantial gains in key metrics like Largest Contentful Paint (LCP) and Interaction to Next Paint (INP).',
      stat: '85%+',
      label: 'Core Web Vitals'
    },
    { 
      icon: TrendingUp, 
      title: 'Increased conversion rates', 
      description: 'A fast, stable and easily navigable site built on an optimized tech stack via WP Rocket empowers you to win more traffic.',
      stat: '88%+',
      label: 'Conversion Rate'
    }
  ];

  const testimonials = [
    {
      rating: 5,
      title: 'Exceptional assistance',
      text: 'Exceptional assistance from the site officials in every matter you bring to them including support assistance and explaining how exactly each feature works on their website.',
      author: 'James Garcia',
      company: 'TechFlow'
    },
    {
      rating: 5,
      title: 'Hosting.com as an alternative to Hostgator',
      text: 'I was looking for a Hostgator alternative. I tried many hosting services but I was not satisfied. Then I found Hosting.com and I am very happy with the service.',
      author: 'Michael Chen',
      company: 'StartupHub'
    },
    {
      rating: 5,
      title: 'I congratulate hosting.com team for getting our website hosted quickly',
      text: 'The performance optimization with WP Rocket has been incredible. Our site loads in under 2 seconds now, and our SEO rankings have improved significantly.',
      author: 'Sarah Wilson',
      company: 'CreativeMinds'
    }
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
                Speed up your WordPress site in minutes with <span className="text-secondary">WP Rocket</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6 max-w-xl">
                Boost your website's performance with WP Rocket, the most powerful caching plugin for WordPress, included free with our hosting plans.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-secondary hover:bg-semilight text-dark font-semibold px-8 py-6 text-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg">
                  View Hosting Plans
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" 
                alt="WP Rocket performance" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-dark/90 backdrop-blur-sm p-4 rounded-xl border border-primary/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Lightning Fast</p>
                    <p className="text-sm text-gray-400">Under 1s load time</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-dark px-4 py-2 rounded-full font-semibold">
                95+ PageSpeed
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is WP Rocket Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
                <div className="bg-dark rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-secondary/30 rounded w-full"></div>
                    <div className="h-2 bg-primary/30 rounded w-3/4"></div>
                    <div className="h-2 bg-secondary/30 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-secondary">2%</p>
                    <p className="text-sm text-gray-400">Bounce Rate</p>
                  </div>
                  <div className="bg-dark rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-semilight">0.8s</p>
                    <p className="text-sm text-gray-400">Load Time</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is WP Rocket?
              </h2>
              <p className="text-muted-foreground mb-6">
                WP Rocket is a premium caching and performance optimization plugin for WordPress. It instantly improves your site's speed and Core Web Vitals with automatic optimization features that work right out of the box.
              </p>
              <p className="text-muted-foreground mb-6">
                From caching to lazy loading, GZIP compression to database cleanup, WP Rocket handles all the technical optimization so you can focus on your content and business. It's trusted by over 3 million websites worldwide.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">No coding required - works instantly</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Compatible with all themes and plugins</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Improves SEO rankings automatically</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Top features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              If you're after a tool that effortlessly boosts your website's speed and smoothness, then WP Rocket's comprehensive set of tools is exactly what you need. It's packed with features designed to deliver a faster, smoother browsing experience for your visitors.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {topFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors text-center group"
              >
                <div className="w-16 h-16 bg-primary/20 border border-secondary/40 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Results you can expect
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              WP Rocket's features work in harmony to deliver measurable improvements. From better Google PageSpeed scores to increased conversions, here's what you can achieve.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 border border-secondary/40 rounded-lg flex items-center justify-center mb-4">
                  <result.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{result.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{result.description}</p>
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-secondary">{result.stat}</p>
                  <p className="text-xs text-muted-foreground">{result.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-lightDark to-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why choose WP Rocket through us?
              </h2>
              <p className="text-gray-300 mb-6">
                All hosting customers receive WP Rocket included free and pre-installed, so our customers can take the WP Rocket-powered performance on-the-go. No hidden charges, no separate purchase – it's included with your hosting plan at 100% no extra cost.
              </p>
              <p className="text-gray-300 mb-8">
                Are you also tired of checking and tweaking your site's settings manually? Our managed WP Rocket experience means you manage your site's performance with ease, letting you focus more on creating content and less on technical optimization.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-white">Pre-installed on all WordPress hosting plans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-white">Zero additional cost – included free</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-white">Optimized settings for best performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-white">24/7 support for any optimization needs</span>
                </li>
              </ul>
              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600" 
                alt="WP Rocket benefits" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-dark p-4 rounded-xl font-semibold">
                <p className="text-2xl font-bold">$0</p>
                <p className="text-sm">Extra Cost</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    

      {/* Help Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary to-primary rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="h-8 w-8 text-white" />
                <h3 className="text-2xl font-bold text-white">Questions? We're here to help.</h3>
              </div>
              <p className="text-white/90 mb-6">
                Our hosting Tech Team is available 24/7 to help you understand and optimize your WordPress site with WP Rocket.
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat Now
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600" 
                alt="Customer support" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WPRocket;
