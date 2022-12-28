import formidable from "formidable";
import type { NextApiRequest } from "next";

export const FormidableError = formidable.errors.FormidableError;

export const parseForm = async (
  req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
    return new Promise(async (resolve, reject) => {
        resolve({
            files: {},
            fields: {},
        })
    })
};
