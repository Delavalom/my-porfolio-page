import { type FC } from "react";
import { TitleBar } from "../Layout/TitleBar";
import { Menu } from "lucide-react";
import { useNavigation } from "@/hooks/useNavigation";

type Props = {};

export const Intro: FC<Props> = ({}) => {
  const { setIsOpen } = useNavigation();
  return (
    <>
      <TitleBar
        Icon={
          <Menu
            onClick={() => setIsOpen(true)}
            className="relative top-2 left-2 z-50 text-zinc-700 w-5 lg:hidden"
          />
        }
      />
      <article className="flex items-center justify-center">
        <p className="max-w-[66%]">
          Hey, I&apos;m a full-stack developer with +3 years of experience in
          high-performance web applications. I&apos;m passionate about building
          web tools that impact the world. I&apos;m obsessed with work, always
          thrive to get better at work and focus to make better products, Open
          to full-stack opportunities.
        </p>
      </article>
    </>
  );
};
