import Image from "next/image";
import createOgImage from '../utils/createOgImage'
import Link from "next/link";


type Data = Record<'title' | "meta" | "bgImage" | "url", string>

const data: Data[] = [
  {
    title: "GPT3",
    meta: "Generate perfect pitch descriptions for GitHub repositories using AI-powered technology!",
    bgImage: 'gpt3.png',
    url: 'https://github.com/Delavalom/gpt3-writer-starter'
  },
  {
    title: "Pokedex",
    meta: "Using the T3 stack new docs and cli with comprehensive Pokedex app, providing images for all 809 Pokemon if you catch one.",
    bgImage: 'pokedex.png',
    url: 'https://github.com/Delavalom/pokedex'
  },
  {
    title: "Inventory Tracker",
    meta: "React, Typescript simple inventory tracker. soon v2 with tRpc, database connection and .csv uploads",
    bgImage: 'inventory_tracker.png',
    url: 'https://github.com/Delavalom/inventory-tracker'
  },
  {
    title: "Guestbook",
    meta: "Clone the classic Lee Robinson guestbook and easily add it to your website. All the features you love, plus more!",
    bgImage: 'guestbook.png',
    url: 'https://guestbook-delavalom.vercel.app/'
  },
]

export const Showcase = () => {
  const ogImages = data.map(item => {
    return {
      image: createOgImage({
        title: item.title,
        meta: item.meta,
        bgImage: item.bgImage
      }),
      url: item.url
    }
  })

  return (
    <section className="w-full max-w-4xl mx-auto space-y-2 mt-8 pb-20">
      <h1 className="text-3xl font-semibold">Showcase</h1>
      <div className="w-full flex flex-wrap gap-8">
        {ogImages.map((ogImage, index) => (
          <Link key={index} href={ogImage.url} className='shadow-md shadow-sky-900 hover:scale-105 transition-all duration-500'>
            <Image src={ogImage.image} alt="ogimage" width={400} height={236} className='rounded-lg' />
          </Link>
        ))}
      </div>
    </section>
  );
};
