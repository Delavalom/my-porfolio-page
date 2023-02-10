import { Menu, X, Home, Bookmark, Library, Layers, Code2, Terminal, Github, Linkedin,Youtube, ExternalLink } from "lucide-react";
import { useState } from "react";
import { SidebarBtn } from "./ui/SidebarBtn";

export const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <aside className="bg-zinc-500 w-4/5 md:w-2/4 lg:w-3/12 xl:w-2/12 min-h-screen px-4 flex flex-col justify-evenly">
        {/* close button */}
        <div className="flex gap-2">
          <X />
          {/* Luis Angel arvelo heading */}
          <h1 className="font-bold">Luis Angel Arvelo</h1>
        </div>
        {/* home button */}
        <SidebarBtn Icon={Home} title="Home" />
        {/* writing button */}
        <SidebarBtn Icon={Library} title="Writing" />
        {/* Me section
              bookmark button
              stack button
        */}
        <section>
          <h1>Me</h1>
          <SidebarBtn Icon={Bookmark} title="Bookmarks" />
          <SidebarBtn Icon={Layers} title="Stack" />
          <SidebarBtn Icon={Code2} title="Projects" />
          <SidebarBtn Icon={Terminal} title="Terminal" />
        </section>
        {/* online section
              github button
              linkedin button
              youtube button
        */}
        <section>
          <h1>online</h1>
          <SidebarBtn Icon={Github} title="Github" hasExternalLink />
          <SidebarBtn Icon={Linkedin} title="LinkedIn" hasExternalLink />
          <SidebarBtn Icon={Youtube} title="Youtube" hasExternalLink />
        </section>
        {/* sign in section
              cta button
        */}
      </aside>
    </>
  );
};
