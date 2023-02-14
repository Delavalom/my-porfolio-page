import { type FC } from "react";
import { EmojiBtn } from "./EmojiBtn";
import { HeaderBar } from "../Layout/HeaderBar";
import { ChevronsLeft } from "lucide-react";
import { ViewContainer } from "./ViewContainer";

type Props = {
  onClick: () => void
};

export const View: FC<Props> = ({onClick}) => {
  return (
    <ViewContainer>
      <HeaderBar
        title="React Beta Docs are the best"
        Icon={<ChevronsLeft onClick={onClick} className="lg:hidden" />}
        Cta={<EmojiBtn />}
      ></HeaderBar>
      <article className="blog-container"></article>
    </ViewContainer>
  );
};
