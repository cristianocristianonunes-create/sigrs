import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { GraduationCap, Play, CheckCircle2, Lock, Users, Settings, BookOpen } from "lucide-react";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const tracks = [
  {
    role: "Operador de Triagem",
    icon: Settings,
    progress: 65,
    modules: [
      { title: "Introdução ao SIGRS", duration: "12 min", completed: true },
      { title: "Segurança no trabalho", duration: "18 min", completed: true },
      { title: "Identificação de materiais", duration: "25 min", completed: true },
      { title: "Operação de equipamentos", duration: "30 min", completed: false },
      { title: "Controle de qualidade", duration: "20 min", completed: false },
    ],
  },
  {
    role: "Gestor Municipal",
    icon: Users,
    progress: 40,
    modules: [
      { title: "Visão geral do sistema", duration: "15 min", completed: true },
      { title: "Dashboard e indicadores", duration: "20 min", completed: true },
      { title: "Gestão financeira", duration: "22 min", completed: false },
      { title: "Relatórios e prestação de contas", duration: "18 min", completed: false },
    ],
  },
  {
    role: "Educador Ambiental",
    icon: BookOpen,
    progress: 20,
    modules: [
      { title: "Fundamentos da coleta seletiva", duration: "20 min", completed: true },
      { title: "Engajamento comunitário", duration: "25 min", completed: false },
      { title: "Materiais didáticos", duration: "15 min", completed: false },
      { title: "Campanhas de conscientização", duration: "22 min", completed: false },
    ],
  },
];

export default function Training() {
  const [activeTrack, setActiveTrack] = useState(0);
  const track = tracks[activeTrack];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <motion.div {...fade}>
        <h1 className="text-2xl font-bold mb-1">Área de Treinamento</h1>
        <p className="text-muted-foreground text-sm italic">"A equipe não apenas recebe o sistema. Ela é preparada para fazer funcionar."</p>
      </motion.div>

      {/* Track selector */}
      <div className="flex gap-3 flex-wrap">
        {tracks.map((t, i) => (
          <button
            key={t.role}
            onClick={() => setActiveTrack(i)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              i === activeTrack ? "bg-primary text-primary-foreground" : "bg-card border hover:bg-muted"
            }`}
          >
            <t.icon className="h-4 w-4" />
            {t.role}
          </button>
        ))}
      </div>

      {/* Progress */}
      <motion.div {...fade} key={activeTrack}>
        <Card>
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-sm">{track.role}</p>
              <span className="text-sm font-bold text-primary">{track.progress}% concluído</span>
            </div>
            <Progress value={track.progress} className="h-2 mb-4" />

            <div className="space-y-2">
              {track.modules.map((mod, i) => (
                <div key={mod.title} className={`flex items-center gap-3 p-3 rounded-lg border ${mod.completed ? "bg-success/5 border-success/20" : "bg-card"}`}>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                    mod.completed ? "bg-success" : "bg-muted"
                  }`}>
                    {mod.completed ? <CheckCircle2 className="h-4 w-4 text-success-foreground" /> : <Play className="h-4 w-4 text-muted-foreground" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{mod.title}</p>
                    <p className="text-xs text-muted-foreground">{mod.duration}</p>
                  </div>
                  {mod.completed && <span className="text-xs text-success font-medium">Concluído</span>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
