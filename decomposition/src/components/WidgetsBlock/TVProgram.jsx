import Title from './common/Title';
import TVProgramsList from './common/TVProgramsList'

// Компонент отображает виджет "Телепрограмма"

export default function TVProgramWidget({ title, items }) {
  return (
    <div className="TV-program-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}
