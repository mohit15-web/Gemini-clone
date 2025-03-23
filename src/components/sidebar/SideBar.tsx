import { useContext, useState } from "react";
import { Assets } from "../../assets/Assets";
import { Context } from "@/contexts/Context";
import Previous from "./Previous";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { prevPrompts } = useContext(Context);
  return (
    <>
      <div
        className={`pt-6 pl-4 xl:pl-6 h-screen text-gray-600 bg-secondary dark:bg-[#1E1F20] relative ${
          isOpen ? "w-48 xl:w-64" : "w-16 xl:w-20"
        }`}
      >
        {/* top */}
        <div>
          <img
            src={Assets.Menu}
            alt=""
            className="dark:invert w-5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen ? (
            <div className="mt-16 cursor-pointer -ml-2 rounded-full py-3 px-4 max-w-fit bg-white dark:bg-[#1A1A1C] flex items-center gap-5">
              <img src={Assets.Plus} alt="" className="dark:invert w-3" />
              <label
                htmlFor="chatInput"
                className="dark:text-[#666667] text-sm font-semibold cursor-pointer"
              >
                New Chat
              </label>
            </div>
          ) : (
            <label htmlFor="chatInput">
              <div className="mt-16 cursor-pointer -ml-2 rounded-full w-12 h-12 bg-white dark:bg-[#1A1A1C] flex justify-center items-center">
                <img
                  src={Assets.Plus}
                  alt=""
                  className="dark:invert w-3 cursor-pointer"
                />
              </div>
            </label>
          )}
          {isOpen && (
            <div className="mt-5 flex flex-col gap-4">
              <p className="font-semibold dark:text-primary text-black">
                Recent
              </p>
              {prevPrompts.map((prevPrompt) => (
                <Previous prevPrompt={prevPrompt} />
              ))}
            </div>
          )}
        </div>
        {/* bottom */}
        <div className="mt-48 flex flex-col gap-5 absolute bottom-10">
          <div className="flex items-center gap-4">
            <img src={Assets.Question} alt="" className="dark:invert w-5" />
            {isOpen && (
              <p className="text-sm font-semibold dark:text-[#d2d2d2]">Help</p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <img src={Assets.History} alt="" className="dark:invert w-5" />
            {isOpen && (
              <p className="text-sm font-semibold dark:text-[#d2d2d2]">
                History
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <img src={Assets.Setting} alt="" className="dark:invert w-5" />
            {isOpen && (
              <p className="text-sm font-semibold dark:text-[#d2d2d2]">
                Setting
              </p>
            )}
          </div>
          {isOpen && (
            <div className="flex gap-1 xl:gap-2 -ml-2 xl:-ml-3 max-w-fit items-center bg-white dark:bg-[#47494A] px-2 xl:px-3 py-2 rounded-xl">
              <img
                src={Assets.Logo}
                alt=""
                className="filter hue-rotate-90 w-5 xl:w-6"
              />
              <p className="text-[10px] text-nowrap xl:text-xs font-semibold dark:text-[#d2d2d2]">
                Upgrade to Gemini Advanced
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
