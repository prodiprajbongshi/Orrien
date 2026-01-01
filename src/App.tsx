import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WebHosting from "./pages/WebHosting";
import WordPressHosting from "./pages/WordPressHosting";
import WooCommerceHosting from "./pages/WooCommerceHosting";
import SpeedPerformance from "./pages/SpeedPerformance";
import Security from "./pages/Security";
import EaseOfUse from "./pages/EaseOfUse";
import WPRocket from "./pages/WPRocket";
import ResellerHosting from "./pages/ResellerHosting";
import ManagedVPSHosting from "./pages/ManagedVPSHosting";
import VPSHosting from "./pages/VPSHosting";
import ManagedVDSHosting from "./pages/ManagedVDSHosting";
import DedicatedServers from "./pages/DedicatedServers";
import BuyDomain from "./pages/BuyDomain";
import TransferDomain from "./pages/TransferDomain";
import SSLCertificates from "./pages/SSLCertificates";
import EmailHosting from "./pages/EmailHosting";
import AISitebuilder from "./pages/AISitebuilder";
import SiteMigration from "./pages/SiteMigration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/web-hosting" element={<WebHosting />} />
          <Route path="/wordpress-hosting" element={<WordPressHosting />} />
          <Route path="/woocommerce-hosting" element={<WooCommerceHosting />} />
          <Route path="/speed-performance" element={<SpeedPerformance />} />
          <Route path="/security" element={<Security />} />
          <Route path="/ease-of-use" element={<EaseOfUse />} />
          <Route path="/wp-rocket" element={<WPRocket />} />
          <Route path="/reseller-hosting" element={<ResellerHosting />} />
          <Route path="/managed-vps-hosting" element={<ManagedVPSHosting />} />
          <Route path="/vps-hosting" element={<VPSHosting />} />
          <Route path="/managed-vds-hosting" element={<ManagedVDSHosting />} />
          <Route path="/dedicated-servers" element={<DedicatedServers />} />
          <Route path="/buy-domain" element={<BuyDomain />} />
          <Route path="/transfer-domain" element={<TransferDomain />} />
          <Route path="/ssl-certificates" element={<SSLCertificates />} />
          <Route path="/email-hosting" element={<EmailHosting />} />
          <Route path="/ai-sitebuilder" element={<AISitebuilder />} />
          <Route path="/site-migration" element={<SiteMigration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
