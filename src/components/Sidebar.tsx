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
            <SidebarBtn href="/projects" Icon={Code2} title="Projects" />
            <SidebarBtn href="/terminal" Icon={Terminal} title="Terminal" />
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

          <SidebarCtaBlock href={"#"} />
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
        className="group flex text-left pl-2 pr-6 py-1 gap-4 w-full rounded-md text-slate-900 hover:text-slate-50 hover:bg-slate-900 cursor-pointer transition-colors duration-200"
      >
        <Icon className="w-5 text-slate-700 group-hover:text-slate-50" />
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
      className="p-4 mt-6 rounded-lg bg-slate-300 dark:bg-slate-900"
      role="alert"
    >
      <div className="flex items-center mb-3">
        <span className="bg-slate-100 text-slate-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-slate-200 dark:text-slate-900">
          Hey
        </span>
      </div>
      <p className="mb-3 text-sm text-slate-800 dark:text-slate-400">
        If you like this personal site, please give me a start on github and
        fork it, it&apos;s open source.
      </p>
      <Link
        className="text-sm text-slate-800 underline hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
        href={href}
      >
        Repository link
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
