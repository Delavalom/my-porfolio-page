import { ReactNode, type FC } from "react";
import { EmojiBtn } from "./EmojiBtn";
import { HeaderBar } from "../HeaderBar";
import { ChevronsLeft } from "lucide-react";
import { ViewContainer } from "./ViewContainer";
import Link from "next/link";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const View: FC<Props> = ({ onClick, children }) => {
  return (
    <ViewContainer>
      <article className="blog-container">{children}</article>
    </ViewContainer>
  );
};