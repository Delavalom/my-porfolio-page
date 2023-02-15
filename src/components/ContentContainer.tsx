import { ReactNode, type FC } from "react";

type Props = {
  children: ReactNode;
};

export const ContentContainer: FC<Props> = ({ children }) => {
  return <article className="blog-container mx-auto">{children}</article>;
};
