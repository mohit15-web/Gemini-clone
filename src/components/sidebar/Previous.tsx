import { Assets } from "@/assets/Assets";

const Previous = ({ prevPrompt }: { prevPrompt: string }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <img
          src={Assets.Message}
          alt=""
          className="dark:invert brightness-110 w-7"
        />
        <p className="text-sm font-medium dark:text-[#d2d2d2]">
          {prevPrompt.slice(0, 18)} ...
        </p>
      </div>
    </>
  );
};

export default Previous;
