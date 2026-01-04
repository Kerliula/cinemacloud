import {
  LayoutDashboard,
  Film,
  Tv,
  Users,
  Settings,
  TrendingUp,
  UserStar,
  Star,
} from "lucide-react";
import { User } from "@/types/ui";

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
  {
    title: "Total Favorites Added",
    value: "45K",
    icon: Star,
    change: "+10%",
    changeType: "positive" as const,
  },
  {
    title: "Favorites per User",
    value: "3.6",
    icon: UserStar,
    change: "+5%",
    changeType: "positive" as const,
  },
];

export const MOVIE_GENRES = [
  { value: "action", label: "Action" },
  { value: "adventure", label: "Adventure" },
  { value: "animation", label: "Animation" },
  { value: "biography", label: "Biography" },
  { value: "comedy", label: "Comedy" },
  { value: "crime", label: "Crime" },
  { value: "documentary", label: "Documentary" },
  { value: "drama", label: "Drama" },
  { value: "family", label: "Family" },
  { value: "fantasy", label: "Fantasy" },
  { value: "film-noir", label: "Film Noir" },
  { value: "history", label: "History" },
  { value: "horror", label: "Horror" },
  { value: "music", label: "Music" },
  { value: "musical", label: "Musical" },
  { value: "mystery", label: "Mystery" },
  { value: "romance", label: "Romance" },
  { value: "sci-fi", label: "Sci-Fi" },
  { value: "sport", label: "Sport" },
  { value: "thriller", label: "Thriller" },
  { value: "war", label: "War" },
  { value: "western", label: "Western" },
];

export const DUMMY_USERS: User[] = [
  {
    id: 1,
    Email: "admin@example.com",
    Role: "Admin",
    "Created At": "2024-01-01",
  },
  {
    id: 2,
    Email: "user1@example.com",
    Role: "User",
    "Created At": "2024-02-15",
  },
  {
    id: 3,
    Email: "user2@example.com",
    Role: "User",
    "Created At": "2024-03-22",
  },
  {
    id: 4,
    Email: "moderator@example.com",
    Role: "Moderator",
    "Created At": "2024-04-10",
  },
  {
    id: 5,
    Email: "user3@example.com",
    Role: "User",
    "Created At": "2024-05-05",
  },
];

export const UPLOAD_TYPES = [
  { value: "embed", label: "Embed link", disabled: false },
  { value: "upload", label: "Upload file", disabled: true },
];
