# Weather App

A portofio must have to check if my css/js was not rusty!  
You're free to use (I create it for my browser's homepage).

![app's screenshoot](app.png)

# Configuration
- Register to https://api.openweathermap.org  
- Get an APi key and inject it into index.html: 
- Original api key used in development is no more valid!  
```js
const config = {
	apiKey: "081dd463b40fb90f333a233324528a78", // Get an api Key here: https://api.openweathermap.org
	useNavigatorGeolocation: false,
	location: { lat: 48.89, lon: 2.07 },
	maxForecasts:5								// Max is 5 (openweathermap free plan) 
};
```
# Data provider
- https://api.openweathermap.org

## Weather pictures (free)
- https://toppng.com/cloud-png-PNG-free-PNG-Images_112785
- https://toppng.com/show_download/1269/sun/large

# Progression
![app's screenshoot](progression.png)

# Todo
- change icons
