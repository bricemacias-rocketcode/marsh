import type { NextPage } from "next";

export type SocialLinksType = {
  className?: string;
};

const SocialLinks: NextPage<SocialLinksType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 relative h-[25px] sm:flex-[unset] sm:self-stretch ${className}`}
    >
      <div className="absolute top-[0px] right-[0.2px] flex flex-row items-center justify-start gap-[5px] sm:w-full sm:items-center sm:justify-between sm:gap-0 sm:pt-2.5 sm:pb-0 sm:box-border">
        <img
          className="w-[50.5px] relative h-[50px]"
          alt=""
          src="/social-icons.svg"
        />
        <img
          className="w-[50.5px] relative h-[50px]"
          alt=""
          src="/social-icons1.svg"
        />
        <img
          className="w-[50.5px] relative h-[50px]"
          alt=""
          src="/social-icons2.svg"
        />
        <img
          className="w-[50.5px] relative h-[50px]"
          alt=""
          src="/social-icons3.svg"
        />
      </div>
    </div>
  );
};

export default SocialLinks;
