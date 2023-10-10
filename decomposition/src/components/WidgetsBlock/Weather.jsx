import Title from './common/Title'
import './Weather.css'

// Компонент отображает виджет "Погода"

export default function WeatherWidget(props) {
  const {
    title,
    currentTemperature,
    morningTemperature,
    daytimeTemperature,
  } = props;

  return (
    <div className="weather-widget">
      <Title title={title} />
      <div className="weather">
        <span className="current-temperature">
          {currentTemperature}&deg;
        </span>
        <div className="weather-additional">
          <span className="weather-additional-morning">
            утром {morningTemperature},
          </span>
          <span className="weather-additional-afternoon">
            днём {daytimeTemperature}
          </span>
        </div>
      </div>
    </div>
  );
}