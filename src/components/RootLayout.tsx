import React, { type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import Head from "next/head";
import { cn } from "~/lib/utils";

interface Props {
  children: ReactNode;
  title?: string;
  className?: string;
}

export const RootLayout: React.FC<Props> = ({
  title = "Luis Angel Arvelo",
  children,
  className = "",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <main className={cn(className, "flex")}>
        <Sidebar />
        <section className="flex flex-1">{children}</section>
      </main>
    </>
  );
};
