import { type FC } from "react";

type Props = {
  onClick?: () => void;
};

export const EmojiBtn: FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex -space-x-2 overflow-hidden border p-2 rounded-full max-w-[100px]"
    >
      <p className="inline-block h-fit w-fit rounded-full">😱</p>
      <p className="inline-block h-fit w-fit rounded-full">🤐</p>
      <p className="inline-block h-fit w-fit rounded-full">🤯</p>
      <p className="inline-block h-fit w-fit rounded-full">😍</p>
    </button>
  );
};
