import React, { createContext, useContext, useState } from "react";

interface DemoModeContextType {
  isDemoMode: boolean;
  setIsDemoMode: (v: boolean) => void;
}

const DemoModeContext = createContext<DemoModeContextType>({ isDemoMode: false, setIsDemoMode: () => {} });

export const useDemoMode = () => useContext(DemoModeContext);

export function DemoModeProvider({ children }: { children: React.ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState(false);
  return (
    <DemoModeContext.Provider value={{ isDemoMode, setIsDemoMode }}>
      {children}
    </DemoModeContext.Provider>
  );
}
