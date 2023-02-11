import { ListView } from "@/components/ListView/ListView";
import { NextPage } from "next";
import Head from "next/head";
import { MainContent } from "@/components/MainContent/MainContent";

const Home: NextPage = () => {
  return (
    <>
    <Head>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <section className="flex w-full h-full overflow-hidden bg-white">
      <ListView />
      <MainContent />
    </section>
    </>
  );
};

export default Home;
