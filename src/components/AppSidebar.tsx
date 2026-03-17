import {
  LayoutDashboard,
  Calculator,
  ArrowLeftRight,
  Factory,
  Workflow,
  DollarSign,
  BarChart3,
  Rocket,
  Shield,
  Clock,
  Settings,
  GraduationCap,
  FileText,
  Recycle,
  Activity,
  LogOut,
  BookOpen,
  Handshake,
  Eye,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Link, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePerfil } from "@/contexts/PerfilContext";

const simulationItems = [
  { title: "Dashboard Executivo", url: "/dashboard", icon: LayoutDashboard },
  { title: "Simulador", url: "/simulador", icon: Calculator },
  { title: "Antes vs Depois", url: "/comparativo", icon: ArrowLeftRight },
  { title: "Infraestrutura", url: "/infraestrutura", icon: Factory },
];

const operationItems = [
  { title: "Dashboard Operacional", url: "/operacional", icon: Activity },
  { title: "Operação", url: "/operacao", icon: Workflow },
  { title: "Indicadores (KPIs)", url: "/kpis", icon: BarChart3 },
  { title: "Resultado em 90 Dias", url: "/resultados", icon: Rocket },
  { title: "Segurança e Risco", url: "/seguranca", icon: Shield },
  { title: "Cronograma", url: "/cronograma", icon: Clock },
  { title: "Implantação", url: "/implantacao", icon: Settings },
  { title: "Treinamento", url: "/treinamento", icon: GraduationCap },
  { title: "Educação Ambiental", url: "/educacao", icon: BookOpen },
  { title: "Cooperativa", url: "/cooperativa", icon: Handshake },
];

const reportItems = [
  { title: "Fontes de Receita", url: "/receitas", icon: DollarSign },
  { title: "Relatório Executivo", url: "/relatorio", icon: FileText },
  { title: "Transparência", url: "/transparencia", icon: Eye },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { perfil, setPerfil } = usePerfil();
  const navigate = useNavigate();

  const handleTrocarPerfil = () => {
    setPerfil(null);
    navigate("/perfil");
  };

  const renderGroup = (label: string, items: typeof simulationItems, color?: string) => (
    <SidebarGroup>
      {!collapsed && (
        <SidebarGroupLabel className="text-sidebar-muted text-xs uppercase tracking-wider flex items-center gap-2">
          {color && <span className={`h-2 w-2 rounded-full ${color}`} />}
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.url}
                  end={item.url === "/"}
                  className="text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
                  activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                >
                  <item.icon className="mr-2 h-4 w-4 shrink-0" />
                  {!collapsed && <span className="text-sm">{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  const homeUrl = perfil === "operacional" ? "/operacional" : "/dashboard";

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="p-4">
        <Link to={homeUrl} className="flex items-center gap-2 cursor-pointer group">
          <div className="h-8 w-8 rounded-lg gradient-success flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Recycle className="h-5 w-5 text-sidebar-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-sm font-bold text-sidebar-foreground">SIGRS</h1>
              <p className="text-[10px] text-sidebar-foreground/60 leading-tight">Gestão de Resíduos Sólidos</p>
            </div>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {perfil === "executivo" && (
          <>
            {renderGroup("Simulação / Decisão", simulationItems, "bg-primary-foreground")}
            {renderGroup("Relatório", reportItems)}
          </>
        )}
        {perfil === "operacional" && (
          renderGroup("Operação Real", operationItems, "bg-green-400")
        )}
        {!perfil && (
          <>
            {renderGroup("Simulação / Decisão", simulationItems, "bg-primary-foreground")}
            {renderGroup("Operação Real", operationItems, "bg-green-400")}
            {renderGroup("Relatório", reportItems)}
          </>
        )}
      </SidebarContent>
      <SidebarFooter className="p-4">
        <button
          onClick={handleTrocarPerfil}
          className="flex items-center gap-2 text-sidebar-foreground/50 hover:text-sidebar-foreground/90 transition-colors text-xs w-full"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Trocar perfil</span>}
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
