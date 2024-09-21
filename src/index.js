import { fetchApi } from "./modules/api";
import { handleDOM } from "./modules/DOM";
import './styles.css';

const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-button');
const weatherDisplay = document.getElementById('weather-container');

searchBtn.addEventListener('click', async (event) => {
   event.preventDefault();
   const location = searchBar.value;

   try {
      const weatherDetails = await fetchApi(location);
      handleDOM(weatherDetails);
   } catch (error) {
      console.error(`Error: ${error}`);
   }
});
