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
  } = info // Destructuring the info object

  const { main: weatherCondition, icon } = weather[0] // weather is an array, so we need to access the first element

  weatherResult.innerHTML = `
        <section class="weather-card">
            <h2 class="city-name">${name}</h2>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="weather-main-icon">
            <p class"temperature">${Math.round(temp)}°C</p>
            <div class="weather-details">
                <div class="details-item">
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="detail-icon">
                    <span>${humidity}%</span>
                </div>
                <div class="details-item">
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="detail-icon">
                    <span>${speed} km/h</span>
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
  const fileName = map[condition] || alert("Weather Condition not found") // If the condition is not found, alert the user
  return `./images/${fileName}`
}

// Fetch Weather Data
form.addEventListener("submit", async (e) => {
  e.preventDefault() // Prevent form from submitting and reloading the page
  const city = cityInput.value // Get the city name from the input field
  if (!city) return // checks if the city input is empty or false. If it is, the function returns without executing the rest of the code.

  try {
    const response = await fetch(`${apiURL}${encodeURIComponent(city)}&appid=${apiKey}`)
    const data = await response.json()

    if (data.cod === "404") { // Checks if the response code is 404, which means the city was not found
        throw new Error(`City not found: ${city}`)
    } else if (response.ok) { // Checks if the response is successful
      addWeatherDashboard(data)
    }
  } catch (error) {
    console.log('Error:', error)
  }
})

