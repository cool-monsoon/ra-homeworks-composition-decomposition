import Title from './common/Title';
import List from './common/List'

// Компонент отображает виджет "Карта Германии"

export default function MapGermany({ title, items }) {
  return (
    <div className="german-map-widget">
      <Title title={title} />
      <List items={items} />
    </div>
  );
}