interface Props {
  title: string;
  tecnologies: string[];
}

export const Card = ({ title, tecnologies }: Props) => {
  return (
    <section className="w-full h-28 max-h-28 bg-slate-800 rounded-lg p-4 border-t shadow shadow-black/40 border-slate-700 hover:shadow-sky-500/40">
      <div>
        <h2>{title}</h2>
        <div className="flex w-full gap-2">
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
    </section>
  );
};
