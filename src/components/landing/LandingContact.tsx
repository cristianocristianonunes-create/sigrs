import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Shield, Clock, UserCheck, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

// Formspree: acesse formspree.io, crie um formulário com o e-mail de destino
// e substitua o ID abaixo pelo ID gerado (ex: "xrgwopkj")
const FORMSPREE_ID = "SEU_FORM_ID_AQUI";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

const estados = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA",
  "PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
];

const interesses = [
  "Reduzir custos",
  "Gerar receita",
  "Melhorar gestão",
  "Implantar coleta seletiva",
];

export function LandingContact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [cargoValue, setCargoValue] = useState("");
  const [estadoValue, setEstadoValue] = useState("");

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = data.get("nome") as string;
    const email = data.get("email") as string;
    const municipio = data.get("municipio") as string;

    if (!nome?.trim() || !email?.trim() || !municipio?.trim()) {
      toast({ title: "Preencha todos os campos obrigatórios", variant: "destructive" });
      return;
    }

    setLoading(true);

    const payload = {
      nome,
      cargo: cargoValue || "Não informado",
      municipio,
      estado: estadoValue || "Não informado",
      populacao: data.get("populacao") as string,
      telefone: data.get("telefone") as string,
      email,
      interesses: selectedInterests.join(", ") || "Não informado",
      situacao: data.get("situacao") as string || "Não informada",
    };

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Erro no envio");
      }
    } catch {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato diretamente pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato-form" className="py-24 bg-muted/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(160_84%_39%_/_0.04),_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div {...fade} className="text-center mb-12">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-success mb-4">
            Solicitar proposta
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Leve o SIGRS para sua cidade
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preencha os dados abaixo e receba uma simulação personalizada com o potencial de economia, geração de receita e implantação do sistema no seu município.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center bg-card border border-border rounded-2xl p-10 shadow-lg"
          >
            <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-6">
              <Send className="h-7 w-7 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Proposta solicitada!</h3>
            <p className="text-muted-foreground leading-relaxed">
              Recebemos suas informações. Nossa equipe irá analisar o potencial do seu município e entrar em contato em breve com uma proposta personalizada.
            </p>
          </motion.div>
        ) : (
          <motion.div {...fade} className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 shadow-lg space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo *</Label>
                  <Input id="nome" name="nome" placeholder="Seu nome" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo *</Label>
                  <Select value={cargoValue} onValueChange={setCargoValue} required>
                    <SelectTrigger id="cargo"><SelectValue placeholder="Selecione" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prefeito">Prefeito(a)</SelectItem>
                      <SelectItem value="secretario">Secretário(a)</SelectItem>
                      <SelectItem value="tecnico">Técnico(a)</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="municipio">Município *</Label>
                  <Input id="municipio" name="municipio" placeholder="Nome do município" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estado">Estado *</Label>
                  <Select value={estadoValue} onValueChange={setEstadoValue} required>
                    <SelectTrigger id="estado"><SelectValue placeholder="UF" /></SelectTrigger>
                    <SelectContent>
                      {estados.map(uf => <SelectItem key={uf} value={uf}>{uf}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="populacao">População aprox. *</Label>
                  <Input id="populacao" name="populacao" type="number" placeholder="Ex: 30000" required min={1} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone / WhatsApp *</Label>
                  <Input id="telefone" name="telefone" type="tel" placeholder="(00) 00000-0000" required maxLength={20} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.gov.br" required maxLength={255} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="situacao">Situação atual dos resíduos (opcional)</Label>
                <Textarea id="situacao" name="situacao" placeholder="Descreva brevemente a realidade do seu município..." rows={3} maxLength={1000} />
              </div>

              <div className="space-y-3">
                <Label>Interesse principal (opcional)</Label>
                <div className="flex flex-wrap gap-3">
                  {interesses.map(item => (
                    <label
                      key={item}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm cursor-pointer transition-all ${
                        selectedInterests.includes(item)
                          ? "bg-success/10 border-success text-success"
                          : "bg-background border-border text-muted-foreground hover:border-success/40"
                      }`}
                    >
                      <Checkbox
                        checked={selectedInterests.includes(item)}
                        onCheckedChange={() => toggleInterest(item)}
                        className="sr-only"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-success text-success-foreground hover:bg-success/90 text-base font-semibold h-12 rounded-xl shadow-lg shadow-success/20"
              >
                {loading
                  ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Enviando...</>
                  : <><Send className="h-4 w-4 mr-2" /> Quero receber a proposta para minha cidade</>
                }
              </Button>

              <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-success" /> Sem compromisso</span>
                <span className="flex items-center gap-1.5"><UserCheck className="h-4 w-4 text-success" /> Análise personalizada</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-success" /> Retorno rápido</span>
              </div>
            </form>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-7 shadow-lg">
                <h3 className="text-lg font-bold text-foreground mb-3">Contato direto</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Prefere falar diretamente? Entre em contato pelos canais abaixo.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/5561992025579?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20SIGRS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[hsl(142_70%_45%)]/10 border border-[hsl(142_70%_45%)]/20 hover:bg-[hsl(142_70%_45%)]/20 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-success" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                      <p className="text-xs text-muted-foreground">Resposta rápida</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-7 shadow-lg">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "Cada município possui uma realidade única. Nosso objetivo é adaptar o sistema para gerar o máximo de resultado com segurança e viabilidade."
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
