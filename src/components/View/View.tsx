import { type FC } from "react";
import Balancer from "react-wrap-balancer";
import { EmojiBtn } from "./EmojiBtn";
import { TitleBar } from "../Layout/TitleBar";
import { ChevronsLeft } from "lucide-react";
import { ViewContainer } from "./ViewContainer";

type Props = {
  onClick: () => void
};

export const View: FC<Props> = ({onClick}) => {
  return (
    <ViewContainer>
      <TitleBar
        title="React Beta Docs are the best"
        justify="between"
        Icon={<ChevronsLeft onClick={onClick} className="lg:hidden" />}
        Cta={<EmojiBtn />}
      ></TitleBar>
      <article className="blog-container"></article>
    </ViewContainer>
  );
};
