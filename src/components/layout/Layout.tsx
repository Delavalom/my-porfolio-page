import Head from "next/head";
import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface Props {
  title: string;
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="h-screen flex flex-col items-center pt-32">
        {children}
      </main>
    </>
  );
};
