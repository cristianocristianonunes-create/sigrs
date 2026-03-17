import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { TrendingDown, TrendingUp, Leaf, Users, Trash2, DollarSign } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { motion } from "framer-motion";

const barData = [
  { name: "Custo Atual", valor: 3200000, fill: "hsl(0 84% 60%)" },
  { name: "Economia", valor: 1800000, fill: "hsl(224 73% 40%)" },
  { name: "Receita Gerada", valor: 2700000, fill: "hsl(160 84% 39%)" },
];

const wasteData = [
  { name: "Orgânicos", value: 51, color: "#10B981" },
  { name: "Recicláveis", value: 32, color: "#1E40AF" },
  { name: "Rejeitos", value: 17, color: "#94A3B8" },
];

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } };

const metrics = [
  { label: "Custo Atual Anual", value: 3200000, prefix: "R$ ", icon: Trash2, variant: "loss" as const },
  { label: "Economia Potencial", value: 1800000, prefix: "R$ ", icon: TrendingDown, variant: "success" as const },
  { label: "Receita Potencial", value: 2700000, prefix: "R$ ", icon: DollarSign, variant: "success" as const },
  { label: "Redução de Aterro", value: 65, suffix: "%", icon: TrendingUp, variant: "success" as const },
  { label: "CO₂ Evitado", value: 650, suffix: " ton/ano", icon: Leaf, variant: "success" as const },
  { label: "Empregos Gerados", value: 65, icon: Users, variant: "primary" as const },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Hero */}
      <motion.div {...fade} className="gradient-hero rounded-xl p-8 text-primary-foreground">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-80 bg-primary-foreground/15 px-2 py-0.5 rounded">Simulação</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-1">Dashboard Executivo (Simulação)</h1>
        <p className="text-sm font-medium opacity-80 mb-4">Visão estratégica para análise e tomada de decisão do município</p>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-primary-foreground/10 rounded-lg p-5 backdrop-blur-sm">
            <p className="text-sm opacity-80">Hoje o município perde:</p>
            <p className="text-3xl font-bold text-loss-foreground mt-1">
              <AnimatedNumber value={3200000} prefix="R$ " suffix="/ano" />
            </p>
          </div>
          <div className="flex-1 bg-primary-foreground/10 rounded-lg p-5 backdrop-blur-sm">
            <p className="text-sm opacity-80">Com o SIGRS pode gerar:</p>
            <p className="text-3xl font-bold mt-1" style={{ color: "#34D399" }}>
              <AnimatedNumber value={2700000} prefix="R$ " suffix="/ano" />
            </p>
          </div>
        </div>
      </motion.div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {metrics.map((m, i) => (
          <motion.div key={m.label} {...fade} transition={{ delay: i * 0.05 }}>
            <Card className="h-full">
              <CardContent className="pt-4 pb-3 px-4">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center mb-2 ${
                  m.variant === "loss" ? "bg-loss/10" : m.variant === "success" ? "bg-success/10" : "bg-primary/10"
                }`}>
                  <m.icon className={`h-4 w-4 ${
                    m.variant === "loss" ? "text-loss" : m.variant === "success" ? "text-success" : "text-primary"
                  }`} />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
                <p className={`text-lg font-bold ${
                  m.variant === "loss" ? "text-loss" : m.variant === "success" ? "text-success" : "text-foreground"
                }`}>
                  <AnimatedNumber value={m.value} prefix={m.prefix} suffix={m.suffix} />
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div {...fade} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader><CardTitle className="text-base">Custo vs Economia vs Receita (R$/ano)</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 91%)" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v/1e6).toFixed(1)}M`} />
                  <Tooltip formatter={(v: number) => `R$ ${(v/1e6).toFixed(2)}M`} />
                  <Bar dataKey="valor" radius={[6,6,0,0]}>
                    {barData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div {...fade} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader><CardTitle className="text-base">Composição dos Resíduos</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie data={wasteData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                    {wasteData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
