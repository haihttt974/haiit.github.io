// import UmamiRouteTracker from "@/components/analytics/UmamiRouteTracker"
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { EffectsProvider } from "@/contexts/EffectsContext";
import { EffectsController } from "@/components/effects/EffectsController";
import { EffectsRenderer } from "@/components/effects/EffectsRenderer";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <EffectsProvider>
        <Toaster />
        <Sonner />
        <EffectsRenderer />
        <EffectsController />
        <Router>
          {/* <UmamiRouteTracker /> */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </EffectsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
