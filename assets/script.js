
const APIKey = '951c18a648ee8495defff470c0b80c80';
const cityInputEl = document.querySelector('#city');

let city;

const getGeo = async (city) => {
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',US&limit=1&appid=' + APIKey;
    console.log(url);

    const response = await fetch(url);
    const result = await response.json();
    console.log(result[0]);
    // keys from result
    console.log(result[0].lat);
    console.log(result[0].lon);
    
    let lat = result[0].lat
    let lon = result[0].lon
}
//    // step 1 - add to storeHistory
//     function storeHistory(result[0]) {
//         if (typeof (storage) !== 'undefined') {  
//         }
//     }

   // step 2 - lookup daily weather
//     getToday(lat, lon)

const getDailyWeather = async function (city) {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIKey}`;
    const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  };
//     // step 3 - lookup forecast
//     getForcast(lat, lon)

  const getForcastWeather = async function (city) {
    const fiveDayForcastUrl = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}`;
    const response = await fetch(fiveDayForcastUrl);
    if (response.ok) {
      const data = await response.json();
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