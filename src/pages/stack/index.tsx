import { NextPage } from "next";
import { List, ListData } from "~/components/List";

const list = [
  {
    title: "Next.js",
    logo: "https://devicons.railway.app/i/nextjs-dark.svg"
  }
] satisfies ListData[];

const Stack: NextPage = () => {

  return (
    <main className="w-full h-full flex">
      <List
        id="list"
        listTitle="Stack"
        list={list}
      />
      <main className="hidden bg-dots lg:flex flex-col justify-start items-center w-full h-full bg-white"></main>
    </main>
  );
};

export default Stack;
