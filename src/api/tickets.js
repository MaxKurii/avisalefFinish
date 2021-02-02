import axios from "axios";

const citiesApi = 'https://api.travelpayouts.com/data/ru/cities.json',
  proxy = 'https://cors-anywhere.herokuapp.com/'
  // API_KEY = '889b033a2665ef3bd21fde2b8a4d1731',
  // calendar = 'https://min-prices.aviasales.ru/calendar_preload'

  

function getCityes(){
  return axios.get(proxy + citiesApi).then(response=>{
    return response.data
  });
}

export{
  getCityes
}