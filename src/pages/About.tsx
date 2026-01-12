import { motion } from "framer-motion";
import { Building2, Globe, Users, Award, Heart, Zap, Shield, Headphones } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  const ethos = [
    { title: "Our culture", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" },
    { title: "Our benefits", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
    { title: "A day in the office", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=300&fit=crop" },
    { title: "Learning tools to thrive", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
  ];

  const values = [
    { icon: Heart, title: "Be humble, We don't settle for less than our best. Period.", color: "bg-primary" },
    { icon: Zap, title: "Be engaged. Lead with curiosity. Ask and then listen.", color: "bg-secondary" },
    { icon: Users, title: "Be passionate. Support one another. Together is better.", color: "bg-primary" },
    { icon: Shield, title: "Be responsive. Let's make this happen for our clients.", color: "bg-secondary" },
    { icon: Award, title: "Be forthcoming. Give honest answers - even difficult ones.", color: "bg-primary" },
  ];

  const story = [
    { icon: Building2, title: "Great leadership", description: "Visionary leaders driving innovation" },
    { icon: Users, title: "Built to last", description: "Sustainable growth and stability" },
    { icon: Heart, title: "Care for you", description: "Your success is our priority" },
  ];

  const stats = [
    { number: "3M+", label: "Customers worldwide" },
    { number: "40+", label: "Countries served" },
    { number: "800+", label: "Team members" },
  ];

  const knownFor = [
    { icon: Globe, title: "Trustworthy", description: "Reliable services you can count on 24/7" },
    { icon: Award, title: "Award winning", description: "Recognized excellence in hosting industry" },
    { icon: Headphones, title: "Top-notch care", description: "Exceptional customer support always" },
  ];

  const teamMembers = [
    { name: "Peter Jeays", role: "CEO + Titan", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", description: "Leading the company with vision and passion for excellence." },
    { name: "Serene Pham", role: "Legal Counsel", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop", description: "Ensuring compliance and protecting company interests." },
    { name: "Daniel Smith", role: "CFO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop", description: "Managing financial strategy and growth initiatives." },
    { name: "Erik Lavon", role: "CDO", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop", description: "Driving digital transformation across all platforms." },
    { name: "Dr. Filip Martin", role: "CTO", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop", description: "Leading technology innovation and development." },
    { name: "Paulius Smitl", role: "COO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop", description: "Optimizing operations for maximum efficiency." },
    { name: "Eva Garcia", role: "VP Marketing", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop", description: "Building brand awareness and customer engagement." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-lightDark to-primary" />
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-dark/80" />
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-dark" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-light mb-6">
              Welcome to hosting.com
            </h1>
            <p className="text-lg md:text-xl text-light/80 mb-8 leading-relaxed">
              We're not just a hosting company. We're a team of passionate individuals 
              dedicated to helping businesses thrive online. With over a decade of experience, 
              we've helped millions of customers build their digital presence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:bg-semilight text-dark font-semibold">
                Join Our Team
              </Button>
              <Button size="lg" variant="outline" className="border-light/30 text-light hover:bg-light/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Ethos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our ethos</h2>
              <div className="grid grid-cols-2 gap-4">
                {ethos.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl aspect-[4/3]"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-light font-semibold">{item.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pt-12"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At the core of everything we do is a deep commitment to our customers' success. 
                We believe that great hosting isn't just about technology—it's about the people 
                behind it and the values that guide every decision we make.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our culture is built on collaboration, innovation, and an unwavering dedication 
                to excellence. Every team member brings unique perspectives and skills that 
                contribute to our collective mission of empowering businesses worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              These aren't words on a wall.
            </h2>
            <p className="text-muted-foreground">
              We're all in this together; living our values. This is who we are.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className={`w-12 h-12 ${value.color} border border-secondary/40 rounded-lg flex items-center justify-center mb-4`}>
                  <value.icon className="w-6 h-6 text-dark" />
                </div>
                <p className="text-sm text-foreground font-medium leading-relaxed">
                  {value.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our story (so far)
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to serving millions of customers worldwide, 
              our journey has been defined by innovation and dedication.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {story.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 border border-secondary/40 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-semilight">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-dark mb-2">{stat.number}</div>
                <div className="text-dark/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Global Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Build global. Host local.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With data centers strategically located across the globe, we ensure your website 
              loads fast for your visitors, no matter where they are. Our global infrastructure 
              combined with local expertise means you get the best of both worlds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We're Known For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What we're known for
            </h2>
            <p className="text-muted-foreground">Learn more</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {knownFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary border border-secondary/40 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-light" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Teams */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet our teams
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our diverse team of experts brings together decades of experience in web hosting, 
                technology, and customer service. Each member is dedicated to ensuring your 
                online success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From our support specialists who are available 24/7 to our engineering teams 
                constantly innovating new solutions, every person at hosting.com plays a vital 
                role in delivering exceptional service to our customers.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
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
          </div>
        </div>
      </section>

      {/* Listen to the People */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold mb-2 block">Testimonial</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Listen to the people
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Working at hosting.com has been an incredible journey. The company truly 
                values its employees and creates an environment where everyone can thrive. 
                The culture of innovation and collaboration makes every day exciting."
              </p>
              <div className="mt-6">
                <div className="font-semibold text-foreground">Sarah Johnson</div>
                <div className="text-muted-foreground text-sm">Senior Developer, 5 years</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop" 
                alt="Team member"
                className="rounded-xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the minds<br />behind the business
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto group-hover:ring-4 group-hover:ring-primary/30 transition-all">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground text-center">{member.name}</h3>
                <p className="text-primary text-sm text-center mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm text-center">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark via-lightDark to-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop" 
            alt="Join our team"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
              We've got your back
            </h2>
            <p className="text-light/80 mb-8">
              Ready to join our team or partner with us? We're always looking for 
              talented individuals and innovative companies to grow together.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-semilight text-dark font-semibold">
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
