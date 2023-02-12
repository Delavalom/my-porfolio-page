import { List } from "@/components/List/List";
import { NextPage } from "next";
import { LayoutView } from "@/components/Layout/LayoutView";
import { useState } from "react";
import { Intro } from "@/components/Home/Intro";

const Home: NextPage = () => {
  const [hasDetail, setHasDetail] = useState(false);
  return <LayoutView view={<Intro />} hasDetail={hasDetail} />;
};

export default Home;

{
  /*<ListItem
    onClick={()=> setHasDetail(!hasDetail)}
      title="React Beta Docs are the best"
      date={new Date("02-10-2023")}
  />*/
}
