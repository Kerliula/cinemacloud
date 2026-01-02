import { cn } from "@/lib/utils";
import { AdminStatBlock } from "@/types/ui";

const StatBlock = ({ title, value, Icon }: AdminStatBlock) => {
  return (
    <div
      key={title}
      className={cn(
        "rounded-lg border border-white/10 bg-black/20 p-6",
        "backdrop-blur-sm"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="gap-vertical-sm flex flex-col">
          <p className="text-secondary text-sm">{title}</p>
          <p className="text-primary text-3xl font-bold">{value}</p>
        </div>
        <div className="rounded-full bg-red-600/20 p-3">
          <Icon className="h-6 w-6 text-red-400" />
        </div>
      </div>
    </div>
  );
};

export default StatBlock;
