import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const phases = [
  { period: "Dias 1–30", title: "Preparação", color: "bg-primary", items: ["Diagnóstico municipal", "Projeto executivo", "Licenciamento", "Aquisição de equipamentos"] },
  { period: "Dias 31–60", title: "Implantação", color: "bg-primary", items: ["Montagem da usina", "Instalação de equipamentos", "Testes operacionais", "Treinamento inicial"] },
  { period: "Dias 61–90", title: "Operação Assistida", color: "bg-success", items: ["Início da coleta seletiva", "Operação supervisionada", "Ajustes de processo", "Primeiros resultados"] },
];

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Cronograma Visual</h1>
        <p className="text-muted-foreground text-sm">Linha do tempo da implantação — do planejamento à operação em 90 dias.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {phases.map((phase, i) => (
          <motion.div key={phase.title} {...fade} transition={{ delay: 0.1 + i * 0.1 }}>
            <Card className="h-full">
              <CardContent className="pt-5 pb-4">
                <div className={`${phase.color} text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3`}>
                  {phase.period}
                </div>
                <h3 className="font-semibold mb-3">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>{item}</span>
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
