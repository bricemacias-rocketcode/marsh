import type { NextPage } from "next";
import SocialLinks from "./social-links";

export type FooterBigType = {
  className?: string;
};

const FooterBig: NextPage<FooterBigType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-darkslateblue flex flex-col items-start justify-start py-6 px-12 box-border min-h-[230px] text-left text-smi text-neutral-silver font-noto-sans sm:h-auto sm:gap-5 sm:pb-[30px] sm:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-6 sm:gap-[35px] sm:pb-5 sm:box-border">
        <div className="flex flex-col items-start justify-start gap-2.5">
          <div className="overflow-hidden flex flex-col items-start justify-center">
            <img
              className="w-[300px] relative h-[24.8px] object-cover"
              alt=""
              src="/image-26@2x.png"
            />
          </div>
          <div className="overflow-hidden flex flex-col items-center justify-start">
            <b className="w-[385px] relative leading-[20px] flex items-center h-[67px] shrink-0 sm:text-xs sm:w-full sm:h-auto">
              Marsh McLennan es líder en gestión de riesgo, estrategia y fuerza
              laboral, y ayuda a los clientes a navegar en un entorno dinámico a
              través de cuatro negocios globales.
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-xs text-neutral-white sm:w-full sm:flex-col sm:items-start sm:justify-between sm:gap-0">
          <div className="flex-1 relative leading-[6.7px] flex items-center h-[25px] sm:flex-[unset] sm:self-stretch">
            © 2024 Marsh LLC. Todos los derechos reservados.
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default FooterBig;
