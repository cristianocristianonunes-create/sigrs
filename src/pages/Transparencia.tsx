import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Eye, BarChart3, FileText, CheckCircle2, TrendingUp, Recycle, Trash2, DollarSign, Leaf } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const indicadores = [
  { label: "Volume Coletado (mês)", value: "372 ton", variacao: "+4,2%", up: true, icon: Trash2 },
  { label: "Taxa de Reciclagem", value: "28%", variacao: "+2,1 p.p.", up: true, icon: Recycle },
  { label: "Desvio do Aterro", value: "61%", variacao: "+3,5 p.p.", up: true, icon: TrendingUp },
  { label: "Receita do Mês", value: "R$ 225 mil", variacao: "+8,7%", up: true, icon: DollarSign },
  { label: "CO₂ Evitado (mês)", value: "54 ton", variacao: "+3,1%", up: true, icon: Leaf },
  { label: "Custo por Tonelada", value: "R$ 85", variacao: "-2,3%", up: false, icon: BarChart3 },
];

const historico = [
  { mes: "Out", coletado: 340, desviado: 195, receita: 190 },
  { mes: "Nov", coletado: 355, desviado: 210, receita: 205 },
  { mes: "Dez", coletado: 348, desviado: 208, receita: 198 },
  { mes: "Jan", coletado: 362, desviado: 218, receita: 212 },
  { mes: "Fev", coletado: 358, desviado: 214, receita: 208 },
  { mes: "Mar", coletado: 372, desviado: 227, receita: 225 },
];

const relatorios = [
  { mes: "Março 2026", tipo: "Mensal", status: "Publicado", tamanho: "1,2 MB" },
  { mes: "Fevereiro 2026", tipo: "Mensal", status: "Publicado", tamanho: "1,1 MB" },
  { mes: "Janeiro 2026", tipo: "Mensal", status: "Publicado", tamanho: "1,0 MB" },
  { mes: "4º Trimestre 2025", tipo: "Trimestral", status: "Publicado", tamanho: "2,4 MB" },
  { mes: "Dezembro 2025", tipo: "Mensal", status: "Publicado", tamanho: "1,1 MB" },
];

const conformidade = [
  { item: "PNRS — Lei nº 12.305/2010", status: "Em conformidade" },
  { item: "Plano Municipal de Resíduos Sólidos (PMRS)", status: "Em conformidade" },
  { item: "Lei nº 14.026/2020 — Marco do Saneamento", status: "Em conformidade" },
  { item: "Licença de Operação (LO) — Órgão Ambiental", status: "Vigente" },
  { item: "Prestação de contas ao TCE", status: "Em dia" },
  { item: "Relatórios ao SINIR (Sistema Nacional de Informações)", status: "Atualizado" },
];

export default function Transparencia() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div {...fade}>
        <div className="flex items-center gap-3 mb-1">
          <Eye className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold">Portal de Transparência</h1>
        </div>
        <p className="text-muted-foreground text-sm">Dados públicos atualizados mensalmente — qualquer cidadão, vereador ou órgão de controle pode acompanhar a operação em tempo real.</p>
      </motion.div>

      {/* Indicadores públicos */}
      <motion.div {...fade} transition={{ delay: 0.1 }}>
        <h2 className="text-base font-semibold mb-3">Indicadores do Mês Atual — Março 2026</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {indicadores.map((ind, i) => (
            <motion.div key={ind.label} {...fade} transition={{ delay: 0.12 + i * 0.05 }}>
              <Card>
                <CardContent className="pt-4 pb-3 px-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ind.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${ind.up ? "bg-success/10 text-success" : "bg-success/10 text-success"}`}>
                      {ind.variacao}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-0.5">{ind.label}</p>
                  <p className="text-lg font-bold text-foreground">{ind.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gráfico histórico */}
      <motion.div {...fade} transition={{ delay: 0.3 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" /> Evolução dos Últimos 6 Meses (toneladas / R$ mil)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={historico} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 91%)" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="coletado" name="Coletado (ton)" fill="hsl(224 73% 60%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="desviado" name="Desviado do aterro (ton)" fill="hsl(160 84% 39%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="receita" name="Receita (R$ mil)" fill="hsl(224 73% 40%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Relatórios publicados */}
      <motion.div {...fade} transition={{ delay: 0.4 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" /> Relatórios Publicados
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Período</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Tipo</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Tamanho</th>
                  <th className="text-center p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {relatorios.map((r, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-medium text-sm">{r.mes}</td>
                    <td className="p-3 text-xs text-muted-foreground">{r.tipo}</td>
                    <td className="p-3 text-xs text-muted-foreground">{r.tamanho}</td>
                    <td className="p-3 text-center">
                      <span className="text-xs font-semibold bg-success/10 text-success px-2 py-1 rounded-full">{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Conformidade legal */}
      <motion.div {...fade} transition={{ delay: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" /> Conformidade Legal e Regulatória
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {conformidade.map((c, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-3 text-sm">{c.item}</td>
                    <td className="p-3 text-right">
                      <span className="text-xs font-semibold bg-success/10 text-success px-2 py-1 rounded-full">{c.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
