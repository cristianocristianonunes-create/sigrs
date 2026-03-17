import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Recycle, Leaf, Trash2, DollarSign } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const sources = [
  { name: "Recicláveis", value: 1200000, desc: "Alumínio, plástico, papel, vidro, metais", icon: Recycle, color: "text-primary", bg: "bg-primary/10", fill: "#1E40AF" },
  { name: "Composto Orgânico", value: 600000, desc: "Fertilizante orgânico para agricultura local", icon: Leaf, color: "text-success", bg: "bg-success/10", fill: "#10B981" },
  { name: "Economia com Aterro", value: 700000, desc: "Redução de 65% no volume destinado", icon: Trash2, color: "text-foreground", bg: "bg-muted", fill: "#64748B" },
  { name: "Outros Ganhos", value: 200000, desc: "Créditos de carbono, CDR, parcerias", icon: DollarSign, color: "text-primary", bg: "bg-primary/10", fill: "#3B82F6" },
];

const chartData = sources.map(s => ({ name: s.name, valor: s.value, fill: s.fill }));

export default function Revenue() {
  const total = sources.reduce((a, s) => a + s.value, 0);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Fontes de Receita</h1>
        <p className="text-muted-foreground text-sm">Receita total estimada: <span className="font-bold text-success">R$ {(total/1e6).toFixed(1)}M/ano</span></p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {sources.map((s, i) => (
          <motion.div key={s.name} {...fade} transition={{ delay: 0.1 + i * 0.05 }}>
            <Card className="h-full">
              <CardContent className="pt-5 pb-4">
                <div className="flex items-start gap-3">
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${s.bg}`}>
                    <s.icon className={`h-5 w-5 ${s.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{s.name}</p>
                    <p className="text-xs text-muted-foreground mb-2">{s.desc}</p>
                    <p className="text-xl font-bold text-success">R$ {(s.value/1e6).toFixed(1)}M<span className="text-xs font-normal text-muted-foreground">/ano</span></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div {...fade} transition={{ delay: 0.3 }}>
        <Card>
          <CardContent className="pt-5">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 91%)" />
                <XAxis type="number" tickFormatter={(v) => `R$ ${(v/1e6).toFixed(1)}M`} tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={130} />
                <Tooltip formatter={(v: number) => `R$ ${(v/1e3).toFixed(0)} mil`} />
                <Bar dataKey="valor" radius={[0,6,6,0]}>
                  {chartData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
