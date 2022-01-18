// Current date and time
let now = new Date();

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
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let datetime = document.querySelector("li.datetime");
datetime.innerHTML = `${day} ${hour}:${minutes}`;

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

  temperatureELement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  minimumElement.innerHTML = Math.round(response.data.main.temp_min);
  maximumElement.innerHTML = Math.round(response.data.main.temp_max);
}

let apiKey = "da4354ccc4b5c937168c50391a787c99";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayData);
