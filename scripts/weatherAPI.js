const apiKey = '517ae85d73a4d012f1c177c2304e4d13';
const city = 'Rexburg';

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

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

    // Add weather icon
    const weatherIcon = document.createElement('img');
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = 'Weather icon';
    weatherIcon.style.width = '50px'; // Set size for the icon
    weatherIcon.style.height = '50px';
    weatherIcon.style.display = 'block'; // Ensure the icon is on its own line

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    // Append everything in order
    weatherContainer.appendChild(title);
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(description);
    weatherContainer.appendChild(weatherIcon);  // Icon added here in proper order
    weatherContainer.appendChild(humidity);
    weatherContainer.appendChild(windSpeed);
}

// Call the function to get weather data
getWeather();
