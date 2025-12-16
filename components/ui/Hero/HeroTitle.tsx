interface HeroTitleProps {
  title: string;
  description: string;
}

export const HeroTitle = ({ title, description }: HeroTitleProps) => (
  <div className="gap-vertical-lg flex flex-col">
    <h1 className="text-primary font-geist text-7xl leading-tight font-bold whitespace-pre-line text-shadow-md">
      {title}
    </h1>
    <p className="text-secondary max-w-2xl text-lg leading-relaxed text-shadow-md">
      {description}
    </p>
  </div>
);
