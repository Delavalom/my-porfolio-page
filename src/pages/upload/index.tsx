import Image from "next/image";
import React, { useState } from "react";

interface Props {}

const Upload = () => {
  const [file, setFile] = useState<File>();
  const [filePreview, setFilePreview] = useState<string>("");
  const [message, setMessage] = useState("Upload build image");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (!files) throw new Error("no funciono");

    setFilePreview(URL.createObjectURL(files[0]));
    setFile(files[0]);
    setMessage('Upload build image')
  };

  const uploadFile = async () => {
    setMessage('loading...')
    
    const response = await fetch('/api/cloudinary', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ file: file?.name })
    })
    setMessage('succesful upload')

    const data = await response.json()
    if (response.ok) {
      console.log({ data })
    }
  };

  return (
    <section className="h-1/2 flex flex-col justify-between items-center">
      <input
      accept="image/*"
        onChange={handleFile}
        type="file"
        className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-slate-50 file:text-slate-700
      hover:file:bg-slate-100
    "
      />
      {file && (
        <>
          <Image
            src={filePreview}
            alt={file.name}
            width={150}
            height={150}
            className="rounded-sm"
          />
          <button
            onClick={uploadFile}
            className="text-slate-700 px-20 py-2 rounded-full bg-slate-50"
          >
            {message}
          </button>
        </>
      )}
    </section>
  );
};

export default Upload;
