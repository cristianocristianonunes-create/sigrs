import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import {
  Trash2, Truck, DollarSign, TrendingUp, AlertTriangle,
  ArrowRight, Recycle, Leaf, Factory, Users, FileText,
  GraduationCap, BarChart3, Activity
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer
} from "recharts";
import { DemoTooltip } from "@/components/DemoTooltip";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } };

const dailyCards = [
  { label: "Coletados Hoje", value: "12,4 ton", icon: Trash2, color: "bg-primary/10 text-primary", demo: { origin: "Balança de pesagem na coleta", type: "automático" as const, responsible: "Sistema de pesagem" } },
  { label: "Coletas Realizadas", value: "18", icon: Truck, color: "bg-primary/10 text-primary", demo: { origin: "Registro de viagens dos caminhões", type: "automático" as const, responsible: "GPS dos veículos" } },
  { label: "Economia do Mês", value: "R$ 148mil", icon: DollarSign, color: "bg-success/10 text-success", demo: { origin: "Cálculo: custo anterior − custo atual", type: "automático" as const, responsible: "Módulo financeiro" } },
  { label: "Receita do Mês", value: "R$ 225mil", icon: TrendingUp, color: "bg-success/10 text-success", demo: { origin: "Venda de recicláveis + créditos carbono", type: "integrado" as const, responsible: "Setor comercial" } },
  { label: "Alertas Ativos", value: "3", icon: AlertTriangle, color: "bg-loss/10 text-loss", demo: { origin: "Monitoramento de eventos operacionais", type: "automático" as const, responsible: "Sistema de alertas" } },
];

const alerts = [
  { msg: "Coleta atrasada — Setor Norte (prevista 07h, sem registro)", type: "critical" },
  { msg: "Baixa eficiência na triagem — turno B abaixo de 60%", type: "warning" },
  { msg: "Excesso de rejeito — lote #247 acima do limite aceitável", type: "warning" },
];

const flowSteps = [
  { label: "Coleta", tons: "12,4", efficiency: 95, icon: Truck },
  { label: "Triagem", tons: "11,8", efficiency: 78, icon: Recycle },
  { label: "Compostagem", tons: "6,1", efficiency: 82, icon: Leaf },
  { label: "Rejeitos", tons: "2,3", efficiency: null, icon: Trash2 },
];

const finData = [
  { mes: "Jan", economia: 120, receita: 180, resultado: 300 },
  { mes: "Fev", economia: 135, receita: 195, resultado: 330 },
  { mes: "Mar", economia: 148, receita: 225, resultado: 373 },
];

const kpis = [
  { label: "Taxa de Reciclagem", value: 62, target: 70, unit: "%", demo: { origin: "Peso reciclado / peso total coletado", type: "automático" as const, responsible: "Balança + sistema" } },
  { label: "Desvio de Aterro", value: 65, target: 75, unit: "%", demo: { origin: "Total desviado / total coletado", type: "automático" as const, responsible: "Módulo operacional" } },
  { label: "Custo/Tonelada", value: 85, target: 100, unit: "R$", demo: { origin: "Custo operacional / toneladas processadas", type: "integrado" as const, responsible: "Financeiro + operação" } },
  { label: "Eficiência Triagem", value: 78, target: 85, unit: "%", demo: { origin: "Aproveitamento da triagem por turno", type: "manual" as const, responsible: "Supervisor de triagem" } },
];

const plantStatus = { capacity: 72, processed: "248 ton/sem", status: "Operando normalmente" };
const team = { trained: 82, modules: 6, completed: 5 };

