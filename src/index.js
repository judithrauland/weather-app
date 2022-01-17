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

// API
let apiKey = "da4354ccc4b5c937168c50391a787c99";
