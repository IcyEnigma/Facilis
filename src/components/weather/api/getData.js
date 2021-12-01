import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'b0dc792b0174627ca36521f194e71056';

export const getTheWeather = async (query) => {
    const { data } = await axios.get(URL, {params: {q: query, units: 'metric', appid: API_KEY, }});
    return data;
}
