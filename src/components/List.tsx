import { MailCheck } from "lucide-react";
import { type FC, type ReactNode } from "react";
import { HeaderBar } from "./HeaderBar";
import { dateFormatter } from "~/lib/utils";
import Link from "next/link";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const tailwindClass =
  "flex flex-col gap-4 bg-white w-full min-w-[100%] lg:min-w-[30%] md:w-8 px-3 border border-slate-200 h-screen text-slate-900 overflow-y-scroll scroll-smooth";

export const List: FC<Props> = ({ children, className, id }) => {
  return (
    <section id={id} className={`${tailwindClass} ${className}`}>
      <HeaderBar
        title="Writing"
        Cta={
          <button className="flex items-center gap-2 border border-slate-300 px-3 py-1 rounded-sm backdrop-blur-sm">
            <MailCheck className="w-4" />
            <span className="text-xs font-medium">Suscribe</span>
          </button>
        }
      />
      {children}
      {/* replace listItem for array of list data rendering */}

      {/* if long list implement lazy loading */}
    </section>
  );
};

type ListItemProps = {
  title: string;
  date?: Date;
  logo?: string;
  url?: string;
  onClick: () => void;
};

export const ListItem: FC<ListItemProps> = ({
  title,
  date,
  logo,
  url,
  onClick,
}) => {
  const dateView = dateFormatter(date);
  return (
    <section
      onClick={onClick}
      className="group w-full px-4 py-2 flex flex-col gap-2 hover:bg-slate-900 rounded-md"
    >
      <h2 className="font-medium group-hover:text-slate-50">{title}</h2>
      {url ? (
        <div>
          {logo} <Link href={url}>{url}</Link>
        </div>
      ) : (
        <h2 className="text-slate-400 font-extralight text-sm group-hover:text-slate-300">
          {dateView}
        </h2>
      )}
    </section>
  );
};
