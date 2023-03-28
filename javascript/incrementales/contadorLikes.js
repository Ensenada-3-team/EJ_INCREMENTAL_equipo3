//INCREMENTAL 12

contadorLikes = () => {
      let cantLikes = 0;
      let sumLikes = 0;
      let fotosMenosDe10Likes = 0;
      let numeroFotos = parseInt(prompt('Indique el número de fotos del usuario:'));

      for (let i = 0; i < numeroFotos; i++) {
            cantLikes = prompt(`Indique la cantidad de Likes de la Foto ${i+1}`);
            sumLikes = sumLikes + parseInt(cantLikes);

            if (parseInt(cantLikes) < 10) {
                  fotosMenosDe10Likes = fotosMenosDe10Likes + 1;
            }
      };
      alert('La suma total de Likes es: ' + sumLikes);
      alert('Fotos con menos de 10 Likes: ' + fotosMenosDe10Likes);
};

// contadorLikes()
