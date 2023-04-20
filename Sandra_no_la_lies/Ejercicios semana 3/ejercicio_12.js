let qfotos = parseInt(prompt('¿Cuántas fotos quieres analizar?'));
let qlikes = 0;
let totallikes = 0;
let qmenos10 = 0;

for (let i = 0; i< qfotos; i++) {
    qlikes = parseInt(prompt('Ingrese número de likes'));
    totallikes = totallikes + qlikes;
    if (qlikes<10) {
        qmenos10 = qmenos10 + 1
    }
};
alert('Tu número de likes total es:' + totallikes + '\nY tu número de fotos con menos de 10 likes es: '+ qmenos10 );
