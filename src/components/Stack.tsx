import { logos } from "../data";

export const Stack = () => {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col gap-5 space-y-2">
      <h1 className="text-3xl font-semibold">Favorite Stack</h1>
      <p className="opacity-80">
        I love exploring new libraries, programing languages and frameworks.
        Here is a list of technologies that I have worked with at school, side
        projects and open source.
      </p>
      <ul className="w-full h-auto flex flex-wrap gap-4 place-items-center">
        {logos.map(({ Name, Icon }) => (
          <li
            key={Name}
            className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center p-4 border-t shadow shadow-slate-900/40 border-slate-700 hover:shadow-sky-500/40 transition-shadow duration-500"
          >
            <Icon className="text-white text-3xl" />
          </li>
        ))}
      </ul>
    </section>
  );
};
