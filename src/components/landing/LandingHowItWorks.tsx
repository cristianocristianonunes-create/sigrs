import { motion } from "framer-motion";
import { Home, Truck, Filter, Leaf, Trash2, Monitor, ArrowRight } from "lucide-react";

const steps = [
  { icon: Home, title: "Separação na fonte", desc: "Programa de educação ambiental engaja a população para separar resíduos corretamente." },
  { icon: Truck, title: "Coleta seletiva", desc: "Rotas otimizadas com controle de frequência, volume e qualidade do material." },
  { icon: Filter, title: "Triagem e processamento", desc: "Central de triagem com esteiras, prensas e baias para separação eficiente." },
  { icon: Leaf, title: "Compostagem e valorização", desc: "Orgânicos transformados em composto comercializável de alta qualidade." },
  { icon: Trash2, title: "Destinação de rejeitos", desc: "Apenas o rejeito real é enviado ao aterro — redução de até 70%." },
  { icon: Monitor, title: "Monitoramento e gestão", desc: "Dashboard em tempo real com KPIs, alertas e relatórios executivos." },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingHowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Como Funciona</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Simplicidade operacional, do início ao fim
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.title} {...fade} transition={{ delay: i * 0.08 }} className="relative">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl gradient-hero flex items-center justify-center shrink-0">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-success text-success-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
