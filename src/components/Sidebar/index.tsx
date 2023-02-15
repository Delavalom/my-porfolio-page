import {
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
import { SidebarBtn } from "./SidebarBtn";
import { SidebarSection } from "./SidebarSection";
import { SidebarCtaBlock } from "./SidebarCtaBlock";
import { OverlayBg } from "./OverlayBg";

import { SidebarContainer } from "./SidebarContainer";
import { useNavigation } from "@/hooks/useNavigation";
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
