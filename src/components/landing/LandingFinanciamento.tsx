import { motion } from "framer-motion";
import { Building2, Landmark, HandCoins, Users, ArrowRight } from "lucide-react";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

const fontes = [
  {
    sigla: "BNDES",
    nome: "Banco Nacional de Desenvolvimento",
    desc: "Linha de crédito para saneamento básico e gestão ambiental. Financiamento de até 80% do CAPEX com taxas reduzidas e prazo de até 20 anos.",
    condicoes: "Taxa a partir de TLP + 1,5% a.a.",
    icone: Landmark,
    cor: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  },
  {
    sigla: "CAIXA",
    nome: "Programa PAC Saneamento",
    desc: "Recursos do Programa de Aceleração do Crescimento destinados à infraestrutura de resíduos sólidos. Disponível para municípios com Plano Municipal de Resíduos atualizado.",
    condicoes: "Habilitação via SINISA / MDR",
    icone: Building2,
    cor: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  },
  {
    sigla: "FUNASA",
    nome: "Fundação Nacional de Saúde",
    desc: "Repasses voltados especificamente a municípios com até 50 mil habitantes. Cobre coleta seletiva, pontos de entrega voluntária e equipamentos de triagem.",
    condicoes: "Municípios até 50 mil hab.",
    icone: HandCoins,
    cor: "bg-green-500/10 border-green-500/20 text-green-400",
  },
  {
    sigla: "Consórcio",
    nome: "Consórcio Intermunicipal",
    desc: "Municípios vizinhos compartilham a infraestrutura e dividem o CAPEX. Um consórcio de 3 municípios reduz o investimento individual para R$ 4,5M — sem abrir mão da qualidade.",
    condicoes: "Lei nº 11.107/2005",
    icone: Users,
    cor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  },
];

export function LandingFinanciamento() {
  return (
    <section id="financiamento" className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Financiamento</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Não precisa ter todo o recurso disponível
          </h2>
          <p className="text-muted-foreground text-lg">
            Existem linhas de crédito federais específicas para projetos de resíduos sólidos. O investimento pode ser financiado, parcelado ou compartilhado com municípios vizinhos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {fontes.map((f, i) => (
            <motion.div key={f.sigla} {...fade} transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-7 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`h-12 w-12 rounded-xl border flex items-center justify-center shrink-0 ${f.cor}`}>
                  <f.icone className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-foreground">{f.sigla}</span>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{f.condicoes}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium mb-2">{f.nome}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade} transition={{ delay: 0.4 }}
          className="bg-primary/5 border border-primary/15 rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <p className="text-foreground font-semibold text-lg mb-2">
            Municípios conformes com a PNRS têm acesso prioritário a todos esses recursos.
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            O SIGRS é implementado em conformidade com a Lei nº 12.305/2010 e o Marco Legal do Saneamento (Lei nº 14.026/2020), habilitando o município para pleitear financiamento federal imediatamente.
          </p>
          <a href="#contato-form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
            Quero saber qual linha se aplica ao meu município <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
