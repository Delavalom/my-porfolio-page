// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { UploadApiOptions, v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_ID,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const METHOD = request.method;
  if (METHOD === "GET") {
    try {
      const result = await searchImages();
    } catch (error) {
      console.log(error);
    }
  }
  if (METHOD === "POST") {
    try {
      await uploadImage(request, response);
    } catch (error) {
      console.log(error);
    }
  }
}

const searchImages = async () => {
  try {
    const result = await cloudinary.search.expression("").execute();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const uploadImage = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { file } = request.body;
  console.log(request.body)
  const options: UploadApiOptions = {
    public_id: "build",
    resource_type: "auto",
    folder: "builds",
    format: "svg",
  };
  try {
    const result = await cloudinary.uploader.upload(file, options);
    return response
      .status(201)
      .json({ public_id: result.public_id, url: result.secure_url });
  } catch (error) {
    return response
      .status(400)
      .json({ ok: false, message: "That pokemon doesn't exist" });
  }
};
