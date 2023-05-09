import { Menu, X } from "lucide-react";
import { type ReactNode, type FC } from "react";
import { useNavigation } from "~/hooks/useNavigation";

type Props = {
  title?: string;
  Cta?: ReactNode;
};

export const HeaderBar: FC<Props> = ({ title, Cta }) => {
  const { isOpen, setIsOpen } = useNavigation();

  return (
    <div className="w-full max-w-4xl h-14 p-4 flex items-center gap-4 sticky top-0">
      {!isOpen ? (
        <Menu
          onClick={() => setIsOpen(true)}
          className="lg:hidden cursor-pointer w-8 h-8 p-[6px] hover:bg-slate-200 rounded-md"
        />
      ) : (
        <X
          onClick={() => setIsOpen(false)}
          className="cursor-pointer w-8 h-8 p-[6px] hover:bg-slate-200 rounded-md"
        />
      )}
      <div className="flex items-center justify-between flex-1">
        {/* heading Title coming from navigation */}
        <h1 className="font-semibold text-sm md:text-md">{title}</h1>
        {/* suscribe newsletter button */}
        {Cta && Cta}
      </div>
    </div>
  );
};
