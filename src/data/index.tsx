import Tailwindcss from "@assets/Tailwindcss.svg";
import GraphQl from "@assets/GraphQL.svg";
import Javascript from "@assets/javascript.svg";
import NextJS from "@assets/NextJS.svg";
import NodeJS from "@assets/node.svg";
import TRPC from "@assets/trpc.svg";
import Typescript from "@assets/TypeScript.svg";
import ReactJS from "@assets/React.svg";
import Jest from "@assets/Jest.svg";
import React, { FunctionComponent } from "react";

type Logos = {
  Name: string;
  Icon: FunctionComponent<React.SVGProps<SVGAElement>>;
}[];

export const logos: Logos = [
  {
    Name: "tailwind",
    Icon: Tailwindcss,
  },
  {
    Name: "graphQl",
    Icon: GraphQl,
  },
  {
    Name: "nextjs",
    Icon: NextJS,
  },
  {
    Name: "typescript",
    Icon: Typescript,
  },
  {
    Name: "javascript",
    Icon: Javascript,
  },
  {
    Name: "react",
    Icon: ReactJS,
  },
  {
    Name: "jest",
    Icon: Jest,
  },
  {
    Name: "tRPC",
    Icon: TRPC,
  },
  {
    Name: "nodejs",
    Icon: NodeJS,
  },
];

export const builds = [
  {
    
  }
]