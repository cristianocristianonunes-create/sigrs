import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Dashboard from "./pages/Dashboard";
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
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/simulador" element={<Simulator />} />
            <Route path="/comparativo" element={<BeforeAfter />} />
            <Route path="/infraestrutura" element={<Infrastructure />} />
            <Route path="/operacao" element={<Operations />} />
            <Route path="/receitas" element={<Revenue />} />
            <Route path="/kpis" element={<KPIs />} />
            <Route path="/resultados" element={<Results90 />} />
            <Route path="/seguranca" element={<Security />} />
            <Route path="/cronograma" element={<Timeline />} />
            <Route path="/implantacao" element={<Implementation />} />
            <Route path="/treinamento" element={<Training />} />
            <Route path="/relatorio" element={<Report />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