export default function DashboardOperacional() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Hero */}
      <motion.div {...fade} className="bg-success/10 border border-success/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-1">
          <Activity className="h-5 w-5 text-success" />
          <span className="text-xs font-semibold uppercase tracking-wider text-success">Operação Real</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Operacional</h1>
        <p className="text-sm text-muted-foreground">Painel de controle diário da gestão municipal de resíduos</p>
      </motion.div>

      {/* Daily Cards */}
      <DemoTooltip origin="Dados coletados em tempo real via sensores e GPS" type="automático" responsible="Infraestrutura IoT">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {dailyCards.map((c, i) => (
            <motion.div key={c.label} {...fade} transition={{ delay: i * 0.05 }}>
              <Card className="h-full">
                <CardContent className="pt-4 pb-3 px-4">
                  <div className={`h-9 w-9 rounded-lg flex items-center justify-center mb-2 ${c.color.split(" ")[0]}`}>
                    <c.icon className={`h-4 w-4 ${c.color.split(" ")[1]}`} />
                  </div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-lg font-bold text-foreground">{c.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </DemoTooltip>

      {/* Alerts */}
      <motion.div {...fade} transition={{ delay: 0.15 }}>
        <DemoTooltip origin="Gatilhos automáticos baseados em regras operacionais" type="automático" responsible="Motor de regras do sistema">
          <Card className="border-loss/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-loss" />
                Alertas Operacionais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {alerts.map((a, i) => (
                <div key={i} className={`flex items-start gap-3 rounded-lg p-3 text-sm ${
                  a.type === "critical" ? "bg-loss/10 text-loss" : "bg-amber-500/10 text-amber-700"
                }`}>
                  <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{a.msg}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </DemoTooltip>
      </motion.div>

      {/* Operational Flow */}
      <motion.div {...fade} transition={{ delay: 0.2 }}>
        <DemoTooltip origin="Fluxo integrado: coleta → triagem → destinação" type="integrado" responsible="Todos os setores operacionais">
          <Card>
            <CardHeader><CardTitle className="text-base">Fluxo Operacional — Hoje</CardTitle></CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-stretch gap-3">
                {flowSteps.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-3 flex-1">
                    <div className="flex-1 rounded-lg border p-4 text-center">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                        i < 3 ? "bg-success" : "bg-muted-foreground"
                      }`}>
                        <s.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <p className="font-semibold text-sm">{s.label}</p>
                      <p className="text-lg font-bold text-foreground">{s.tons} ton</p>
                      {s.efficiency !== null && (
                        <p className="text-xs text-muted-foreground">Eficiência: {s.efficiency}%</p>
                      )}
                    </div>
                    {i < flowSteps.length - 1 && (
                      <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </DemoTooltip>
      </motion.div>

      {/* Financial + KPIs */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div {...fade} transition={{ delay: 0.25 }}>
          <DemoTooltip origin="Consolidação mensal de economia e receita" type="integrado" responsible="Módulo financeiro + comercial">
            <Card className="h-full">
              <CardHeader><CardTitle className="text-base">Resultado Financeiro (R$ mil)</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={finData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 91%)" />
                    <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="economia" name="Economia" fill="hsl(224 73% 40%)" radius={[4,4,0,0]} />
                    <Bar dataKey="receita" name="Receita" fill="hsl(160 84% 39%)" radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </DemoTooltip>
        </motion.div>

        <motion.div {...fade} transition={{ delay: 0.3 }}>
          <DemoTooltip origin="Indicadores calculados a partir dos dados operacionais" type="automático" responsible="Sistema de KPIs">
            <Card className="h-full">
              <CardHeader><CardTitle className="text-base">Indicadores (KPIs)</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {kpis.map((k) => {
                  const pct = (k.value / k.target) * 100;
                  return (
                    <div key={k.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{k.label}</span>
                        <span className="font-semibold">{k.value}{k.unit} <span className="text-xs font-normal text-muted-foreground">/ {k.target}{k.unit}</span></span>
                      </div>
                      <Progress value={Math.min(pct, 100)} className="h-2" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </DemoTooltip>
        </motion.div>
      </div>

      {/* Plant Status + Team */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div {...fade} transition={{ delay: 0.35 }}>
          <DemoTooltip origin="Dados da usina de processamento" type="manual" responsible="Gerente da usina">
            <Card>
              <CardHeader><CardTitle className="text-base flex items-center gap-2"><Factory className="h-4 w-4" /> Status da Usina</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Capacidade Utilizada</span>
                    <span className="font-semibold">{plantStatus.capacity}%</span>
                  </div>
                  <Progress value={plantStatus.capacity} className="h-3" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Volume Processado</span>
                  <span className="font-semibold">{plantStatus.processed}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-semibold text-success">{plantStatus.status}</span>
                </div>
              </CardContent>
            </Card>
          </DemoTooltip>
        </motion.div>

        <motion.div {...fade} transition={{ delay: 0.4 }}>
          <DemoTooltip origin="Controle de treinamento e capacitação" type="manual" responsible="Coordenador de RH">
            <Card>
              <CardHeader><CardTitle className="text-base flex items-center gap-2"><Users className="h-4 w-4" /> Equipe</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Equipe Treinada</span>
                    <span className="font-semibold">{team.trained}%</span>
                  </div>
                  <Progress value={team.trained} className="h-3" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Módulos Concluídos</span>
                  <span className="font-semibold">{team.completed} de {team.modules}</span>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progresso Capacitação</span>
                    <span className="font-semibold">{Math.round((team.completed / team.modules) * 100)}%</span>
                  </div>
                  <Progress value={(team.completed / team.modules) * 100} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </DemoTooltip>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div {...fade} transition={{ delay: 0.45 }}>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => navigate("/relatorio")} className="gap-2">
            <FileText className="h-4 w-4" /> Gerar Relatório
          </Button>
          <Button variant="outline" onClick={() => navigate("/treinamento")} className="gap-2">
            <GraduationCap className="h-4 w-4" /> Acessar Treinamento
          </Button>
          <Button variant="outline" onClick={() => navigate("/kpis")} className="gap-2">
            <BarChart3 className="h-4 w-4" /> Ver Detalhes
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
