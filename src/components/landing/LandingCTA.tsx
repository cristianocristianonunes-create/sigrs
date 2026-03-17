import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingCTA() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(160_84%_39%_/_0.15),_transparent_60%)]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div {...fade}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Sua cidade pode continuar enterrando dinheiro — ou começar a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-400">
              transformar resíduos em resultado
            </span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Veja como o SIGRS pode ser adaptado à realidade do seu município com um modelo seguro, escalável e financeiramente viável.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contato" className="inline-flex items-center gap-2 bg-success text-success-foreground font-semibold px-8 py-4 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-success/25 text-lg">
              Quero uma simulação para minha cidade
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#contato" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all text-lg">
              <Calendar className="h-5 w-5" />
              Agendar apresentação
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
