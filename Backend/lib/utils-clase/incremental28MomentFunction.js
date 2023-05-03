const moment = require('moment')

const now = moment()
const utc = moment.utc() 
const localTime = now.format('DD-MM-YY HH:mm:ss Z')
const utcTime = utc.format('DD-MM-YY HH:mm:ss Z')

// const duration = moment.duration(utc.diff(now));
// const duration = moment(utc.diff(now)).hours().toFixed(2) //no funciona
const diferenciaHoraria = moment().utcOffset() / 60; // LA BUENA 
// const timeDiff = duration.hours().toFixed(2);


console.log('Hora local:'+ localTime)
console.log('Hora UTC: '+ utcTime)
// console.log('Cantidad de horas: ' + timeDiff)
// console.log('horas diff: ' + duration) // no funciona
console.log(`Diferencia horaria con UTC: ${diferenciaHoraria} horas`); // funciona


const fecha1 = '1980-06-06'
const fecha2 = '1910-01-01'


if (moment(fecha1).isBefore(fecha2)) {
      console.log('La fecha1: ' + fecha1 + ' es anterior  la fecha2: ' + fecha2)
} else {
      console.log('La fecha1: ' + fecha1 + ' es posterior a la fecha2: ' + fecha2)
}


