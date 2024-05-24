import { getWeatherData } from "./getdata";

export const apiKey = "99b53c47f0ece9808a78dc071d3eacf6";
export type cityType = { name?: string; lat?: string; lon?: string };
export let city: cityType = {};

const searchBtn = document.querySelector(".searchbtn");

searchBtn?.addEventListener("click", getWeatherData);
