function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayOftheWeek = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayOftheWeek];
  return `${day} ${hours}:${minutes}`;
}
let currentDate = document.querySelector("#date");
let currentTime = new Date();
currentDate.innerHTML = formatDate(currentTime);

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = "ab01f5429d25b879daffdaa00545a954";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", showCity);
