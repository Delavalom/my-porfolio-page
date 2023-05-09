import React, { type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import Head from "next/head";

interface Props {
  children: ReactNode;
  title?: string;
}

export const RootLayout: React.FC<Props> = ({ title = "Luis Angel Arvelo", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <main className="flex min-h-screen w-screen">
        <Sidebar />
        <section className="flex flex-1">{children}</section>
      </main>
    </>
  );
};
