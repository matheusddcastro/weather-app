const apiKey = "7d8304cd57141ecb6a77fa5a1920d246"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// Getting DOM elements
const form = document.getElementById("weather-form")
const cityInput = document.getElementById("city-input")
const weatherResult = document.getElementById("weather-result")

// Adding Weather Dashboard to the DOM
function addWeatherDashboard(info) {
    const {
        name,
        main: { temp, humidity },
        wind: { speed },
        weather,
    } = info

    const { main: weatherCondition, icon } = weather[0]

    weatherResult.innerHTML = `
        <section class="weather-card">
            <h2 class="city-name">${name}</h2>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="weather-main-icon">
            <p class"temperature">${temp}°C</p>
            <div class="weather-details">
                <div class="details-item">
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="detail-icon">
                    <span>${humidity}%</span>
                </div>
                <div class="details-item">
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="detail-icon">
                    <span>${wind}%</span>
                </div>
            </div>
        </section>
    `
}

// Add Weather Image based on Weather Condition
function addWeatherImage(condition) {
    const map = {
        clear: "clear.png",
        clouds: "clouds.png",
        rain: "rain.png",
        fog: "mist.png",
        snow: "snow.png",
        thunderstorm: "thunderstorm.png",
    }
    const fileName = map[condition]
    return `./images/${fileName}`
}

// Fetch Weather Data
