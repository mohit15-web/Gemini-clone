type Card = {
  text: string;
  icon: React.ReactNode;
};

const Suggestions = ({ text, icon }: Card) => {
  return (
    <div className="w-[9.5rem] xl:w-[12rem] h-[9.5rem] xl:h-[12rem] p-2 xl:p-4 bg-muted dark:bg-[#1E1F20] rounded-lg relative cursor-pointer">
      <p className="text-sm xl:text-[16px]">{text}</p>
      <div className="absolute right-2 xl:right-3 bottom-2  xl:bottom-3 h-10 xl:h-12 flex items-center justify-center w-10 xl:w-12 rounded-full bg-white dark:bg-[#09090B]">
        {icon}
      </div>
    </div>
  );
};

export default Suggestions;
