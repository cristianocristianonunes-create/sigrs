import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Monitor, Settings, Headphones, BarChart3 } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export default function Control() {
  const items = [
    { title: "Monitoramento em Tempo Real", desc: "Dashboard com dados de volumes processados, eficiência e receita, atualizado diariamente.", icon: Monitor },
    { title: "Ajustes Contínuos", desc: "Análise semanal de indicadores com recomendações de otimização baseadas em dados.", icon: Settings },
    { title: "Suporte Dedicado", desc: "Canal direto com equipe técnica para resolução de questões operacionais.", icon: Headphones },
    { title: "Relatórios Automáticos", desc: "Geração de relatórios mensais com indicadores de desempenho e financeiros.", icon: BarChart3 },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Controle e Ajustes</h1>
        <p className="text-muted-foreground text-sm">Monitoramento contínuo garante eficiência máxima da operação.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div key={item.title} {...fade} transition={{ delay: 0.1 + i * 0.05 }}>
            <Card className="h-full">
              <CardContent className="pt-5 pb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
