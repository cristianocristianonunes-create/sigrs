import { motion } from "framer-motion";
import { Factory, Leaf, Trash2, TrendingUp, Building2 } from "lucide-react";

const areas = [
  { icon: Factory, title: "Usina de Triagem", desc: "Esteiras, prensas e baias para separação de materiais recicláveis." },
  { icon: Leaf, title: "Área de Compostagem", desc: "Pátios para processamento de resíduos orgânicos em composto." },
  { icon: Trash2, title: "Área de Rejeitos", desc: "Destinação controlada apenas do material sem aproveitamento." },
  { icon: TrendingUp, title: "Escalabilidade", desc: "Dimensionada conforme porte do município e volume de resíduos." },
];

const models = [
  { title: "Licitação Pública", desc: "Contratação via processo licitatório tradicional." },
  { title: "PPP — Parceria Público-Privada", desc: "Modelo de parceria com investimento e operação compartilhados." },
  { title: "Projeto Piloto", desc: "Implementação inicial para validação antes da expansão." },
];

const cities = [
  { title: "Cidades Pequenas", desc: "Até 30 mil habitantes — modelo compacto e acessível." },
  { title: "Cidades Médias", desc: "30 a 100 mil habitantes — estrutura intermediária." },
  { title: "Consórcios", desc: "Municípios vizinhos compartilhando infraestrutura." },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingInfrastructure() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Infrastructure */}
        <div>
          <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Infraestrutura</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Usina e estrutura física real
            </h2>
            <p className="text-muted-foreground">
              Uma estrutura física que transforma resíduos em valor — não é abstrato, é concreto.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((a, i) => (
              <motion.div key={a.title} {...fade} transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4">
                  <a.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Models */}
        <div>
          <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Modelos</span>
            <h2 className="text-3xl font-bold text-foreground mt-3 mb-4">
              Como isso entra na prática?
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {models.map((m, i) => (
              <motion.div key={m.title} {...fade} transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ideal cities */}
        <div>
          <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-success uppercase tracking-wider">Escalabilidade</span>
            <h2 className="text-3xl font-bold text-foreground mt-3 mb-4">
              Para quais cidades isso é ideal?
            </h2>
            <p className="text-muted-foreground">O modelo é modular e escalável — serve para diferentes portes e contextos.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {cities.map((c, i) => (
              <motion.div key={c.title} {...fade} transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border p-6 text-center hover:shadow-md transition-shadow"
              >
                <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
