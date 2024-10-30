const apiKey = '517ae85d73a4d012f1c177c2304e4d13';
const city = 'Rexburg';

// Function to fetch current weather and forecast
async function getWeatherAndForecast() {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Fetch current weather
        const weatherResponse = await fetch(currentWeatherUrl);
        if (!weatherResponse.ok) {
            throw new Error('Weather network response was not ok ' + weatherResponse.statusText);
        }
        const weatherData = await weatherResponse.json();
        displayWeather(weatherData);

        // Fetch 3-day forecast
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) {
            throw new Error('Forecast network response was not ok ' + forecastResponse.statusText);
        }
        const forecastData = await forecastResponse.json();
        displayForecast(forecastData);

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to display current weather
function displayWeather(data) {
    const weatherContainer = document.getElementById('weather');

    // Clear previous content
    weatherContainer.innerHTML = '';

    // Create elements for weather information
    const title = document.createElement('h2');
    title.textContent = `Weather in ${data.name}`;

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.main.temp}°C`;

    const description = document.createElement('p');
    description.textContent = `Weather: ${data.weather[0].description}`;

    const weatherIcon = document.createElement('img');
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = 'Weather icon';
    weatherIcon.style.width = '80px';
    weatherIcon.style.height = '80px';
    weatherIcon.style.margin = '10px auto';

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    // Append everything in order
    weatherContainer.appendChild(title);
    weatherContainer.appendChild(weatherIcon);
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(description);
    weatherContainer.appendChild(humidity);
    weatherContainer.appendChild(windSpeed);
}

// Function to display 3-day forecast
function displayForecast(data) {
    const forecastContainer = document.createElement('div');
    forecastContainer.className = 'forecast-container';

    // Get forecast for the next 3 days (every 24 hours from now)
    const dailyForecasts = [];
    for (let i = 0; i < data.list.length; i += 8) { // 8 increments (24 hours) per day
        if (dailyForecasts.length < 3) {
            dailyForecasts.push(data.list[i]);
        }
    }

    // Create elements for each day in the forecast
    dailyForecasts.forEach((forecast, index) => {
        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';

        const date = new Date(forecast.dt_txt).toDateString();
        const temp = forecast.main.temp;
        const icon = forecast.weather[0].icon;
        const description = forecast.weather[0].description;

        const forecastDate = document.createElement('h3');
        forecastDate.textContent = date;

        const forecastIcon = document.createElement('img');
        forecastIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        forecastIcon.alt = 'Weather icon';
        forecastIcon.style.width = '60px';
        forecastIcon.style.height = '60px';

        const forecastTemp = document.createElement('p');
        forecastTemp.textContent = `Temp: ${temp}°C`;

        const forecastDesc = document.createElement('p');
        forecastDesc.textContent = `Weather: ${description}`;

        forecastCard.appendChild(forecastDate);
        forecastCard.appendChild(forecastIcon);
        forecastCard.appendChild(forecastTemp);
        forecastCard.appendChild(forecastDesc);

        forecastContainer.appendChild(forecastCard);
    });

    document.querySelector('.weather').appendChild(forecastContainer);
}

// Call the function to get weather and forecast data
getWeatherAndForecast();
