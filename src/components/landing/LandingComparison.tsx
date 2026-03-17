import { motion } from "framer-motion";
import { ArrowRight, XCircle, CheckCircle2 } from "lucide-react";

const rows = [
  { item: "Custo com coleta e destinação", before: "R$ 3,2M/ano", after: "R$ 1,4M/ano" },
  { item: "Receita com resíduos", before: "R$ 0", after: "R$ 2,7M/ano" },
  { item: "Taxa de reciclagem", before: "3–5%", after: "55–65%" },
  { item: "Controle operacional", before: "Manual / nenhum", after: "Sistema integrado" },
  { item: "Destinação em aterro", before: "90–95%", after: "30–35%" },
  { item: "Emissão de CO₂", before: "Alta", after: "Reduzida ~60%" },
  { item: "Empregos formais", before: "Poucos / informais", after: "50–80 diretos" },
  { item: "Transparência", before: "Baixa", after: "Total via dashboard" },
  { item: "Conformidade PNRS", before: "Parcial", after: "Completa" },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingComparison() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Comparativo</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Antes vs Depois do SIGRS
          </h2>
        </motion.div>

        <motion.div {...fade} transition={{ delay: 0.1 }} className="bg-card rounded-xl border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="text-left p-4 font-semibold">Indicador</th>
                  <th className="text-center p-4 font-semibold text-loss">Situação Atual</th>
                  <th className="text-center p-4 w-10"></th>
                  <th className="text-center p-4 font-semibold text-success">Com SIGRS</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium text-foreground">{r.item}</td>
                    <td className="p-4 text-center text-loss">{r.before}</td>
                    <td className="p-4 text-center"><ArrowRight className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center text-success font-medium">{r.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
