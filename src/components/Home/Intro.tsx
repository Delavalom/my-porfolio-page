import { type FC } from "react";
import { HeaderBar } from "@/components/Layout/HeaderBar";
import { Menu } from "lucide-react";
import { useNavigation } from "@/hooks/useNavigation";

type Props = {};

export const Intro: FC<Props> = ({}) => {
  const { setIsOpen } = useNavigation();
  return (
    <>
      <HeaderBar
        Icon={
          <Menu
            onClick={() => setIsOpen(true)}
            className="relative top-2 left-2 z-50 text-zinc-700 w-5 lg:hidden"
          />
        }
      />
      <article className="w-full max-w-[600px] px-2 mx-auto flex flex-col items-center justify-center">
        <p>
          Hey, I&apos;m a full-stack developer with +3 years of experience in
          high-performance web applications. I&apos;m passionate about building
          web tools that impact the world. I&apos;m obsessed with work, always
          thrive to get better at work and focus to make better products, Open
          to full-stack opportunities.
        </p>
        <h2>What’s your tech stack?</h2>{" "}
        <br />
        <p>
          {" "}
          ReactJS / NextJS, TypeScript, TailwindCSS | REST, tRPC | NodeJs |
          NestJs | Prisma
        </p>{" "}
        <br />
        <h2>What&apos;s your most impressive work?</h2>
        <br />
        <p>
          My team and I are developing a cutting-edge E-learning platform for
          Latin American learners. We seek to create an AI-driven platform that
          provides personalized learning experiences. We are working hard to
          bring our ambitious vision to life & make a positive impact on the
          Latin American educational landscape. Our platform will be an
          invaluable asset to Latin American learners.
        </p>{" "}
        <br />
        <h2>Why is remote important to you?</h2>{" "}
        <br />
        <p>
          Working remotely = balance of personal & professional life; more
          family time, freedom to work from anywhere, save money, control work
          schedule & stay up to date w/ tech.
        </p>{" "}
        <br />
        <h2>
          Could I share a story being successful software engineer?
        </h2>{" "}
        <br />
        <p>
          I worked in a 1500-employee health company in the Dominican Republic,
          helping to migrate a sizable system for their life insurance
          operations. It was an exciting challenge, and I learned a lot about
          software development and system integration. The project was a
          success, and I was proud to contribute to the company&apos;s success.
        </p>
      </article>
    </>
  );
};
