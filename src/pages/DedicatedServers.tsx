import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Shield, 
  Zap, 
  Globe, 
  Server, 
  HeadphonesIcon,
  HardDrive,
  Cpu,
  Database,
  Settings,
  Clock,
  MessageCircle,
  AlertTriangle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const serverConfigurations = [
  {
    name: "Intel Tier 1",
    processor: "1x Intel E-2224",
    ram: "16 GB",
    storage: "2x 1T NVMe M.2",
    bandwidth: "Unmetered",
    price: "$99"
  },
  {
    name: "AMD Tier 1",
    processor: "1x AMD Ryzen 7900",
    ram: "32 GB",
    storage: "2x 500GB NVMe M.2",
    bandwidth: "Unmetered",
    price: "$149"
  },
  {
    name: "Intel Tier 2",
    processor: "1x Intel Xeon 4267",
    ram: "64 GB",
    storage: "2x 1T NVMe M.2",
    bandwidth: "Unmetered",
    price: "$249"
  },
  {
    name: "AMD Tier 2",
    processor: "1x AMD EPYC 7302",
    ram: "128 GB",
    storage: "2x 1T NVMe M.2",
    bandwidth: "Unmetered",
    price: "$349"
  },
  {
    name: "AMD Tier 3",
    processor: "2x AMD EPYC 7313",
    ram: "256 GB",
    storage: "2x 2TB NVMe M.2",
    bandwidth: "Unmetered",
    price: "$549"
  }
];

const faqs = [
  {
    question: "Where are these servers located?",
    answer: "Our dedicated servers are located in enterprise-grade data centers across the US, Europe, and Asia-Pacific regions. Each data center features redundant power, advanced cooling systems, and 24/7 on-site security."
  },
  {
    question: "Can I customize my server?",
    answer: "Absolutely! Our dedicated servers are fully customizable. You can choose your processor, RAM, storage configuration, and operating system. Contact our sales team to discuss custom configurations that meet your specific requirements."
  },
  {
    question: "Is this managed or unmanaged?",
    answer: "We offer both managed and unmanaged dedicated server options. With managed servers, our team handles OS updates, security patches, and monitoring. Unmanaged servers give you full root access and complete control over your server."
  }
];

export default function DedicatedServers() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-dark via-light-dark to-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Dedicated servers
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Get in touch to discuss your configuration and reserve your server now.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "Full control. One machine. All yours. No shared resources, ever",
                  "Flexible storage and RAM options to match your needs",
                  "24/7 support. Need help? We're always online"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-dark font-semibold px-8">
                Email our sales team
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-card rounded-xl p-3 shadow-xl border border-border z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Settings className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Add your configuration</p>
                      <p className="text-sm font-medium text-foreground">Custom specs →</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border/30 shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600" 
                    alt="Dedicated server hardware" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-xl border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Custom setup</p>
                      <p className="text-sm font-medium text-foreground">Ready in 24-48hrs</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Looking for Powerful Setup Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Looking for a powerful setup?
              </h2>
              <p className="text-muted-foreground mb-6">
                We can offer a wide range of configurations within our available stocks. Our Sales team will be happy to assist you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="text-foreground">Server locations: <span className="text-secondary">US only</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="text-foreground">Stock is limited. Speak to our sales team to secure your server</span>
                </div>
              </div>

              <Button className="bg-secondary hover:bg-secondary/90 text-dark font-semibold">
                Chat to sales
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-secondary" />
                    <span className="text-xs text-secondary font-medium">United States</span>
                    <span className="bg-secondary text-dark text-xs px-2 py-0.5 rounded-full">New</span>
                  </div>
                </div>
                <div className="row-span-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden border border-border/50">
                  <div className="h-full flex items-center justify-center p-8">
                    <div className="text-center">
                      <Cpu className="w-12 h-12 text-secondary mx-auto mb-2" />
                      <p className="text-sm text-foreground font-medium">Enterprise Grade</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-4 border border-border">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">CPU</span>
                      <span className="text-foreground">AMD EPYC</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">RAM</span>
                      <span className="text-foreground">Up to 256GB</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Storage</span>
                      <span className="text-foreground">NVMe SSD</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stocks Limited Section */}
      <section className="py-16 bg-gradient-to-br from-dark via-light-dark to-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
              <AlertTriangle className="w-6 h-6 text-secondary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stocks are limited
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              We have some great deals on the limited stock we have left so have a chat with our Sales team to reserve yours now!
            </p>
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-dark">
              Check out the configs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Top Configurations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our top configurations
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Specification</th>
                  {serverConfigurations.map((config, index) => (
                    <th key={index} className="text-center py-4 px-4 text-sm font-medium text-foreground">
                      {config.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 text-sm text-muted-foreground">Processor</td>
                  {serverConfigurations.map((config, index) => (
                    <td key={index} className="text-center py-4 px-4 text-sm text-foreground">
                      {config.processor}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 text-sm text-muted-foreground">RAM</td>
                  {serverConfigurations.map((config, index) => (
                    <td key={index} className="text-center py-4 px-4 text-sm text-foreground">
                      {config.ram}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 text-sm text-muted-foreground">Storage</td>
                  {serverConfigurations.map((config, index) => (
                    <td key={index} className="text-center py-4 px-4 text-sm text-foreground">
                      {config.storage}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 text-sm text-muted-foreground">Bandwidth</td>
                  {serverConfigurations.map((config, index) => (
                    <td key={index} className="text-center py-4 px-4 text-sm text-foreground">
                      {config.bandwidth}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Starting at</td>
                  {serverConfigurations.map((config, index) => (
                    <td key={index} className="text-center py-4 px-4">
                      <span className="text-lg font-bold text-secondary">{config.price}</span>
                      <span className="text-sm text-muted-foreground">/mo</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>

          <div className="text-center mt-8">
            <Button className="bg-secondary hover:bg-secondary/90 text-dark font-semibold">
              Talk to the Sales team
            </Button>
          </div>
        </div>
      </section>

      {/* Let's Build Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Let's build what works for you
              </h2>
              <p className="text-muted-foreground mb-6">
                Our different CPU, memory and disk options can be combined. Our Sales team can support you in choosing the right configurations and OS installs. So you know what to do.
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 text-dark font-semibold">
                Talk to our sales team
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-6 border border-border/50"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="bg-card rounded-xl p-3 max-w-xs">
                    <p className="text-sm text-foreground">Hi, how do I add features back to my website?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-secondary/20 rounded-xl p-3 max-w-xs">
                    <p className="text-sm text-foreground">Hi Molly, I'd be happy to help—I'll have no time at all to get you up and running.</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <HeadphonesIcon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="bg-card rounded-xl p-3 max-w-xs">
                    <p className="text-sm text-foreground">Thanks, how to do it</p>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-xs text-muted-foreground">Sales is typing...</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
              <Button className="bg-secondary hover:bg-secondary/90 text-dark font-semibold mt-4">
                More questions? give us a call
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
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

      <Footer />
    </div>
  );
}
