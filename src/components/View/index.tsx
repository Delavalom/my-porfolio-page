import { ReactNode, type FC } from "react";
import { EmojiBtn } from "./EmojiBtn";
import { HeaderBar } from "../Layout/HeaderBar";
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
      <HeaderBar
        title="React Beta Docs are the best"
        Icon={
          <Link href="/">
            <ChevronsLeft onClick={onClick} className="lg:hidden" />
          </Link>
        }
        Cta={<EmojiBtn />}
      ></HeaderBar>
      {/* <article className="w-full max-w-[600px] px-2 mx-auto flex flex-col items-center justify-center"></article> */}
      <article className="blog-container">{children}</article>
    </ViewContainer>
  );
};
