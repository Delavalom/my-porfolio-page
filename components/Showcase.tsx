import { Card } from "./Card";

export const Showcase = () => {
  return (
    <section className="w-full max-w-4xl mx-auto space-y-2">
      <h1 className="text-3xl font-semibold">Showcase</h1>
      <div className="w-full flex flex-wrap">
        <Card title="Inventory tracker" tecnologies={["react", "typescript", "tailwind"]} isPublic={true} />
      </div>
    </section>
  );
};
