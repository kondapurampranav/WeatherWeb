import "./WeatherCard.css";

function WeatherCard({ weather }) {
    if (!weather) return null;
    const { location, current } = weather;
    return(
        <div className="weather-card">
            <h2>{location.name}, {location.country}</h2>
            <img
                src={current.condition.icon}
                alt={current.condition.text}
            />
            <h1>{current.temp_c}°C</h1>
            <h3>{current.condition.text}</h3>
            <p>Feels like: {current.feelslike_c}°C</p>
            <p>Humidity: {current.humidity}%</p>
            <p>Wind: {current.wind_kph} km/h</p>
        </div>
    )
}

export default WeatherCard;