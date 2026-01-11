import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const popularTLDs = [
  { extension: ".com", price: "$9.99" },
  { extension: ".net", price: "$11.99" },
  { extension: ".org", price: "$10.99" },
  { extension: ".io", price: "$39.99" },
  { extension: ".co", price: "$24.99" },
  { extension: ".dev", price: "$14.99" },
];

export function DomainSearchBar() {
  const [domain, setDomain] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;
    
    setIsSearching(true);
    // Simulate search
    setTimeout(() => setIsSearching(false), 1500);
  };

  return (
    <section className="bg-gradient-to-r from-light-dark via-primary/20 to-light-dark border-b border-border/30 ">
      <div className="container mx-auto px-4 py-6 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="font-display text-xl md:text-4xl font-bold text-foreground mb-2">
              Find Your Perfect 
              <span className="text-gradient"> Domain</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Search from millions of available domain names
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative mb-5">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter your domain name..."
                  className="w-full h-14 pl-12 pr-4 bg-dark border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="xl"
                disabled={isSearching}
                className="sm:w-auto w-full"
              >
                {isSearching ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Search className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Search Domain
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Popular TLDs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {popularTLDs.map((tld) => (
              <button
                key={tld.extension}
                onClick={() => setDomain((prev) => {
                  const baseName = prev.split('.')[0] || 'example';
                  return baseName + tld.extension;
                })}
                className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-dark/50 border border-border/50 hover:border-secondary/50 hover:bg-secondary/10 transition-all"
              >
                <span className="font-semibold text-foreground">{tld.extension}</span>
                <span className="text-sm text-secondary">{tld.price}</span>
              </button>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-secondary" />
              <span>Free WHOIS Privacy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-secondary" />
              <span>Free DNS Management</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-secondary" />
              <span>Easy Domain Transfer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
