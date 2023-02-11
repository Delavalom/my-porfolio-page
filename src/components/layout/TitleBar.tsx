import { MailCheck } from "lucide-react";
import { ReactNode, type FC } from "react";

type Props = {
  title?: string;
  Icon?: ReactNode;
  Cta?: ReactNode;
  isMobile?: string
  justify?: "between" | "evenly" | "around"
};

export const TitleBar: FC<Props> = ({ title, Icon, Cta, isMobile, justify = "between" }) => {
  return (
    <div className={`w-full p-4 flex items-center justify-${justify} sticky top-0 bg-white`}>
      {Icon}
      {/* heading Title coming from navigation */}
      <h1 className={`font-semibold text-sm md:text-md ${isMobile}`}>{title}</h1>
      {/* suscribe newsletter button */}
      {Cta}
    </div>
  );
};
