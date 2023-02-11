import { List } from "@/components/List/List";
import { NextPage } from "next";
import Head from "next/head";
import { View } from "@/components/View/View";
import { ListItem } from "@/components/List/ListItem";
import { LayoutView } from "@/components/Layout/LayoutView";
import { useState } from "react";

const Home: NextPage = () => {
  const [hasDetail, setHasDetail] = useState(false)
  return (
    <LayoutView
      list={
        <ListItem
        onClick={()=> setHasDetail(!hasDetail)}
          title="React Beta Docs are the best"
          date={new Date("02-10-2023")}
        />
      }
      view={<View onClick={() => setHasDetail(!hasDetail)} />}
      hasDetail={hasDetail}
    />
  );
};

export default Home;
