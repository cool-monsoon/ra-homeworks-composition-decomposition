import './Title.css';


// Компонент отображает заголовки виджетов

export default function Title({ title }) {
  return (
    <h3 className="widget-title">
      <a href="#0" className="widget-title-link">
        {title}
      </a>
    </h3>
  );
}