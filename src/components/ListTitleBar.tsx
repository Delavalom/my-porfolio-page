import { MailCheck } from "lucide-react";
import { type FC } from "react";

type Props = {
    title: string
};

export const ListTitleBar: FC<Props> = ({title}) => {
  return (
    <div className="w-full p-4 flex items-center justify-between sticky top-0 border-b-2 bg-white">
      {/* heading Title coming from navigation */}
      <h1 className="font-semibold text-md">{title}</h1>
      {/* suscribe newsletter button */}
      <button className="flex items-center gap-2 border border-slate-300 px-3 py-1 rounded-sm backdrop-blur-sm">
        <MailCheck className="w-4" />
        <span className="text-xs font-medium">Suscribe</span>
      </button>
    </div>
  );
};
