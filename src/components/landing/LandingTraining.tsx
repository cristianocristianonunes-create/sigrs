import { motion } from "framer-motion";
import { GraduationCap, Video, BookOpen, CheckSquare, TrendingUp } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Treinamento da equipe", desc: "Capacitação completa para operadores, gestores e educadores." },
  { icon: Video, title: "Trilhas de aprendizagem", desc: "Vídeos, materiais e progresso acompanhado por função." },
  { icon: BookOpen, title: "Formação de cooperativas", desc: "Estruturação de catadores em cooperativas formalizadas." },
  { icon: TrendingUp, title: "Operação assistida", desc: "Acompanhamento técnico presencial nas primeiras semanas." },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingTraining() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fade}>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Capacitação</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              O projeto não termina na entrega
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A equipe não apenas recebe o sistema — ela é preparada para fazer funcionar. Com trilhas de aprendizagem, vídeos e acompanhamento contínuo.
            </p>
            <div className="space-y-4">
              {items.map(i => (
                <div key={i.title} className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <i.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{i.title}</h4>
                    <p className="text-sm text-muted-foreground">{i.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade} transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border p-8 shadow-lg"
          >
            <h3 className="font-bold text-foreground mb-6">Área de Membros — Treinamento</h3>
            <div className="space-y-4">
              {[
                { label: "Operadores de Triagem", progress: 85 },
                { label: "Gestores Municipais", progress: 70 },
                { label: "Educadores Ambientais", progress: 60 },
                { label: "Equipe de Coleta", progress: 45 },
              ].map(t => (
                <div key={t.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground font-medium">{t.label}</span>
                    <span className="text-muted-foreground">{t.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-primary to-success rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
