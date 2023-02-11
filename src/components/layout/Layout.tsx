import React, { ReactNode } from "react";
import { Sidebar } from "../Sidebar/Sidebar";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <main className="relative flex h-full min-h-screen w-full">
      <Sidebar />
      <section className="flex flex-1">{children}</section>
    </main>
  );
};
