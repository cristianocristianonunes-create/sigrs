import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, DollarSign, CheckCircle2, TrendingUp, FileText, Handshake, Shield, Star } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const metricas = [
  { label: "Catadores Formalizados", value: "50–70", icon: Users, color: "text-primary bg-primary/10" },
  { label: "Renda Mensal por Catador", value: "R$ 1,5–2,5 mil", icon: DollarSign, color: "text-success bg-success/10" },
  { label: "Aumento de Renda", value: "+ 120%", icon: TrendingUp, color: "text-success bg-success/10" },
  { label: "Acesso à Previdência", value: "100%", icon: Shield, color: "text-primary bg-primary/10" },
];

const passos = [
  {
    num: "01",
    titulo: "Mapeamento dos Catadores",
    desc: "Levantamento de todos os catadores informais que atuam no município — no lixão, nas ruas e em pontos de coleta. Cadastro com dados pessoais e histórico de trabalho.",
    prazo: "Dias 1–15",
  },
  {
    num: "02",
    titulo: "Reuniões de Mobilização",
    desc: "Encontros para apresentar o modelo cooperativista, os benefícios da formalização e tirar dúvidas. Participação da Assistência Social e de representantes do SESCOOP.",
    prazo: "Dias 10–25",
  },
  {
    num: "03",
    titulo: "Constituição Jurídica",
    desc: "Elaboração do estatuto social, registro em cartório, CNPJ, enquadramento como cooperativa de trabalho (Lei nº 12.690/2012) e abertura de conta bancária.",
    prazo: "Dias 20–45",
  },
  {
    num: "04",
    titulo: "Capacitação Técnica",
    desc: "Treinamento em separação e classificação de materiais, operação de prensas e balanças, saúde e segurança do trabalho, e gestão básica da cooperativa.",
    prazo: "Dias 30–60",
  },
  {
    num: "05",
    titulo: "Início da Operação",
    desc: "Cooperativa assume a triagem dentro da CTRSU, com remuneração por produção. Primeiras comercializações de fardos e distribuição de sobras entre os cooperados.",
    prazo: "Dia 60+",
  },
];

const beneficios = [
  { titulo: "Carteira assinada / MEI", desc: "Acesso a benefícios trabalhistas, FGTS e previdência social.", icon: FileText },
  { titulo: "Renda previsível", desc: "Remuneração mensal garantida independente das variações de mercado.", icon: DollarSign },
  { titulo: "Equipamentos e EPIs", desc: "Luvas, botas, uniformes, máscaras e ferramentas fornecidos pela cooperativa.", icon: Shield },
  { titulo: "Treinamento contínuo", desc: "Capacitação periódica em identificação de materiais e boas práticas.", icon: Star },
  { titulo: "Gestão compartilhada", desc: "Cada cooperado tem voz nas decisões — modelo democrático de governança.", icon: Handshake },
  { titulo: "Perspectiva de crescimento", desc: "Expansão da renda conforme aumenta o volume e a qualidade dos materiais triados.", icon: TrendingUp },
];

const renda = [
  { material: "Alumínio", preco: "R$ 4.000–5.500/ton", volume: "50 ton/ano", receita: "R$ 200–275 mil" },
  { material: "Plástico PET", preco: "R$ 2.000–3.000/ton", volume: "150 ton/ano", receita: "R$ 300–450 mil" },
  { material: "Plástico PEAD/PP", preco: "R$ 1.200–1.800/ton", volume: "250 ton/ano", receita: "R$ 300–450 mil" },
  { material: "Papel e papelão", preco: "R$ 200–300/ton", volume: "1.500 ton/ano", receita: "R$ 300–450 mil" },
  { material: "Metal ferroso", preco: "R$ 400–600/ton", volume: "100 ton/ano", receita: "R$ 40–60 mil" },
  { material: "Vidro", preco: "R$ 100–150/ton", volume: "300 ton/ano", receita: "R$ 30–45 mil" },
];

export default function Cooperativa() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div {...fade}>
        <div className="flex items-center gap-3 mb-1">
          <Handshake className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold">Cooperativa de Catadores</h1>
        </div>
        <p className="text-muted-foreground text-sm">Formalização de catadores informais em cooperativa de trabalho — inclusão social com renda digna e papel central na operação do SIGRS.</p>
      </motion.div>

      {/* Métricas */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {metricas.map((m, i) => (
          <motion.div key={m.label} {...fade} transition={{ delay: 0.05 + i * 0.05 }}>
            <Card className="h-full">
              <CardContent className="pt-4 pb-3 px-4">
                <div className={`h-9 w-9 rounded-lg flex items-center justify-center mb-2 ${m.color}`}>
                  <m.icon className="h-4 w-4" />
                </div>
                <p className="text-xs text-muted-foreground mb-0.5">{m.label}</p>
                <p className="text-base font-bold text-foreground leading-tight">{m.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Passos de formalização */}
      <motion.div {...fade} transition={{ delay: 0.2 }}>
        <h2 className="text-base font-semibold mb-3">Processo de Formalização</h2>
        <div className="space-y-3">
          {passos.map((p, i) => (
            <motion.div key={p.num} {...fade} transition={{ delay: 0.25 + i * 0.06 }}>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">{p.num}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="font-semibold text-sm">{p.titulo}</p>
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">{p.prazo}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefícios */}
      <motion.div {...fade} transition={{ delay: 0.4 }}>
        <h2 className="text-base font-semibold mb-3">Benefícios para os Cooperados</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {beneficios.map((b, i) => (
            <motion.div key={b.titulo} {...fade} transition={{ delay: 0.45 + i * 0.05 }}>
              <Card className="h-full">
                <CardContent className="pt-5 pb-4">
                  <div className="h-9 w-9 rounded-lg bg-success/10 flex items-center justify-center mb-3">
                    <b.icon className="h-4 w-4 text-success" />
                  </div>
                  <p className="font-semibold text-sm mb-1">{b.titulo}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tabela de receita por material */}
      <motion.div {...fade} transition={{ delay: 0.55 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-success" /> Receita por Material Reciclável (município de 30 mil hab.)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Material</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Preço/ton</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Volume anual</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground text-success">Receita anual</th>
                </tr>
              </thead>
              <tbody>
                {renda.map((r, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-medium text-sm">{r.material}</td>
                    <td className="p-3 text-xs text-muted-foreground">{r.preco}</td>
                    <td className="p-3 text-xs text-muted-foreground">{r.volume}</td>
                    <td className="p-3 text-sm font-semibold text-success">{r.receita}</td>
                  </tr>
                ))}
                <tr className="bg-success/5 border-t-2 border-success/20">
                  <td className="p-3 font-bold text-sm" colSpan={3}>Total estimado (Ano 3+)</td>
                  <td className="p-3 font-bold text-success text-base">R$ 1,17–1,73M/ano</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
