import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Users, TrendingUp, Eye } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const results = [
  { title: "Operação Iniciada", desc: "Usina funcionando com coleta e triagem ativa", icon: Rocket },
  { title: "Equipe Treinada", desc: "Todos os operadores capacitados e certificados", icon: Users },
  { title: "Primeiros Ganhos", desc: "Receita inicial com venda de recicláveis e composto", icon: TrendingUp },
  { title: "Melhorias Visíveis", desc: "Redução de resíduos em aterro já mensurável", icon: Eye },
];

export default function Results90() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Resultado em 90 Dias</h1>
        <p className="text-muted-foreground text-sm">O que o município pode esperar nos primeiros 3 meses de operação.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {results.map((r, i) => (
          <motion.div key={r.title} {...fade} transition={{ delay: 0.1 + i * 0.05 }}>
            <Card className="h-full border-success/20">
              <CardContent className="pt-5 pb-4 flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                  <r.icon className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{r.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.desc}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <motion.div {...fade} transition={{ delay: 0.3 }}>
        <Card>
          <CardContent className="pt-6 pb-6">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
              {[
                { day: "30 dias", title: "Estrutura operacional montada", items: ["Equipamentos instalados", "Equipe contratada", "Processos definidos"] },
                { day: "60 dias", title: "Operação assistida em andamento", items: ["Coleta seletiva ativa", "Triagem funcionando", "Primeiros lotes processados"] },
                { day: "90 dias", title: "Resultados mensuráveis", items: ["Receita gerada", "KPIs monitorados", "Ajustes implementados"] },
              ].map((phase, i) => (
                <div key={phase.day} className="relative pl-14 pb-8 last:pb-0">
                  <div className="absolute left-3.5 w-5 h-5 rounded-full bg-success flex items-center justify-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success-foreground" />
                  </div>
                  <p className="text-xs font-semibold text-success mb-1">{phase.day}</p>
                  <p className="font-semibold text-sm mb-2">{phase.title}</p>
                  <ul className="space-y-1">
                    {phase.items.map(item => (
                      <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-muted-foreground" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
