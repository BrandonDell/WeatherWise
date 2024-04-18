const APIKey = '951c18a648ee8495defff470c0b80c80';
const cityInputEl = document.querySelector('#city');
const buttonEl = document.getElementById('searchBtn');

const getGeo = async (city) => {
  //console.log('this is city = ', city);
  const url =
    'http://api.openweathermap.org/geo/1.0/direct?q=' +
    city +
    ',US&limit=1&appid=' +
    APIKey;
  // console.log(url);

  const response = await fetch(url);
  const result = await response.json();
  //console.log(result);
  // console.log(result[0]);

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
    APIKey +
    '&units=imperial';

  console.log(currentWeatherUrl);
  const response = await fetch(currentWeatherUrl);
  // console.log('This is RESPONSE = ', response);

  if (response.ok) {
    const data = await response.json();
    console.log('the weather  ', data);
    console.log('the temp is  = ', data.main.temp);
    console.log('the humidity is  = ', data.main.humidity);
    console.log('the wind is  = ', data.wind.speed);
    console.log('the city name is  = ', data.name);
    console.log('Todays date is  = ', dayjs().format('MM/DD/YYYY'));

    const dailySection = document.getElementById('daily-weather');
    //create the element
    const tempEl = document.createElement('h3');
    //give the element content
    tempEl.textContent = 'Temp = ' + data.main.temp;
    //added to the dailysection
    dailySection.appendChild(tempEl);

    // return data;
  }
};

//  getForcastWeather(result[0].lat, result[0].lon);

// const getForcastWeather = async function (lat, lon) {
//   const fiveDayForcastUrl = api.openweathermap.org / data / 2.5 / forecast ? lat = + lat + '&lon=' + lon + '&appid=' + APIKey;
//   const response = await fetch(fiveDayForcastUrl);
//   if (response.ok) {
//     const data = await response.json();
//     console.log('This is data = ', data)
//     return data;

//   }
// };

function saveHistory(cityname) {
  console.log('in the function =====', cityname);
  let listOfCitites = JSON.parse(localStorage.getItem('citylist')) || [];
  listOfCitites.push(cityname);
  console.log(listOfCitites);
  localStorage.setItem('citylist', JSON.stringify(listOfCitites));
}
function showhistory() {
  let listOfCitites = JSON.parse(localStorage.getItem('citylist')) || [];
  console.log('In the function show hsitpry ==== ', listOfCitites);
  console.log(listOfCitites[0]);
  const historySection = document.getElementById('history');

  //create element
  let cityEl = document.createElement('button');
  //give content to the new element
  cityEl.textContent = listOfCitites[0];
  //added to the history section
  historySection.appendChild(cityEl);
}

buttonEl.addEventListener('click', function (event) {
  event.preventDefault();
  //input tags and textarea tags
  let userCity = document.getElementById('search-input');
  //console.log('This is the user input value of city  = ', userCity.value);
  //getGeo(userCity.value);
  saveHistory(userCity.value);
});

showhistory();

// const printDailyWeather = async (city) => {
//   const cityName = await getDailyWeather();
//   console.log('print', cityName);
// }

// EXAMPLE
// geoPlace = {
//     "name": "Atlanta",
//     "lat": 33.7489924,
//     "lon": -84.3902644,
//     "country": "US",
//     "state": "Georgia"
// }

// function storeHistory(geoPlace) {
// paste local storage append code
