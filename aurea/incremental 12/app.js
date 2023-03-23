
let cantLikes = 0;
let sumLikes = 0;
let fotosMenor10L = 0;
let numeroFotos = parseInt(prompt('Indique el número de fotos del usuario:'));
for (let i=0; i<numeroFotos; i++) {
    cantLikes = prompt(`Indique la cantidad de Likes de la Foto ${i+1}`);
    sumLikes = sumLikes + parseInt(cantLikes);
    if (parseInt(cantLikes) < 10) {
        fotosMenor10L = fotosMenor10L + 1;
    }
};
console.log ('La suma total de Likes es: ' + sumLikes);
console.log ('Fotos con menos de 10 Likes: ' + fotosMenor10L);