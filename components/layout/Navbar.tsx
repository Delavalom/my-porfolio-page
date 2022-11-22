import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "LinkedIn",
    route: "/linkedin",
  },
  {
    label: "GitHub",
    route: "/github",
  },
];

export const Navbar = () => {
  return (
    <header className="w-full h-32 px-4 flex items-center">
      <nav className="w-10/12 mx-auto bg-slate-800 rounded-full border-[1px] border-opacity-30 border-sky-500 px-4 py-2">
        <ul className="flex justify-around items-center gap-3">
          {links.map(({ label, route }) => (
            <li
              key={label}
              className="text-sm font-semibold hover:text-sky-500 transition-colors duration-500"
            >
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
