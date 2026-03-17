import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Recycle, TrendingDown, Gauge, DollarSign, BarChart3 } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const kpis = [
  { label: "Taxa de Reciclagem", value: 62, target: 70, unit: "%", icon: Recycle, color: "text-success" },
  { label: "Desvio de Aterro", value: 65, target: 75, unit: "%", icon: TrendingDown, color: "text-success" },
  { label: "Eficiência Operacional", value: 78, target: 85, unit: "%", icon: Gauge, color: "text-primary" },
  { label: "Custo por Tonelada", value: 85, target: 100, unit: "R$/ton", icon: DollarSign, color: "text-foreground", invert: true },
  { label: "Receita Mensal", value: 225, target: 250, unit: "R$ mil", icon: BarChart3, color: "text-success" },
];

export default function KPIs() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Indicadores de Desempenho (KPIs)</h1>
        <p className="text-muted-foreground text-sm">Monitoramento contínuo dos principais indicadores operacionais e financeiros.</p>
      </motion.div>

      <div className="space-y-4">
        {kpis.map((kpi, i) => {
          const pct = kpi.invert ? Math.max(0, 100 - (kpi.value / kpi.target) * 100 + 100) : (kpi.value / kpi.target) * 100;
          return (
            <motion.div key={kpi.label} {...fade} transition={{ delay: 0.1 + i * 0.05 }}>
              <Card>
                <CardContent className="pt-5 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between mb-2">
                        <p className="font-medium text-sm">{kpi.label}</p>
                        <p className={`text-lg font-bold ${kpi.color}`}>{kpi.value} <span className="text-xs font-normal text-muted-foreground">{kpi.unit}</span></p>
                      </div>
                      <Progress value={Math.min(pct, 100)} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">Meta: {kpi.target} {kpi.unit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
