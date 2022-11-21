import Image from "next/image";
import { AboutMe } from "./components/AboutMe";
import { Showcase } from "./components/Showcase";
import { Stack } from "./components/Stack";

export default function Home() {
  return (
    <main className="h-full px-10 flex flex-1 flex-col ">
      <AboutMe />
      <Stack />
      <Showcase />
    </main>
  );
}
