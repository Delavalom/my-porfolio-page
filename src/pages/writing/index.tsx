import { NextPage } from "next";
import { List, ListData } from "~/components/List";
import { useNavigation } from "~/hooks/useNavigation";

const list = [
  {
    title: "Building interactive courses for LATAM",
    date: new Date()
  }
] satisfies ListData[];

const Home: NextPage = () => {
  const { setIsOpen } = useNavigation();

  return (
    <main className="w-full h-full">
      <List
        id="list"
        listTitle="Writing"
        className="min-h-screen w-screen lg:max-w-xs"
        list={list}
      />
      <main className="hidden bg-dots lg:flex flex-col justify-start items-center w-full h-full bg-white"></main>
    </main>
  );
};

export default Home;
