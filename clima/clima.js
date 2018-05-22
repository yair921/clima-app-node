const axios = require('axios');

const getClima = async (lat, lng) => {
  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d4c75935c5f5b646432730a70523a12d`);
  if (resp.cod === '400') {
    throw new Error(`No hay resultados de temperatura para la ciudad ${direccion}`);
  }

  return resp.data.main.temp

};

module.exports = {
  getClima
}