// Creates a variable to store the API key
const APIKey = '951c18a648ee8495defff470c0b80c80';
// todo: create different query parameters which will require our application to accept user input, so we want to create variables that can hold this input after the users submittion.
// const requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}';

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// function getForcast(lat, lon) {
//     const requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}';

//   fetch(requestAPI) {
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         for (let i = 0; i < data.length; i++) {
//             const listItem = document.createElement('li');
//             listItem.textContent = data[i].html_url;
//             cityList.appendChild(listItem);
//         }
//     });
//     }

const getGeo = async (city) => {
  const url =
    'http://api.openweathermap.org/geo/1.0/direct?q=' +
    city +
    ',US&limit=1&appid=' +
    APIKey;
  console.log(url);

  const response = await fetch(url);
  const result = await response.json();
  console.log(result[0]);
  // keys from result
  console.log(result[0].lat);
  console.log(result[0].lon);
    
let lat = result[0].lat
let lon = result[0].lon

    // step 1 - add to storeHistory
    storeHistory(result[0]);    
}
    // step 2 - lookup daily weather
    getToday(lat, lon)
    // step 3 - lookup forecast
    getForcast(lat, lon)

};

// EXAMPLE
// geoPlace = {
//     "name": "Atlanta",
//     "lat": 33.7489924,
//     "lon": -84.3902644,
//     "country": "US",
//     "state": "Georgia"
// }

function storeHistory( geoPlace ) {
    // paste local storage append code
}