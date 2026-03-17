import { motion } from "framer-motion";
import { DollarSign, EyeOff, Trash2, TrendingDown, Users, School } from "lucide-react";

const problems = [
  { icon: DollarSign, title: "Alto custo com coleta e aterro", desc: "Milhões gastos anualmente em contratos ineficientes e taxas crescentes de destinação." },
  { icon: EyeOff, title: "Ausência de controle em tempo real", desc: "Sem dados confiáveis sobre rotas, volumes, eficiência ou custos operacionais." },
  { icon: TrendingDown, title: "Baixa taxa de reciclagem", desc: "Menos de 5% dos resíduos são efetivamente reciclados na maioria dos municípios." },
  { icon: Trash2, title: "Descarte inadequado", desc: "Mini-lixões, queimadas e contaminação de solo e mananciais." },
  { icon: DollarSign, title: "Perda de receita com recicláveis", desc: "Materiais com alto valor de mercado são enterrados junto com rejeitos." },
  { icon: Users, title: "Desarticulação social", desc: "Catadores informais, escolas sem programa ambiental e população sem engajamento." },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingProblem() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-loss uppercase tracking-wider">O Problema</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            O que sua cidade enfrenta hoje
          </h2>
          <p className="text-muted-foreground text-lg">
            "Hoje, a maioria dos municípios paga caro para enterrar valor."
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div key={p.title} {...fade} transition={{ delay: i * 0.07 }}
              className="bg-card rounded-xl border p-6 hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-lg bg-loss/10 flex items-center justify-center mb-4">
                <p.icon className="h-5 w-5 text-loss" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
