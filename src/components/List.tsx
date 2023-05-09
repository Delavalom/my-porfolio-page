import { LinkIcon, MailCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { dateFormatter } from "~/lib/utils";
import { HeaderBar } from "./HeaderBar";
import { Button } from "./ui/Button";
import {
  Card,
  CardContent,
  CardTitle
} from "./ui/Card";

export type ListData = {
  title: string;
  date?: Date;
  logo?: string;
  url?: URL;
};

type Props = {
  listTitle: string;
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
          <Button variant="outline" className="space-x-3 border border-slate-300 px-2 py-1 rounded-sm backdrop-blur-sm">
            <MailCheck className="w-4" />
            <span className="text-xs font-medium">Suscribe</span>
          </Button>
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

export const ListItem: FC<ListData & { listTitle: string }> = ({
  listTitle,
  title,
  date,
  logo,
  url,
}) => {
  const dateView = dateFormatter(date);
  return (
    <Link href={`/${listTitle.toLowerCase()}/${title.replaceAll(" ", "-").toLowerCase()}`}>
      <Card className="group w-full p-2 pl-4 border-none shadow-none flex flex-col gap-2 hover:bg-slate-900/5 rounded-md transition-colors duration-150">
        <CardContent className="p-0">
          <div className="flex items-center gap-4">
            {logo && <Image className="group-hover:text-white" src={logo} alt={`${logo} logo`} width={40} height={40} />}
            <CardTitle className="group-hover:text-slate-900 p-0 text-base font-normal">{title}</CardTitle>
          </div>
          {url && (
            <div className="flex gap-1 items-center">
              <LinkIcon className="group-hover:text-slate-300 w-2 h-2" />
              <span className="text-slate-900 font-medium text-sm group-hover:text-slate-300">{url.hostname}</span>
            </div>
          )}
          {date && (
            <span className="text-slate-400 font-medium text-sm group-hover:text-slate-300">
              {dateView}
            </span>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
