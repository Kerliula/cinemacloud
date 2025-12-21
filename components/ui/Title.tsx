import { cn } from "@/lib/utils";
import { TitleProps } from "@/types/ui";

export default function Title({
  children,
  className,
  as: Tag = "h1",
}: TitleProps) {
  return (
    <Tag
      className={cn(
        "text-primary font-geist leading-tight font-bold whitespace-pre-line uppercase text-shadow-md",
        "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}
