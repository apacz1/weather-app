import { createCity } from "./createcity";

export const apiKey = "99b53c47f0ece9808a78dc071d3eacf6";
export type CityType = { name?: string; lat?: string; lon?: string };
export type WeatherType = {
  desc?: string;
  temp?: number;
  wind?: number;
  icon?: string;
  name?: string;
};
export let city: CityType = {};
export let cityWeather: WeatherType = {};

const searchBtn = document.querySelector(".searchbtn");

searchBtn?.addEventListener("click", createCity);
