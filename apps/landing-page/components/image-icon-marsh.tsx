import type { NextPage } from "next";

export type ImageIconMarshType = {
  className?: string;
};

const ImageIconMarsh: NextPage<ImageIconMarshType> = ({ className = "" }) => {
  return (
    <img
      className={`w-[150px] relative h-[26px] object-cover min-w-[150px] ${className}`}
      alt=""
      src="/image-251@2x.png"
    />
  );
};

export default ImageIconMarsh;
