import { motion } from "framer-motion";
import { CheckCircle2, Rocket } from "lucide-react";

const results = [
  "Coleta seletiva em operação",
  "Equipe treinada e operando",
  "Primeiros fardos de recicláveis comercializados",
  "Redução de reclamações da população",
  "Primeiros catadores formalizados",
  "Escolas iniciando programa de educação ambiental",
  "Dashboard operacional ativo com indicadores",
  "Primeiras métricas de desvio de aterro registradas",
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingResults90() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-success uppercase tracking-wider">Resultados Rápidos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            O que acontece nos primeiros 90 dias
          </h2>
          <p className="text-muted-foreground">
            Resultados visíveis desde o início. Nada de projeto engavetado.
          </p>
        </motion.div>

        <motion.div {...fade} transition={{ delay: 0.1 }}
          className="bg-card rounded-xl border p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-lg gradient-success flex items-center justify-center">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Primeiros 90 dias de operação</h3>
              <p className="text-sm text-muted-foreground">Marcos alcançados com acompanhamento técnico</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {results.map((r, i) => (
              <motion.div key={r} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.05 }}
                className="flex items-start gap-2.5 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{r}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
