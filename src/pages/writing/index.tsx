import { NextPage } from "next";
import { List, ListData } from "~/components/List";

const list = [
  {
    title: "Building interactive courses for LATAM",
    date: new Date()
  }
] satisfies ListData[];

const Writing: NextPage = () => {

  return (
    <main className="w-full h-full flex">
      <List
        id="list"
        listTitle="Writing"
        list={list}
      />
      <main className="hidden bg-dots lg:flex flex-col justify-start items-center w-full h-full bg-white"></main>
    </main>
  );
};

export default Writing;
