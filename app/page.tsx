import Image from "next/image";
import { AboutMe } from "./components/AboutMe";
import { Showcase } from "./components/Showcase";
import { Stack } from "./components/Stack";

export default function Home() {
  return (
    <main>
      <AboutMe />
      <Stack />
      <Showcase />
    </main>
  );
}
