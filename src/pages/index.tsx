import { ListDetailView } from "@/components/ListDetailView";
import { Sidebar } from "@/components/layout/Sidebar";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
    <Head>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <section className="flex w-screen h-screen bg-white">
      <Sidebar />
      <ListDetailView />
    </section>
    </>
  );
};

export default Home;
