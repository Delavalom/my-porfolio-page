import { List } from "@/components/List/List";
import { NextPage } from "next";
import Head from "next/head";
import { View } from "@/components/View/View";
import { ListItem } from "@/components/List/ListItem";
import { LayoutView } from "@/components/Layout/LayoutView";
import { useState } from "react";
import { Intro } from "@/components/Home/Intro";

const Home: NextPage = () => {
  const [hasDetail, setHasDetail] = useState(false)
  {/*<ListItem
  onClick={()=> setHasDetail(!hasDetail)}
    title="React Beta Docs are the best"
    date={new Date("02-10-2023")}
/>*/}
  return (
    <LayoutView
      view={<Intro />} // <View onClick={() => setHasDetail(!hasDetail)
      hasDetail={hasDetail}
      />
  );
};

export default Home;
