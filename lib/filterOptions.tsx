import React from "react";
import { Calendar, Star, Filter } from "lucide-react";

export interface FilterOption {
  id: string;
  label: string;
  type: "year" | "rating" | "genre";
  icon: React.ReactNode;
  options?: string[];
}

const ICON_SIZE = 16;

export const filterOptions: FilterOption[] = [
  {
    id: "year",
    label: "Release Year",
    type: "year",
    icon: <Calendar className="text-primary" size={ICON_SIZE} />,
    options: ["2024", "2023", "2022", "2021", "2020", "2019", "Older"],
  },
  {
    id: "rating",
    label: "Rating",
    type: "rating",
    icon: <Star className="text-primary" size={ICON_SIZE} />,
    options: ["9+", "8+", "7+", "6+", "5+", "All"],
  },
  {
    id: "genre",
    label: "Genre",
    type: "genre",
    icon: <Filter className="text-primary" size={ICON_SIZE} />,
    options: ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"],
  },
];
