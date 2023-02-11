import { useRouter } from "next/router";
import { type FC } from "react";
import { ListTitleBar } from "./ListTitleBar";
import { ListItem } from "./ListItem";

type Props = {};

export const ListDetailView: FC<Props> = ({}) => {
    const router = useRouter()
  return (
    <section className="flex flex-col gap-4 bg-white w-full min-w-[25%] md:w-10 px-3 border border-slate-200 h-screen text-slate-900">
      <ListTitleBar />
        {/* (cards holding title, date or favicon with url) || (cards holding logo and title) */}

        {/* if long list implement lazy loading */}
        <ListItem title="Framer Sites first impressions" date={new Date("02-10-2023")} />
        <ListItem title="Framer Sites first impressions" date={new Date("02-10-2023")} />
        <ListItem title="Framer Sites first impressions" date={new Date("02-10-2023")} />
        <ListItem title="Framer Sites first impressions" date={new Date("02-10-2023")} />
        <ListItem title="Framer Sites first impressions" date={new Date("02-10-2023")} />
        <ListItem title="Framer Sites first impressions" date={new Date("02-10-2023")} />
        <ListItem title="Framer Sites first impressions" date={new Date("02-10-2023")} />
    </section>
  );
};
