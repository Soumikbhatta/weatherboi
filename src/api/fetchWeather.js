import axios from "axios";

require('dotenv').config()

console.log(process.env)

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params:{
            q: query,
            units: 'metric',
            APPID: KEY,

        }
    });

    return data;
}
