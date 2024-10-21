import type { NextPage } from "next";
import ButtonMore from "./button-more";

export type FrameComponentHomeType = {
  className?: string;
};

const FrameComponentHome: NextPage<FrameComponentHomeType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-center justify-center flex-wrap content-center py-0 px-[50px] box-border gap-[100px] min-w-[320px] max-w-[1440px] text-left text-29xl text-neutral-white font-noto-sans ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[320px]">
        <div className="self-stretch relative leading-[70px] font-semibold">
          Bienvenido al nuevo sistema de soporte Marsh
        </div>
        <div className="self-stretch relative text-5xl leading-[40px] font-semibold">
          Conoce a Eva, tu asesora virtual disponible 24/7, siempre lista para
          ayudarte en todo momento.
        </div>
        <ButtonMore />
      </div>
      <div className="flex-1 h-[342px] flex flex-col items-start justify-start py-2.5 px-0 box-border min-w-[320px] max-w-[622px]">
        <video
          className="self-stretch flex-1 relative bg-cover bg-no-repeat bg-[top]"
          id="VideoHome"
          autoPlay
          muted
          controls
        >
          <source src=" https://storage.googleapis.com/marsh-lp-bucket/Avatar%20Marsh.MP4" />
        </video>
      </div>
    </div>
  );
};

export default FrameComponentHome;
