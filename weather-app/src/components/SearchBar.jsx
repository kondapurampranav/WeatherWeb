import React from "react";
import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { searchLocations } from "../services/weatherApi";


function SearchBar({onSearch, city, setCity}){


    function handleSubmit(e){
        e.preventDefault();

        const trimmedCity = city.trim();
        onSearch(trimmedCity);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={city}
            placeholder="Enter city name..."
            onChange={(e) => setCity(e.target.value)} />

            <button type="submit">
                Search
            </button>
        </form>
    )
}

export default SearchBar;