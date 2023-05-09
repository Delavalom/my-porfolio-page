import { NextPage } from "next";
import { EmojiBtn } from "~/components/EmojiBtn";
import { HeaderBar } from "~/components/HeaderBar";
import { Intro } from "~/components/Intro";
import { useNavigation } from "~/hooks/useNavigation";

const Home: NextPage = () => {

  return (
    <main className="w-full h-full">
        <main className="bg-dots flex flex-col justify-start items-center w-full h-full bg-white">
          <HeaderBar
            title="Intro"
            Cta={<EmojiBtn />}
          />
          <section className="w-full flex flex-col px-2"><Intro /></section>
        </main>
    </main>
  );
};

export default Home;
