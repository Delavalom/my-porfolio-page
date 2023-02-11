import { dateFormatter } from "@/lib/utils";
import Link from "next/link";
import { type FC } from "react";

type Props = {
    title: string
    date?: Date
    logo?: string,
    url?: string
};

export const ListItem: FC<Props> = ({title, date, logo, url}) => {
    const dateView = dateFormatter(date)
  return (
    <section className="group w-full px-4 py-2 flex flex-col gap-2 hover:bg-slate-900 rounded-md">
      <h2 className="font-medium group-hover:text-slate-50">{title}</h2>
        {url ? (
            <div>
                {logo} <Link href={url}>{url}</Link>
            </div>
        ): (
            <h2 className="text-slate-400 font-extralight text-sm group-hover:text-slate-300">{dateView}</h2>
        )}
    </section>
  );
};
