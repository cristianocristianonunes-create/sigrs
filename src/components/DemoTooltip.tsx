import { useDemoMode } from "@/contexts/DemoModeContext";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type DataType = "automático" | "manual" | "integrado";

interface DemoTooltipProps {
  children: React.ReactNode;
  origin: string;
  type: DataType;
  responsible: string;
}

const typeColors: Record<DataType, string> = {
  automático: "bg-success/15 text-success border-success/30",
  manual: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  integrado: "bg-primary/15 text-primary border-primary/30",
};

export function DemoTooltip({ children, origin, type, responsible }: DemoTooltipProps) {
  const { isDemoMode } = useDemoMode();

  if (!isDemoMode) return <>{children}</>;

  return (
    <div className="relative rounded-lg border-2 border-dashed border-primary/30 transition-all">
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="absolute -top-2 -right-2 z-10 h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:scale-110 transition-transform">
              <Info className="h-3 w-3" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs p-3 space-y-2">
            <p className="text-xs font-medium">📊 {origin}</p>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${typeColors[type]}`}>
                {type}
              </Badge>
              <span className="text-[10px] text-muted-foreground">· {responsible}</span>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {children}
    </div>
  );
}
