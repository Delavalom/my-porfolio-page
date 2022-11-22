import { Card } from "./Card";

export const Showcase = () => {
  return (
    <section className="space-y-2">
      <h1 className="text-3xl font-semibold">Showcase</h1>
      <Card title="Inventory tracker" tecnologies={["rust", "typescript"]} />
    </section>
  );
};
