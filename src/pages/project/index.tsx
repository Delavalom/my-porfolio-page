import { NextPage } from "next";
import { List, ListData } from "~/components/List";

const list = [
  {
    title: "Buildo Latam",
    url: new URL("https://buildolatam.com")
  }
] satisfies ListData[];

const Project: NextPage = () => {

  return (
    <main className="w-full h-full flex">
      <List
        id="list"
        listTitle="Project"
        list={list}
      />
      <main className="hidden bg-dots lg:flex flex-col justify-start items-center w-full h-full bg-white"></main>
    </main>
  );
};

export default Project;
