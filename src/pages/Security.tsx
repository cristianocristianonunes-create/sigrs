import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Puzzle, Layers, Rocket, CheckCircle2, Users, Eye, FileText } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const fases = [
  {
    titulo: "Fase Mínima",
    subtitulo: "Validação rápida",
    icon: Puzzle,
    investimento: "R$ 500–800 mil",
    prazo: "60 dias",
    color: "bg-primary/10 text-primary border-primary/20",
    itens: ["Coleta seletiva em área piloto", "Cooperativa de catadores", "Pontos de Entrega Voluntária (PEVs)", "Reciclagem funcionando em 60 dias"],
  },
  {
    titulo: "Fase Intermediária",
    subtitulo: "Expansão estruturada",
    icon: Layers,
    investimento: "+ R$ 1,5 milhão",
    prazo: "90–120 dias",
    color: "bg-success/10 text-success border-success/20",
    itens: ["CTRSU básica implantada", "Compostagem em operação", "Receita com recicláveis e composto", "KPIs monitorados em tempo real"],
  },
  {
    titulo: "Fase Completa",
    subtitulo: "Operação plena",
    icon: Rocket,
    investimento: "+ R$ 2,0 milhões",
    prazo: "6–12 meses",
    color: "bg-primary/10 text-primary border-primary/20",
    itens: ["Tecnologia e IoT integrados", "Energia solar na usina", "Expansão para zona rural", "Sistema em plena capacidade"],
  },
];

const caminhos = [
  {
    titulo: "Licitação Pública",
    desc: "A prefeitura elabora o edital, publica no portal de compras e contrata o vencedor. Município mantém controle total da operação.",
    lei: "Lei nº 14.133/2021",
    prazo: "45–90 dias",
    investimento: "CAPEX total",
    risco: "Médio",
    indicado: "Municípios com recursos disponíveis",
  },
  {
    titulo: "PPP — Parceria Público-Privada",
    desc: "Parceiro privado investe, constrói e opera. Município paga contraprestação mensal vinculada ao desempenho — sem desembolso inicial.",
    lei: "Lei nº 11.079/2004",
    prazo: "6–18 meses",
    investimento: "Diluído (20–30 anos)",
    risco: "Baixo",
    indicado: "Municípios sem CAPEX disponível",
  },
  {
    titulo: "Projeto Piloto",
    desc: "Início com coleta seletiva em 1–2 bairros, PEVs e cooperativa. Gera dados reais para justificar o sistema completo.",
    lei: "Chamamento público",
    prazo: "30–45 dias",
    investimento: "R$ 200–500 mil",
    risco: "Muito baixo",
    indicado: "Municípios que querem começar rápido",
  },
];

const garantias = [
  {
    titulo: "Baixo risco de rejeição pública",
    desc: "Projetos de coleta seletiva têm alta aceitação popular quando bem comunicados — ruas mais limpas, empregos e inclusão social são visíveis rapidamente.",
    icon: Users,
  },
  {
    titulo: "Transparência e rastreabilidade total",
    desc: "Cada tonelada tem origem, peso, tipo e destino documentados. Protege o gestor em auditorias do TCE, Câmara Municipal e prestação de contas à população.",
    icon: Eye,
  },
  {
    titulo: "Conformidade com PNRS",
    desc: "A implantação coloca o município em conformidade com a Lei nº 12.305/2010, habilitando acesso a recursos do PAC Saneamento, FUNASA e BNDES.",
    icon: FileText,
  },
  {
    titulo: "Acompanhamento técnico em todas as fases",
    desc: "Equipe especializada presente do planejamento à operação plena. Suporte presencial nas primeiras semanas, depois remoto contínuo.",
    icon: CheckCircle2,
  },
];

export default function Security() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div {...fade}>
        <div className="flex items-center gap-3 mb-1">
          <Shield className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold">Segurança e Baixo Risco</h1>
        </div>
        <p className="text-muted-foreground text-sm">O SIGRS foi desenhado para minimizar riscos em todas as dimensões — financeiro, operacional e político.</p>
      </motion.div>

      {/* Implantação modular */}
      <motion.div {...fade} transition={{ delay: 0.1 }}>
        <h2 className="text-base font-semibold mb-3">Implantação Modular — Pode Começar Menor</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {fases.map((fase, i) => (
            <motion.div key={fase.titulo} {...fade} transition={{ delay: 0.15 + i * 0.08 }}>
              <Card className={`h-full border ${fase.color}`}>
                <CardContent className="pt-5 pb-4">
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-3 ${fase.color}`}>
                    <fase.icon className="h-5 w-5" />
                  </div>
                  <p className="font-bold text-sm mb-0.5">{fase.titulo}</p>
                  <p className="text-xs text-muted-foreground mb-3">{fase.subtitulo}</p>
                  <div className="flex gap-3 mb-3 text-xs">
                    <span className="font-semibold">{fase.investimento}</span>
                    <span className="text-muted-foreground">· {fase.prazo}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {fase.itens.map(item => (
                      <li key={item} className="text-xs text-muted-foreground flex items-start gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-current mt-1.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Caminhos de contratação */}
      <motion.div {...fade} transition={{ delay: 0.3 }}>
        <h2 className="text-base font-semibold mb-3">Caminhos de Contratação</h2>
        <Card>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Modelo</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Prazo</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Investimento</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Risco</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Indicado para</th>
                </tr>
              </thead>
              <tbody>
                {caminhos.map((c, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/30 transition-colors align-top">
                    <td className="p-3">
                      <p className="font-semibold text-sm">{c.titulo}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.lei}</p>
                    </td>
                    <td className="p-3 text-xs text-muted-foreground">{c.prazo}</td>
                    <td className="p-3 text-xs text-muted-foreground">{c.investimento}</td>
                    <td className="p-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        c.risco === "Muito baixo" ? "bg-success/10 text-success" :
                        c.risco === "Baixo" ? "bg-success/10 text-success" :
                        "bg-amber-500/10 text-amber-600"
                      }`}>{c.risco}</span>
                    </td>
                    <td className="p-3 text-xs text-muted-foreground">{c.indicado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Garantias */}
      <div className="grid sm:grid-cols-2 gap-4">
        {garantias.map((g, i) => (
          <motion.div key={g.titulo} {...fade} transition={{ delay: 0.4 + i * 0.05 }}>
            <Card className="h-full">
              <CardContent className="pt-5 pb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <g.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-semibold text-sm mb-1">{g.titulo}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{g.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
