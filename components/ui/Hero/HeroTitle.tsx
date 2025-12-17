interface HeroTitleProps {
  title: string;
  description: string;
}

export const HeroTitle = ({ title, description }: HeroTitleProps) => (
  <div className="gap-vertical-lg flex flex-col">
    <h1 className="text-primary font-geist text-4xl leading-tight font-bold whitespace-pre-line text-shadow-md md:text-5xl lg:text-6xl xl:text-7xl">
      {title}
    </h1>
    <p className="text-secondary max-w-lg text-sm leading-relaxed text-shadow-md md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
      {description}
    </p>
  </div>
);
