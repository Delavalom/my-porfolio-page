import { Sidebar } from "@/components/layout/Sidebar";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section className="w-full h-full bg-white">
      <Sidebar />
    </section>
  );
};

export default Home;
