import getCurrentWeather, { getForecastWeather } from './request_weather_api.js';
import unixToHHMM, { unixToIso, getWeatherIcon, getWeekDay } from './utils.js';

const config = {
  apiKey: "081dd463b40fb90f333a233324528a78", // Get an api Key here: https://api.openweathermap.org
  useNavigatorGeolocation: false,
  location: { lat: 48.89, lon: 2.07 },
  maxForecasts: 5
};

getWeather();

function getWeather() {
  getLocation();
  getCurrentWeather(config, displayCurrentWeather);
  getForecastWeather(config, displayForecast);
}

function getLocation() {
  if (config.useNavigatorGeolocation && "geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      config.location.lat = position.coords.latitude;
      config.location.lon = position.coords.longitude;
    });
  }
}

/*
Fronts element with an id matching the key of any keys in "current_weather" will
be set with value of current_weather[key]  

current_weather: {
  base: "stations"
  clouds: {all: 0}
  cod: 200
  coord: {lon: 2.07, lat: 48.89}
  dt: 1661534302
  id: 3017474
  main: {temp: 25.12, feels_like: 24.94, temp_min: 23.75, temp_max: 26.51, pressure: 1016, …}
  name: "Paris"
  sys: {type: 2, id: 2002999, country: 'FR', sunrise: 1661489989, sunset: 1661539668}
  timezone: 7200
  visibility: 10000
  weather: [{…}]
  wind: {speed: 4.12, deg: 310}
}
*/
function displayCurrentWeather(current_weather) {

  for (var key in current_weather) {

    if (typeof current_weather[key] == "object" || typeof current_weather[key] == "array") {
      displayCurrentWeather(current_weather[key]);
      continue;
    }

    var element = document.getElementById(key);
    if (element == undefined)
      continue;

    switch (key) {
      case "dt":
        element.innerText = unixToIso(current_weather[key]);
        break;
      case "sunrise":
      case "sunset":
        element.innerText = unixToHHMM(current_weather[key]);
        break;
      case "icon":
        // https://openweathermap.org/weather-conditions  
        // alternatives
        // -https://websygen.github.io/owfont/#icon-pulled
        // -https://community.openhab.org/t/animated-weather-condition-icons-for-openweathermap/61410/4
        element.src = getWeatherIcon(current_weather[key]);
        break;
      default:
        element.innerText = current_weather[key];
        if (key == "deg")
          document.getElementById("windir").style.transform = `rotate(${90 + current_weather[key]}deg)`;
    }

  }
}

/*
Front elements with an id matching the key of any keys in "forecat" will
be set with value of forecat[key]  
*/
function displayForecast(forecast) {
  const fragment = document.getElementById("forecastTemplate");
  const forecasts = document.getElementById("forecasts");

  // For all forecast data
  forecast.list.map((fd) => {
    // Create an instance of the template content
    const forecast = document.importNode(fragment.content, true);

    // Add relevant content to the template
    const dt = new Date(fd.dt * 1000);
    forecast.querySelector("#dt").innerHTML = getWeekDay(dt);
    forecast.querySelector("#dtTimeForecast").innerHTML = unixToHHMM(fd.dt);
    forecast.querySelector("#temp_min").innerHTML = fd.main.temp_min;
    forecast.querySelector("#temp_max").innerHTML = fd.main.temp_max;
    forecast.querySelector("#pressure").innerHTML = fd.main.pressure;
    forecast.querySelector("#humidity").innerHTML = fd.main.humidity;
    forecast.querySelector("#speed").innerHTML = Math.floor((fd.wind.speed * 3600) / 1852); // m/s -> Kt
    forecast.querySelector("#deg").innerHTML = fd.wind.deg;
    forecast.getElementById("windir").style.transform = `rotate(${90 + fd.wind.deg}deg)`;

    fd.weather.map((wt) => {
      forecast.querySelector("#icon").src = getWeatherIcon(wt.icon);
      forecast.querySelector("#description").innerHTML = wt.description;
    });

    // Append the forecast to the DOM
    forecasts.appendChild(forecast);
  });
}

