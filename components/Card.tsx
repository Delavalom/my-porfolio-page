import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Github from "../assets/GitHub.svg";
interface Props {
  title: string;
  tecnologies: [string, string?, string?, string?];
  deployLink?: string;
  imageSrc?: string | StaticImageData;
  repositoryLink?: string;
}

export const Card = ({ title, tecnologies, deployLink, imageSrc, repositoryLink }: Props) => {
  return (
    <section className="w-full h-fit max-w-sm max-h-80 flex gap-2 justify-between bg-slate-800 rounded-lg p-4 border-t shadow shadow-slate-900/40 border-slate-700 hover:shadow-sky-500/40 transition-shadow duration-500">
      <Link href={deployLink!} target="_blank" rel="noopener noreferrer" title="Go to site inventory-track-dev">
        <figure className="w-full max-w-[250px] h-full max-h-[200px] hover:opacity-50 transition-opacity duration-500">
          <Image className="w-full h-full" src={imageSrc!} alt="" width={500} height={500} loading="lazy" />
        </figure>
      </Link>
      <div className="hidden sm:flex sm:flex-col">
        <h2 className="text-lg">{title}</h2>
        <div className="flex flex-wrap w-full gap-2">
          {tecnologies.map((tecnology) => (
            <span
              key={tecnology}
              className="bg-slate-700 px-2 py-[2px] text-slate-400 rounded-md font-thin"
            >
              {tecnology}
            </span>
          ))}
        </div>
      </div>
      {repositoryLink && (
        <Link href={repositoryLink}>
          <figure>
            <Github className="text-2xl hover:text-sky-500 transition-colors duration-500" />
          </figure>
        </Link>
      )}
    </section>
  );
};
