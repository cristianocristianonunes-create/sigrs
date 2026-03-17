import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

const cenarios = [
  {
    label: "Cenário Conservador",
    payback: "6,5 anos",
    receita: "R$ 1,8M/ano",
    economia: "R$ 500 mil/ano",
    desc: "Reciclagem abaixo do esperado, mercado de recicláveis em baixa, operação em aprendizado.",
    cor: "border-white/10 bg-white/5",
    badge: "bg-white/10 text-white/60",
    valor: "text-white/80",
  },
  {
    label: "Cenário Médio",
    payback: "4,8 anos",
    receita: "R$ 2,7M/ano",
    economia: "R$ 930 mil/ano",
    desc: "Operação estabilizada no Ano 3, reciclagem de 30%, mercado em condições normais.",
    cor: "border-emerald-500/30 bg-emerald-500/10 ring-1 ring-emerald-500/20",
    badge: "bg-emerald-500/20 text-emerald-300",
    valor: "text-emerald-300",
    destaque: true,
  },
  {
    label: "Cenário Otimista",
    payback: "2,3 anos",
    receita: "R$ 3,5M/ano",
    economia: "R$ 1,2M/ano",
    desc: "Alto engajamento da população, mercado aquecido, créditos de carbono e energia solar consolidados.",
    cor: "border-white/10 bg-white/5",
    badge: "bg-white/10 text-white/60",
    valor: "text-white/80",
  },
];

const dados = [
  { label: "Investimento inicial (CAPEX)", valor: "R$ 4,69M", icon: DollarSign, note: "Município de 30 mil hab." },
  { label: "Custo operacional mensal (OPEX)", valor: "R$ 173 mil/mês", icon: TrendingUp, note: "Inclui folha, combustível, manutenção" },
  { label: "Resultado operacional positivo", valor: "A partir do Ano 3", icon: Clock, note: "Cenário médio" },
];

export function LandingPayback() {
  return (
    <section className="py-24 bg-[#0f1b2d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(160_84%_39%_/_0.08),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Viabilidade Econômica</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Retorno do investimento em 3 cenários
          </h2>
          <p className="text-white/60 text-lg">
            Projeções honestas para um município de 30 mil habitantes. O retorno depende da eficiência operacional e das condições de mercado.
          </p>
        </motion.div>

        {/* Dados base */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {dados.map((d, i) => (
            <motion.div key={d.label} {...fade} transition={{ delay: i * 0.07 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4 items-start"
            >
              <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <d.icon className="h-4 w-4 text-white/60" />
              </div>
              <div>
                <p className="text-xs text-white/40 mb-0.5">{d.label}</p>
                <p className="text-base font-bold text-white">{d.valor}</p>
                <p className="text-xs text-white/30 mt-0.5">{d.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 cenários */}
        <div className="grid sm:grid-cols-3 gap-6">
          {cenarios.map((c, i) => (
            <motion.div key={c.label} {...fade} transition={{ delay: 0.2 + i * 0.08 }}
              className={`rounded-2xl border p-7 relative ${c.cor}`}
            >
              {c.destaque && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">Referência</span>
                </div>
              )}
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>{c.label}</span>

              <div className="mt-5 mb-4">
                <p className="text-xs text-white/40 mb-1">Payback estimado</p>
                <p className={`text-4xl font-extrabold ${c.valor}`}>{c.payback}</p>
              </div>

              <div className="space-y-2 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Receita anual</span>
                  <span className="text-white/80 font-medium">{c.receita}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Economia com aterro</span>
                  <span className="text-white/80 font-medium">{c.economia}</span>
                </div>
              </div>

              <p className="text-xs text-white/40 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade} transition={{ delay: 0.5 }} className="text-center mt-8">
          <p className="text-white/30 text-xs">
            Projeções elaboradas com base em municípios brasileiros de porte similar. Resultados reais podem variar conforme localidade, mercado regional e eficiência operacional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
