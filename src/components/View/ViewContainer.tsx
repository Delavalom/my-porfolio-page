import { ReactNode, type FC } from "react";

type Props = {
  children: ReactNode;
};

export const ViewContainer: FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col justify-start items-center w-full h-full bg-white">
      {children}
    </main>
  );
};
