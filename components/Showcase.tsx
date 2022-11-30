import { Card } from "./Card";

export const Showcase = () => {
  return (
    <section className="w-full max-w-4xl mx-auto space-y-2">
      <h1 className="text-3xl font-semibold">Showcase</h1>
      <div className="w-full flex flex-wrap">
        <Card
          title="Inventory tracker"
          tecnologies={["react", "typescript", "tailwind"]}
          deployLink={"https://inventory-tracker-dev.netlify.app/"}
          repositoryLink={"https://github.com/Delavalom/inventory-tracker/"}
          imageSrc={"https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/637a76b9e167bb000818059c/screenshot_2022-11-20-18-49-52-0000.png"}
          />
        <Card
          title="GPT-3 Headlines Generator"
          tecnologies={["Nextjs", "OpenAI", "Typescript"]}
          deployLink={"https://gpt3-headlines-generator.vercel.app/"}
          repositoryLink={"https://github.com/Delavalom/gpt3-writer-starter/"}
          imageSrc={"blob:https://vercel.com/8ac75b86-e482-4040-8c78-a189820117ce"}
        />
      </div>
    </section>
  );
};
