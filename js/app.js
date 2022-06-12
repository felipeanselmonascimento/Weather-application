const form = document.querySelector('[data-js="change-location"]')
const newCityName = document.querySelector('[data-js="cityName"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeItemContainer = document.querySelector('[data-js="time-icon"]')

form.addEventListener('submit', async event => {
    event.preventDefault()

    const inputValue = event.target.city.value
    const [{ Key, LocalizedName }] = await getCityData(inputValue)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)
    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

    if (cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none')
    }

    if (IsDayTime) {
        timeImg.src = './src/day.svg'
    } else {
        timeImg.src = './src/night.svg'
    }

    timeItemContainer.innerHTML = timeIcon
    newCityName.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value

})