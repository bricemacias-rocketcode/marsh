import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MenuType = {
  className?: string;
  industrias?: string;

  /** Style props */
  industriasWidth?: CSSProperties["width"];
  industriasFlex?: CSSProperties["flex"];
};

const Menu: NextPage<MenuType> = ({
  className = "",
  industrias,
  industriasWidth,
  industriasFlex,
}) => {
  const industriasStyle: CSSProperties = useMemo(() => {
    return {
      width: industriasWidth,
      flex: industriasFlex,
    };
  }, [industriasWidth, industriasFlex]);

  return (
    <div
      className={`flex flex-row items-center justify-center gap-[5px] text-center text-lg text-neutral-white font-inter ${className}`}
    >
      <div
        className="w-[86px] relative leading-[8px] font-medium flex items-center justify-center h-[26px] shrink-0"
        style={industriasStyle}
      >
        {industrias}
      </div>
      <img
        className="w-6 relative h-3 overflow-hidden shrink-0 object-contain"
        alt=""
        src="/weuiarrowfilled@2x.png"
      />
      <img
        className="w-[5.3px] relative h-[5.3px] hidden"
        alt=""
        src="/expand.svg"
      />
    </div>
  );
};

export default Menu;
