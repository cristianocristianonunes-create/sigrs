import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Puzzle, MapPin, Headphones, Monitor } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const items = [
  { title: "Implantação Modular", desc: "O sistema é implantado em fases, reduzindo riscos e permitindo ajustes graduais conforme a realidade local.", icon: Puzzle },
  { title: "Adaptação ao Município", desc: "Cada projeto é dimensionado conforme população, infraestrutura existente e características regionais.", icon: MapPin },
  { title: "Acompanhamento Técnico", desc: "Equipe especializada acompanha todas as fases, desde o planejamento até a operação plena.", icon: Headphones },
  { title: "Controle via Sistema", desc: "Dashboard em tempo real para monitorar indicadores, volumes e performance operacional.", icon: Monitor },
];

export default function Security() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div {...fade}>
        <div className="flex items-center gap-3 mb-1">
          <Shield className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold">Segurança e Baixo Risco</h1>
        </div>
        <p className="text-muted-foreground text-sm">O modelo foi desenhado para minimizar riscos e garantir resultados desde o início.</p>
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
