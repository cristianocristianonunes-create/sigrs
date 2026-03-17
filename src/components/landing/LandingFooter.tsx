import { Recycle } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg gradient-success flex items-center justify-center">
              <Recycle className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="font-bold text-foreground">SIGRS</span>
              <p className="text-xs text-muted-foreground">Sistema Integrado de Gestão de Resíduos Sólidos Urbanos</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Transformar resíduos em valor, gestão em eficiência e cidade em referência.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SIGRS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
