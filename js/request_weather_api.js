 /*	https://openweathermap.org/api/weather-call-api 
 
 return 
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
 */
 export default function getCurrentWeather(data, callBack) {
    var weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data.location.lat}&lon=${data.location.lon}&appid=${data.apiKey}&units=metric`;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", weatherApiUrl, true);
    xmlhttp.withCredentials = false;

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          var weather = JSON.parse(xmlhttp.responseText);
          callBack(weather);
        }
      }
    };
    xmlhttp.send(null);
  }

/* https://openweathermap.org/forecast5 

return

  city: {id: 6457364, name: 'Paris', coord: {…}, country: 'FR', population: 550528, …}
  cnt: 5
  cod: "200"
  list: Array(5)
    0:
      clouds: {all: 11}
      dt: 1661590800
      dt_txt: "2022-08-27 09:00:00"
      main: {temp: 18.41, feels_like: 18.11, temp_min: 18.41, temp_max: 21.25, pressure: 1017, …}
      pop: 0
      sys: {pod: 'd'}
      visibility: 10000
      weather: [{…}]
      wind: {speed: 3.02, deg: 34, gust: 3.31}
      [[Prototype]]: Object
    1: {dt: 1661601600, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
    2: …
*/
  export function getForecastWeather(data, callBack) {
    var weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.location.lat}&lon=${data.location.lon}&appid=${data.apiKey}&units=metric&cnt=${data.maxForecasts}`;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", weatherApiUrl, true);
    xmlhttp.withCredentials = false;

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          var forecast = JSON.parse(xmlhttp.responseText);
          callBack(forecast);
        }
      }
    };
    xmlhttp.send(null);
  }
