import './App.css'

import newsCategories from "./data/newsCategories";
import newsTitles from "./data/newsTitles";
import currencyRates from "./data/currencyRates";
import searchCategories from "./data/searchCategories";
import frequentlyVisited from "./data/frequentlyVisited";
import mapGermany from "./data/mapGemany";
import programmsTV from "./data/programmsTV";
import onAir from "./data/onAir";

import News from "./components/NewsBlock/News";
import ExchangeRates from "./components//NewsBlock/ExchangeRates";
import Ads from "./components//NewsBlock/Ads";
import Images from "./components//NewsBlock/Images";

import Search from "./components/SearchBlock/Search";

import Widgets from "./components/WidgetsBlock/Widget";
import Weather from "./components/WidgetsBlock/Weather";
import FrequentlyVisited from "./components/WidgetsBlock/FrequentlyVisited";
import MapGermany from "./components/WidgetsBlock/MapGermany";
import TVProgram from "./components/WidgetsBlock/TVProgram";
import OnAir from "./components/WidgetsBlock/OnAir";


export default function App() {

  return (
    <>
      <section className="news">
        <div className="blockContainer">
          <div className="newsBlock">
            <News newsCategories={newsCategories} newsTitles={newsTitles} />

            <ExchangeRates currencyRates={currencyRates} />
          </div>

          <Ads
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
          >
            <Images
              containerClass="ads-image-container"
              imgClass="ads-image"
              src="https://previews.123rf.com/images/xixinxing/xixinxing2208/xixinxing220804851/190846306-hand-erasing-chalkboard.jpg"
              alt="Plug"
            />
          </Ads>
        </div>
      </section>

      <section className="searchBlock">
        <div className="blockContainer">
          <Search
            searchCategories={searchCategories}
            searchBarLabel="Яндекс"
            searchBtn="Найти"
            searchClue="Найдётся всё. Например,"
            searchExample="фаза луны сегодня"
          />
        </div>
      </section>

      <section className="widgetBlock">
        <div className="blockContainer">

          <Widgets>
            <Weather
              title="Погода"
              currentTemperature="+17"
              morningTemperature="+17"
              daytimeTemperature="+20"
            />
            <MapGermany
              title="Карта Германии"
              items={mapGermany}
            />
            <OnAir
              title="Эфир"
              items={onAir}
            />
            <FrequentlyVisited
              title="Посещаемое"
              items={frequentlyVisited}
            />
            <TVProgram
              title="Телепрограмма"
              items={programmsTV}
            />
          </Widgets>

        </div>
      </section>
    </>
  );
}