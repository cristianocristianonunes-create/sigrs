import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, DollarSign, Leaf, Users, CheckCircle2, Download } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export default function Report() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Relatório Executivo</h1>
        <p className="text-muted-foreground text-sm">Resumo completo do projeto para tomada de decisão.</p>
      </motion.div>

      <motion.div {...fade} transition={{ delay: 0.1 }}>
        <Card className="gradient-hero text-primary-foreground">
          <CardContent className="pt-8 pb-8 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-xl font-bold mb-2">Gerar proposta para minha cidade</h2>
            <p className="text-sm opacity-80 mb-6 max-w-md mx-auto">
              Receba um relatório executivo personalizado com análise financeira, impacto ambiental e social, e estudo de viabilidade.
            </p>
            <Button size="lg" variant="secondary" className="font-semibold">
              <Download className="h-4 w-4 mr-2" /> Gerar Relatório Executivo
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { title: "Resumo Financeiro", icon: DollarSign, items: ["CAPEX: R$ 4,7M", "OPEX: R$ 173 mil/mês", "Receita: R$ 2,7M/ano", "Payback: ~3,5 anos"] },
          { title: "Impacto Ambiental", icon: Leaf, items: ["65% redução de aterro", "1.200 ton CO₂ evitadas/ano", "62% taxa de reciclagem", "Vida útil do aterro 3–5x maior"] },
          { title: "Impacto Social", icon: Users, items: ["85+ empregos diretos", "Capacitação profissional", "Educação ambiental contínua", "Melhoria da saúde pública"] },
          { title: "Viabilidade", icon: CheckCircle2, items: ["Modelo comprovado", "Implantação em 90 dias", "Suporte completo", "Risco controlado"] },
        ].map((section, i) => (
          <motion.div key={section.title} {...fade} transition={{ delay: 0.2 + i * 0.05 }}>
            <Card className="h-full">
              <CardContent className="pt-5 pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <section.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{section.title}</p>
                </div>
                <ul className="space-y-1.5">
                  {section.items.map(item => (
                    <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
