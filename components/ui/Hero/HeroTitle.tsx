import { cn } from "@/lib/utils";
import Title from "@/components/ui/Title";

interface HeroTitleProps {
  title: string;
  description: string;
}

export const HeroTitle = ({ title, description }: HeroTitleProps) => (
  <div className="gap-vertical-md flex flex-col justify-between">
    <Title as="h1">{title}</Title>
    <p
      className={cn(
        "text-secondary leading-relaxed text-shadow-md",
        "max-w-lg text-sm",
        "md:max-w-xl md:text-base",
        "lg:max-w-2xl lg:text-lg"
      )}
    >
      {description}
    </p>
  </div>
);
