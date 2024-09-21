import { fetchApi } from "./api";
import clearDay from '../assets/clear-day.png';
import clearNight from '../assets/clear-night.png';
import partlyCloudyDay from '../assets/partly-cloudy-day.png';
import cloudy from "../assets/cloudy.png";
import fog from "../assets/fog.png";
import hail from "../assets/hail.png";
import partlyCloudyNight from "../assets/partly-cloudy-night.png";
import rainShowersSnowDay from "../assets/rain-snow-showers-day.png";
import rainSnowShowersNight from "../assets/rain-snow-showers-night.png";
import rainSnow from "../assets/rain-snow.png";
import rain from "../assets/rain.png";
import showersDay from "../assets/showers-day.png";
import showersNight from "../assets/showers-night.png";
import sleet from "../assets/sleet.png";
import snowShowersNight from "../assets/snow-showers-night.png";
import snowShowersDay from "../assets/snow-showers-day.png";
import snow from "../assets/snow.png";
import thunderRain from "../assets/thunder-rain.png";
import thunderShowersDay from "../assets/thunder-showers-day.png";
import thunderShowersNight from "../assets/thunder-showers-night.png";
import thunder from "../assets/thunder.png";
import wind from "../assets/wind.png";


export function handleDOM(weatherDetails) {

   let iconSrc;
   
   switch(weatherDetails.current.icon){
      case "clear-day":
         iconSrc = clearDay;
         break;
      case "clear-night":
         iconSrc = clearNight;
         break;
      case "cloudy":
         iconSrc = cloudy;
         break;
      case "fog":
         iconSrc = fog;
         break;
      case "hail":
         iconSrc = hail;
         break;
      case "partly-cloudy-day":
         iconSrc = partlyCloudyDay;
         break;
      case "partly-cloudy-night":
         iconSrc = partlyCloudyNight;
         break;
      case "rain-snow-showers-day":
         iconSrc = rainShowersSnowDay;
         break;
      case "rain-snow-showers-night":
         iconSrc = rainSnowShowersNight;
         break;
      case "rain-snow":
         iconSrc = rainSnow;
         break;
      case "rain":
         iconSrc = rain;
         break;
      case "showers-day":
         iconSrc = showersDay;
         break;
      case "showers-night":
         iconSrc = showersNight;
         break;
      case "sleet":
         iconSrc = sleet;
         break;
      case "snow-showers-day":
         iconSrc = snowShowersDay;
         break;
      case "snow-showers-night":
         iconSrc = snowShowersNight;
         break;
      case "snow":
         iconSrc = snow;
         break;
      case "thunder-rain":
         iconSrc = thunderRain;
         break;
      case "thunder-showers-day":
         iconSrc = thunderShowersDay;
         break;
      case "thunder-showers-night":
         iconSrc = thunderShowersNight;
         break;
      case "thunder":
         iconSrc = thunder;
         break;
      case "wind":
         iconSrc = wind;
         break;
   };

   const weatherDisplay = document.getElementById('weather-container');
   weatherDisplay.innerHTML = `
                           <div class="card">
                              <div class="forecast-icon">
                                 <img src="${iconSrc}" alt="icon-${weatherDetails.current.icon}">
                              </div>
                              <div class="conditions">
                                 <p>${weatherDetails.current.conditions}</p>
                              </div>
                              <div class="temperatures">
                                 <div class="current-temp">
                                    <h3>Temp</h3>
                                    <span>${weatherDetails.current.temp}</span>
                                 </div>
                                 <div class="feelsLike-temp">
                                    <h3>Feels Like</h3>
                                    <span>${weatherDetails.current.feelsLike}</span>
                                 </div>                              
                              </div>
                           </div>
                           `;
};
