import { type FC } from "react";
import { TitleBar } from "../Layout/TitleBar";
import { Menu } from "lucide-react";
import { useNavigation } from "@/hooks/useNavigation";

type Props = {};

export const Intro: FC<Props> = ({}) => {
  const { setIsOpen } = useNavigation();
  return (
    <article className=" text-center w-full">
      <TitleBar
        Icon={
          <Menu onClick={() => setIsOpen(true)} className="relative top-2 left-2 z-50 text-zinc-700 w-5 lg:hidden" />
        }
      />
    </article>
  );
};
