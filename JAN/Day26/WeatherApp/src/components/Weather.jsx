import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import search_icon from "../assets/Assets/search.png";
import cloud_icon from "../assets/Assets/cloud.png";
import clear_icon from "../assets/Assets/clear.png";
import drizzle_icon from "../assets/Assets/drizzle.png";
import humidity_icon from "../assets/Assets/humidity.png";
import rain_icon from "../assets/Assets/rain.png";
import snow_icon from "../assets/Assets/snow.png";
import wind_icon from "../assets/Assets/wind.png";
import axios from "axios"

const Weather = () => {
    const [weatherData,setWeatherData]=useState(false)
    const inputRef=useRef()
    const allIcons={
        "01d":clear_icon,
        "01n":clear_icon,
        "02d":cloud_icon,
        "02n":cloud_icon,
        "03d":cloud_icon,
        "03n":cloud_icon,
        "04d":drizzle_icon,
        "04n":drizzle_icon,
        "09d":rain_icon,
        "09n":rain_icon,
        "10d":rain_icon,
        "10n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon,




    }
    const search=async(city)=>{
        if(city===""){
            alert("Enter Location Name");
            return
        }
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
            const res=await fetch(url)
            const data=await res.json()
            console.log(data)
            if(!res.ok){
                alert(data.message)
                return
            }
            const icon=allIcons[data.weather[0].icon]||clear_icon;
            setWeatherData({
                humidity:data.main.humidity,
                temperature:Math.floor(data.main.temp),
                windSpeed: data.wind.speed,
                location:data.name,
                icon:icon,

            })
        }catch(err){
            setWeatherData(false)
            console.log(err)

        }
    }
    useEffect(()=>{
        search()
    },[])
  return (
    <div className="Weather">
      <div className="Search_Bar">
        <input ref={inputRef}  type="text" placeholder="Enter Location" />
        <img src={search_icon} onClick={()=>search(inputRef.current.value)}/>
      </div>
      {weatherData?<>
        <img src={weatherData.icon} className="weather_icon" />
      <p className="temperature">{weatherData.temperature}°c</p>
      <p className="location">{weatherData.location}</p>
      <div className="weather_data">
        <div className="col">
          <img src={humidity_icon} />
          <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} />
          <div>
            <p>{weatherData.windSpeed} kmph</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div></>:<></>}
      
    </div>
  );
};

export default Weather;
