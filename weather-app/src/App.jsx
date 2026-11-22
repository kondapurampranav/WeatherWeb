import React from "react";
import { useState } from "react";
import Weather from "./weather";
import Child from "./Child";
import SearchBar from "./components/SearchBar";
import fetchWeather from "./weatherAPI";
import WeatherCard from "./components/WeatherCard";

function App(){

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);


  async function handleSearch(query){
    console.log(query)
    const data = await fetchWeather(query)
    setWeather(data)
  }
  return(
    <div>
            <h1>Weather App</h1>

            <SearchBar 
            city={city}
            setCity={setCity}
            onSearch={handleSearch} />

            <WeatherCard weather={weather}/>
        </div>
  )
}

export default App;