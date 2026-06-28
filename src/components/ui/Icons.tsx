import {
  Bot,
  Zap,
  Cpu,
  GitBranch,
  Briefcase,
  Youtube,
  Paintbrush,
  ShoppingBag,
  TrendingUp,
  Layout,
  DollarSign,
  Clock,
  GraduationCap,
  Target,
  Map,
  BookOpen,
  Video,
  Layers,
  Repeat,
  Code2,
  BarChart3,
  Workflow,
  Sparkles,
  type LucideProps,
} from "lucide-react";
import { ComponentType } from "react";

export type IconName =
  | "bot" | "zap" | "cpu" | "git-branch" | "briefcase" | "youtube"
  | "paintbrush" | "shopping-bag" | "trending-up" | "layout" | "dollar-sign"
  | "clock" | "graduation-cap" | "target" | "map" | "book-open" | "video"
  | "layers" | "repeat" | "code2" | "bar-chart" | "workflow" | "sparkles";

const iconMap: Record<IconName, ComponentType<LucideProps>> = {
  bot: Bot,
  zap: Zap,
  cpu: Cpu,
  "git-branch": GitBranch,
  briefcase: Briefcase,
  youtube: Youtube,
  paintbrush: Paintbrush,
  "shopping-bag": ShoppingBag,
  "trending-up": TrendingUp,
  layout: Layout,
  "dollar-sign": DollarSign,
  clock: Clock,
  "graduation-cap": GraduationCap,
  target: Target,
  map: Map,
  "book-open": BookOpen,
  video: Video,
  layers: Layers,
  repeat: Repeat,
  code2: Code2,
  "bar-chart": BarChart3,
  workflow: Workflow,
  sparkles: Sparkles,
};

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const Component = iconMap[name];
  if (!Component) return null;
  return <Component {...props} />;
}
