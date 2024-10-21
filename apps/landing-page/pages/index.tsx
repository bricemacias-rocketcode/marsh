import type { NextPage } from "next";
import HeaderMobile from "../components/header-mobile";
import Header from "../components/header";
import ImageInicial from "../components/image-inicial";
import FooterBig from "../components/footer-big";

const LandingPageMarsh: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center">
      <HeaderMobile />
      <Header />
      <ImageInicial />
      <FooterBig />
    </div>
  );
};

export default LandingPageMarsh;
