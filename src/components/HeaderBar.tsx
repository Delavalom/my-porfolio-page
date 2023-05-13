import { Menu, X } from "lucide-react";
import { type ReactNode, type FC } from "react";
import { useNavigation } from "~/hooks/useNavigation";
import { Button } from "./ui/Button";

type Props = {
  title?: string;
  Cta?: ReactNode;
};

export const HeaderBar: FC<Props> = ({ title, Cta }) => {
  const { isOpen, setIsOpen } = useNavigation();

  return (
    <div className="w-full max-w-4xl h-14 p-4 flex items-center gap-4 sticky top-0 backdrop-blur-2xl">
      {!isOpen ? (
        <Button className="w-fit" variant="ghost">
          <Menu onClick={() => setIsOpen(true)} />
        </Button>
      ) : (
        <Button className="w-fit" variant="ghost">
          <X onClick={() => setIsOpen(false)} />
        </Button>
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
