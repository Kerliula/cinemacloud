import React from "react";
import { ArrowUpDown, TrendingUp, Star, SortAsc, SortDesc } from "lucide-react";

export interface SortOption {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const ICON_SIZE = 16;

export const sortOptions: SortOption[] = [
  {
    value: "popularity.desc",
    label: "Most Popular",
    icon: <TrendingUp size={ICON_SIZE} />,
  },
  {
    value: "popularity.asc",
    label: "Least Popular",
    icon: <TrendingUp size={ICON_SIZE} className="rotate-180" />,
  },
  {
    value: "release_date.desc",
    label: "Newest First",
    icon: <SortDesc size={ICON_SIZE} />,
  },
  {
    value: "release_date.asc",
    label: "Oldest First",
    icon: <SortAsc size={ICON_SIZE} />,
  },
  {
    value: "vote_average.desc",
    label: "Highest Rated",
    icon: <Star size={ICON_SIZE} />,
  },
  {
    value: "vote_average.asc",
    label: "Lowest Rated",
    icon: <Star size={ICON_SIZE} className="opacity-60" />,
  },
  {
    value: "title.asc",
    label: "A-Z",
    icon: <ArrowUpDown size={ICON_SIZE} />,
  },
  {
    value: "title.desc",
    label: "Z-A",
    icon: <ArrowUpDown size={ICON_SIZE} className="rotate-180" />,
  },
];
