import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Filter, Recycle, Leaf, Trash2, Users, Building2, Headphones, UserCheck } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const flowSteps = [
  { label: "Coleta", desc: "Porta a porta seletiva", icon: Truck, volume: "80 ton/dia", color: "bg-primary" },
  { label: "Triagem", desc: "Separação mecanizada", icon: Filter, volume: "80 ton/dia", color: "bg-primary" },
  { label: "Processamento", desc: "Reciclagem e compostagem", icon: Recycle, volume: "66 ton/dia", color: "bg-success" },
  { label: "Destinação", desc: "Apenas rejeitos ao aterro", icon: Trash2, volume: "14 ton/dia", color: "bg-muted-foreground" },
];

const roles = [
  { title: "Prefeitura", desc: "Supervisão, fiscalização e apoio institucional", icon: Building2 },
  { title: "Equipe Local", desc: "Operadores treinados para triagem e compostagem", icon: Users },
  { title: "Operadores", desc: "Gestão diária da usina e controle de qualidade", icon: UserCheck },
  { title: "Suporte Técnico", desc: "Acompanhamento contínuo e manutenção", icon: Headphones },
];

export default function Operations() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Operação do Sistema</h1>
        <p className="text-muted-foreground text-sm">"Operação estruturada, com responsabilidades claras e acompanhamento contínuo."</p>
      </motion.div>

      {/* Flow */}
      <motion.div {...fade} transition={{ delay: 0.1 }}>
        <Card>
          <CardHeader><CardTitle className="text-base">Fluxo Operacional</CardTitle></CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-stretch gap-3">
              {flowSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-3 flex-1">
                  <div className="flex-1 rounded-lg border p-4 text-center">
                    <div className={`h-10 w-10 rounded-full ${step.color} flex items-center justify-center mx-auto mb-2`}>
                      <step.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <p className="font-semibold text-sm">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                    <p className="text-xs font-medium mt-1">{step.volume}</p>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Responsibilities */}
      <motion.div {...fade} transition={{ delay: 0.2 }}>
        <h2 className="text-lg font-semibold mb-3">Responsabilidades</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((r, i) => (
            <Card key={r.title} className="h-full">
              <CardContent className="pt-5 pb-4 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <r.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold text-sm">{r.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
