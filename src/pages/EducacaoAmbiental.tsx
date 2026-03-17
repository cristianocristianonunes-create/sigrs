import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, Megaphone, School, Leaf, CheckCircle2, TrendingUp } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const metricas = [
  { label: "Professores Capacitados", value: "200–300", icon: GraduationCap, color: "text-primary bg-primary/10" },
  { label: "Escolas Participantes", value: "15–20", icon: School, color: "text-success bg-success/10" },
  { label: "Famílias Alcançadas", value: "8.000+", icon: Users, color: "text-primary bg-primary/10" },
  { label: "Catadores Capacitados", value: "50–70", icon: Leaf, color: "text-success bg-success/10" },
];

const frentes = [
  {
    titulo: "Escolas e Professores",
    icon: School,
    cor: "border-primary/20 bg-primary/5",
    desc: "Programa contínuo de capacitação de professores e integração da educação ambiental ao currículo escolar municipal.",
    atividades: [
      "Formação de 200–300 professores da rede pública",
      "Material didático específico por faixa etária",
      "Visitas guiadas das turmas à usina de triagem",
      "Gincanas e competições de reciclagem entre escolas",
      "Produção de hortas e composteiras nas escolas",
    ],
  },
  {
    titulo: "Comunidade e Residentes",
    icon: Megaphone,
    cor: "border-success/20 bg-success/5",
    desc: "Campanhas de conscientização para engajar famílias na separação correta dos resíduos na fonte.",
    atividades: [
      "Distribuição de kits de separação domiciliar",
      "Campanhas porta a porta nos bairros prioritários",
      "Comunicação via rádio, outdoor e redes sociais",
      "Eventos comunitários de conscientização ambiental",
      "Portal público com dicas e informações de coleta",
    ],
  },
  {
    titulo: "Catadores e Cooperativa",
    icon: Users,
    cor: "border-primary/20 bg-primary/5",
    desc: "Capacitação técnica e profissional dos catadores formalizados na cooperativa, garantindo qualidade e segurança.",
    atividades: [
      "Identificação e classificação de materiais recicláveis",
      "Operação segura de equipamentos e EPIs",
      "Gestão básica da cooperativa e finanças",
      "Saúde e segurança no trabalho",
      "Qualidade dos fardos para comercialização",
    ],
  },
];

const calendario = [
  { mes: "Mês 1–2", atividade: "Capacitação dos professores da rede municipal", responsavel: "Coordenador de EA" },
  { mes: "Mês 2–3", atividade: "Lançamento do programa nas escolas com material didático", responsavel: "Diretores + Professores" },
  { mes: "Mês 3", atividade: "Primeira visita de turmas à usina de triagem", responsavel: "Equipe técnica" },
  { mes: "Mês 3–4", atividade: "Campanha porta a porta em bairros prioritários", responsavel: "Agentes comunitários" },
  { mes: "Mês 4–6", atividade: "Competição de reciclagem entre escolas com premiação", responsavel: "Secretaria de Educação" },
  { mes: "Contínuo", atividade: "Monitoramento de participação e ajuste do programa", responsavel: "Coordenador de EA" },
];

export default function EducacaoAmbiental() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div {...fade}>
        <div className="flex items-center gap-3 mb-1">
          <BookOpen className="h-7 w-7 text-success" />
          <h1 className="text-2xl font-bold">Educação Ambiental</h1>
        </div>
        <p className="text-muted-foreground text-sm">Programa contínuo que engaja escolas, famílias e catadores para transformar a cultura de gestão de resíduos no município.</p>
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
                <p className="text-lg font-bold text-foreground">{m.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 3 frentes */}
      <motion.div {...fade} transition={{ delay: 0.2 }}>
        <h2 className="text-base font-semibold mb-3">Três Frentes de Atuação</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {frentes.map((f, i) => (
            <motion.div key={f.titulo} {...fade} transition={{ delay: 0.25 + i * 0.07 }}>
              <Card className={`h-full border ${f.cor}`}>
                <CardContent className="pt-5 pb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-bold text-sm mb-1">{f.titulo}</p>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{f.desc}</p>
                  <ul className="space-y-1.5">
                    {f.atividades.map(a => (
                      <li key={a} className="text-xs text-muted-foreground flex items-start gap-1.5">
                        <CheckCircle2 className="h-3 w-3 text-success mt-0.5 shrink-0" /> {a}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Calendário */}
      <motion.div {...fade} transition={{ delay: 0.4 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" /> Calendário de Implantação
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground w-28">Período</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Atividade</th>
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Responsável</th>
                </tr>
              </thead>
              <tbody>
                {calendario.map((c, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-3">
                      <span className="text-xs font-semibold bg-success/10 text-success px-2 py-1 rounded-full whitespace-nowrap">{c.mes}</span>
                    </td>
                    <td className="p-3 text-sm">{c.atividade}</td>
                    <td className="p-3 text-xs text-muted-foreground">{c.responsavel}</td>
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
