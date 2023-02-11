import Link from "next/link";
import { type FC } from "react";
import Balancer from "react-wrap-balancer";

type Props = {};

export const DetailView: FC<Props> = ({}) => {
  return (
    <section className="flex flex-col justify-start items-center w-full h-screen bg-white">
        <div className="w-full flex justify-between px-4">
            <h1>Framer Sites first impressions</h1>
            <button>react</button>
        </div>
      <article className="blog-container">
        <h1 className="text-black">
          <Balancer className="">
            Framer Sites first impressions
          </Balancer>
        </h1>
        <div className="prose text-primary">
                <p>
                  Hey, I&apos;m Brian. I&apos;m a designer,{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://designdetails.fm"
                  >
                    podcaster
                  </a>
                  ,{' '}
                  <Link href="/writing" passHref>
                    writer
                  </Link>
                  , and{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/brianlovin"
                  >
                    software tinkerer
                  </a>
                  . I&apos;m currently building{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://campsite.design"
                  >
                    Campsite
                  </a>
                  , a tool that helps teams share and collaborate on
                  work-in-progress.
                </p>

                <p>
                  Before Campsite, I spent four years designing{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mobile"
                  >
                    native mobile apps at GitHub
                  </a>
                  .
                </p>
                <p>
                  Before GitHub, I co-founded{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://spectrum.chat"
                  >
                    Spectrum
                  </a>
                  , a platform for large-scale communities to have better public
                  conversations. Spectrum was acquired by GitHub in November,
                  2018.
                </p>
                <p>
                  Before Spectrum I designed payments experiences at Facebook,
                  working across Facebook, Messenger, WhatsApp, and Instagram. I
                  originally cut my teeth as the first product designer at{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://buffer.com"
                  >
                    Buffer
                  </a>
                  .
                </p>
                <p>
                  I also co-host the{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://designdetails.fm"
                  >
                    Design Details Podcast
                  </a>
                  , a weekly conversation about design process and culture.
                  Design Details is part of{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://spec.fm"
                  >
                    Spec.fm
                  </a>
                  , a podcast network for designers and developers, which I
                  co-founded in 2015.
                </p>
              </div>
      </article>
    </section>
  );
};
