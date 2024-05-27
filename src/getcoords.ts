import axios from "axios";
import { apiKey, CityType } from "./main";

export async function getCoords(currentCity: CityType) {
  const input = document.querySelector("input");
  const cityInput = (input as HTMLInputElement).value;
  const coordsUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=1&appid=${apiKey}`;
  try {
    const coordsData = await axios.get(coordsUrl);
    currentCity.lat = coordsData.data[0].lat;
    currentCity.lon = coordsData.data[0].lon;
    currentCity.name = coordsData.data[0].name;
    console.log(currentCity);
  } catch (error) {
    console.error(error);
  }
}
