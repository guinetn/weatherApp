
export default function unixToHHMM(unixTS) {
    return new Date(unixTS * 1000).toTimeString().slice(0, 5);
}

export function unixToIso(unixTS) {
    return new Date(unixTS * 1000).toLocaleString().replace(" à", "");
}

// https://openweathermap.org/weather-conditions
export function getWeatherIcon(x) {
    return `https://openweathermap.org/img/wn/${x}@2x.png`;
}

export function getWeekDay(date) {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
}