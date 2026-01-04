import { ButtonHTMLAttributes, ReactNode } from "react";
import { Movie } from "./movie";
import { sortOptions } from "@/lib/sortOptions";
import { filterOptions } from "@/lib/filterOptions";

export interface LogoProps {
  className?: string;
  onClick?: () => void;
  linkHref?: string;
}

export interface NavItem {
  id: string | number;
  name: string;
  count?: number;
  href: string;
}

export interface Slide {
  title: string;
  description: string;
  year: string;
  genres: string[];
  background?: string;
  movieId?: number;
}

export interface HeroProps {
  slides: Slide[];
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  children?: ReactNode;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  hideLabel?: boolean;
}

export interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export interface LoginFormProps {
  onSwitch?: () => void;
  onClose?: () => void;
}

export interface RegisterFormProps {
  onSwitch?: () => void;
  onClose?: () => void;
}

export interface AuthFooterProps {
  prompt: React.ReactNode;
  actionLabel?: string;
  onSwitchAction?: () => void;
}

export interface CheckboxProps {
  id?: string;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  required?: boolean;
}

export interface TrendingMovieListProps {
  className?: string;
  showTitle?: boolean;
  moviesList: Movie[];
  title?: string;
  justify?: "start" | "center" | "end" | "between" | "around";
  layout?: "horizontal" | "vertical-grid";
}

export interface TitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export interface MoviePlayerAndInfoProps {
  movie: {
    title: string;
    description: string;
    year: string;
    genres: string[];
    rating: number;
    duration: string;
    director: string;
    cast: string[];
    src: string;
    poster: string;
  };
}

export interface MovieScenesProps {
  scenes: string[];
  scrollAmount?: number;
  imageWidth?: number;
  imageHeight?: number;
}

export interface MoviesSorterProps {
  onSortChange?: (sortValue: string) => void;
  defaultValue?: string;
  className?: string;
}

export interface SortOptionItemProps {
  option: (typeof sortOptions)[number];
  isSelected: boolean;
  onSelect: (value: string) => void;
}

export interface MoviesFilterProps {
  onFilterChange?: (filters: Record<string, string[]>) => void;
  defaultFilters?: Record<string, string[]>;
  className?: string;
}

export interface FilterOptionItemProps {
  filter: (typeof filterOptions)[number];
  selectedValues: string[];
  onToggle: (filterId: string, value: string) => void;
}
export interface FilterMenuProps {
  isOpen: boolean;
  selectedFilters: Record<string, string[]>;
  onToggleFilter: (filterId: string, value: string) => void;
  onClose: () => void;
  onApply: () => void;
  onClear: () => void;
}

export interface ListPageProps {
  title: string;
  itemsList: Movie[];
  showFilter?: boolean;
  showSorter?: boolean;
  showPagination?: boolean;
}

export interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSettingsClick: () => void;
  onSignOutClick: () => void;
  onMoviesListClick: () => void;
  onAdminClick: () => void;
  className?: string;
  id?: string;
  isAdmin?: boolean;
}

export interface AdminStatBlock {
  title: string;
  value: string;
  Icon: React.ElementType;
}

export interface AdminButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  Icon?: React.ElementType;
  loading?: boolean;
  fullWidth?: boolean;
}

export interface MovieTableProps {
  movies: Movie[];
  onEdit: (movie: Movie) => void;
  onDelete: (movie: Movie) => void;
}

export interface AdminPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  colorMode?: "light" | "dark" | "medium";
  label?: string;
  hideLabel?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  colorMode?: "light" | "dark" | "medium";
  label?: string;
  hideLabel?: boolean;
  options: Array<{ value: string | number; label: string }>;
}

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps {
  label?: string;
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  className?: string;
  colorMode?: "light" | "dark" | "medium";
}

export interface MultiImageUploadProps {
  label?: string;
  value?: File[];
  onChange?: (files: File[]) => void;
  maxFiles?: number;
  className?: string;
  accept?: string;
}

export interface UseMultiImageUploadProps {
  value: File[];
  onChange?: (files: File[]) => void;
  maxFiles?: number;
}

export interface User extends Record<string, unknown> {
  id: number;
  Email: string;
  Role: string;
  "Created At": string;
}

export interface UsersColumnDef<
  T extends Record<string, unknown> = Record<string, unknown>,
> {
  key: string;
  header: string;
  render?: (row: T, index: number) => React.ReactNode;
  className?: string;
}

export interface TableProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> {
  columns: string[] | UsersColumnDef<T>[];
  data: T[];
}
