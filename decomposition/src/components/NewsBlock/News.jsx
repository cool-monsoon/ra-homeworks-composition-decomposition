import './News.css';

// Компонент осуществляет навигацию по новостному меню и отображает список новостей

export default function News({ newsCategories, newsTitles }) {
  console.log(newsCategories);
  console.log(newsTitles);
  return (
    <div className="news">
      <nav className="news-nav">
        <ul className="news-nav-menu">
          {newsCategories.map((category, index) => {
            return (
              <li
                className={`news-nav-menu-item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <a href="#0" className="news-nav-menu-item-link">
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
        <span className="news-current-datetime">31 июля, среда 02:32</span>
      </nav>
      <div className="news-content">
        <ul>
          {newsTitles.map((title, index) => {
            return (
              <li className="news-content-item" key={index}>
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

