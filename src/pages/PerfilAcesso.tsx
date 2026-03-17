import { useNavigate } from "react-router-dom";
import { usePerfil } from "@/contexts/PerfilContext";
import { LayoutDashboard, Activity, Recycle } from "lucide-react";

export default function PerfilAcesso() {
  const { setPerfil } = usePerfil();
  const navigate = useNavigate();

  const escolher = (perfil: "executivo" | "operacional") => {
    setPerfil(perfil);
    if (perfil === "executivo") navigate("/dashboard");
    else navigate("/operacional");
  };

  return (
    <div className="min-h-screen bg-[#0f1b2d] flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="h-10 w-10 rounded-xl bg-green-500 flex items-center justify-center">
          <Recycle className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-white font-bold text-xl leading-tight">SIGRS</h1>
          <p className="text-white/50 text-xs">Gestão de Resíduos Sólidos</p>
        </div>
      </div>

      <p className="text-white/60 text-sm mb-10 uppercase tracking-widest">
        Selecione seu perfil de acesso
      </p>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
        {/* Card Executivo */}
        <button
          onClick={() => escolher("executivo")}
          className="flex-1 bg-[#1a2d45] hover:bg-[#1e3552] border border-white/10 hover:border-blue-500/60 rounded-2xl p-8 text-left transition-all duration-200 group"
        >
          <div className="h-12 w-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-5 group-hover:bg-blue-600/30 transition-colors">
            <LayoutDashboard className="h-6 w-6 text-blue-400" />
          </div>
          <h2 className="text-white font-semibold text-lg mb-2">Visão Executiva</h2>
          <p className="text-white/50 text-sm leading-relaxed">
            Simulação de cenários, análise estratégica e tomada de decisão para gestores, secretários e prefeitos.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Simulador", "Dashboard Executivo", "Infraestrutura", "Relatório"].map((tag) => (
              <span key={tag} className="text-xs bg-blue-600/10 text-blue-300 px-2.5 py-1 rounded-full border border-blue-500/20">
                {tag}
              </span>
            ))}
          </div>
        </button>

        {/* Card Operacional */}
        <button
          onClick={() => escolher("operacional")}
          className="flex-1 bg-[#1a2d45] hover:bg-[#1e3552] border border-white/10 hover:border-green-500/60 rounded-2xl p-8 text-left transition-all duration-200 group"
        >
          <div className="h-12 w-12 rounded-xl bg-green-600/20 flex items-center justify-center mb-5 group-hover:bg-green-600/30 transition-colors">
            <Activity className="h-6 w-6 text-green-400" />
          </div>
          <h2 className="text-white font-semibold text-lg mb-2">Visão Operacional</h2>
          <p className="text-white/50 text-sm leading-relaxed">
            Monitoramento diário da operação, KPIs, alertas e controle de equipes para coordenadores.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Dashboard Operacional", "Operação", "KPIs", "Treinamento"].map((tag) => (
              <span key={tag} className="text-xs bg-green-600/10 text-green-300 px-2.5 py-1 rounded-full border border-green-500/20">
                {tag}
              </span>
            ))}
          </div>
        </button>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-10 text-white/30 hover:text-white/60 text-sm transition-colors"
      >
        Voltar para o site
      </button>
    </div>
  );
}
