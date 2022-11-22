import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full max-w-4xl mx-auto flex justify-between items-center h-16 px-10">
      <Link
        className="hover:text-sky-500 transition-colors duration-500"
        href="https://github.com/Delavalom/my-porfolio-page"
      >
        Use this template for your porfolio.
      </Link>
      <span>Always with &hearts;</span>
    </footer>
  );
};
