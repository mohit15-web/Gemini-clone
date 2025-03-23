import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-[#4873c9] to-[#cfd0d3]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
