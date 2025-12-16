export interface LogoProps {
  className?: string;
  size?: number;
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
