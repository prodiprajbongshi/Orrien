import { motion } from "framer-motion";
import { Building2, Users, Target, Handshake, TrendingUp, Globe, ChevronRight, Quote } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MergersAcquisitions = () => {
  const lookingFor = [
    "Established hosting companies with strong customer bases",
    "Domain registrars and SSL certificate providers",
    "Cloud infrastructure and managed services companies",
    "Email and collaboration tool providers",
    "Website builder and CMS platforms",
  ];

  const workWith = [
    "Business owners looking to exit",
    "Private equity firms with hosting portfolios",
    "Strategic partners seeking growth opportunities",
    "Founders ready for their next chapter",
  ];

  const companies = [
    { name: "FastComet", icon: "F", description: "Premium managed cloud hosting with exceptional support and global reach." },
    { name: "ChemiCloud", icon: "C", description: "High-performance cloud hosting with focus on speed and reliability." },
    { name: "Starter.io", icon: "S", description: "Easy-to-use website builder for small businesses and entrepreneurs." },
    { name: "HostPro", icon: "H", description: "Enterprise-grade hosting solutions for growing businesses." },
    { name: "DomainHub", icon: "D", description: "Complete domain management and registration services." },
    { name: "CloudMail", icon: "M", description: "Professional email hosting with advanced security features." },
  ];

  const founderTestimonials = [
    {
      icon: "F",
      name: "FastComet Founders",
      quote: "We founded FastComet with the dream of bringing quality web hosting to everyone. When the time came to find a partner for the next chapter, hosting.com stood out. Their commitment to maintaining our values and team culture made the transition seamless.",
      color: "bg-primary"
    },
    {
      icon: "C",
      name: "ChemiCloud Team",
      quote: "Joining the hosting.com family allowed us to scale our infrastructure while keeping what made ChemiCloud special. The integration process respected our identity and our customers continue to receive the same great service.",
      color: "bg-secondary"
    },
  ];

  const faqs = [
    { question: "How does the acquisition process work?", answer: "Our acquisition process is designed to be transparent and founder-friendly. We start with an initial conversation to understand your business, followed by due diligence, valuation discussions, and a structured transition plan that prioritizes your team and customers." },
    { question: "What types of companies do you acquire?", answer: "We focus on web hosting providers, domain registrars, SSL certificate providers, email hosting companies, website builders, and related SaaS platforms. We're interested in businesses with strong customer relationships and quality service offerings." },
    { question: "How do you value a hosting company?", answer: "We consider multiple factors including recurring revenue, customer lifetime value, churn rates, infrastructure costs, team expertise, and growth potential. Each valuation is tailored to the unique aspects of your business." },
    { question: "What happens to my team after acquisition?", answer: "We believe in keeping teams together. Our strategy focuses on integration while preserving the culture and expertise that made your company successful. Most team members continue in their roles or take on expanded responsibilities." },
    { question: "How long does the process take?", answer: "Typical acquisitions take 3-6 months from initial discussions to close, depending on complexity and due diligence requirements. We work efficiently while ensuring a thorough and fair process for all parties." },
  ];

  const pressArticles = [
    { title: "Hosting.com Announces Strategic Acquisition of FastComet", source: "TechCrunch", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop" },
    { title: "The Future of Cloud Hosting: Interview with hosting.com CEO", source: "Forbes", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop" },
    { title: "How M&A is Reshaping the Web Hosting Industry", source: "VentureBeat", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
    { title: "Hosting.com's Growth Strategy: Building Through Acquisition", source: "Bloomberg", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-lightDark to-primary" />
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-dark/80" />
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Handshake className="w-6 h-6 text-dark" />
              </div>
              <span className="text-light/80 text-sm">12+ Acquisitions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-light mb-6">
              Join the global hosting platform built for growth.
            </h1>
            <p className="text-lg md:text-xl text-light/80 mb-8 leading-relaxed">
              We're building the world's most comprehensive hosting ecosystem by partnering 
              with exceptional companies and teams. If you've built something great, 
              let's talk about what's next.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:bg-semilight text-dark font-semibold">
                Start a Conversation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Panel Discussion Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Panel discussion on web hosting and cloud M&A
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Join industry experts as they discuss the evolving landscape of web hosting 
                mergers and acquisitions. Learn about market trends, valuation strategies, 
                and what makes a successful acquisition.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-dark">
                Watch Recording <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-2">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" 
                  alt="Panel discussion"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-dark px-4 py-2 rounded-lg font-semibold text-sm">
                CLOUDFEST
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" 
                alt="Team meeting"
                className="rounded-xl w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" 
                alt="Team collaboration"
                className="rounded-xl w-full h-48 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What are we looking for?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're interested in acquiring companies that share our passion for delivering 
                exceptional hosting experiences. Here's what we typically look for:
              </p>
              <ul className="space-y-4">
                {lookingFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who do we work with?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We partner with a diverse range of stakeholders in the hosting ecosystem. 
              Whether you're a founder looking to exit or a PE firm seeking strategic options, 
              we're interested in starting a conversation.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {workWith.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Acquisitions Have Shaped Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How acquisitions have shaped us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each acquisition has brought unique strengths, technologies, and perspectives 
                to our platform. We've grown not just in size, but in capability and diversity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach is to preserve what makes each company special while providing 
                the resources and infrastructure needed for accelerated growth. We believe 
                in integration, not assimilation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                alt="Team growth"
                className="rounded-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* M&A Strategy */}
      <section className="py-20 bg-gradient-to-br from-dark via-lightDark to-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-light mb-6">
              Our M&A strategy is to integrate and have people identify as one team
            </h2>
            <p className="text-light/80 text-lg leading-relaxed">
              We don't acquire companies to strip them down. We acquire them to build them up. 
              Our success is measured by the continued success of our portfolio companies 
              and the satisfaction of their teams and customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Growing Family */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our growing family
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the exceptional companies that have joined our platform
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{company.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{company.name}</h3>
                <p className="text-muted-foreground text-sm">{company.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What our founders say
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {founderTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className={`w-16 h-16 ${testimonial.color} rounded-xl flex items-center justify-center mb-6`}>
                  <span className="text-2xl font-bold text-dark">{testimonial.icon}</span>
                </div>
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="text-sm font-semibold text-primary">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-primary font-semibold mb-2 block">Life in the M&A team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Built for success
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop" 
              alt="M&A Team"
              className="rounded-xl w-full h-80 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to common questions about our M&A process
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-foreground font-medium hover:no-underline">
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
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-sm text-muted-foreground">Finesse Info and Hosting</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {["Hosting Capital", "M&A Pros", "TechVest"].map((partner, index) => (
              <div key={index} className="text-muted-foreground font-semibold">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-semilight">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Impress and influence
            </h2>
            <p className="text-dark/80 max-w-2xl mx-auto mb-8">
              For any business enquiries, get in touch at acquisitions@hosting.com
            </p>
            <Button size="lg" className="bg-dark hover:bg-lightDark text-light font-semibold">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-light">Press</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pressArticles.map((article, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-light font-medium mb-2 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <span className="text-sm text-light/60">{article.source}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MergersAcquisitions;
