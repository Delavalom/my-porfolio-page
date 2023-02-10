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
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { SidebarBtn } from "./ui/SidebarBtn";
import { SidebarSection } from "./ui/SidebarSection";
import { SidebarCtaBlock } from "./ui/SidebarCtaBlock";

export const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <aside className="bg-white w-4/5 md:w-2/4 lg:w-3/12 xl:w-2/12 min-h-screen px-4 flex flex-col gap-6 drop-shadow-lg">
        {/* close button */}
        <div className="flex gap-2 py-4 items-center">
          <X className="text-zinc-700 w-5" />
          {/* Luis Angel arvelo heading */}
          <h1 className="font-bold">Luis Angel Arvelo</h1>
        </div>
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
      </aside>
    </>
  );
};
