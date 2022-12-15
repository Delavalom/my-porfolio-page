/* eslint-disable @next/next/no-img-element */
import { Card } from "./Card";
import gtp3 from "@assets/gpt3.png";
import pokedex from "@assets/pokedex.png";
import Image from "next/image";
import createOgImage from '../utils/createOgImage'


export const Showcase = () => {
  const ogImage = createOgImage({
    title: "GPT3",
    meta: "Generate perfect pitch descriptions for GitHub repositories using AI-powered technology!",
    bgImage: 'gpt3.png'
  });
  return (
    <section className="w-full max-w-4xl mx-auto space-y-2">
      <h1 className="text-3xl font-semibold">Showcase</h1>
      <div className="w-full flex flex-wrap gap-4">
        <img src={ogImage} alt="ogimage" />
        <Card
          title="Inventory tracker"
          tecnologies={["React", "Typescript", "Tailwind"]}
          deployLink={"https://inventory-tracker-dev.netlify.app/"}
          repositoryLink={"https://github.com/Delavalom/inventory-tracker/"}
          imageSrc={
            "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/637a76b9e167bb000818059c/screenshot_2022-11-20-18-49-52-0000.png"
          }
        />
        <Card
          title="GPT-3 Headlines Generator"
          tecnologies={["Nextjs", "OpenAI", "Typescript"]}
          deployLink={"https://pitch-description-repo.vercel.app/"}
          repositoryLink={"https://github.com/Delavalom/gpt3-writer-starter/"}
          imageSrc={gtp3}
        />
        <Card
          title="GPT-3 Headlines Generator"
          tecnologies={["Nextjs", "PlanetScale", "Prisma"]}
          deployLink={"https://pokedex-lovat-rho.vercel.app/"}
          repositoryLink={"https://github.com/Delavalom/pokedex/"}
          imageSrc={pokedex}
        />
      </div>
    </section>
  );
};
