const APIKey = '951c18a648ee8495defff470c0b80c80';
const cityInputEl = document.querySelector('#city');
const buttonEl = document.getElementById('searchBtn');

let city;

const getGeo = async (city) => {
  console.log('this is city = ', city);
  const url =
    'http://api.openweathermap.org/geo/1.0/direct?q=' +
    city +
    ',US&limit=1&appid=' +
    APIKey;
  console.log(url);

  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  console.log(result[0]);
  //   // keys from result
  console.log(result[0].lat);
  console.log(result[0].lon);

  getDailyWeather(result[0].lat, result[0].lon);
};


const getDailyWeather = async function (lat, lon) {
  const currentWeatherUrl =
    'https://api.openweathermap.org/data/2.5/weather?lat=' +
    lat +
    '&lon=' +
    lon +
    '&appid=' +
    APIKey;
  const response = await fetch(currentWeatherUrl);
  if (response.ok) {
    const data = await response.json();
    console.log('This is data = ', data);
    return data;
  }
};

buttonEl.addEventListener('click', function (event) {
  event.preventDefault();
  let userCity = document.getElementById('search-input');
  console.log(userCity.value);
  getGeo(userCity.value);
});

//lat 37.1289771&
//lon  -84.0832646

//     // step 3 - lookup forecast
//     getForcast(lat, lon)

const getForcastWeather = async function (lat, lon) {
  const fiveDayForcastUrl =
    api.openweathermap.org / data / 2.5 / forecast ? lat =' +
    lat +
    '&lon=' +
    lon +
    '&appid=' +
     APIKey;
  const response = await fetch(fiveDayForcastUrl);
  if (response.ok) {
    const data = await response.json();
    console.log('This is data = ', data)
    return data;
  }
};

// EXAMPLE
// geoPlace = {
//     "name": "Atlanta",
//     "lat": 33.7489924,
//     "lon": -84.3902644,
//     "country": "US",
//     "state": "Georgia"
// }

// function storeHistory(geoPlace) {
//     // paste local storage append code
// }
