import { ButtonHTMLAttributes, ReactNode } from "react";

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
  icon?: ReactNode;
  children: ReactNode;
}
