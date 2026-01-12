import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="">
      <Navbar />

      <section className="relative py-24 overflow-hidden ">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--light-dark))_0%,hsl(var(--dark))_70%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] hero-glow opacity-30 animate-pulse-glow" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16 py-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let’s Build Something <span className="text-gradient">Great</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a question about our hosting, need help choosing a plan, or
              want a custom solution? We're here to help.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-light-dark border border-border/30 rounded-2xl p-8 backdrop-blur-xl"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative">
                <User className="absolute top-1/2 -translate-y-1/2 left-4 w-5 h-5 text-secondary" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-dark/40 border border-border/30 rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/50 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute top-1/2 -translate-y-1/2 left-4 w-5 h-5 text-secondary" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-dark/40 border border-border/30 rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/50 transition-colors"
                />
              </div>

              {/* Subject */}
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-dark/40 border border-border/30 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/50 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2 relative">
                <MessageSquare className="absolute top-4 left-4 w-5 h-5 text-secondary" />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full bg-dark/40 border border-border/30 rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/50 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 text-center pt-4">
                <Button variant="hero" size="xl">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
       <Footer/>
    </div>
  );
};

export default Contact;
