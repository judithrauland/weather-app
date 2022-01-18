// Current date and time
function formatDate(timestamp) {
  let now = new Date(timestamp);
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  return `${day} ${hours}:${minutes}`;
}

// Time for sunrise and sunset
function formatSun(timestamp) {
  let now = new Date(timestamp);
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

// API Integration
function displayData(response) {
  console.log(response);

  let temperatureELement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let minimumElement = document.querySelector("#minimum");
  let maximumElement = document.querySelector("#maximum");
  let dateElement = document.querySelector("#date");
  let sunriseElement = document.querySelector("#sunrise");
  let sunsetElement = document.querySelector("#sunset");

  temperatureELement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  minimumElement.innerHTML = Math.round(response.data.main.temp_min);
  maximumElement.innerHTML = Math.round(response.data.main.temp_max);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  sunriseElement.innerHTML = formatSun(response.data.sys.sunrise * 1000);
  sunsetElement.innerHTML = formatSun(response.data.sys.sunset * 1000);
}

let apiKey = "da4354ccc4b5c937168c50391a787c99";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cologne&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayData);
