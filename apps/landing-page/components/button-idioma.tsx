import type { NextPage } from "next";

export type ButtonIdiomaType = {
  className?: string;
};

const ButtonIdioma: NextPage<ButtonIdiomaType> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer border-neutral-white border-[3px] border-solid py-[4.7px] px-[10.7px] bg-gray rounded-31xl box-border h-12 flex flex-row items-center justify-center gap-[2.7px] min-w-[119px] ${className}`}
      id="idioma"
    >
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/fontistoworldo.svg"
      />
      <div className="flex-1 relative text-base tracking-[0.1em] leading-[8px] font-medium font-inter text-neutral-white text-center">
        MX - ES
      </div>
    </button>
  );
};

export default ButtonIdioma;
