import { MailCheck } from "lucide-react";
import { type FC } from "react";

type Props = {};

export const ListTitleBar: FC<Props> = ({}) => {
  return (
    <>
      {/* heading Title coming from navigation */}
      {"Writing"}
      {/* suscribe newsletter button */}
      <button>
        <span>Suscribe</span>
        <MailCheck />
      </button>
    </>
  );
};
