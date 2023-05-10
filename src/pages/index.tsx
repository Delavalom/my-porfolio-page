import { intro } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { InferGetStaticPropsType, NextPage } from "next";
import { EmojiBtn } from "~/components/EmojiBtn";
import { HeaderBar } from "~/components/HeaderBar";
import { Mdx } from "~/components/Mdx";

export function getStaticProps() {
  return {
    props: {
      intro,
    },
  };
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  intro,
}) => {
  return (
    <main className="w-full h-full">
      <main className="bg-dots flex flex-col justify-start items-center w-full h-full bg-white">
        <HeaderBar title="About Me" Cta={<EmojiBtn />} />
        <section className="w-full flex flex-col px-2">
          <article className="blog-container mx-auto space-y-8">
            <Mdx code={intro.body.code} />
            <time
              dateTime={intro.date}
              className="mb-2 block text-xs text-gray-600"
            >
              {format(parseISO(intro.date), "LLLL d, yyyy")}
            </time>
          </article>
        </section>
      </main>
    </main>
  );
};

export default Home;
