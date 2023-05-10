import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { EmojiBtn } from "~/components/EmojiBtn";
import { HeaderBar } from "~/components/HeaderBar";
import { useNavigation } from "~/hooks/useNavigation";
import { compareDesc, format, parseISO } from "date-fns";
import { intro, Intro } from "contentlayer/generated";
import { useMDXComponent } from 'next-contentlayer/hooks'
import { ContentContainer } from "~/components/ContentContainer";
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
          <ContentContainer>
            <Mdx code={intro.body.code} />
          </ContentContainer>
        </section>
      </main>
    </main>
  );
};

export default Home;
