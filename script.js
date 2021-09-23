const BASE_URL = "https://dataservice.accuweather.com";
const API_KEY = "KGbpl82jSGcs6sfPI0OXuZF5sAaNhBYB";

const search = document.getElementById("search");
search.addEventListener("submit", getWeatherForecast);

function getWeatherForecast(event) {
  event.preventDefault();
  const city = document.getElementById("city").value.trim();
  getLocationKey(city);
}

function getLocationKey(city) {
  fetch(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`)
    .then((response) => response.json())
    .then((data) => {
      const location = data[0];
      getCurrentCondition(location);
    })
    .catch((err) => console.log(err));
}

function getCurrentCondition(location) {
  // TODO get the "current condition" based on the `location` argument!
  //  then call updateUI to update the UI!
}

function updateUI(location, forecast) {
  // TODO update the following based on `location` and `forecast` arguments!
  document.getElementById("name").innerText = "City Name";
  document.getElementById("condition").innerText = "Weather Condition";
  document.getElementById("temperature").innerText = "Temperature";
}
