const apiKey = "7d8304cd57141ecb6a77fa5a1920d246";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// Getting DOM elements
const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");

// Adding Weather Dashboard to the DOM
function addWeatherDashboard() {
    const weatherDashboard = document.createElement("div");
    weatherDashboard.className = "weather-dashboard";
    weatherResult.appendChild(weatherDashboard);

}