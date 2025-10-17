import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const Heading = ({
  title,
  description,
  centered = false,
  className,
}: HeadingProps) => {
  return (
    <div className={cn(
      "space-y-2 mb-8", 
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
};