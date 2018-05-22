
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

let getInfo = async (direccion) => {
  try {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);
    return `El clima en ${coors.direccion} es de ${temp}`;
  } catch (error) {
    return `No se pudo encontrar el clima de ${direccion}`;
  }
}

getInfo(argv.direccion)
  .then(mensaje => console.log(mensaje))
  .catch(error => console.log(error));