import { DetailView } from "@/components/ListView/DetailView";
import { ListDetailView } from "@/components/ListView/ListDetailView";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
    <Head>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <section className="flex w-full h-full overflow-hidden bg-white">
      <ListDetailView />
      <DetailView />
    </section>
    </>
  );
};

export default Home;
