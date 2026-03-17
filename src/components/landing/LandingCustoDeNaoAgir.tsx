import { motion } from "framer-motion";
import { AlertTriangle, XCircle, TrendingDown, Ban, FileWarning, Building2 } from "lucide-react";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

const riscos = [
  {
    icon: Ban,
    titulo: "Perda de acesso ao PAC Saneamento",
    desc: "Municípios em desconformidade com a PNRS ficam impedidos de receber recursos federais do Programa de Aceleração do Crescimento voltados a saneamento.",
  },
  {
    icon: XCircle,
    titulo: "Bloqueio de transferências da FUNASA",
    desc: "A Fundação Nacional de Saúde suspende repasses voluntários para municípios que não comprovam avanço no cumprimento da Política Nacional de Resíduos Sólidos.",
  },
  {
    icon: FileWarning,
    titulo: "Restrição ao crédito do BNDES",
    desc: "O BNDES exige conformidade ambiental como pré-requisito para concessão de financiamento a municípios. A irregularidade fecha essa porta de forma direta.",
  },
  {
    icon: TrendingDown,
    titulo: "Passivo ambiental crescente",
    desc: "Cada tonelada enterrada no aterro é um custo irreversível. Aterros se esgotam, novos custam mais caro e o prazo para regularização foi prorrogado por último a 2024.",
  },
  {
    icon: AlertTriangle,
    titulo: "Sanções federais e multas",
    desc: "O Ministério Público Federal e estadual tem intensificado ações contra municípios que ainda operam lixões ou não possuem Plano Municipal de Resíduos Sólidos atualizado.",
  },
  {
    icon: Building2,
    titulo: "Impacto na imagem da gestão",
    desc: "Gestores que não avançam no tema ambiental enfrentam cobrança crescente da população, imprensa e vereadores — especialmente em período eleitoral.",
  },
];

export function LandingCustoDeNaoAgir() {
  return (
    <section className="py-24 bg-[#0f1b2d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(0_84%_60%_/_0.06),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">Atenção</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            O custo de não agir
          </h2>
          <p className="text-white/60 text-lg">
            Manter o modelo atual não é uma opção neutra. A cada ano sem mudança, o passivo financeiro, ambiental e político do município cresce.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {riscos.map((r, i) => (
            <motion.div key={r.titulo} {...fade} transition={{ delay: i * 0.07 }}
              className="bg-white/5 border border-red-500/15 rounded-xl p-6 hover:border-red-500/30 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                <r.icon className="h-5 w-5 text-red-400" />
              </div>
              <p className="font-semibold text-white text-sm mb-2">{r.titulo}</p>
              <p className="text-white/50 text-xs leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade} transition={{ delay: 0.5 }}
          className="bg-red-500/10 border border-red-500/25 rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <p className="text-white/80 text-base leading-relaxed">
            <span className="text-red-300 font-semibold">Lei nº 12.305/2010 (PNRS)</span> — A legislação federal exige que todos os municípios brasileiros tenham eliminado lixões e estruturado a gestão integrada de resíduos. Municípios inadimplentes perdem acesso a transferências voluntárias da União e ficam expostos a ações do Ministério Público.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
