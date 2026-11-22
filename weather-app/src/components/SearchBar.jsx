import React from "react";
import { useState, useEffect } from "react";
import { searchLocations } from "../weatherAPI";
import "./SearchBar.css"


function SearchBar({onSearch, city, setCity}){

    const [suggestions, setSuggestion] = useState([]);
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if(isSelected){
            setIsSelected(false)
            return;
        }

        if(city.trim().length < 2){
            setSuggestion([]);
            return;
        }

        const timer = setTimeout(async () => {
            try{
                const data = await searchLocations(city)
                setSuggestion(data)
            }
            catch(e){
                console.error(e.message)
                setSuggestion([])
            }
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [city])

    function handleSelect(location){
        setIsSelected(true)
        setCity(location.name)
        setSuggestion([])
        onSearch(`id: ${location.id}`);
    }


    return(
           <div className="search-container">
            <input type="text"
            value={city}
            placeholder="Enter city name..."
            onChange={(e) => setCity(e.target.value)} 
            className="search-input"
            />

            {suggestions.length > 0 && 
                (<ul className="suggestions">
                    {suggestions.map((location) => (
                        <li
                        key={location.id}
                        onClick={() => handleSelect(location)}>
                            {location.id} , {location.name}, {location.country}
                        </li>
                ))}
                </ul>)}

            </div>
    )
}

export default SearchBar;