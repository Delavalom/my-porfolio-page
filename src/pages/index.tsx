import { Menu } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { EmojiBtn } from "~/components/EmojiBtn";
import { HeaderBar } from "~/components/HeaderBar";
import { Intro } from "~/components/Intro";
import { List } from "~/components/List";
import { useNavigation } from "~/hooks/useNavigation";

type Props = {
  list?: ReactElement;
  view?: ReactElement;
  hasDetail?: boolean;
  title?: string;
};

const Home: NextPage<Props> = ({ list, view }) => {
  const [hasDetail, setHasDetail] = useState(true);
  const { setIsOpen } = useNavigation();

  return (
    <main className="w-full h-full">
      {list && !view ? (
        <List
          id="list"
          className={`${hasDetail ? "hidden lg:flex" : "min-h-screen w-full"}`}
        >
          {list}
        </List>
      ) : (
        <main className="bg-dots flex flex-col justify-start items-center w-full h-full bg-white">
          <HeaderBar
            title="Intro"
            Icon={
              <Link href="/">
                <Menu onClick={() => setIsOpen(true)} className="lg:hidden" />
              </Link>
            }
            Cta={<EmojiBtn />}
          />
          <section className="w-full flex flex-col px-2"><Intro /></section>
        </main>
      )}
    </main>
  );
};

export default Home;
