import { ReactNode, type FC } from "react";

type Props = {
  children: ReactNode;
  title?: string;
};

export const SidebarSection: FC<Props> = ({ children, title }) => {
  return (
    <section className="flex flex-col h-fit gap-1">
      <div>{title && <h3 className="text-[12px] font-semibold text-zinc-500">{title}</h3>}</div>
      {children}
    </section>
  );
};
