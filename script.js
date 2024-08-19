
const apiKey = '42184b6d56e18a55fb79b6336b50bfe2';

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById("city-input").value 
    getWeather(city)
})

const getWeather = (city) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then (data =>{

    if (data.cod === '404') {
                alert('City not found');
                return;
            }
            displayWeather(data);
        })
        .catch(error => console.error('Error fetching weather data:', error));
};


const displayWeather = (data) =>{
    const cityName = data.name
    const weatherDescription = data.weather[0].description
    const temperature = data.main.temp
    const humidity = data.main.humidity
    document.getElementById("city-name").textContent = cityName 
    document.getElementById("weather-description").textContent = capitalize(weatherDescription)
    document.getElementById("temperature").textContent = `Temperature ${temperature}C`
    document.getElementById("humidity").textContent = `Humidity ${humidity}%`

}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};