import {useState} from "react";

function Weather(){
    
    const [city, changeCity] = useState("")
    const [weather, changeWeather] = useState(null);

    const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;

    async function extract(e){
        e.preventDefault();


        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);

        if(!response.ok){
                alert("no response")
                return;
            }
        
        const data = await response.json();
        changeWeather(data);


    }

    return(
       <div>
            <form onSubmit={extract}>
                <input
                 type="text"
                 value={city}
                 onChange={(e) => changeCity(e.target.value)}
                 placeholder="Enter city" />

                 <button type="submit">Search</button>
            </form>

            
            {weather && 
                <div>
                    <h2>{weather.location.name}</h2>
                    <h2>{weather.current.condition.text}</h2>
                    </div>
            }
       </div>
    );
}

export default Weather;