import { NextPage } from "next";
import Head from "next/head";
import { AboutMe } from "../components/AboutMe";
import { Showcase } from "../components/Showcase";
import { Stack } from "../components/Stack";

const Home: NextPage = () => {
  return (
    <>
      <AboutMe />
      <Stack />
      <Showcase />
    </>
  );
};

export default Home;
