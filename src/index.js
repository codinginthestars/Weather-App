const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-button');
const weatherDisplay = document.getElementById('weather-container');

searchBtn.addEventListener('click', () => {
   fetchApi();
})


async function fetchApi() {
   const location = searchBar.value;

   if (location != '') {
      try {
         const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=KJ687WRWSUL2K8XZRRX4GEGUH`, { mode: "cors" })
         const data = await response.json();
         console.log(data);
         console.log(data.days);

         const dataDetails = {

         }
            
         
      } catch(error) {
         console.error(`Error has occurred: ${error}`);
      }
   }
}


