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
  if (METHOD === "POST") {
    try {
      return await uploadImage(request, response);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      };
      console.log(error)
    }
  }
}

const uploadImage = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { file } = request.body;

  const options: UploadApiOptions = {
    public_id: "build",
    resource_type: "auto",
    folder: "builds/",
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
      .json({ message: "Couldn't upload file" });
  }
};
