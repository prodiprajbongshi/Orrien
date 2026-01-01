import { Navbar } from "@/components/layout/Navbar";
import { DomainSearchBar } from "@/components/sections/DomainSearchBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ExpertsSection } from "@/components/sections/ExpertsSection";
import { CustomerReviewsSection } from "@/components/sections/CustomerReviewsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { TeamSliderSection } from "@/components/sections/TeamSliderSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
  
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <DomainSearchBar />
        <FeaturesSection />
        <StatsSection />
        <PricingSection />
        <BenefitsSection />
        <ExpertsSection />
        <CustomerReviewsSection />
        <TestimonialsSection />
        <BlogSection />
        <TeamSliderSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
