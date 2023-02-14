import { Menu } from "lucide-react";
import { ReactElement, useContext, type FC } from "react";
import { ListContainer } from "../List/ListContainer";
import { View } from "../View";
import { EmojiBtn } from "../View/EmojiBtn";
import { HeaderBar } from "../HeaderBar";
import Link from "next/link";
import { NavigationContext } from "@/Context/NavigationContext";

type Props = {
  list?: ReactElement;
  view?: ReactElement;
  hasDetail?: boolean;
  title?: string;
};

export const LayoutView: FC<Props> = ({
  list,
  view,
  hasDetail,
  title = "",
}) => {
  const {setIsOpen} = useContext(NavigationContext)
  return (
    <>
      {list && !view ? (
        <ListContainer
          id="list"
          className={`${hasDetail ? "hidden lg:flex" : "min-h-screen w-full"}`}
        >
          {list}
        </ListContainer>
      ) : (
        <View onClick={() => {}}>
          <HeaderBar
            title={title}
            Icon={
              <Link href="/">
                <Menu onClick={() => setIsOpen(true)} className="lg:hidden" />
              </Link>
            }
            Cta={<EmojiBtn />}
          ></HeaderBar>
          <section className="w-full flex flex-col px-2">{view}</section>
        </View>
      )}
    </>
  );
};
