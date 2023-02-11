import { ReactNode, type FC } from "react";

type Props = {
    children: ReactNode
};

export const SidebarContainer: FC<Props> = ({children}) => {
  return (
    <aside
      className="bg-white z-40 max-w-[80%] md:max-w-[25%] lg:w-2/12 h-screen px-4 drop-shadow-lg transition duration-200 ease-in-out"
    >{children}</aside>
  );
};
