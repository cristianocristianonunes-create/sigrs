import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

const comparativo = [
  {
    criterio: "Modelo de receita",
    tradicional: "Custo puro — sem retorno financeiro",
    sigrs: "Gera receita com recicláveis, composto e créditos",
  },
  {
    criterio: "Dados e controle",
    tradicional: "Nenhum — gestão no escuro",
    sigrs: "Dashboard em tempo real com KPIs e alertas",
  },
  {
    criterio: "Catadores",
    tradicional: "Excluídos, trabalho informal e sem proteção",
    sigrs: "Formalizados em cooperativa com renda garantida",
  },
  {
    criterio: "Destino dos resíduos",
    tradicional: "90–95% vai ao aterro sanitário",
    sigrs: "Até 70% desviado — apenas rejeitos vão ao aterro",
  },
  {
    criterio: "Transparência",
    tradicional: "Sem prestação de contas ao cidadão",
    sigrs: "Portal público com relatórios mensais abertos",
  },
  {
    criterio: "Conformidade PNRS",
    tradicional: "Parcial — riscos de sanção crescentes",
    sigrs: "Total — município habilitado para financiamento federal",
  },
  {
    criterio: "Educação ambiental",
    tradicional: "Pontual ou inexistente",
    sigrs: "Programa contínuo em escolas e comunidade",
  },
  {
    criterio: "Escalabilidade",
    tradicional: "Modelo fechado, difícil de expandir",
    sigrs: "Modular — começa pequeno e expande com demanda",
  },
];

export function LandingDiferencial() {
  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Diferencial</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Modelo tradicional vs. SIGRS
          </h2>
          <p className="text-muted-foreground text-lg">
            Não é apenas uma mudança operacional. É uma transformação na lógica de como o município trata seus resíduos — de custo para ativo estratégico.
          </p>
        </motion.div>

        <motion.div {...fade} transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-muted/60 border-b border-border">
            <div className="p-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Critério</div>
            <div className="p-4 text-xs font-semibold uppercase tracking-wider text-loss border-l border-border flex items-center gap-1.5">
              <XCircle className="h-3.5 w-3.5" /> Modelo Tradicional
            </div>
            <div className="p-4 text-xs font-semibold uppercase tracking-wider text-success border-l border-border flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" /> Com o SIGRS
            </div>
          </div>
          {comparativo.map((row, i) => (
            <motion.div
              key={row.criterio}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 + i * 0.04 }}
              className="grid grid-cols-3 border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
            >
              <div className="p-4 text-sm font-medium text-foreground">{row.criterio}</div>
              <div className="p-4 text-sm text-muted-foreground border-l border-border">{row.tradicional}</div>
              <div className="p-4 text-sm text-success font-medium border-l border-border">{row.sigrs}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
