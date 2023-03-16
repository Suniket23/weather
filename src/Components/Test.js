import React, { useState, useEffect } from "react";
import Weathercard from "./Weathercard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("dhule");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=9c679afe015cd1a852906b1a91ba0d36`;

    //   "async and await make promises easier to write"
    //   async makes a function return a Promise
    //   await makes a function wait for a Promise
      let res = await fetch(url);
      console.log(res);
      let data = await res.json();
      console.log(data);

      const { temp, humidity, pressure, feels_like } = data.main;
      const { main: weathermood } = data.weather[0];
      console.log(weathermood);
      const { name, visibility,timezone } = data;
      const { speed, gust } = data.wind;
      const { country, sunset, sunrise } = data.sys;
      const {all}=data.clouds;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        feels_like,
        name,
        speed,
        country,
        sunset,
        sunrise,
        visibility,
        all,
        timezone
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      alert("enter correct location");
      console.log(error);
    }
  };

  //Runs on the first render
  //And any time any dependency value changes
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search your city"
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weathercard {...tempInfo} />
    </>
  );
};

export default Temp;
