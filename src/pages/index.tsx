import { DetailView } from "@/components/DetailView";
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
    <section className="flex w-full h-full overflow-hidden bg-white">
      <Sidebar />
      <ListDetailView />
      <DetailView />
    </section>
    </>
  );
};

export default Home;
