import { useRouter } from "next/router";
import { type FC } from "react";
import { TitleBar } from "../Layout/TitleBar";
import { ListItem } from "./ListItem";
import { MailCheck } from "lucide-react";
import { ListViewContainer } from "./ListViewContainer";

type Props = {};

export const ListView: FC<Props> = ({}) => {
  const router = useRouter();
  return (
    <ListViewContainer>
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
      {/* if long list implement lazy loading */}
    </ListViewContainer>
  );
};
