import React, { ReactNode } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import Head from "next/head";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <main className="relative flex h-full min-h-screen w-full">
        <Sidebar />
        <section className="flex flex-1">{children}</section>
      </main>
    </>
  );
};
