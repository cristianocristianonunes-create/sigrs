import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, Factory, DollarSign, Trash2 } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

function calc(pop: number) {
  const factor = pop / 30000;
  return {
    capex: 4700000 * factor,
    opexMes: 173000 * factor,
    receitaAno: 2700000 * factor,
    paybackAnos: +(4700000 * factor / (2700000 * factor - 173000 * 12 * factor)).toFixed(1),
    reducaoAterro: 65,
    tonDia: +(pop * 0.8 / 1000).toFixed(1),
  };
}

export default function Simulator() {
  const [pop, setPop] = useState(30000);
  const data = useMemo(() => calc(pop), [pop]);

  const results = [
    { label: "CAPEX (Investimento)", value: data.capex, prefix: "R$ ", icon: Factory, color: "text-primary" },
    { label: "OPEX Mensal", value: data.opexMes, prefix: "R$ ", icon: DollarSign, color: "text-foreground" },
    { label: "Receita Anual", value: data.receitaAno, prefix: "R$ ", icon: TrendingUp, color: "text-success" },
    { label: "Payback (anos)", value: data.paybackAnos, prefix: "", suffix: " anos", icon: Clock, color: "text-primary", raw: true },
    { label: "Redução de Aterro", value: data.reducaoAterro, suffix: "%", icon: Trash2, color: "text-success" },
    { label: "Capacidade", value: data.tonDia, suffix: " ton/dia", icon: Factory, color: "text-foreground", raw: true },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Simulador de Município</h1>
        <p className="text-muted-foreground text-sm">Ajuste a população e veja os resultados projetados em tempo real.</p>
      </motion.div>

      <motion.div {...fade} transition={{ delay: 0.1 }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Calculator className="h-5 w-5 text-primary" /> População do Município
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">5.000</span>
              <span className="text-2xl font-bold text-primary">{pop.toLocaleString("pt-BR")} habitantes</span>
              <span className="text-sm text-muted-foreground">200.000</span>
            </div>
            <Slider
              value={[pop]}
              onValueChange={([v]) => setPop(v)}
              min={5000}
              max={200000}
              step={5000}
              className="w-full"
            />
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((r, i) => (
          <motion.div key={r.label} {...fade} transition={{ delay: 0.15 + i * 0.05 }}>
            <Card>
              <CardContent className="pt-5 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <r.icon className={`h-4 w-4 ${r.color}`} />
                  <p className="text-sm text-muted-foreground">{r.label}</p>
                </div>
                <p className={`text-2xl font-bold ${r.color}`}>
                  {r.raw ? `${r.prefix || ""}${r.value}${r.suffix || ""}` :
                    <AnimatedNumber value={r.value} prefix={r.prefix} suffix={r.suffix} />
                  }
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div {...fade} transition={{ delay: 0.4 }}>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-5 pb-4">
            <p className="text-sm font-medium text-primary mb-1">📍 Simulação baseada em município real</p>
            <p className="text-xs text-muted-foreground">
              Os dados apresentados são projeções baseadas em parâmetros reais de municípios com características semelhantes.
              Não representam implantação existente. Valores sujeitos a estudo de viabilidade específico.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
