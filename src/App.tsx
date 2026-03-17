import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DemoModeProvider } from "@/contexts/DemoModeContext";
import { Layout } from "@/components/Layout";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import DashboardOperacional from "./pages/DashboardOperacional";
import Simulator from "./pages/Simulator";
import BeforeAfter from "./pages/BeforeAfter";
import Infrastructure from "./pages/Infrastructure";
import Operations from "./pages/Operations";
import Revenue from "./pages/Revenue";
import KPIs from "./pages/KPIs";
import Results90 from "./pages/Results90";
import Security from "./pages/Security";
import Timeline from "./pages/Timeline";
import Control from "./pages/Control";
import Implementation from "./pages/Implementation";
import Training from "./pages/Training";
import Report from "./pages/Report";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <DemoModeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing page — no sidebar */}
          <Route path="/" element={<Landing />} />

          {/* Platform pages — with sidebar layout */}
          <Route element={<Layout><Dashboard /></Layout>} path="/dashboard" />
          <Route element={<Layout><DashboardOperacional /></Layout>} path="/operacional" />
          <Route element={<Layout><Simulator /></Layout>} path="/simulador" />
          <Route element={<Layout><BeforeAfter /></Layout>} path="/comparativo" />
          <Route element={<Layout><Infrastructure /></Layout>} path="/infraestrutura" />
          <Route element={<Layout><Operations /></Layout>} path="/operacao" />
          <Route element={<Layout><Revenue /></Layout>} path="/receitas" />
          <Route element={<Layout><KPIs /></Layout>} path="/kpis" />
          <Route element={<Layout><Results90 /></Layout>} path="/resultados" />
          <Route element={<Layout><Security /></Layout>} path="/seguranca" />
          <Route element={<Layout><Timeline /></Layout>} path="/cronograma" />
          <Route element={<Layout><Control /></Layout>} path="/controle" />
          <Route element={<Layout><Implementation /></Layout>} path="/implantacao" />
          <Route element={<Layout><Training /></Layout>} path="/treinamento" />
          <Route element={<Layout><Report /></Layout>} path="/relatorio" />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </DemoModeProvider>
  </QueryClientProvider>
);

export default App;
