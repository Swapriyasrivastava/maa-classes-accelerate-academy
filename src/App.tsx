
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Courses from "./pages/Courses";
import Admission from "./pages/Admission";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import Brochure from "./pages/Brochure";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Jobs from "./pages/Jobs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
