import axios from "axios";

const citiesApi = 'https://api.travelpayouts.com/data/ru/cities.json',
  proxy = 'https://cors-anywhere.herokuapp.com/',
  API_KEY = '889b033a2665ef3bd21fde2b8a4d1731',
  calendar = 'https://min-prices.aviasales.ru/calendar_preload'

  

function getCityes(){
  return axios.get(proxy + citiesApi).then(response=>{
    return response.data
  });
}

export{
  getCityes,
  getTickets
}

async function getTickets({from, to, when}){
  const requestData =
      `?depart_date=${when}&origin=${from}` +
      `&destination=${to}&one_way=true` +
      API_KEY;

      const response = await axios.get(calendar + requestData)
  return response.data;
}

