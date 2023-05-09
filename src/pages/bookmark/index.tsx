import { NextPage } from "next";
import { List, ListData } from "~/components/List";

const list = [
  {
    title: "How we clone a running VM in 2 seconds",
    url: new URL("https://codesandbox.io/blog/how-we-clone-a-running-vm-in-2-seconds")
  }
] satisfies ListData[];

const Bookmark: NextPage = () => {

  return (
    <main className="w-full h-full flex">
      <List
        id="list"
        listTitle="Bookmark"
        list={list}
      />
      <main className="hidden bg-dots lg:flex flex-col justify-start items-center w-full h-full bg-white"></main>
    </main>
  );
};

export default Bookmark;
