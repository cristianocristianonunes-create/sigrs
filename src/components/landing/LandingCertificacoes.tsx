import { motion } from "framer-motion";
import { Award, Leaf, FileCheck, Star, Shield, TrendingUp } from "lucide-react";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

const certificacoes = [
  {
    icone: FileCheck,
    titulo: "Conformidade PNRS",
    subtitulo: "Lei nº 12.305/2010",
    desc: "A implantação do SIGRS coloca o município em plena conformidade com a Política Nacional de Resíduos Sólidos, eliminando riscos de sanções federais.",
    cor: "bg-blue-500/10 border-blue-500/20 text-blue-500",
  },
  {
    icone: Leaf,
    titulo: "Créditos de Carbono",
    subtitulo: "Mercado Voluntário e Regulado",
    desc: "A redução de CH₄ nos aterros e o aproveitamento de orgânicos geram créditos de carbono comercializáveis. Estimativa: R$ 80 mil/ano (Ano 3+).",
    cor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
  },
  {
    icone: Award,
    titulo: "ISO 14001",
    subtitulo: "Gestão Ambiental",
    desc: "O sistema de gestão implementado pelo SIGRS é estruturado para facilitar a certificação ISO 14001, valorizando a imagem do município perante investidores e parceiros.",
    cor: "bg-amber-500/10 border-amber-500/20 text-amber-500",
  },
  {
    icone: Star,
    titulo: "Selo Município Verde",
    subtitulo: "Programas estaduais",
    desc: "Municípios com gestão integrada de resíduos são elegíveis a selos ambientais estaduais, que trazem reconhecimento público e vantagens em repasses estaduais.",
    cor: "bg-green-500/10 border-green-500/20 text-green-500",
  },
  {
    icone: Shield,
    titulo: "Marco do Saneamento",
    subtitulo: "Lei nº 14.026/2020",
    desc: "O SIGRS atende plenamente ao novo Marco Legal do Saneamento, garantindo ao município acesso aos recursos previstos no programa federal de universalização.",
    cor: "bg-primary/10 border-primary/20 text-primary",
  },
  {
    icone: TrendingUp,
    titulo: "SINIR — Relatório Nacional",
    subtitulo: "Sistema Nacional de Informações",
    desc: "Os dados gerados pelo SIGRS alimentam diretamente o SINIR, colocando o município entre os que contribuem para o monitoramento nacional da gestão de resíduos.",
    cor: "bg-purple-500/10 border-purple-500/20 text-purple-500",
  },
];

export function LandingCertificacoes() {
  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Reconhecimento</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Certificações e reconhecimentos
          </h2>
          <p className="text-muted-foreground text-lg">
            Além dos resultados operacionais, o SIGRS posiciona o município em conformidade com legislação federal, abre acesso a certificações ambientais e gera receita adicional com créditos de carbono.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificacoes.map((c, i) => (
            <motion.div key={c.titulo} {...fade} transition={{ delay: i * 0.07 }}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className={`h-11 w-11 rounded-xl border flex items-center justify-center mb-4 ${c.cor}`}>
                <c.icone className="h-5 w-5" />
              </div>
              <p className="font-bold text-foreground text-sm mb-0.5">{c.titulo}</p>
              <p className="text-xs text-muted-foreground mb-3">{c.subtitulo}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
