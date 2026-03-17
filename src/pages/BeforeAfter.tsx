import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, XCircle, CheckCircle2 } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const rows = [
  { item: "Custo com coleta/destinação", before: "R$ 3,2M/ano", after: "R$ 1,4M/ano", improved: true },
  { item: "Receita com resíduos", before: "R$ 0", after: "R$ 2,7M/ano", improved: true },
  { item: "Taxa de reciclagem", before: "3–5%", after: "≥ 30% (meta Ano 3)", improved: true },
  { item: "Controle operacional", before: "Manual / nenhum", after: "Sistema integrado", improved: true },
  { item: "Destinação em aterro", before: "90–95%", after: "30–35%", improved: true },
  { item: "Emissão de CO₂", before: "Alta", after: "Reduzida em ~60%", improved: true },
  { item: "Geração de empregos", before: "Informal", after: "50–80 formais", improved: true },
  { item: "Vida útil do aterro", before: "Esgotando", after: "Estendida 3–5x", improved: true },
  { item: "Transparência", before: "Baixa", after: "Total via dashboard", improved: true },
  { item: "Educação ambiental", before: "Pontual", after: "Programa contínuo", improved: true },
];

export default function BeforeAfter() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Antes vs Depois</h1>
        <p className="text-muted-foreground text-sm">Comparativo claro de cenários — sem e com o SIGRS.</p>
      </motion.div>

      <motion.div {...fade} transition={{ delay: 0.1 }}>
        <Card>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold text-foreground">Indicador</th>
                  <th className="text-center p-4 font-semibold text-loss">❌ Situação Atual</th>
                  <th className="text-center p-4 w-12"></th>
                  <th className="text-center p-4 font-semibold text-success">✅ Com SIGRS</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.03 }}
                    className="border-b last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="p-4 font-medium">{row.item}</td>
                    <td className="p-4 text-center text-loss">{row.before}</td>
                    <td className="p-4 text-center"><ArrowRight className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center text-success font-medium">{row.after}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
