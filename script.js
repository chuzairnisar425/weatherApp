const APIKey = "e76bc860e38747b1afd101920230708";

var cityName = document.querySelector("#cityName");
var searchBtn = document.querySelector("#searchBtn");
let content = document.querySelector(".content");
		
async function checkWeather(city) {
	const APIurl = `https://api.weatherapi.com/v1/current.json?&q=${city}&key=${APIKey}`;
	const weather_data = await fetch(`${APIurl}`).then(response => response.json());

	console.log(weather_data);
	content.style.display = 'block';
	document.querySelector("#city").innerHTML =  "Name: " + weather_data.location.name;
	document.querySelector("#temp").innerHTML = "Temprature: " + weather_data.current.temp_c + ' ºC';
	document.querySelector("#humidity").innerHTML = "Humidity: " +  weather_data.current.humidity;
	document.querySelector("#wind").innerHTML = "Wind Speed: " + weather_data.current.wind_kph + ' km/h';
	document.querySelector("#clouds").innerHTML = "Condition: " + weather_data.current.condition.text;
}

searchBtn.addEventListener('click', (e) => {
	e.preventDefault();
	checkWeather(cityName.value);
});


