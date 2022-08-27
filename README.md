# Weather App

A "Weather App" is a portfolio must have but it's not so easy to do, it must be fully responsive, you must manage icons (the one from openweahtermap are not great), you must manage you're api key securely...

![app's screenshoot](assets/app.png)

# Configuration

- Register to the data provider [https://api.openweathermap.org ](https://api.openweathermap.org)
- Get an API key
- Inject the API key into index.js (development api key you can see below is no more valid):

```js
const config = {
	apiKey: "xxxxxxxxxxxxxx", // Get an api Key here: https://api.openweathermap.org
	useNavigatorGeolocation: false,
	location: { lat: 48.89, lon: 2.07 },
	maxForecasts:5								// Max is 5 (openweathermap free plan) 
};
```

# How to use

>Open index.html

## Weather pictures (free)

- https://toppng.com/cloud-png-PNG-free-PNG-Images_112785
- https://toppng.com/show_download/1269/sun/large

# Development Progression

![app's screenshoot](assets/app_versions_progression.png)

## Contributing

Wow, thanks to contribute to this project!   
New ideas, samples, forks...are welcome.  
So please just fork it, commit, push and send me a pull request to main.  

## Todo

Change icons, here some alternatives to openweahtermap default icons:
- https://websygen.github.io/owfont/#icon-pulled
- https://community.openhab.org/t/animated-weather-condition-icons-for-openweathermap/61410
- https://codepen.io/AB6923/details/vYyQxoK

## License

This project is licensed under the [MIT License](LICENSE)

