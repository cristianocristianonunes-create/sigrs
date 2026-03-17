import { motion } from "framer-motion";
import { Monitor, BarChart3, Calculator, FileText, Eye, Gauge } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Monitor, title: "Dashboard Executivo", desc: "Visão completa da operação em uma única tela." },
  { icon: BarChart3, title: "Indicadores em Tempo Real", desc: "KPIs de eficiência, custo e receita atualizados." },
  { icon: Calculator, title: "Simulador de Município", desc: "Projeções personalizadas por população e porte." },
  { icon: FileText, title: "Relatórios Executivos", desc: "Documentos prontos para apresentação e decisão." },
  { icon: Eye, title: "Transparência Pública", desc: "Dados acessíveis para prestação de contas." },
  { icon: Gauge, title: "Acompanhamento Operacional", desc: "Controle de rotas, volumes e equipes." },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingTechnology() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Tecnologia</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Controle total na palma da gestão
          </h2>
          <p className="text-muted-foreground text-lg">
            A plataforma SIGRS transforma dados em decisões inteligentes para a gestão municipal.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {features.map((f, i) => (
            <motion.div key={f.title} {...fade} transition={{ delay: i * 0.06 }}
              className="bg-card rounded-xl border p-6 hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade} className="text-center">
          <Link to="/perfil"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Explorar a plataforma
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
