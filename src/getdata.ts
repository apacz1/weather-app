import axios from "axios";
import { apiKey, city } from "./main";
import { getCoords } from "./getcoords";

export async function getWeatherData() {
  await getCoords(city);
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}`;
  try {
    const weatherData = await axios.get(weatherUrl);
    console.log(weatherData);
    const input = document.querySelector("input");
    input!.value = "";
  } catch (error) {
    console.error(error);
  }
}
