import Link from "next/link";
import { type FC } from "react";
import Balancer from "react-wrap-balancer";

type Props = {};

export const DetailView: FC<Props> = ({}) => {
  return (
    <section className="flex flex-col justify-start items-center w-full h-screen bg-white">
      <div className="w-full flex justify-between items-center p-4">
        <h1>React Beta Docs are the best</h1>
        <div>
          <div className="flex -space-x-2 overflow-hidden">
            <p className="inline-block h-fit w-fit rounded-full">😱</p>
            <p className="inline-block h-fit w-fit rounded-full">🤐</p>
            <p className="inline-block h-fit w-fit rounded-full">🤯</p>
            <p className="inline-block h-fit w-fit rounded-full">😍</p>
          </div>
        </div>
      </div>
      <article className="blog-container">
        <h1 className="text-black">
          <Balancer className="">React Beta Docs are the best</Balancer>
        </h1>
      </article>
    </section>
  );
};
