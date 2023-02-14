import { List } from "@/components/List/List";
import { NextPage } from "next";
import { LayoutView } from "@/components/Layout/LayoutView";
import { useState } from "react";
import { Intro } from "@/components/Home/Intro";
import { ListItem } from "@/components/List/ListItem";

const Home: NextPage = () => {
  const [hasDetail, setHasDetail] = useState(false);
  return <LayoutView view={<Intro />} hasDetail={hasDetail} />;
};

export default Home;