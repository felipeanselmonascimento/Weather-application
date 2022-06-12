const APIKey = 'DyKOzIz3Z6k83vcQtmee9Odf4w9TGyMo'
const cityUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const fetchData = async url => {

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('It was not possibe to get data')
        }

        return response.json()

    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}


const getCityData = cityName => fetchData(cityUrl(cityName))

const getCityWeather = Key => {
    const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`
    return fetchData(cityWeatherUrl)
}



   

