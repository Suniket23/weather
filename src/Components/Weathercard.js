import React, { useEffect } from "react";
var round=require('math-round');

const Weathercard = ({
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
}) => {
  const [weatherState, setWeatheState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;
        case "Smoke":
            setWeatheState("wi-smoke");
            break;
        case "Rain":
          setWeatheState("wi-rain");
          break;
        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  // var zone = new Date((new Date().getTime())*timezone*1000)

  console.log(timezone);
  // converting the seconds into time
  // for sunset
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  // for sunrise
  let s = sunrise;
  let d = new Date(s * 1000);
  let time = `${d.getHours()}:${d.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                <p>
                    <i className={"wi wi-sunset"}></i>
                </p>
                <p className="extra-info-leftside">
                    {timeStr} PM <br />
                    Sunset
                </p>
                </div>

                <div className="two-sided-section">
                <p>
                    <i className={"wi wi-humidity"}></i>
                </p>
                <p className="extra-info-leftside">
                    {humidity} % <br />
                    Humidity
                </p>
                </div>
            </div>

            <div className="weather-extra-info">
                <div className="two-sided-section">
                <p>
                    <i className={"wi wi-rain"}></i>
                </p>
                <p className="extra-info-leftside">
                    {pressure} mb <br />
                    Pressure
                </p>
                </div>

                <div className="two-sided-section">
                <p>
                    <i className={"wi wi-strong-wind"}></i>
                </p>
                <p className="extra-info-leftside">
                    {round(speed*3.6)} km/hr <br />
                    Speed
                </p>
                </div>
            </div>
        </div>

        <div className="curve extra-temp">
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                <p>
                    <i className={"wi wi-sunrise"}></i>
                </p>
                <p className="extra-info-leftside">
                    {time} AM <br />
                    Sunrise
                </p>
                </div>

                <div className="two-sided-section">
                <p>
                    <i className={"wi wi-thermometer"}></i>
                </p>
                <p className="extra-info-leftside">
                    {feels_like}&deg; <br />
                    Feels Like
                </p>
                </div>
            </div>

            <div className="weather-extra-info">
                <div className="two-sided-section">
                <p>
                    <i className={"wi wi-alien"}></i>
                </p>
                <p className="extra-info-leftside">
                    {visibility*0.001} km <br />
                    Visibility
                </p>
                </div>

                <div className="two-sided-section">
                <p>
                    <i className={"wi wi-cloudy"}></i>
                </p>
                <p className="extra-info-leftside">
                    {all} %<br />
                    Cloud Cover
                </p>
                </div>
            </div>
        </div>

      </article>
    </>
  );
};

export default Weathercard;