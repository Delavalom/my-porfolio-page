import { type FC } from "react";
import { HeaderBar } from "../Layout/HeaderBar";
import { MailCheck } from "lucide-react";
import { ListContainer } from "./ListContainer";

type Props = {};

export const List: FC<Props> = () => {
  return (
    <ListContainer>
      <HeaderBar
        title="Writing"
        Cta={
          <button className="flex items-center gap-2 border border-slate-300 px-3 py-1 rounded-sm backdrop-blur-sm">
            <MailCheck className="w-4" />
            <span className="text-xs font-medium">Suscribe</span>
          </button>
        }
      />

      {/* replace listItem for array of list data rendering */}

      {/* if long list implement lazy loading */}
    </ListContainer>
  );
};
