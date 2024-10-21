import type { NextPage } from "next";
import ImageIconMarsh from "./image-icon-marsh";
import RightMenu from "./right-menu";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_1.3px_2.7px_rgba(171,_190,_209,_0.4)] bg-darkslateblue flex flex-row items-center justify-center py-[22px] px-12 gap-5 text-center text-lg text-neutral-white font-inter lg:gap-2.5 lg:pl-5 lg:pr-5 lg:box-border md:hidden md:pl-2.5 md:pr-2.5 md:box-border ${className}`}
    >
      <ImageIconMarsh />
      <RightMenu />
    </div>
  );
};

export default Header;
