import Image from 'next/image';

interface Props {}

export const Stack = () => {
  return (
    <section className="flex flex-col gap-5 space-y-2">
      <h1 className="text-3xl font-semibold">Favorite Stack</h1>
      <p className="opacity-80">
        I love exploring new libraries, programing languages and frameworks.
        Here is a list of technologies that I have worked with at school, side
        projects and open source.
      </p>
      <div>
        <Image src="/public/tailwind.svg" alt="tw Logo" width={30} height={30} />
      </div>
    </section>
  );
};
