import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Factory, Recycle, Leaf, Trash2, Package } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const sectors = [
  { name: "Recepção e Pesagem", desc: "Controle de entrada com balança rodoviária", capacity: "80 ton/dia", capex: "R$ 350 mil", icon: Package, color: "bg-primary/10 text-primary" },
  { name: "Triagem Mecanizada", desc: "Separação automatizada por tipo de material", capacity: "60 ton/dia", capex: "R$ 1,2M", icon: Factory, color: "bg-primary/10 text-primary" },
  { name: "Recicláveis", desc: "Prensagem, enfardamento e armazenamento", capacity: "20 ton/dia", capex: "R$ 800 mil", icon: Recycle, color: "bg-success/10 text-success" },
  { name: "Compostagem", desc: "Pátio de compostagem orgânica monitorado", capacity: "35 ton/dia", capex: "R$ 950 mil", icon: Leaf, color: "bg-success/10 text-success" },
  { name: "Rejeitos", desc: "Apenas 17% destinado a aterro sanitário", capacity: "15 ton/dia", capex: "R$ 400 mil", icon: Trash2, color: "bg-muted text-muted-foreground" },
];

export default function Infrastructure() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Infraestrutura e Usina</h1>
        <p className="text-muted-foreground text-sm">"Uma estrutura física que transforma resíduos em valor."</p>
      </motion.div>

      <motion.div {...fade} transition={{ delay: 0.1 }}>
        <Card className="gradient-hero text-primary-foreground">
          <CardContent className="pt-6 pb-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold">80</p>
                <p className="text-sm opacity-80">ton/dia capacidade</p>
              </div>
              <div>
                <p className="text-3xl font-bold">R$ 4,7M</p>
                <p className="text-sm opacity-80">CAPEX total</p>
              </div>
              <div>
                <p className="text-3xl font-bold">5</p>
                <p className="text-sm opacity-80">setores operacionais</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sectors.map((s, i) => (
          <motion.div key={s.name} {...fade} transition={{ delay: 0.15 + i * 0.05 }}>
            <Card className="h-full">
              <CardContent className="pt-5 pb-4">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-3 ${s.color}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-1">{s.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{s.desc}</p>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Capacidade: <span className="font-medium text-foreground">{s.capacity}</span></span>
                  <span className="text-muted-foreground">CAPEX: <span className="font-medium text-foreground">{s.capex}</span></span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
