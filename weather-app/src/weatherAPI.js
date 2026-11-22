const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;

async function fetchWeather(query){
        console.log(API_KEY)
        console.log("City passed:", query);
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`);

        if(!response.ok){
                throw new Error("Unable to fetch weather data");
            }
        
        const data = await response.json();
        return data;

    }

export async function searchLocations(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query
    })

    console.log(params)
    console.log(API_KEY)
    console.log(query)

    const response = await fetch(`https://api.weatherapi.com/v1/search.json?${params}`);

    if (!response.ok) {
        throw new Error("Unable to search locations");
    }

    const data = await response.json();
    
    data.forEach(element => {
        console.log(element)
    });
    return data;
}

export default fetchWeather;