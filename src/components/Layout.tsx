import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useDemoMode } from "@/contexts/DemoModeContext";
import { Switch } from "@/components/ui/switch";
import { Eye } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const { isDemoMode, setIsDemoMode } = useDemoMode();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center border-b bg-card px-4 shrink-0">
            <SidebarTrigger className="mr-4" />
            <span className="text-sm text-muted-foreground flex-1">Sistema Integrado de Gestão de Resíduos Sólidos Urbanos</span>
            <div className="flex items-center gap-2 ml-4">
              <Eye className={`h-4 w-4 transition-colors ${isDemoMode ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-xs font-medium transition-colors ${isDemoMode ? "text-primary" : "text-muted-foreground"}`}>
                Modo Demonstração
              </span>
              <Switch checked={isDemoMode} onCheckedChange={setIsDemoMode} />
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
