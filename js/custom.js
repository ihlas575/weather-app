const API_KEY = "f0c97a5a250685e65d542629e878f639";

const searchButton = document.getElementById("searchButton");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherIcon = document.getElementById("weatherIcon");

async function checkWeather() {
    try {
        const city = document.getElementById("city").value.trim().toLowerCase();
        let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        let response = await fetch(api_url);
        let data = await response.json();

        if (!city) {
            throw new Error("Please enter a city name to continue.");
        }

         if (data.cod !== 200) {
            throw new Error("Counldn't find the City.");
        }

        cityName.innerHTML = data.name;
        temperature.innerHTML = `${Math.floor(data.main.temp)}°C`;
        humidity.innerHTML = `${data.main.humidity}%`;
        windSpeed.innerHTML = `${Math.floor(data.wind.speed)} km/h`;
        let weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        weatherIcon.src = weatherIconUrl;

        document.querySelector(".weather-info").style.display = "block";

        console.log(data);
    } catch (error) {
        window.alert(error);
    }
}

searchButton.onclick = function() {
    document.addEventListener("DOMContentLoaded", checkWeather());
}