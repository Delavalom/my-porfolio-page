import { ReactNode, type FC } from "react";

type Props = {
  children: ReactNode;
};

export const MainContentContainer: FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col justify-start items-center w-full h-screen bg-white">
      {children}
    </main>
  );
};
