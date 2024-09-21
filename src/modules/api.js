const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-button');

export async function fetchApi(location) {

   if (location != '') {
      try {
         const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=KJ687WRWSUL2K8XZRRX4GEGUH&contentType=json`, { mode: "cors" })
         const data = await response.json();
         console.log(data);

         return {
            current: weatherForecast(data)
         }
      } catch(error) {
         console.error(`Error has occurred: ${error}`);
         throw error;
      }
   };

};

function weatherForecast(data) {
   return {
      conditions: data.currentConditions.conditions,
      feelsLike: data.currentConditions.feelslike,
      icon: data.currentConditions.icon,
      temp: data.currentConditions.temp,
   }
};