import {
  Menu,
  X,
  Home,
  Bookmark,
  Library,
  Layers,
  Code2,
  Terminal,
  Github,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { SidebarBtn } from "./SidebarBtn";
import { SidebarSection } from "./SidebarSection";
import { SidebarCtaBlock } from "./SidebarCtaBlock";
import { OverlayBg } from "./OverlayBg";
import { TitleBar } from "../ListView/TitleBar";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <aside
        className={`bg-white z-40 max-w-[80%] md:max-w-[25%] lg:w-2/12 h-screen px-4 drop-shadow-lg transition duration-200 ease-in-out`}
      >
        {/* close button */}
          {/* Luis Angel arvelo heading */}
          <TitleBar
            title={"Luis Arvelo"}
            justify="around"
            isMobile={`${
              isOpen ? "flex" : "hidden"
            } lg:inline`}
            Icon={
              isOpen ? (
                <X className="text-zinc-700 w-5 lg:hidden" onClick={handleClick} />
              ) : (
                <Menu className="text-zinc-700 w-5 lg:hidden" onClick={handleClick} />
              )
            }
          />
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col gap-6`}
        >
          <SidebarSection>
            {/* home button */}
            <SidebarBtn Icon={Home} title="Home" />
            {/* writing button */}
            <SidebarBtn Icon={Library} title="Writing" />
          </SidebarSection>
          {/* Me section
                bookmark button
                stack button
              */}
          <SidebarSection title="Me">
            <SidebarBtn Icon={Bookmark} title="Bookmarks" />
            <SidebarBtn Icon={Layers} title="Stack" />
            <SidebarBtn Icon={Code2} title="Projects" />
            <SidebarBtn Icon={Terminal} title="Terminal" />
          </SidebarSection>
          {/* online section
                github button
                linkedin button
                youtube button
          */}
          <SidebarSection title="Online">
            <SidebarBtn Icon={Github} title="Github" hasExternalLink />
            <SidebarBtn Icon={Linkedin} title="LinkedIn" hasExternalLink />
            <SidebarBtn Icon={Youtube} title="Youtube" hasExternalLink />
          </SidebarSection>
          {/* sign in section
                cta button
          */}
          <SidebarCtaBlock href={"#"} />
        </div>
      </aside>
      <OverlayBg isOpen={isOpen} onClick={handleClick} />
    </>
  );
};
