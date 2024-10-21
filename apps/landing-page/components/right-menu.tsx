import type { NextPage } from "next";
import Menu from "./menu";
import MenuText from "./menu-text";
import ButtonIdioma from "./button-idioma";

export type RightMenuType = {
  className?: string;
};

const RightMenu: NextPage<RightMenuType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-center justify-end flex-wrap content-center gap-5 text-center text-lg text-neutral-white font-inter lg:gap-[5px] ${className}`}
    >
      <Menu industrias="Industrias" />
      <Menu
        industrias="Servicios"
        industriasWidth="86px"
        industriasFlex="unset"
      />
      <Menu
        industrias="Riesgos"
        industriasWidth="86px"
        industriasFlex="unset"
      />
      <Menu
        industrias="Perspectivas"
        industriasWidth="121px"
        industriasFlex="unset"
      />
      <Menu industrias="Acerca de" industriasWidth="unset" industriasFlex="1" />
      <MenuText />
      <ButtonIdioma />
    </div>
  );
};

export default RightMenu;
