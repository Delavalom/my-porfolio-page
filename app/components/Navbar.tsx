import Link from "next/link";

interface Props {}

export const Navbar = () => {

  return (
        <header className="">
          <nav>
            <ul className="flex gap-3">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/'>LinkedIn</Link></li>
                <li><Link href='/'>Github</Link></li>
            </ul>
          </nav>
        </header>
  );
};
