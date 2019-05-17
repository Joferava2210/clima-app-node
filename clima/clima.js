const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c9de656827b7f2f7120260766f12367e&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}