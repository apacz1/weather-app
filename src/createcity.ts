import { getWeatherData } from "./getdata";
import { cityWeather } from "./main";

export async function createCity() {
  const cityName = document.querySelector("h2");
  const cityTemp = document.querySelector(".temp");
  const cityDesc = document.querySelector(".desc");
  const cityWind = document.querySelector(".wind");
  const weatherIcon = document.querySelector("img");

  await getWeatherData(cityWeather);

  const tempStr = cityWeather.temp?.toString();
  const windStr = cityWeather.wind?.toString();
  const colorIcon = cityWeather.icon?.replace("n", "d");

  cityName!.textContent = cityWeather.name!;
  cityTemp!.textContent = `${tempStr!}°C`;
  cityDesc!.textContent = cityWeather.desc!;
  cityWind!.textContent = `${windStr!}m/s`;
  weatherIcon!.src = `https://openweathermap.org/img/wn/${colorIcon}@2x.png`;
}
