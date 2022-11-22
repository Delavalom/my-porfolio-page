import { logos } from "../data/logos";

export const Stack = () => {
  return (
    <section className="flex flex-col gap-5 space-y-2">
      <h1 className="text-3xl font-semibold">Favorite Stack</h1>
      <p className="opacity-80">
        I love exploring new libraries, programing languages and frameworks.
        Here is a list of technologies that I have worked with at school, side
        projects and open source.
      </p>
      <ul className="w-full h-auto grid grid-cols-3 gap-4 place-items-center">
        {logos.map(({ Name, Icon }) => (
          <li
            key={Name}
            className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center p-4 border-t shadow shadow-black/40 border-slate-700 hover:shadow-sky-500/40"
          >
            <Icon className="text-white text-3xl" />
          </li>
        ))}
      </ul>
    </section>
  );
};
