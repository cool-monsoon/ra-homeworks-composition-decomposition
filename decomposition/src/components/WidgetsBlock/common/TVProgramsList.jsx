import './List.css';

// Компонент отображает список ТВ передач для виджета "Телепрограмма"

export default function TVProgramsList({ items }) {
  return (
    <ul className="widget-list">
      {items.map(({ time, name, source }, index) => {
        return (
          <li className="widget-list-item" key={index}>
            <span className="widget-list-item-time">
              {time ? `${time}\u00A0\u00A0` : ''}
            </span>
            <span className="widget-list-item-name">
              {name}
            </span>
            <span className="widget-list-item-source">
              {source ? `\u00A0\u00A0${source}` : ''}
            </span>
          </li>
        );
      })}
    </ul>
  );
}