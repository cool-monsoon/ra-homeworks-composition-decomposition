import './ExchangeRates.css';

// Компонент отображает курс валют

export default function ExchangeRates({ currencyRates }) {
  return (
    <div className="exchange-rates-container">
      <ul className="exchange-rates">
        {currencyRates.map((item, index) => {
          return (
            <li className="exchange-rates-item" key={index}>
              <a href="#0" className="exchange-rates-item-link">
                {item.currency}
              </a>
              <span className="exchange-rates-item-rate">
                {item.rate}
              </span>
            </li>
          );
        })}
      </ul>
      <a href="#0" className="exchange-rates-show-more">
        &#8230;
      </a>
    </div>
  );
}

