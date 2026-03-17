import { motion } from "framer-motion";
import { Recycle, Factory, Truck, Monitor, GraduationCap, School, BarChart3, FileText, Leaf } from "lucide-react";

const features = [
  { icon: Truck, label: "Coleta seletiva" },
  { icon: Factory, label: "Central de tratamento" },
  { icon: Recycle, label: "Triagem e compostagem" },
  { icon: Leaf, label: "Logística de rejeitos" },
  { icon: Monitor, label: "Plataforma tecnológica" },
  { icon: BarChart3, label: "Indicadores em tempo real" },
  { icon: GraduationCap, label: "Capacitação de equipes" },
  { icon: School, label: "Educação ambiental" },
  { icon: FileText, label: "Transparência e prestação de contas" },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingSolution() {
  return (
    <section id="solucao" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-success uppercase tracking-wider">A Solução</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Uma solução completa para transformar resíduos em resultado
          </h2>
          <p className="text-muted-foreground text-lg">
            Não é só software. Não é só usina. É um modelo completo que integra operação, tecnologia, pessoas e gestão.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div key={f.label} {...fade} transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 bg-card rounded-xl border p-5 hover:shadow-sm transition-shadow"
            >
              <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                <f.icon className="h-5 w-5 text-success" />
              </div>
              <span className="font-medium text-foreground">{f.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
