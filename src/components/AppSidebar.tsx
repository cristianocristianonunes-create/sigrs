import {
  LayoutDashboard,
  Calculator,
  ArrowLeftRight,
  Factory,
  Workflow,
  Users,
  DollarSign,
  BarChart3,
  Rocket,
  Shield,
  Clock,
  Settings,
  GraduationCap,
  MapPin,
  FileText,
  Recycle,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
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
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard Executivo", url: "/", icon: LayoutDashboard },
  { title: "Simulador", url: "/simulador", icon: Calculator },
  { title: "Antes vs Depois", url: "/comparativo", icon: ArrowLeftRight },
  { title: "Infraestrutura", url: "/infraestrutura", icon: Factory },
  { title: "Operação", url: "/operacao", icon: Workflow },
];

const analysisItems = [
  { title: "Fontes de Receita", url: "/receitas", icon: DollarSign },
  { title: "Indicadores (KPIs)", url: "/kpis", icon: BarChart3 },
  { title: "Resultado em 90 Dias", url: "/resultados", icon: Rocket },
];

const implItems = [
  { title: "Segurança e Risco", url: "/seguranca", icon: Shield },
  { title: "Cronograma", url: "/cronograma", icon: Clock },
  { title: "Implantação", url: "/implantacao", icon: Settings },
  { title: "Treinamento", url: "/treinamento", icon: GraduationCap },
];

const reportItems = [
  { title: "Relatório Executivo", url: "/relatorio", icon: FileText },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  const renderGroup = (label: string, items: typeof mainItems) => (
    <SidebarGroup>
      {!collapsed && <SidebarGroupLabel className="text-sidebar-muted text-xs uppercase tracking-wider">{label}</SidebarGroupLabel>}
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

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-success flex items-center justify-center shrink-0">
            <Recycle className="h-5 w-5 text-sidebar-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-sm font-bold text-sidebar-foreground">SIGRS</h1>
              <p className="text-[10px] text-sidebar-foreground/60 leading-tight">Gestão de Resíduos Sólidos</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        {renderGroup("Principal", mainItems)}
        {renderGroup("Análise", analysisItems)}
        {renderGroup("Implantação", implItems)}
        {renderGroup("Relatório", reportItems)}
      </SidebarContent>
    </Sidebar>
  );
}
