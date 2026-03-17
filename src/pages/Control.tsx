import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Monitor, Settings, Headphones, BarChart3,
  CheckCircle2, AlertTriangle, Clock, TrendingUp,
} from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const rotina = [
  { turno: "06h–07h", atividade: "Pesagem de entrada e abertura da usina", responsavel: "Operador de balança", status: "ok" },
  { turno: "07h–12h", atividade: "Coleta seletiva nos bairros (rota matutina)", responsavel: "Motoristas + coletores", status: "ok" },
  { turno: "08h–17h", atividade: "Triagem e separação na esteira", responsavel: "Operadores de triagem", status: "alerta" },
  { turno: "12h–13h", atividade: "Controle de pátio e pesagem dos fardos", responsavel: "Supervisor de turno", status: "ok" },
  { turno: "13h–17h", atividade: "Coleta seletiva (rota vespertina)", responsavel: "Motoristas + coletores", status: "ok" },
  { turno: "15h–17h", atividade: "Viragem das leiras de compostagem", responsavel: "Operador de compostagem", status: "ok" },
  { turno: "17h–18h", atividade: "Pesagem de saída e fechamento", responsavel: "Operador de balança", status: "ok" },
  { turno: "Diário", atividade: "Registro no sistema e atualização de KPIs", responsavel: "Supervisor / Analista", status: "ok" },
];

const frequencias = [
  { freq: "Diário", acao: "Pesagem e registro de volumes por etapa (coleta, triagem, compostagem, rejeito)" },
  { freq: "Semanal", acao: "Análise de KPIs, reunião de turno, revisão de alertas e ajustes operacionais" },
  { freq: "Mensal", acao: "Relatório executivo, revisão de rotas, controle de manutenção e treinamentos" },
  { freq: "Trimestral", acao: "Auditoria interna, análise financeira consolidada e revisão de metas" },
];

const ajustes = [
  {
    titulo: "Monitoramento Semanal de KPIs",
    desc: "Reunião toda segunda-feira para análise dos indicadores da semana — eficiência de triagem, volume coletado, receita e alertas em aberto.",
    icon: BarChart3,
  },
  {
    titulo: "Ajuste de Rotas",
    desc: "Rotas revisadas mensalmente com base no volume coletado por setor. Bairros com baixo volume são reagrupados; os com alta demanda recebem frequência extra.",
    icon: Settings,
  },
  {
    titulo: "Controle de Qualidade dos Fardos",
    desc: "Amostras conferidas antes da saída. Lotes com contaminação acima de 5% são retornados para retriagem. Resultado impacta a eficiência registrada do turno.",
    icon: CheckCircle2,
  },
  {
    titulo: "Gestão de Alertas",
    desc: "Alertas gerados automaticamente quando KPIs ficam abaixo da meta. Cada alerta tem prazo de resolução e responsável atribuído.",
    icon: AlertTriangle,
  },
  {
    titulo: "Relatórios Automáticos",
    desc: "Relatório mensal com volumes processados, receita, custos e eficiência por setor. Enviado automaticamente à secretaria municipal.",
    icon: Monitor,
  },
  {
    titulo: "Suporte Técnico Contínuo",
    desc: "Canal direto com equipe de suporte para questões operacionais, manutenção de equipamentos e otimização de processos.",
    icon: Headphones,
  },
];

export default function Control() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Controle e Ajustes</h1>
        <p className="text-muted-foreground text-sm">Rotina operacional diária e mecanismos de monitoramento contínuo da operação.</p>
      </motion.div>

      {/* Rotina diária */}
      <motion.div {...fade} transition={{ delay: 0.1 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Rotina Operacional Diária
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Horário</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Atividade</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Responsável</th>
                  <th className="text-center p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {rotina.map((r, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.04 }}
                    className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-3 font-mono text-xs text-muted-foreground whitespace-nowrap">{r.turno}</td>
                    <td className="p-3 font-medium text-sm">{r.atividade}</td>
                    <td className="p-3 text-xs text-muted-foreground">{r.responsavel}</td>
                    <td className="p-3 text-center">
                      {r.status === "ok"
                        ? <CheckCircle2 className="h-4 w-4 text-success mx-auto" />
                        : <AlertTriangle className="h-4 w-4 text-amber-500 mx-auto" />}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Frequência de controle */}
      <motion.div {...fade} transition={{ delay: 0.2 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" /> Frequência de Controle
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground w-28">Frequência</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Ação de Controle</th>
                </tr>
              </thead>
              <tbody>
                {frequencias.map((f, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-3">
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{f.freq}</span>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">{f.acao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Cards de ajuste */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ajustes.map((item, i) => (
          <motion.div key={item.titulo} {...fade} transition={{ delay: 0.3 + i * 0.05 }}>
            <Card className="h-full">
              <CardContent className="pt-5 pb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-semibold text-sm mb-1">{item.titulo}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
