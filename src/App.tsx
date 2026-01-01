import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WebHosting from "./pages/WebHosting";
import WordPressHosting from "./pages/WordPressHosting";
import ResellerHosting from "./pages/ResellerHosting";
import ManagedVPSHosting from "./pages/ManagedVPSHosting";
import VPSHosting from "./pages/VPSHosting";
import ManagedVDSHosting from "./pages/ManagedVDSHosting";
import DedicatedServers from "./pages/DedicatedServers";
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
          <Route path="/reseller-hosting" element={<ResellerHosting />} />
          <Route path="/managed-vps-hosting" element={<ManagedVPSHosting />} />
          <Route path="/vps-hosting" element={<VPSHosting />} />
          <Route path="/managed-vds-hosting" element={<ManagedVDSHosting />} />
          <Route path="/dedicated-servers" element={<DedicatedServers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
