import {
  Bookmark,
  Code2,
  Github,
  Home,
  Layers,
  Library,
  Linkedin,
  Terminal,
  X,
  Youtube,
} from "lucide-react";
import { OverlayBg } from "../OverlayBg";
import { useNavigation } from "@/hooks/useNavigation";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { HeaderBar } from "../Layouts/HeaderBar";

export const Sidebar = () => {
  const { isOpen, setIsOpen } = useNavigation();

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <HeaderBar
          title={"Luis Arvelo"}
          Icon={
            <X className="text-zinc-700 w-5 lg:hidden" onClick={handleClick} />
          }
        />
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex px-3 flex-col gap-6`}
        >
          <SidebarSection>
            <SidebarBtn Icon={Home} title="Home" />

            <SidebarBtn Icon={Library} title="Writing" />
          </SidebarSection>

          <SidebarSection title="Me">
            <SidebarBtn Icon={Bookmark} title="Bookmarks" />
            <SidebarBtn Icon={Layers} title="Stack" />
            <SidebarBtn Icon={Code2} title="Projects" />
            <SidebarBtn Icon={Terminal} title="Terminal" />
          </SidebarSection>

          <SidebarSection title="Online">
            <SidebarBtn Icon={Github} title="Github" hasExternalLink />
            <SidebarBtn Icon={Linkedin} title="LinkedIn" hasExternalLink />
            <SidebarBtn Icon={Youtube} title="Youtube" hasExternalLink />
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
      } 3xl:w-80 z-30 flex min-h-screen w-3/4 flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-white pb-10 transition duration-200 ease-in-out dark:border-gray-800 dark:bg-gray-900 sm:w-1/2 sm:pb-0 md:w-1/3 lg:relative lg:z-auto lg:w-56 lg:translate-x-0 lg:dark:bg-gray-900 2xl:w-72`}
    >
      {children}
    </aside>
  );
};

type SidebarBtnProps = {
  Icon: FC<{ className?: string }>;
  title: string;
  onClick?: () => void;
  hasExternalLink?: true;
};

const SidebarBtn: FC<SidebarBtnProps> = ({
  Icon,
  title,
  onClick,
  hasExternalLink,
}) => {
  return (
    <div
      onClick={onClick}
      className="group flex items-center pl-2 pr-6 py-1 gap-4 w-full rounded-md text-slate-900 hover:text-slate-50 hover:bg-slate-900"
    >
      <Icon className="w-5 text-slate-700 group-hover:text-slate-50" />
      <span className="text-sm font-medium">{title}</span>
      {hasExternalLink && (
        <ExternalLink className="ml-auto w-[13px] text-slate-500 group-hover:text-slate-50" />
      )}
    </div>
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
