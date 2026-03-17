import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const phases = [
  { num: 1, title: "Preparação", desc: "Diagnóstico, planejamento e mobilização de recursos", items: ["Levantamento de dados municipais", "Projeto executivo personalizado", "Definição de equipe local", "Licenciamento ambiental"] },
  { num: 2, title: "Capacitação", desc: "Treinamento completo de todas as equipes envolvidas", items: ["Formação de operadores de triagem", "Capacitação de gestores", "Treinamento de educadores ambientais", "Certificação da equipe"] },
  { num: 3, title: "Operação Assistida", desc: "Início da operação com acompanhamento técnico", items: ["Operação supervisionada da usina", "Ajustes de processo em tempo real", "Monitoramento de indicadores", "Suporte técnico presencial"] },
  { num: 4, title: "Autonomia", desc: "Município opera com independência e suporte remoto", items: ["Operação autônoma da equipe", "Dashboard de controle ativo", "Suporte remoto contínuo", "Expansão e otimização"] },
];

export default function Implementation() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Implantação e Capacitação</h1>
        <p className="text-muted-foreground text-sm">Processo estruturado em 4 fases para garantir sucesso na implantação.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {phases.map((phase, i) => (
          <motion.div key={phase.num} {...fade} transition={{ delay: 0.1 + i * 0.08 }}>
            <Card className="h-full">
              <CardContent className="pt-5 pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-full gradient-hero flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                    {phase.num}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Fase {phase.num} — {phase.title}</p>
                    <p className="text-xs text-muted-foreground">{phase.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-11">
                  {phase.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0 mt-0.5" />
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
