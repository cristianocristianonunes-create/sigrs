import { createContext, useContext, useState, ReactNode } from "react";

export type Perfil = "executivo" | "operacional" | null;

interface PerfilContextType {
  perfil: Perfil;
  setPerfil: (p: Perfil) => void;
}

const PerfilContext = createContext<PerfilContextType>({
  perfil: null,
  setPerfil: () => {},
});

export function PerfilProvider({ children }: { children: ReactNode }) {
  const [perfil, setPerfil] = useState<Perfil>(() => {
    const saved = localStorage.getItem("sigrs_perfil");
    return (saved as Perfil) ?? null;
  });

  const handleSetPerfil = (p: Perfil) => {
    if (p) localStorage.setItem("sigrs_perfil", p);
    else localStorage.removeItem("sigrs_perfil");
    setPerfil(p);
  };

  return (
    <PerfilContext.Provider value={{ perfil, setPerfil: handleSetPerfil }}>
      {children}
    </PerfilContext.Provider>
  );
}

export function usePerfil() {
  return useContext(PerfilContext);
}
