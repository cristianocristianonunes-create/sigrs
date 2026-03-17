import { motion } from "framer-motion";
import { ArrowRight, Play, Leaf, TrendingUp, Shield, Zap } from "lucide-react";

const chips = [
  { icon: Leaf, text: "Até 70% menos aterro" },
  { icon: TrendingUp, text: "Receita com recicláveis" },
  { icon: Shield, text: "Implantação modular" },
  { icon: Zap, text: "Resultados em 90 dias" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export function LandingHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(160_84%_39%_/_0.15),_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-4 py-1.5 rounded-full mb-8 border border-white/10">
            <Leaf className="h-3.5 w-3.5" />
            Sistema Integrado de Gestão de Resíduos Sólidos Urbanos
          </motion.div>

          <motion.h1 {...fade(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Transforme o custo do lixo em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-400">
              receita, eficiência e legado
            </span>{" "}
            para sua cidade
          </motion.h1>

          <motion.p {...fade(0.2)} className="text-lg text-white/70 max-w-2xl mb-10 leading-relaxed">
            Um sistema integrado que une operação, usina, educação ambiental, tecnologia e gestão estratégica para reduzir custos, gerar receita e modernizar a gestão de resíduos sólidos urbanos.
          </motion.p>

          <motion.div {...fade(0.3)} className="flex flex-wrap gap-4 mb-14">
            <a href="#contato" className="inline-flex items-center gap-2 bg-success text-success-foreground font-semibold px-7 py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-success/25">
              Quero ver o projeto para minha cidade
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#solucao" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <Play className="h-4 w-4" />
              Ver como funciona
            </a>
          </motion.div>

          <motion.div {...fade(0.4)} className="flex flex-wrap gap-3">
            {chips.map((chip) => (
              <div key={chip.text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 text-sm px-4 py-2 rounded-lg border border-white/10">
                <chip.icon className="h-4 w-4 text-emerald-400 shrink-0" />
                {chip.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
