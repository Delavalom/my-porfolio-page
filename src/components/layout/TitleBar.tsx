import { ReactNode, type FC } from "react";

type Props = {
  title?: string;
  Icon?: ReactNode;
  Cta?: ReactNode;
  isMobile?: string
};

export const TitleBar: FC<Props> = ({ title, Icon, Cta, isMobile = "" }) => {
  return (
    <div className="w-full h-14 p-4 flex items-center justify-between sticky top-0 bg-white">
      {Icon && Icon}
      {/* heading Title coming from navigation */}
      <h1 className={`font-semibold text-sm md:text-md ${isMobile}`}>{title}</h1>
      {/* suscribe newsletter button */}
      {Cta && Cta}
    </div>
  );
};
