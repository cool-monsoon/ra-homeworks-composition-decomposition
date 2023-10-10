import Title from './common/Title';
import TVProgramsList from './common/TVProgramsList'

// Компонент отображает виджет "Эфир"

export default function OnAir({ title, items }) {
  return (
    <div className="Ether-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}

