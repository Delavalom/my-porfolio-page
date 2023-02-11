import { ReactElement, type FC } from "react";
import { ListContainer } from "../List/ListContainer";

type Props = {
    list?: ReactElement
    view?: ReactElement
    hasDetail?: boolean
  };

export const LayoutView: FC<Props> = ({list, view, hasDetail}) => {
  return (
    <>
      {list && (
        <ListContainer
          id="list"
          className={`${hasDetail ? "hidden lg:flex" : "min-h-screen w-full"}`}
        >
          {list}
        </ListContainer>
      )}
      {view}
    </>
  );
};
