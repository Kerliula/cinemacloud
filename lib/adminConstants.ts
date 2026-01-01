import {
  LayoutDashboard,
  Film,
  Tv,
  Users,
  Settings,
  TrendingUp,
} from "lucide-react";

export const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/movies", label: "Movies", icon: Film },
  { href: "/admin/series", label: "Series", icon: Tv },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export const STAT_BLOCKS = [
  {
    title: "Total Movies",
    value: "1,234",
    icon: Film,
    change: "+12%",
    changeType: "positive" as const,
  },
  {
    title: "Total Series",
    value: "567",
    icon: Tv,
    change: "+8%",
    changeType: "positive" as const,
  },
  {
    title: "Active Users",
    value: "12,456",
    icon: Users,
    change: "+23%",
    changeType: "positive" as const,
  },
  {
    title: "Total Views",
    value: "234K",
    icon: TrendingUp,
    change: "+15%",
    changeType: "positive" as const,
  },
];
