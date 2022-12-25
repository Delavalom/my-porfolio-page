import Link from "next/link";

const links = [
  {
    label: "Resume",
    route:
      "https://drive.google.com/file/d/1VrdJVi4ie2lX9bNLBh1iGuNLdYugwRKJ/view?usp=share_link",
    target: "_blank",
  },
  {
    label: "LinkedIn",
    route: "https://www.linkedin.com/in/luis-arvelo",
    target: "_blank",
  },
  {
    label: "GitHub",
    route: "https://github.com/Delavalom",
    target: "_blank",
  },
  {
    label: "Upload",
    route: "/upload",
  },
];

export const Navbar = () => {
  return (
    <header className="w-full h-32 px-4 flex bg-transparent items-center fixed z-30">
      <nav className="w-10/12 max-w-md mx-auto bg-gradient-to-r via-slate-800 rounded-full border-[1px] border-opacity-30 border-sky-500 px-4 py-2 backdrop-blur-sm">
        <ul className="flex justify-around items-center gap-3">
          {links.map(({ label, route, target }) => (
            <li
              key={label}
              className="text-xs sm:text-sm font-semibold hover:text-sky-500 transition-colors duration-500"
            >
              <Link href={route} target={target}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
