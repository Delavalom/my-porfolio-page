import { type ReactNode, type FC } from "react";

type Props = {
  title?: string;
  Icon?: ReactNode;
  Cta?: ReactNode;
};

export const HeaderBar: FC<Props> = ({ title, Icon, Cta }) => {
  return (
    <div className="w-full max-w-4xl h-14 p-4 flex items-center justify-between sticky top-0 bg-white">
      {Icon && Icon}
      {/* heading Title coming from navigation */}
      <h1 className="font-semibold text-sm md:text-md">{title}</h1>
      {/* suscribe newsletter button */}
      {Cta && Cta}
    </div>
  );
};
