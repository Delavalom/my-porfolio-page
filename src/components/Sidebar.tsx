import {
  Bookmark,
  Code2,
  ExternalLink,
  Github,
  Home,
  Layers,
  Library,
  Linkedin,
  Terminal,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { type FC, type ReactNode } from "react";
import { useNavigation } from "~/hooks/useNavigation";
import { HeaderBar } from "./HeaderBar";
import { OverlayBg } from "./OverlayBg";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

export const Sidebar = () => {
  const { isOpen, setIsOpen } = useNavigation();

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <HeaderBar title="Luis Arvelo" />
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex px-3 flex-col gap-6`}
        >
          <SidebarSection>
            <SidebarBtn href="/" Icon={Home} title="Home" />
            <SidebarBtn href="/writing" Icon={Library} title="Writing" />
          </SidebarSection>

          <SidebarSection title="Me">
            <SidebarBtn href="/bookmark" Icon={Bookmark} title="Bookmarks" />
            <SidebarBtn href="/stack" Icon={Layers} title="Stack" />
            <SidebarBtn href="/project" Icon={Code2} title="Projects" />
            <Button disabled={true}>
              <SidebarBtn href="/terminal" Icon={Terminal} title="Terminal" />
            </Button>
          </SidebarSection>

          <SidebarSection title="Online">
            <SidebarBtn
              href="https://github.com/Delavalom"
              Icon={Github}
              title="Github"
              hasExternalLink
            />
            <SidebarBtn
              href="https:/www.linkedin.com/in/luis-arvelo"
              Icon={Linkedin}
              title="LinkedIn"
              hasExternalLink
            />
            <SidebarBtn
              href="https://twitter.com/Delavalom"
              Icon={Twitter}
              title="Twitter"
              hasExternalLink
            />
          </SidebarSection>

          <SidebarCtaBlock
            href={"https://github.com/Delavalom/my-porfolio-page"}
          />
        </div>
      </SidebarContainer>
      <OverlayBg isOpen={isOpen} onClick={handleClick} />
    </>
  );
};

type SidebarContainerProps = {
  children: ReactNode;
  isOpen?: boolean;
};

const SidebarContainer: FC<SidebarContainerProps> = ({ children, isOpen }) => {
  return (
    <aside
      className={`${
        isOpen
          ? "absolute inset-y-0 left-0 translate-x-0 shadow-lg"
          : "absolute -translate-x-full"
      } 3xl:w-80 z-30 flex h-full w-3/4 flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-white pb-10 transition duration-200 ease-in-out dark:border-gray-800 dark:bg-gray-900 sm:w-1/2 sm:pb-0 md:w-1/3 lg:relative lg:z-auto lg:w-56 lg:translate-x-0 lg:dark:bg-gray-900 2xl:w-72`}
    >
      {children}
    </aside>
  );
};

type SidebarBtnProps = {
  Icon: FC<{ className?: string }>;
  title: string;
  href: string;
  hasExternalLink?: true;
};

const SidebarBtn: FC<SidebarBtnProps> = ({
  Icon,
  title,
  href,
  hasExternalLink,
}) => {
  return (
    <Button variant="ghost" asChild className="justify-start">
      <Link
        href={href}
        className="group flex gap-4 w-full rounded-md cursor-pointer transition-colors duration-200"
      >
        <Icon className="w-5 h-5" />
        <span className="text-sm font-medium">{title}</span>
        {hasExternalLink && (
          <ExternalLink className="ml-auto w-[13px] text-slate-500 group-hover:text-slate-50" />
        )}
      </Link>
    </Button>
  );
};

type SidebarCtaBlockProps = {
  href: string;
};

const SidebarCtaBlock: FC<SidebarCtaBlockProps> = ({ href }) => {
  return (
    <div
      id="dropdown-cta"
      className="p-4 rounded-lg bg-slate-300 dark:bg-slate-900"
      role="alert"
    >
      <div className="flex items-center mb-3">
        <Badge>hey</Badge>
      </div>
      <p className="mb-3 text-sm text-slate-800 dark:text-slate-400">
        If you like this porfolio. Fork it, it&apos;s open source.
      </p>
      <Link
        className="text-sm text-slate-800 underline hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
        href={href}
      >
        Repo link
      </Link>
    </div>
  );
};

type SidebarSectionProps = {
  children: ReactNode;
  title?: string;
};

const SidebarSection: FC<SidebarSectionProps> = ({ children, title }) => {
  return (
    <section className="flex flex-col h-fit gap-1">
      <div>
        {title && (
          <h3 className="text-[12px] font-semibold text-zinc-500">{title}</h3>
        )}
      </div>
      {children}
    </section>
  );
};
