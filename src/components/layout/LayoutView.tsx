import { ReactElement, type FC } from "react";
import { ListContainer } from "../List/ListContainer";
import { View } from "../View";

type Props = {
  list?: ReactElement;
  view?: ReactElement;
  hasDetail?: boolean;
};

export const LayoutView: FC<Props> = ({ list, view, hasDetail }) => {
  return (
    <>
      {list && !view ? (
        <ListContainer
          id="list"
          className={`${hasDetail ? "hidden lg:flex" : "min-h-screen w-full"}`}
        >
          {list}
        </ListContainer>
      ) : (
        <View onClick={() => {}}>
          <section className="w-full flex flex-col px-2">{view}</section>
        </View>
      )}
    </>
  );
};
