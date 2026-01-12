import React from "react";

export const ContactForm = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-dark via-light-dark to-dark">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to see
          <br />
          Orrien in action?
        </h2>
        <p className="text-muted-foreground">
          Get in touch with our team to schedule a demo or ask any questions
          about our high-performance WordPress hosting.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <form className="space-y-4">
          <Input
            type="text"
            placeholder="Your name"
            className="bg-light-dark border-border/50 text-foreground"
          />
          <Input
            type="email"
            placeholder="Email address"
            className="bg-light-dark border-border/50 text-foreground"
          />
          <Input
            type="text"
            placeholder="Company (optional)"
            className="bg-light-dark border-border/50 text-foreground"
          />
          <Input
            type="text"
            placeholder="How can we help?"
            className="bg-light-dark border-border/50 text-foreground"
          />
          <Button className="w-full bg-secondary hover:bg-secondary/90 text-dark">
            Submit
          </Button>
        </form>
      </motion.div>
    </div>
  </section>
  );
};

 


