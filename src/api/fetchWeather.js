import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '6bac088ca4582ad8abd63db8b51caf8d';


const fetchWeather = async(query) => {
    const {data} = await axios.get(URL,{
        params : {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}

export default fetchWeather;