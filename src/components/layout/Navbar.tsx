import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Server, Cloud, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "Products",
    href: "#products",
    hasDropdown: true,
    items: [
      { icon: Server, label: "Web Hosting", description: "Fast & reliable hosting" },
      { icon: Cloud, label: "Cloud Servers", description: "Scalable cloud solutions" },
      { icon: Shield, label: "SSL Certificates", description: "Secure your website" },
      { icon: Globe, label: "Domain Names", description: "Find your perfect domain" },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Support", href: "#support" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-light flex items-center justify-center">
              <Server className="w-5 h-5 text-dark" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Cloud<span className="text-gradient">Host</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                  )}
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-4"
                    >
                      <div className="glass-card p-4 min-w-[280px] grid gap-2">
                        {link.items?.map((item) => (
                          <a
                            key={item.label}
                            href="#"
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                              <item.icon className="w-5 h-5 text-secondary" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground">{item.label}</div>
                              <div className="text-sm text-muted-foreground">{item.description}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost">Log In</Button>
            <Button variant="hero" size="lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark/95 backdrop-blur-xl border-b border-border/30"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-border/30">
                  <Button variant="outline" size="lg">
                    Log In
                  </Button>
                  <Button variant="hero" size="lg">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
