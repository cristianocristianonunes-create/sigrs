import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Isso serve para cidades pequenas?", a: "Sim. O modelo é modular e escalável. Cidades a partir de 10 mil habitantes podem se beneficiar com a fase mínima de implantação, ajustada ao volume de resíduos local." },
  { q: "Em quanto tempo começa a funcionar?", a: "Os primeiros resultados são visíveis em até 90 dias. A coleta seletiva pode iniciar em 30 dias e a triagem em 60 dias, com acompanhamento técnico durante todo o período." },
  { q: "A prefeitura precisa construir tudo de uma vez?", a: "Não. A implantação é modular — pode começar com a fase mínima (coleta + triagem básica), validar resultados e expandir gradualmente conforme a capacidade e a demanda." },
  { q: "O projeto realmente gera receita?", a: "Sim. A comercialização de recicláveis, composto orgânico e a economia com aterro geram um retorno que pode ultrapassar R$ 2,7 milhões por ano em municípios com 30 mil habitantes." },
  { q: "Como os catadores entram no sistema?", a: "O modelo prevê a formalização de catadores em cooperativas, com capacitação, equipamentos e integração à cadeia de triagem e comercialização." },
  { q: "Como a educação ambiental participa?", a: "O SIGRS inclui um programa contínuo de educação ambiental em escolas, com materiais, atividades e acompanhamento de indicadores de engajamento." },
  { q: "O sistema ajuda na transparência da gestão?", a: "Sim. O dashboard oferece acesso a indicadores, relatórios e dados operacionais que podem ser compartilhados com a população e órgãos de controle." },
  { q: "É possível começar com um projeto piloto?", a: "Sim. Recomendamos inclusive iniciar com um projeto piloto para validar o modelo antes de uma implantação em maior escala." },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function LandingFAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div {...fade} className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div {...fade} transition={{ delay: 0.1 }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6 data-[state=open]:shadow-sm">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
