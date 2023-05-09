import { useNavigation } from "@/hooks/useNavigation";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ReactElement, type FC } from "react";
import { ListContainer } from "../List/ListContainer";
import { View } from "../View";
import { EmojiBtn } from "../View/EmojiBtn";
import { HeaderBar } from "./HeaderBar";

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
  const {setIsOpen} = useNavigation()
  return (
    <>
      {true ? (
        <ListContainer
          id="list"
          className={`${hasDetail ? "hidden lg:flex" : "min-h-screen w-full"}`}
        >
          {list}
        </ListContainer>
      ) : (
        <View>
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
