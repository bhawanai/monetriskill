"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icons";

interface OptionCardProps {
  label: string;
  sub?: string;
  icon: IconName;
  value: string;
  selected: boolean;
  onClick: () => void;
}

export function OptionCard({ label, sub, icon, selected, onClick }: OptionCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-4 w-full p-4 rounded-xl border text-left transition-all duration-200",
        selected
          ? "bg-violet-600/15 border-violet-500/50 text-white"
          : "bg-white/[0.03] border-white/8 text-white/60 hover:bg-white/[0.06] hover:border-white/15 hover:text-white"
      )}
    >
      <div className={cn(
        "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all",
        selected ? "bg-violet-500/20" : "bg-white/5"
      )}>
        <Icon
          name={icon}
          size={17}
          className={selected ? "text-violet-400" : "text-white/40"}
          strokeWidth={1.5}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium leading-tight">{label}</div>
        {sub && (
          <div className={cn("text-xs mt-0.5", selected ? "text-violet-300/60" : "text-white/25")}>
            {sub}
          </div>
        )}
      </div>
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0"
        >
          <Check size={11} className="text-white" strokeWidth={2.5} />
        </motion.div>
      )}
    </motion.button>
  );
}
