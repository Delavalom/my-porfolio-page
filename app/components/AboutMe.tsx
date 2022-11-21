import Image from "next/image";

interface Props {}

export const AboutMe = () => {

  return (
        <section className="flex mb-4">
          <aside className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Luis Angel Arvelo</h1>
            <h3 className="text-xl font-thin opacity-80">Frontend Developer</h3>
            <p className="leading-snug opacity-80">
              Hey, I&apos;m Luis Angel, a Front-End Developer and a Founding member of the 7 Street Labs Team.
              <br />
              <br />
              Started a software digital agency with friends in our spare time. We have developed web applications using the latest technologies such as Typescript, Nextjs, Vite, Tailwind, Styled Components, and Web3, like Solana Rust Programs.
              <br />
              <br />
              A composability design lover.
            </p>
          </aside>
          <figure>
            <Image src="/app/assets/profile.JPG" width={300} height={300} alt="Author image" />
          </figure>
        </section>
  );
};
