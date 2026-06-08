import { Toaster } from "@nondualizer/components/ui/toaster";
import { Toaster as Sonner } from "@nondualizer/components/ui/sonner";
import { TooltipProvider } from "@nondualizer/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { TrackPage } from "./pages/TrackPage";
import Header from "./components/Header";

const queryClient = new QueryClient();

// Debug component to track routing
const RoutingDebug = () => {
  const location = useLocation();
  
  console.log('🔍 [ROUTING DEBUG] Current location:', {
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
    timestamp: new Date().toISOString()
  });
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RoutingDebug />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/track/:trackSlug" element={<TrackPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
