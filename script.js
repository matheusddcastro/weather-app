const apiKey = "7d8304cd57141ecb6a77fa5a1920d246"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// Getting DOM elements
const form = document.getElementById("weather-form")
const cityInput = document.getElementById("city-input")
const weatherResult = document.getElementById("weather-result")

// Adding Weather Dashboard to the DOM
function addWeatherDashboard(info) {
  const placeName = info.name
  const temp = info.main.temp
  const humiditi = info.main.humidity
  const windSpeed = info.wind.speed 
  const weather = info.weather 

  const weatherCard = document.createElement("div")
  weatherCard.classList.add("weather-card")
  weatherCard.innerHTML = `
    <h2>${placeName}</h2>
    <p>Temperature: ${temp}°C</p>
    <p>Humidity: ${humiditi}%</p>
    <p>Wind Speed: ${windSpeed} m/s</p>
    <p>Weather: ${weather[0].main}</p>
  `

  addWeatherImage(weather[0].main)

  weatherResult.appendChild(weatherCard)
}

// Add Weather Image based on Weather Condition
function addWeatherImage(condition) {
  const weatherImage = document.createElement("img")
  weatherImage.src = `./images/${condition}.png`
  weatherResult.appendChild(weatherImage)
}

