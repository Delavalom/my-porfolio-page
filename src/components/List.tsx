import { MailCheck } from "lucide-react";
import Image from "next/image";
import { type FC } from "react";
import { dateFormatter } from "~/lib/utils";
import { HeaderBar } from "./HeaderBar";
import Link from "next/link";

export type ListData = {
  title: string;
  date?: Date;
  logo?: string;
  url?: string;
};

type Props = {
  listTitle: string
  list: ListData[];
  className?: string;
  id?: string;
};

const tailwindClass =
  "flex flex-col gap-4 bg-white w-full min-w-[100%] lg:min-w-[30%] md:w-8 px-3 border border-slate-200 h-screen text-slate-900 overflow-y-scroll scroll-smooth";

export const List: FC<Props> = ({ listTitle, list, className, id }) => {
  return (
    <section id={id} className={`${tailwindClass} ${className}`}>
      <HeaderBar
        title={listTitle}
        Cta={
          <button className="flex items-center gap-2 border border-slate-300 px-3 py-1 rounded-sm backdrop-blur-sm">
            <MailCheck className="w-4" />
            <span className="text-xs font-medium">Suscribe</span>
          </button>
        }
      />
      {list.map((item) => (
        <ListItem
          key={item.title}
          listTitle={listTitle}
          title={item.title}
          date={item.date}
          logo={item.logo}
          url={item.url}
        />
      ))}
    </section>
  );
};

export const ListItem: FC<ListData & { listTitle: string}> = ({ listTitle, title, date, logo, url }) => {
  const dateView = dateFormatter(date);
  return (
    <Link href={`/${listTitle}/${title}`}>
    <section className="group w-full p-4 flex flex-col gap-2 hover:bg-slate-900 rounded-md transition-colors duration-150">
      <div className="h-1/6 w-1/6 rounded-lg">
        {logo && <Image src={logo} alt={`${url} domain`} />}
      </div>
      <div>
        <h2 className="font-medium group-hover:text-slate-50">{title}</h2>
        <div>
          {url && <span>{url}</span>}
          {date && (
            <h2 className="text-slate-400 font-extralight text-sm group-hover:text-slate-300">
              {dateView}
            </h2>
          )}
        </div>
      </div>
    </section>
          </Link>
  );
};
