import type { NextPage } from "next";

export type MenuTextType = {
  className?: string;
};

const MenuText: NextPage<MenuTextType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-[5px] text-center text-lg text-neutral-white font-inter ${className}`}
    >
      <div className="w-[120px] relative leading-[8px] font-medium flex items-center justify-center h-[26px] shrink-0">
        Contáctenos
      </div>
      <img
        className="w-[5.3px] relative h-[5.3px] hidden"
        alt=""
        src="/expand.svg"
      />
    </div>
  );
};

export default MenuText;
