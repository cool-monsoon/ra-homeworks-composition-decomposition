import Title from './common/Title';
import ExtendedList from './common/ExtendedList'


// Компонент отображает виджет "Посещаемое"

export default function FrequentlyVisited({ title, items }) {
  return (
    <div className="frequentlyVisited">
      <Title title={title} />
      <ExtendedList items={items} />
    </div>
  );
}
