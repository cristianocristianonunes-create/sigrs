import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/AnimatedNumber";

const stats = [
  { value: 70, prefix: "", suffix: "%", label: "menos resíduos no aterro" },
  { value: 930, prefix: "R$ ", suffix: " mil/ano", label: "economia com aterro" },
  { value: 2.7, prefix: "R$ ", suffix: "M/ano", label: "potencial de receita" },
  { value: 80, prefix: "", suffix: "+", label: "empregos diretos" },
  { value: 70, prefix: "", suffix: "+", label: "catadores formalizados" },
  { value: 800, prefix: "", suffix: " ton", label: "CO₂ evitado por ano" },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingNumbers() {
  return (
    <section id="numeros" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(160_84%_39%_/_0.2),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">Impacto Real</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Números que falam por si
          </h2>
          <p className="text-white/60">
            Projeções baseadas em municípios com ~30 mil habitantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...fade} transition={{ delay: i * 0.08 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                {typeof s.value === "number" && s.value >= 100 ? (
                  <span>{s.prefix}{s.value.toLocaleString("pt-BR")}{s.suffix}</span>
                ) : (
                  <span>{s.prefix}{s.value}{s.suffix}</span>
                )}
              </div>
              <p className="text-white/60 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
