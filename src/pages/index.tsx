import { NextPage } from "next";
import Head from "next/head";
import { AboutMe } from "../components/AboutMe";
import { Showcase } from "../components/Showcase";
import { Stack } from "../components/Stack";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luis Angel Arvelo</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="This is the portfolio of Luis Ángel Arvelo frontend developer and founding member of the 7 Street Labs team"
        />
        <meta name="robots" content="index/follow" />
        <link rel="icon" href="/src/public/favicon.ico" />
      </Head>
      <main className="h-full px-10 flex flex-1 flex-col gap-5 overflow-auto">
        <AboutMe />
        <Stack />
        <Showcase />
      </main>
    </>
  );
};

export default Home;
