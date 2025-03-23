import { Skeleton } from "./ui/skeleton";

const Loader = () => {
  return (
    <div className="flex flex-col gap-3 w-full pl-10 xl:pl-12 pr-8 xl:pr-20 pt-2">
      <Skeleton className="w-full h-[17px] rounded-md delay-1000" />
      <Skeleton className="w-full h-[17px] rounded-md" />
      <Skeleton className="w-2/3 h-[17px] rounded-md delay-1000" />
    </div>
  );
};

export default Loader;
