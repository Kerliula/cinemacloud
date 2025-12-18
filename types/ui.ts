import { ButtonHTMLAttributes, ReactNode } from "react";
import { Movie } from "./movie";

export interface LogoProps {
  className?: string;
  onClick?: () => void;
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
}

export interface HeroProps {
  slides: Slide[];
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  children: ReactNode;
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
  moviesList: Movie[];
}
