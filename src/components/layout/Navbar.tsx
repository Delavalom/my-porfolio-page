import Link from "next/link";

const links = [
  {
    label: "Resume",
    route: "https://drive.google.com/file/d/1VrdJVi4ie2lX9bNLBh1iGuNLdYugwRKJ/view?usp=sharing",
  },
  {
    label: "LinkedIn",
    route: "https://www.linkedin.com/in/luis-arvelo",
  },
  {
    label: "GitHub",
    route: "https://github.com/Delavalom",
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
          {links.map(({ label, route }) => (
            <li
              key={label}
              className="text-xs sm:text-sm font-semibold hover:text-sky-500 transition-colors duration-500"
            >
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
