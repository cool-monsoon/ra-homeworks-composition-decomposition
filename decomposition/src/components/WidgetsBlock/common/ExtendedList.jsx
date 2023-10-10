import './List.css';

// Компонент отображает список посещаемых страниц для виджета "Посещаемое" (в формате: понятие - определение)

export default function ExtendedList({ items }) {
  return (
    <ul className="widget-list">
      {items.map(({ term, definition }, index) => {
        return (
          <li  className="widget-list-item" key={index}>
            <b>{term}</b> &ndash; {definition}
          </li>
        );
      })}
    </ul>
  );
}
