import './List.css';

// Компонент отображает списоки

export default function List({ items }) {
  return (
    <ul className="widget-list">
      {items.map(({ content }, index) => {
        return (
          <li className="widget-list-item" key={index}>
            {content}
          </li>
        );
      })}
    </ul>
  );
}
