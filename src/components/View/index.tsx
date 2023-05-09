import { ReactNode, type FC } from "react";
import { ViewContainer } from "./ViewContainer";

type Props = {
  children: ReactNode;
};

export const View: FC<Props> = ({ children }) => {
  return (
    <ViewContainer>
      {children}
    </ViewContainer>
  );
};
