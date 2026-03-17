import { motion } from "framer-motion";
import { Home, Building, Buildings, ArrowRight } from "lucide-react";

// fallback if Buildings icon isn't available
import { Building2 } from "lucide-react";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

const portes = [
  {
    icone: Home,
    titulo: "Cidades Pequenas",
    populacao: "Até 30 mil habitantes",
    capex: "R$ 4,69M",
    opex: "R$ 173 mil/mês",
    receita: "R$ 2,7M/ano",
    payback: "4,8 anos",
    empregos: "50–80",
    destaques: [
      "Modelo compacto e acessível",
      "Fase mínima a partir de R$ 500 mil",
      "Cooperativa com 50–70 catadores",
      "Coleta seletiva em toda a área urbana",
    ],
    cor: "border-primary/20",
    badge: "bg-primary/10 text-primary",
  },
  {
    icone: Building2,
    titulo: "Cidades Médias",
    populacao: "30 a 100 mil habitantes",
    capex: "R$ 7,5M",
    opex: "R$ 320 mil/mês",
    receita: "R$ 5,8M/ano",
    payback: "4,2 anos",
    empregos: "120–180",
    destaques: [
      "CTRSU de maior capacidade",
      "Frota ampliada e rotas otimizadas",
      "Compostagem industrial",
      "Energia solar integrada",
    ],
    cor: "border-success/30 ring-1 ring-success/15",
    badge: "bg-success/10 text-success",
  },
  {
    icone: Building2,
    titulo: "Consórcio Regional",
    populacao: "3 municípios compartilhando",
    capex: "R$ 4,5M / município",
    opex: "R$ 130 mil/mês",
    receita: "R$ 2,4M/ano",
    payback: "3,9 anos",
    empregos: "150–220 (total)",
    destaques: [
      "Infraestrutura compartilhada",
      "CAPEX individual 30% menor",
      "Logística integrada entre municípios",
      "Escala suficiente para CTRSU completa",
    ],
    cor: "border-primary/20",
    badge: "bg-primary/10 text-primary",
  },
];

export function LandingPortes() {
  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Para todo porte</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            O modelo se adapta à realidade do seu município
          </h2>
          <p className="text-muted-foreground text-lg">
            O SIGRS foi dimensionado para diferentes portes de cidade. O investimento, a capacidade e a receita são proporcionais à população atendida.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {portes.map((p, i) => (
            <motion.div key={p.titulo} {...fade} transition={{ delay: i * 0.1 }}
              className={`bg-card rounded-2xl border p-7 ${p.cor}`}
            >
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.badge}`}>{p.populacao}</span>
              <h3 className="text-xl font-bold text-foreground mt-4 mb-5">{p.titulo}</h3>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { k: "Investimento", v: p.capex },
                  { k: "OPEX mensal", v: p.opex },
                  { k: "Receita anual", v: p.receita },
                  { k: "Payback", v: p.payback },
                  { k: "Empregos diretos", v: p.empregos },
                ].map(({ k, v }) => (
                  <div key={k} className="bg-muted/60 rounded-xl px-3 py-2.5">
                    <p className="text-xs text-muted-foreground">{k}</p>
                    <p className="text-sm font-bold text-foreground">{v}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2">
                {p.destaques.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3.5 w-3.5 text-success mt-0.5 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade} transition={{ delay: 0.4 }} className="text-center mt-10">
          <p className="text-muted-foreground text-sm">
            Valores estimados para referência. Uma simulação personalizada é elaborada conforme os dados reais do município.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
