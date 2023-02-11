import { useRouter } from "next/router";
import { type FC } from "react";
import { TitleBar } from "./TitleBar";
import { ListItem } from "./ListItem";
import { MailCheck } from "lucide-react";

type Props = {};

export const ListDetailView: FC<Props> = ({}) => {
  const router = useRouter();
  return (
    <section className="flex flex-col gap-4 bg-white w-full min-w-[20%] md:w-8 px-3 border border-slate-200 h-screen text-slate-900 overflow-y-scroll scroll-smooth">
      <TitleBar
        title="Writing"
        Cta={
          <button className="flex items-center gap-2 border border-slate-300 px-3 py-1 rounded-sm backdrop-blur-sm">
            <MailCheck className="w-4" />
            <span className="text-xs font-medium">Suscribe</span>
          </button>
        }
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      <ListItem
        title="React Beta Docs are the best"
        date={new Date("02-10-2023")}
      />
      {/* if long list implement lazy loading */}
    </section>
  );
};
