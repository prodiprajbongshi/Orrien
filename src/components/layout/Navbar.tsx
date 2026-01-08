import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Server, Cloud, Shield, Globe, Cpu, Database, HardDrive, Layers, FileCode, Palette, ShoppingCart, Rocket, BookOpen, HeadphonesIcon, MessageCircle, FileText, Video, Users, LifeBuoy, Mail, Zap, ArrowRightLeft, Building2, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
];
const navLinks = [
  {
    label: "Hosting & Servers",
    href: "#hosting",
    categories: [
      {
        title: "Shared Hosting",
        items: [
          { icon: Server, label: "Web Hosting", description: "Feature-rich cPanel & one-click tools", href: "/web-hosting" },
          { icon: Globe, label: "Hosting for WordPress", description: "Optimized WordPress hosting for growth", href: "/wordpress-hosting" },
          { icon: Layers, label: "Reseller Hosting", description: "Launch your own hosting business", href: "/reseller-hosting" },
        ],
      },
      {
        title: "VPS Hosting",
        items: [
          { icon: Cloud, label: "Managed VPS Hosting", description: "Zero server hassle, 100% managed for you", href: "/managed-vps-hosting" },
          { icon: Cpu, label: "VPS Hosting (root access)", description: "Full root access, full control", href: "/vps-hosting" },
        ],
      },
      {
        title: "Dedicated",
        items: [
          { icon: Database, label: "Managed VDS Hosting", description: "Dedicated-level power", href: "/managed-vds-hosting" },
          { icon: HardDrive, label: "Dedicated Servers", description: "Full control on your hardware", href: "/dedicated-servers" },
        ],
      },
    ],
    cardTitle: "Talk to our sales team",
    cardDescription: "Get in touch with our team to find the best solution for you",
    cardLink: "/contact"
  },
  {
    label: "WordPress",
    href: "#wordpress",
    categories: [
      {
        title: "Product",
        items: [
          { icon: Globe, label: "Hosting for WordPress", description: "Optimized WordPress hosting for growth", href: "/wordpress-hosting" },
          { icon: ShoppingCart, label: "Hosting for Woocommerce", description: "Woocommerce hosting built for success", href: "/woocommerce-hosting" },
        ],
      },
      {
        title: "Features",
        items: [
          { icon: Zap, label: "Speed & Performance", description: "Blazing speed for a smoother experience", href: "/speed-performance" },
          { icon: Shield, label: "Security", description: "Continuous protection for your site", href: "/security" },
          { icon: Palette, label: "Ease of Use", description: "Simple, intuitive site management", href: "/ease-of-use" },
        ],
      },
      {
        title: "Add-ons / Plug-ins",
        items: [
          { icon: Rocket, label: "WP Rocket", description: "Boost your website speed with WP Rocket", href: "/wp-rocket" },
        ],
      },
    ],
    cardTitle: "Book a demo",
    cardDescription: "Discover the hosting platform trusted by thousands",
  },
  {
    label: "Services",
    href: "#services",
    categories: [
      {
        title: "Domains & SSL",
        items: [
          { icon: Globe, label: "Buy a domain", description: "Register your domain today", href: "/buy-domain" },
          { icon: Layers, label: "Transfer a Domain", description: "Fast domain transfers", href: "/transfer-domain" },
          { icon: Shield, label: "SSL Certificates", description: "Lock in trust, secure your site with SSL", href: "/ssl-certificates" },
        ],
      },
      {
        title: "Email",
        items: [
          { icon: Mail, label: "Email Hosting", description: "Your brands inbox. Fast, secure, professional", href: "/email-hosting" },
        ],
      },
      {
        title: "Site Builder",
        items: [
          { icon: Zap, label: "AI Sitebuilder", description: "Stress free sites, built by you in minutes", href: "/ai-sitebuilder" },
        ],
      },
      
    ],
    cardTitle: "Free site migrations",
    cardDescription: "Let our experts migrate your site for you",
    cardLink: "/site-migration"
  },
  {
    label: "Resources",
    href: "#resources",
    categories: [
      {
        title: "Company",
        items: [
          { icon: Building2, label: "About", description: "Learn more about Orrien", href: "/about" },
          { icon: Layers, label: "M&A", description: "Powered by exceptional brands", href: "/mergers-acquisitions" },
        ],
      },
      {
        title: "Resources",
        items: [
          { icon: LifeBuoy, label: "Free Migration by Experts", description: "Effortless website transfers by experts", href: "/site-migration" },
          { icon: FileText, label: "Blog", description: "Latest insights", href: "/blog" },
           
        ],
      },
      {
        title: "Programs",
        items: [
          { icon: Users, label: "Affiliate Program", description: "Start earning up to $125 today", href: "/affiliate-program" },
          { icon: MessageCircle, label: "Refer a Friend", description: "Earn up to $130 with a single referral", href: "/refer-friend" },
        ],
      },
    ],
    cardTitle: "Talk to our sales team",
    cardDescription: "Get in touch with our team to find the best solution for you",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const activeLink = navLinks.find(link => link.label === activeDropdown);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            
            <span className="font-display text-xl font-bold text-foreground">
              Orrien
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium rounded-lg hover:bg-muted/30"
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                </a>
              </div>
            ))}
          </div>

          {/* CTA Section - Currency always visible, Login hidden on mobile */}
          <div className="flex items-center gap-2">
            {/* Currency Switcher - Always visible */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5 border-border/50 bg-transparent hover:bg-muted/30">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-medium">{selectedCurrency.code}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-light-dark border-border">
                {currencies.map((currency) => (
                  <DropdownMenuItem
                    key={currency.code}
                    onClick={() => setSelectedCurrency(currency)}
                    className={`cursor-pointer ${selectedCurrency.code === currency.code ? "bg-secondary/20 text-secondary" : ""}`}
                  >
                    <span className="w-6">{currency.symbol}</span>
                    <span>{currency.code}</span>
                    <span className="ml-2 text-muted-foreground text-xs">({currency.name})</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Login - Hidden on mobile */}
            <Button variant="ghost" className="hidden lg:inline-flex">Log In</Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown - Fixed Position at Container Start */}
      <AnimatePresence>
        {activeDropdown && activeLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block absolute top-full left-0 right-0 z-50"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="container mx-auto px-4 pt-2">
              <div className="bg-light-dark border border-border rounded-xl shadow-2xl p-5">
                <div className="flex gap-8">
                  {activeLink.categories.map((category) => (
                    <div key={category.title} className="min-w-[240px]">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                        {category.title}
                      </div>
                      <div className="grid gap-1">
                        {category.items.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors flex-shrink-0">
                              <item.icon className="w-5 h-5 text-secondary" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground text-sm">{item.label}</div>
                              <div className="text-xs text-muted-foreground">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* CTA Card */}
                  <div className="min-w-[220px] bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
                        <HeadphonesIcon className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="font-semibold text-foreground mb-1">
                        {activeLink.cardTitle}
                    
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {activeLink.cardDescription}
                      </div>
                    </div>
                    <Link to={activeLink.cardLink} className="mt-4 text-sm font-medium text-secondary hover:text-light transition-colors flex items-center gap-1">
                      {activeLink.cardTitle === "Book a demo" ? "Book Now →" : activeLink.cardTitle === "Free site migrations" ? "Get Started →" : "Contact Sales →"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark border-b border-border/30 max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileActiveDropdown(mobileActiveDropdown === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-muted/30"
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileActiveDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileActiveDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-light-dark rounded-lg p-2 mt-1 mb-2">
                            <div className="grid gap-4">
                              {link.categories.map((category) => (
                                <div key={category.title}>
                                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                                    {category.title}
                                  </div>
                                  {category.items.map((item) => (
                                    <Link
                                      key={item.label}
                                      to={item.href}
                                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-5 h-5 text-secondary" />
                                      </div>
                                      <div>
                                        <div className="font-medium text-foreground text-sm">{item.label}</div>
                                        <div className="text-xs text-muted-foreground">{item.description}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-border/30 mt-2">
                  <Button variant="outline" size="lg">
                    Log In
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