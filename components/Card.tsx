import Image from "next/image";
import Link from "next/link";
import Github from "../assets/GitHub.svg";
interface Props {
  title: string;
  tecnologies: [string, string?, string?, string?];
  isPublic?: boolean;
}

export const Card = ({ title, tecnologies, isPublic }: Props) => {
  return (
    <section className="w-full h-fit max-w-sm max-h-80 flex gap-2 justify-between bg-slate-800 rounded-lg p-4 border-t shadow shadow-slate-900/40 border-slate-700 hover:shadow-sky-500/40 transition-shadow duration-500">
      <Link href="https://inventory-tracker-dev.netlify.app" target="_blank" rel="noopener noreferrer" title="Go to site inventory-track-dev">
        <figure className="w-full h-full hover:opacity-50 transition-opacity duration-500">
          <source srcSet="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/637a76b9e167bb000818059c/screenshot_2022-11-20-18-49-52-0000.png" type="image/avif" />
          <source srcSet="https://screenshot-proxy.netlify.app/f_webp,w_336/https://d33wubrfki0l68.cloudfront.net/637a76b9e167bb000818059c/screenshot_2022-11-20-18-49-52-0000.png" type="image/webp" />
          <Image className="w-full h-full" src="https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/637a76b9e167bb000818059c/screenshot_2022-11-20-18-49-52-0000.png" alt="" width="168" height="105" loading="lazy" />
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
      {isPublic && (
        <Link href="https://github.com/Delavalom/inventory-tracker">
          <figure>
            <Github className="text-2xl hover:text-sky-500 transition-colors duration-500" />
          </figure>
        </Link>
      )}
    </section>
  );
};
