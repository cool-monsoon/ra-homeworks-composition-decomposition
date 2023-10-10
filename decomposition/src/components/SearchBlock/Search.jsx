import './Search.css';

// Компонент отображает навигацию по меню поисковика, поле поиска и подпись с подсказкой
export default function Search(props) {
  const {
    searchCategories,
    searchBarLabel,
    searchBtn,
    searchClue,
    searchExample,
  } = props;

  return (
    <div className="search">
      <nav className="search-nav">
        <ul className="search-nav-menu">
          {searchCategories.map((category, index) => {
            return (
              <li className="search-nav-menu-item active" key={index}>
                <a href="#0" className="search-nav-menu-item-link">
                  {category}
                </a>
              </li>
            );
          })}
          <li className="search-nav-menu-item">
            <a href="#0" className="search-nav-menu-item-link">
              ещё
            </a>
          </li>
        </ul>
      </nav>

      <form className="search-bar">
        <label className="search-bar-label" htmlFor="search-bar-input">
          {searchBarLabel}
        </label>
        <input className="search-bar-input" id="search-bar-input" type="text" name="search-bar-input" required />
        <button className="search-bar-button" type="submit">
          {searchBtn}
        </button>
      </form>

      <p className="search-clue">
        {searchClue}
        <span className="search-clue-example">
          &nbsp;{searchExample}
        </span>
      </p>
    </div>
  );
}

