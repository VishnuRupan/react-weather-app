import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.scss';
import ImageData from './data'
import stringSimilarity from 'string-similarity'
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';


function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [weatherImage] = useState(ImageData());
  const [currentImg, setCurrentImg] = useState(ImageData());
  const [searchLocation, setSearchLocation] = useState("Toronto")


  useEffect(() => {

    
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${searchLocation}`)
    .then( data => {
      setWeatherData(data.data);
      const dataDate = (data.data.location.localtime.split(" "));

      setCurrentDate(dataDate[0]);
      setCurrentTime(dataDate[1])

      const str = data.data.current.condition.text;
      const isDay = data.data.current.is_day;

      if(isDay) {
        setCurrentImg(weatherImage[0].img)
      } else{
        setCurrentImg(weatherImage[1].img)
      }

      weatherImage.forEach(weather => {
        let similarity = stringSimilarity.compareTwoStrings(str, weather.condition); 
        if ( similarity > 0.2) {
          setCurrentImg(weather.img)
        }
      })

    }).catch(err => {
      setSearchLocation("Toronto")
    })


  }, [searchLocation, weatherImage])



  return (
    <div className="App" style={{backgroundImage: `url(${currentImg})`}}>


      <div className="title-container">
        <a href="/"><h1> React Weather App</h1></a>
      </div>
      <Search setSearchLocation={setSearchLocation}/>
      <WeatherCard weatherData={weatherData} currentDate={currentDate} currentTime={currentTime} />


    </div>
  );
}

export default App;
