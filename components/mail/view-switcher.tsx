import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ViewSwitcherProps {
  view: "normal" | "chat";
  onViewChange: (view: "normal" | "chat") => void;
}

export function ViewSwitcher({ view, onViewChange }: ViewSwitcherProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onViewChange(view === "normal" ? "chat" : "normal")}
          className="h-8 w-8"
        >
          {view === "normal" ? <MessageSquare className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {view === "normal" ? "Switch to Chat View" : "Switch to Normal View"}
      </TooltipContent>
    </Tooltip>
  );
}
