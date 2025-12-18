import { cn } from "@/lib/utils";

interface HeroTitleProps {
  title: string;
  description: string;
}

export const HeroTitle = ({ title, description }: HeroTitleProps) => (
  <div className="flex flex-col justify-between">
    <h1
      className={cn(
        "text-primary font-geist text-shadow-md",
        "text-4xl leading-tight font-bold whitespace-pre-line",
        "md:text-5xl lg:text-6xl xl:text-7xl"
      )}
    >
      {title}
    </h1>
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
