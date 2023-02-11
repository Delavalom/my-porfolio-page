import { type FC } from "react";
import Balancer from "react-wrap-balancer";
import { EmojiBtn } from "./EmojiBtn";
import { TitleBar } from "../Layout/TitleBar";
import { ChevronsLeft } from "lucide-react";
import { MainContentContainer } from "./MainContentContainer";

type Props = {};

export const MainContent: FC<Props> = ({}) => {
  return (
    <MainContentContainer>
      <TitleBar
        title="React Beta Docs are the best"
        justify="between"
        Icon={<ChevronsLeft className="lg:hidden" />}
        Cta={<EmojiBtn />}
      ></TitleBar>
      <article className="blog-container"></article>
    </MainContentContainer>
  );
};
