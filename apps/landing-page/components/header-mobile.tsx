import type { NextPage } from "next";

export type HeaderMobileType = {
  className?: string;
};

const HeaderMobile: NextPage<HeaderMobileType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1420px] shadow-[0px_1.3px_2.7px_rgba(171,_190,_209,_0.4)] bg-darkslateblue hidden flex-row items-center justify-between py-[22px] px-12 box-border lg:gap-2.5 lg:pl-5 lg:pr-5 lg:box-border md:flex md:w-full md:pl-2.5 md:pr-2.5 md:box-border ${className}`}
    >
      <img
        className="w-[150px] relative h-[26px] object-cover min-w-[150px]"
        alt=""
        src="/image-25@2x.png"
      />
      <img className="w-[25.5px] relative h-[17px]" alt="" src="/vector.svg" />
    </div>
  );
};

export default HeaderMobile;
