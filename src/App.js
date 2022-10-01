import './App.css';
import City from './components/City';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import WeatherDetails from './components/WeatherDetails';
import cloudyBackground from './images/cloudy.jpg';
import thunderstormBackground from './images/thunderstorm.jpg';
import drizzleBackground from './images/drizzle.jpg';
import rainBackground from './images/rain.jpg';
import snowBackground from './images/snow.jpg';
import sunnyBackground from './images/sunny.jpg';
import { SyncLoader } from 'react-spinners';

function App() {
  const [cityWeather, setCityWeather] = useState({});
  const [searchedCity, setSearchedCity] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const WEATHER_BACKGROUND_MAP = {
    "Thunderstorm": thunderstormBackground,
    "Drizzle": drizzleBackground,
    "Rain": rainBackground,
    "Snow": snowBackground,
    "Clear": sunnyBackground,
    "Clouds": cloudyBackground,
  };

  const cityInfo = (cityName) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=`+cityName+`&appid=`+key+`&units=metric`).then(res => {
      const weather = res.data;
      setIsLoaded(true);
      setCityWeather(weather);
      ChangeBackground(weather.weather[0].main);
    });
  }

  const ChangeBackground = async (weatherInfo) => {
    document.body.style.backgroundImage = WEATHER_BACKGROUND_MAP[weatherInfo] ? `url(${WEATHER_BACKGROUND_MAP[weatherInfo]})` : "white";
  }

  const HandleSubmitCity = (e) => {
    if (e.target.innerHTML !== ""){
      cityInfo(e.target.innerHTML);
    }
    else{
      cityInfo(searchedCity);
    }
    setSearchedCity("");
  }

  useEffect(() => {
    console.log(isLoaded)
    cityInfo("London");
  }, []);

  return (
    <div className="App">
      {isLoaded === true ? 
        <div>
          <City city={cityWeather}/>
          <div className="cw-sidepanel">
            <div className="cw-sidepanel-searchpanel">
                <input type="text" placeholder="Enter location" className="cw-sidepanel-searchpanel-input" onChange={(e) => setSearchedCity(e.target.value)} value={searchedCity}/>
                <button type="button" className="cw-sidepanel-searchpanel-searchbtn" onClick={HandleSubmitCity}><AiOutlineSearch size={20} color="white"/></button>
            </div>
            <div className="cw-sidepanel-cities">
                <button type="button" className="cw-sidepanel-cities-btn" onClick={HandleSubmitCity}>London</button>
                <button type="button" className="cw-sidepanel-cities-btn" onClick={HandleSubmitCity}>New York</button>
                <button type="button" className="cw-sidepanel-cities-btn" onClick={HandleSubmitCity}>California</button>
                <button type="button" className="cw-sidepanel-cities-btn" onClick={HandleSubmitCity}>Manchester</button>
            </div>
            <hr className="cw-sidepanel-divider"/>
            <div className="cw-sidepanel-details">
              <WeatherDetails city={cityWeather}/>
            </div>
            <hr className="cw-sidepanel-divider"/>
          </div>
        </div>
      :
        <SyncLoader color='black'/>
      }
    </div>
  );
}

export default App;
