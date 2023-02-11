import Link from "next/link";
import { ReactNode, type FC } from "react";
import Balancer from "react-wrap-balancer";

type Props = {
  children: ReactNode;
  className?: string
  id?: string
};

const tailwindClass =
  "flex flex-col gap-4 bg-white w-full min-w-[100%] lg:min-w-[30%] md:w-8 px-3 border border-slate-200 h-screen text-slate-900 overflow-y-scroll scroll-smooth";

export const ListContainer: FC<Props> = ({ children, className, id }) => {
  return <section id={id} className={`${tailwindClass} ${className}`}>{children}</section>;
};
