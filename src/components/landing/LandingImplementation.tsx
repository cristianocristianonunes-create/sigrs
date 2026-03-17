import { motion } from "framer-motion";
import { Shield, Layers, Rocket, CheckCircle2 } from "lucide-react";

const phases = [
  {
    icon: Shield, title: "Fase Mínima", subtitle: "Validação rápida",
    items: ["Coleta seletiva básica", "Triagem manual", "Educação ambiental em escolas", "Dashboard operacional"],
    highlight: false,
  },
  {
    icon: Layers, title: "Fase Intermediária", subtitle: "Expansão estruturada",
    items: ["Usina de triagem completa", "Compostagem operacional", "Cooperativas formalizadas", "Indicadores avançados"],
    highlight: true,
  },
  {
    icon: Rocket, title: "Fase Completa", subtitle: "Operação plena",
    items: ["Capacidade total de processamento", "Receita maximizada", "Logística reversa integrada", "Certificação ambiental"],
    highlight: false,
  },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingImplementation() {
  return (
    <section id="implementacao" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-sm font-semibold text-success uppercase tracking-wider">Implementação Segura</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Comece pequeno, valide rápido, expanda com consistência
          </h2>
          <p className="text-muted-foreground text-lg">
            A prefeitura não precisa dar um salto cego. O modelo é modular e gera resultado antes da estrutura completa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {phases.map((p, i) => (
            <motion.div key={p.title} {...fade} transition={{ delay: i * 0.1 }}
              className={`rounded-xl border p-6 ${p.highlight ? "bg-primary text-primary-foreground shadow-xl shadow-primary/15 border-primary/30" : "bg-card"}`}
            >
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-4 ${p.highlight ? "bg-white/20" : "bg-success/10"}`}>
                <p.icon className={`h-5 w-5 ${p.highlight ? "text-white" : "text-success"}`} />
              </div>
              <h3 className="font-bold text-lg mb-1">{p.title}</h3>
              <p className={`text-sm mb-4 ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>{p.subtitle}</p>
              <ul className="space-y-2.5">
                {p.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${p.highlight ? "text-emerald-300" : "text-success"}`} />
                    <span className={p.highlight ? "text-white/90" : "text-muted-foreground"}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
