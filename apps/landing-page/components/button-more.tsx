import type { NextPage } from "next";

export type ButtonMoreType = {
  className?: string;
};

const ButtonMore: NextPage<ButtonMoreType> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer border-darkslateblue border-[1px] border-solid py-6 px-[30px] bg-neutral-white rounded-md box-border h-12 flex flex-row items-center justify-start ${className}`}
      id="more"
    >
      <div className="w-[108px] relative text-lg leading-[50px] font-medium font-inter text-darkslateblue text-center flex items-center justify-center h-12 shrink-0">
        Conoce más
      </div>
    </button>
  );
};

export default ButtonMore;
