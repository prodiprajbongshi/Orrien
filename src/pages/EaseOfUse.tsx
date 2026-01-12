import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  Users, 
  Shield, 
  Database, 
  Headphones, 
  ArrowRight,
  CheckCircle,
  Settings,
  BarChart3,
  Layers,
  Copy,
  Lock,
  Clock,
  Zap,
  Globe,
  RefreshCw,
  MessageSquare
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from "@/components/sections/BlogSection";

const EaseOfUse = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const controlPanelFeatures = [
    { icon: Monitor, title: 'Intuitive Dashboard', description: 'Easy-to-navigate control panel' },
    { icon: Settings, title: 'One-click Actions', description: 'Manage everything with simple clicks' },
    { icon: BarChart3, title: 'Real-time Analytics', description: 'Monitor your site performance' },
    { icon: Shield, title: 'Security Center', description: 'Manage all security settings' }
  ];

  const powerFeatures = [
    'Complete WordPress management',
    'Plugin and theme management',
    'One-click updates for everything',
    'Automated backup management',
    'SSL certificate management',
    'Email management tools'
  ];

  const userManagementFeatures = [
    { icon: Users, title: 'Unlimited users', description: 'Add team members without limits' },
    { icon: Shield, title: 'User Permissions', description: 'Granular access control for each user' },
    { icon: Lock, title: 'Secure Access', description: 'Two-factor authentication support' },
    { icon: Settings, title: 'User Insights', description: 'Track user activity and changes' },
    { icon: Clock, title: 'Session Management', description: 'Control active login sessions' },
    { icon: Zap, title: 'Quick Switching', description: 'Switch between sites instantly' }
  ];

  const stagingFeatures = [
    { icon: Copy, title: 'One-Click Cloning', description: 'Create staging sites instantly' },
    { icon: RefreshCw, title: 'Easy Sync Options', description: 'Sync changes between environments' },
    { icon: Shield, title: 'Safe Testing', description: 'Test updates without affecting live site' },
    { icon: Layers, title: 'Multiple Staging', description: 'Create multiple staging environments' },
    { icon: Lock, title: 'Password Protected', description: 'Keep staging sites private' },
    { icon: Zap, title: 'Fast Deployment', description: 'Push changes live with one click' }
  ];

  const testimonials = [
    {
      company: 'TechFlow',
      text: 'The control panel is incredibly intuitive. Managing multiple WordPress sites has never been easier.',
      author: 'Sarah Johnson',
      role: 'Web Developer'
    },
    {
      company: 'CreativeMinds',
      text: 'One-click staging has transformed our workflow. We can test changes safely before going live.',
      author: 'Michael Chen',
      role: 'Agency Owner'
    },
    {
      company: 'StartupHub',
      text: 'The user management features are exactly what we needed for our team collaboration.',
      author: 'Emily Davis',
      role: 'Project Manager'
    }
  ];

  const blogPosts = [
    {
      category: 'Tutorial',
      title: 'Getting started with the control panel',
      description: 'Learn how to navigate and use all features of our intuitive WordPress control panel.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400'
    },
    {
      category: 'Best Practices',
      title: 'Managing multiple WordPress sites efficiently',
      description: 'Tips and tricks for managing multiple sites from a single dashboard.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
    },
    {
      category: 'Guide',
      title: 'Setting up staging environments',
      description: 'A complete guide to creating and managing staging sites for safe testing.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400'
    },
    {
      category: 'Tips',
      title: 'User permission best practices',
      description: 'How to set up user roles and permissions for optimal team collaboration.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400'
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
                WordPress, <span className="text-secondary">simplified</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Take control of your WordPress hosting with our intuitive control panel. Manage everything from one place with simple, powerful tools designed for everyone.
              </p>
              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold px-8 py-6 text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600" 
                alt="Modern WordPress dashboard interface" 
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-dark/90 backdrop-blur-sm p-4 rounded-xl border border-primary/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Easy Management</p>
                    <p className="text-sm text-gray-400">Intuitive controls</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intuitive Control Panel Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-medium mb-4 block">Control Panel</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Intuitive control panel built for WordPress
              </h2>
              <p className="text-muted-foreground mb-8">
                Our custom-built control panel puts everything you need at your fingertips. No complicated settings, no confusing menus – just simple, powerful WordPress management.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {controlPanelFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <div className="w-10 h-10 bg-primary/20 border border-secondary/40 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                alt="Control panel interface" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* All in One Power Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" 
                alt="All in one power" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-secondary font-medium mb-4 block">All-in-One</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                All in one power and control
              </h2>
              <p className="text-muted-foreground mb-8">
                Everything you need to manage your WordPress site is in one place. From updates to backups, security to performance – all accessible from your dashboard.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {powerFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visualize Data Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-medium mb-4 block">Analytics</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Visualize all of your data
              </h2>
              <p className="text-muted-foreground mb-8">
                Get insights into your website's performance with beautiful, easy-to-understand charts and graphs. Monitor traffic, resource usage, and more in real-time.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Traffic Analytics</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                  <Database className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Resource Usage</span>
                </div>
                <div className="flex items-center gap-2 bg-semilight/10 px-4 py-2 rounded-full">
                  <Globe className="h-5 w-5 text-semilight" />
                  <span className="text-foreground">Visitor Insights</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" 
                alt="Data visualization" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary  ">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the easiest WordPress hosting control panel. Get started in minutes and see the difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg">
                View Plans
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Management Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-medium mb-4 block">User Management</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Manage unlimited users with ease
              </h2>
              <p className="text-muted-foreground mb-8">
                Invite team members, set permissions, and collaborate seamlessly. Our user management system makes it easy to control who has access to what.
              </p>
              <Button className="bg-primary hover:bg-lightDark text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {userManagementFeatures.map((feature, index) => (
                  <div key={index} className="p-4 bg-card rounded-lg border border-secondary/40  ">
                    <div className="w-10 h-10 bg-primary/20 border border-secondary/40 rounded-lg flex items-center justify-center mb-3">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* One-Click Staging Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-secondary font-medium mb-4 block">Staging</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              One-click staging
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Test changes safely with our one-click staging environment. Clone your site, make changes, and push them live when ready – all without affecting your production site.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stagingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 border border-secondary/40 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Management Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600" 
                alt="Database management" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-medium mb-4 block">Database</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Simplified database management
              </h2>
              <p className="text-muted-foreground mb-6">
                Manage your WordPress database with ease. Our intuitive interface lets you view, edit, and optimize your database without needing technical expertise.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Visual database browser</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">One-click optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Automatic backups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Search and replace tools</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expert Support Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-medium mb-4 block">Support</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Expert WordPress support
              </h2>
              <p className="text-muted-foreground mb-6">
                Our team of WordPress experts is available 24/7 to help you with any questions or issues. Get the support you need, when you need it.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Headphones className="h-5 w-5 text-primary" />
                  <span className="text-foreground">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                  <MessageSquare className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Live Chat</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600" 
                alt="Expert support" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Migrations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600" 
                alt="Free migrations" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-medium mb-4 block">Migrations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Free WordPress migrations (done for you)
              </h2>
              <p className="text-muted-foreground mb-6">
                Moving to us is easy and free. Our expert team will migrate your WordPress site with zero downtime. Just sit back and relax while we handle everything.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Free expert migration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Zero downtime guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">Complete site transfer</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">DNS assistance included</span>
                </li>
              </ul>
              <Button className="bg-secondary hover:bg-semilight text-dark font-semibold">
                Request Free Migration <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
    

          {/* Testimonials Section */}
  <TestimonialsSection/>

      {/* Blog Section */}
    <BlogSection />

      <Footer />
    </div>
  );
};

export default EaseOfUse;
