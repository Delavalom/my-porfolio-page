// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";

const e = (str: string) => encodeURIComponent(encodeURIComponent(str))

const createOgImage = () => {
  return (
    [
      `https://res.cloudinary.com/dqyp2cew9/image/upload`,
      `w_1600,h_836,1_100`,
      `l_text:Arial_100:${e(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      )}`,
      `v1671121319`,
      `grain-gradient.webp`
    ]
    .join('/')
  )
}

export default createOgImage;