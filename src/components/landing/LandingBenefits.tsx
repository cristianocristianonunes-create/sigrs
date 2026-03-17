import { motion } from "framer-motion";
import { DollarSign, Settings, Leaf, Users, Building2 } from "lucide-react";

const categories = [
  {
    icon: DollarSign, title: "Financeiro", color: "bg-success/10 text-success",
    items: ["Redução de custo com aterro", "Geração de receita com recicláveis e composto", "Payback demonstrável em projeções reais"],
  },
  {
    icon: Settings, title: "Operacional", color: "bg-primary/10 text-primary",
    items: ["Rotas de coleta organizadas e otimizadas", "Dados operacionais em tempo real", "Gestão mais eficiente e previsível"],
  },
  {
    icon: Leaf, title: "Ambiental", color: "bg-success/10 text-success",
    items: ["Até 70% menos resíduos no aterro", "Redução significativa de emissões de CO₂", "Eliminação de mini-lixões e descartes irregulares"],
  },
  {
    icon: Users, title: "Social", color: "bg-primary/10 text-primary",
    items: ["Catadores formalizados em cooperativas", "50 a 80 empregos diretos gerados", "Escolas engajadas em educação ambiental"],
  },
  {
    icon: Building2, title: "Institucional", color: "bg-primary/10 text-primary",
    items: ["Maior transparência na gestão pública", "Segurança jurídica e conformidade PNRS", "Fortalecimento da imagem da administração"],
  },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingBenefits() {
  return (
    <section id="beneficios" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Benefícios</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            O que sua prefeitura ganha
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.title} {...fade} transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl border p-6 hover:shadow-md transition-shadow"
            >
              <div className={`h-10 w-10 rounded-lg ${cat.color.split(" ")[0]} flex items-center justify-center mb-4`}>
                <cat.icon className={`h-5 w-5 ${cat.color.split(" ")[1]}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-3">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map(item => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-success mt-1 shrink-0">•</span>
                    {item}
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
