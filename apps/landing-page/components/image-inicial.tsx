import type { NextPage } from "next";
import FrameComponentHome from "./frame-component-home";

export type ImageInicialType = {
  className?: string;
};

const ImageInicial: NextPage<ImageInicialType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full overflow-hidden flex flex-col items-center justify-center py-[100px] px-0 box-border relative gap-2.5 min-w-[320px] max-w-[2400px] text-left text-29xl text-neutral-white font-noto-sans ${className}`}
    >
      <div className="w-full h-[1007px] !m-[0] absolute top-[-13px] flex flex-col items-start justify-start box-border min-w-[320px] max-w-[3000px] min-h-[110px] max-h-[1500px] z-[0] sm:w-full sm:h-[110%] sm:items-center sm:justify-center sm:pt-0 sm:pb-0 sm:box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image-27@2x.png"
        />
      </div>
      <div className="w-full flex flex-row items-center justify-start flex-wrap content-center min-w-[320px] max-w-[1440px] min-h-[580px] z-[1]">
        <FrameComponentHome />
      </div>
    </div>
  );
};

export default ImageInicial;
