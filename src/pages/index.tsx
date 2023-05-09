import { List } from "~/components/List";
import { NextPage } from "next";
import { LayoutView } from "~/components/LayoutView";
import { useState } from "react";
import { Intro } from "~/components/Intro";

const Home: NextPage = () => {
  const [hasDetail, setHasDetail] = useState(true);
  return <LayoutView view={<Intro />} hasDetail={hasDetail} title="Writing" list={<div>Hola</div>} />;
};

export default Home;