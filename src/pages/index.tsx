import { List } from "@/components/List";
import { NextPage } from "next";
import { LayoutView } from "@/components/Layouts/LayoutView";
import { useState } from "react";
import { Intro } from "@/components/Home/Intro";

const Home: NextPage = () => {
  const [hasDetail, setHasDetail] = useState(false);
  return <LayoutView view={<Intro />} hasDetail={hasDetail} title="Writing" list={<div>Hola</div>} />;
};

export default Home;