import axios from "axios";
import { WeatherType, apiKey, city } from "./main";
import { getCoords } from "./getcoords";

export async function getWeatherData(cityObj: WeatherType) {
  const inputValue = (document.querySelector("input") as HTMLInputElement)
    .value;

  await getCoords(city);

  const input = document.querySelector("input");
  input!.value = "";

  if (inputValue == "") {
    alert("Please input city name.");
  } else if (inputValue.toLocaleLowerCase() != city.name?.toLocaleLowerCase()) {
    alert("Wrong city name!");
  } else {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${apiKey}`;
    try {
      const weatherData = await axios.get(weatherUrl);
      cityObj.desc = weatherData.data.weather[0].description;
      cityObj.temp = Math.round(weatherData.data.main.temp);
      cityObj.wind = Math.round(weatherData.data.wind.speed);
      cityObj.icon = weatherData.data.weather[0].icon;
      cityObj.name = city.name;
      console.log(cityObj);
    } catch (error) {
      console.error(error);
    }
  }
}
