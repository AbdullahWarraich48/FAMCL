import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertOctagon,
  AlertTriangle,
  Anchor,
  ArrowLeftRight,
  BadgeCheck,
  BadgePercent,
  BarChart3,
  Boxes,
  Building2,
  Calculator,
  CalendarClock,
  CheckSquare,
  CircleDollarSign,
  ClipboardCheck,
  Clock,
  Eye,
  Factory,
  FileCheck2,
  FileWarning,
  FlaskConical,
  HardHat,
  HeartHandshake,
  Leaf,
  LineChart,
  MessageSquare,
  Monitor,
  Network,
  PieChart,
  Receipt,
  Scale,
  Search,
  Settings2,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type { BookkeepingFactsIconKey } from "@/data/bookkeeping/factsData";
import type { BookkeepingServiceScopeIconKey } from "@/data/bookkeeping/serviceScopeData";
import type { BookkeepingSolutionIconKey } from "@/data/bookkeeping/solutionData";
import type { BookkeepingWhyMattersIconKey } from "@/data/bookkeeping/whyMattersData";

/** Card / row content icons — driven by `iconKey` in section data */
export const SERVICE_SCOPE_LUCIDE: Record<
  BookkeepingServiceScopeIconKey,
  LucideIcon
> = {
  "document-check": FileCheck2,
  "bar-chart": BarChart3,
  shield: Shield,
  eye: Eye,
  "trend-up": TrendingUp,
  "hard-hat": HardHat,
  calculator: Calculator,
  "receipt-tax": Receipt,
  "badge-check": BadgeCheck,
  target: Target,
  flask: FlaskConical,
  boxes: Boxes,
  factory: Factory,
  users: Users,
  "calendar-clock": CalendarClock,
  "badge-percent": BadgePercent,
  network: Network,
  "message-square": MessageSquare,
  search: Search,
  scale: Scale,
};

export const WHY_MATTERS_LUCIDE: Record<
  BookkeepingWhyMattersIconKey,
  LucideIcon
> = {
  "alert-triangle": AlertTriangle,
  "check-square": CheckSquare,
  shield: Shield,
  activity: Activity,
  "circle-dollar": CircleDollarSign,
  zap: Zap,
  "trend-up": TrendingUp,
  clock: Clock,
  "clipboard-check": ClipboardCheck,
  "alert-octagon": AlertOctagon,
  scale: Scale,
  "chart-line": LineChart,
  eye: Eye,
  flask: FlaskConical,
  cogs: Settings2,
  leaf: Leaf,
  "heart-check": HeartHandshake,
  anchor: Anchor,
  "arrow-left-right": ArrowLeftRight,
};

export const FACTS_LUCIDE: Record<BookkeepingFactsIconKey, LucideIcon> = {
  trend: TrendingUp,
  "file-warning": FileWarning,
  building: Building2,
  "chart-pie": PieChart,
  "alert-octagon": AlertOctagon,
  clock: Clock,
  users: Users,
  flask: FlaskConical,
  "badge-percent": BadgePercent,
};

export const SOLUTION_LUCIDE: Record<
  BookkeepingSolutionIconKey,
  LucideIcon
> = {
  search: Search,
  cogs: Settings2,
  message: MessageSquare,
  "bar-chart": BarChart3,
  "heart-check": HeartHandshake,
  "hard-hat": HardHat,
  calculator: Calculator,
  "document-check": FileCheck2,
  "receipt-tax": Receipt,
  "badge-check": BadgeCheck,
  target: Target,
  boxes: Boxes,
  flask: FlaskConical,
  factory: Factory,
  clock: Clock,
  network: Network,
  "calendar-clock": CalendarClock,
  monitor: Monitor,
};
