import React from 'react'
import './WeatherApp.css'
import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"


const WeatherApp = () => {
    const api_key = "8af57fa75f00d26247977592083a4100"

    const search = () => {
        // getting the input from the search bar
        const element = document.getElementByClassName('cityInput')
        let city = element[0].value
        if (city === ""){
            return 0
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`
        // element[0] because there is only one element with this class
        // if we were searching by ID there wouldn't be any need of indexing [0]
    }
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='search'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temperature">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-speed">18km/h</div>
                    <div className="text">Wind speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp