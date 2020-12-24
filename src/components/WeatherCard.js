import dateFormat from 'dateformat'
import convertTime from 'convert-time'


function WeatherCard({currentDate, currentTime, weatherData}) {

    const ctime = () => {
        if ( currentTime) {
            return convertTime(currentTime);
        } else {
            return currentTime;
        }
    }



    return (
        <div className="weather-card">

            <div className="weather-bg"></div>
            {weatherData && (
                <div className="location-info">
                    <h2>{weatherData.location.name}, {weatherData.location.region}</h2>
                    <h4>{dateFormat(currentDate, "dddd")} {ctime()}</h4>
                    <h3> {weatherData.current.condition.text}</h3>

                    <div>
                        <h4>Humidity: {weatherData.current.humidity} %</h4>
                        <h4>Wind: {weatherData.current.wind_kph} km/h</h4>
                        <h4>Percepitation: {weatherData.current.precip_mm} mm</h4>
                    </div>
                </div>

            )}



            {weatherData && (
                <div className="data-icon-info">
                
                    <h1>{Math.ceil(weatherData.current.feelslike_c)} °C </h1>
                    <h5>Feel Like: {Math.ceil(weatherData.current.temp_c)} °C </h5>

                    <img src={weatherData.current.condition.icon} alt=""/>

                </div>

            )}
        
        </div>
    )
}

export default WeatherCard
