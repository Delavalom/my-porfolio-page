import { Card } from "./Card";

interface Props {}

export const Showcase = () => {

  return (
        <section className="space-y-2">
          <Card title="Inventory tracker" tecnologies={['rust', 'typescript']} />
        </section>
  );
};
