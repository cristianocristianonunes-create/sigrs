import { motion } from "framer-motion";
import { FileText, Handshake, Rocket, CheckCircle2 } from "lucide-react";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

const modelos = [
  {
    icone: FileText,
    titulo: "Licitação Pública",
    subtitulo: "Mais comum",
    cor: "border-primary/20 bg-primary/5",
    iconCor: "bg-primary/10 text-primary",
    prazo: "45–90 dias",
    investimento: "CAPEX total",
    risco: "Médio",
    controle: "Total",
    lei: "Lei nº 14.133/2021",
    desc: "A prefeitura elabora o edital, publica no portal de compras e contrata o vencedor. Município mantém controle total da operação e da equipe.",
    para: "Municípios com recursos disponíveis ou financiamento já aprovado.",
    passos: ["Elaborar Termo de Referência", "Publicar edital no portal de compras", "Analisar propostas e homologar", "Assinar contrato e iniciar implantação"],
  },
  {
    icone: Handshake,
    titulo: "PPP",
    subtitulo: "Parceria Público-Privada",
    cor: "border-emerald-500/30 bg-emerald-500/5 ring-1 ring-emerald-500/15",
    iconCor: "bg-emerald-500/10 text-success",
    prazo: "6–18 meses",
    investimento: "Diluído (20–30 anos)",
    risco: "Baixo",
    controle: "Regulatório",
    lei: "Lei nº 11.079/2004",
    desc: "Parceiro privado investe, constrói e opera. O município paga uma contraprestação mensal vinculada ao desempenho — sem necessidade de CAPEX inicial.",
    para: "Municípios sem caixa disponível que querem transferir o risco de investimento.",
    passos: ["Elaborar estudo de viabilidade (EVTEA)", "Publicar Manifestação de Interesse Privado", "Estruturar contrato de PPP", "Parceiro investe e opera"],
  },
  {
    icone: Rocket,
    titulo: "Projeto Piloto",
    subtitulo: "Início rápido",
    cor: "border-white/10 bg-white/3",
    iconCor: "bg-muted text-muted-foreground",
    prazo: "30–45 dias",
    investimento: "R$ 200–500 mil",
    risco: "Muito baixo",
    controle: "Total",
    lei: "Chamamento público",
    desc: "Começa com coleta seletiva em 1–2 bairros, PEVs e cooperativa de catadores. Gera dados reais para justificar o sistema completo.",
    para: "Municípios indecisos que querem ver resultados antes de comprometer recursos.",
    passos: ["Chamamento público para cooperativa", "Compra de equipamentos por pregão", "Início da coleta em área piloto", "Apresentação dos resultados ao gestor"],
  },
];

export function LandingContratacao() {
  return (
    <section id="contratacao" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Como contratar</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Três caminhos para implantar
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada município tem uma realidade diferente. O modelo de contratação é escolhido conforme a capacidade financeira, o prazo desejado e o perfil de risco da gestão.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {modelos.map((m, i) => (
            <motion.div key={m.titulo} {...fade} transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border p-7 ${m.cor}`}
            >
              <div className={`h-11 w-11 rounded-xl flex items-center justify-center mb-4 ${m.iconCor}`}>
                <m.icone className="h-5 w-5" />
              </div>
              <div className="mb-4">
                <p className="font-bold text-foreground text-lg">{m.titulo}</p>
                <p className="text-sm text-muted-foreground">{m.subtitulo}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { k: "Prazo", v: m.prazo },
                  { k: "Risco", v: m.risco },
                  { k: "Investimento", v: m.investimento },
                  { k: "Controle", v: m.controle },
                ].map(({ k, v }) => (
                  <div key={k} className="bg-background/50 rounded-lg px-3 py-2">
                    <p className="text-xs text-muted-foreground">{k}</p>
                    <p className="text-xs font-semibold text-foreground">{v}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.desc}</p>
              <p className="text-xs text-muted-foreground/70 italic mb-4">{m.para}</p>

              <ul className="space-y-2">
                {m.passos.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-muted-foreground/50 mt-4 pt-4 border-t border-border">{m.lei}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade} transition={{ delay: 0.4 }} className="text-center">
          <p className="text-muted-foreground text-sm mb-4">Não sabe qual modelo se aplica ao seu caso?</p>
          <a href="#contato-form" className="inline-flex items-center gap-2 bg-success text-success-foreground font-semibold px-6 py-3 rounded-xl hover:bg-success/90 transition-colors text-sm">
            Fale com nossa equipe técnica
          </a>
        </motion.div>
      </div>
    </section>
  );
}
