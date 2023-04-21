//EXTRA 11

inicioSesion = () => {

      //Variables Globales
      let user;
  
      //Introducir Usuario
      user = prompt('Ingrese su Nombre de Usuario:');
  
      //Condicional para determinar si es el Administrador
      if (user === 'Admin') {
          let password = prompt('Ingrese su password:');
  
          //Condicional para verificar la password
          (password === 'TheMaster') ? alert('Bienvenido!') :
          (password === '' || password === null) ? alert('Cancelado') :
          alert('password incorrecta');
  
      } else if (user === '' || user === null) {
          alert('Cancelado');
      } else {
          alert('No te conozco');
      }
  
}

//EXTRA 12

cuentaAtras = () => {

    let tipo = 0;
    let listNum = [];

    tipo = prompt('Ingrese un "1" si quiere imprimir números Impares ó un "2" para Imprimir números Pares');

    if (tipo==1) {
        for (i=19; i>=1; i-=2) {
            listNum.push(i);

        }
    } else if (tipo==2) {
        for (i=20; i>=1; i-=2) {
            listNum.push(i);
        }
    } else {
        alert('El valor introducido no es válido')
    }

    if (tipo==1 || tipo==2) {alert(listNum.join("\n"))};

    };

// cuentaAtras()


//EXTRA 12 - RESOL. SILVIA

cuentaAtrasSil = () => {
    let select

    do {
          select = prompt("Ingrese '1' si quiere los números impares, '2' si quiere los números pares o 'Salir' para finalizar")
          
          if (select === '1' && select !== 'Salir'){
                for (let i = 19; i >= 0; i-=2 ) {
                      console.log(i)
                }
                alert('Cuenta atrás de números impares⬆ inspecciona la consola 🔍')

          } else if (select === '2'  && select !== 'Salir') {
                for (let i = 20; i >= 0; i-=2) {
                      console.log(i)    
                }
                alert('Cuenta atrás de números pares⬆ inspecciona la consola 🔍')

          } else if (select !== '1' && select !== '2' && select !== "Salir") {
                alert('El número introducido no es válido, vuelve a probar')

          } else {
                alert('Gracias por utilizar nuestra app 😁')
          }

    } while (select !== 'Salir')
};

//EXTRA 13

diaSemana = () => {

      var diaSpanish;
      var dia;
  
      function traducirDia (valor) {
          switch (valor) {
              case 'lunes':
                  alert('monday');
                  break
              case 'martes':
                  alert('tuesday');
                  break
              case 'miercoles':
              case 'miércoles':
                  alert('wednesday');
                  break
              case 'jueves':
                  alert('thursday');
                  break
              case 'viernes':
                  alert('friday');
                  break
              case 'sabado':
                  alert('saturday');
                  break
              case 'domingo':
                  alert('sunday');
                  break
              default:
                  alert('Lo sentimos no pudimos identificar el día ingresado.');
                  break
          };
      };
  
      do {
          diaSpanish = prompt('Ingrese un día de semana escrito en español:');
          dia = diaSpanish.toLowerCase()
          traducirDia(dia);
          fin = prompt('Quiere traducir otro día? ("c" para continuar, cualquier otra tecla para salir)');
          if (fin !='c') {alert('Gracias por utilizar nuestrta APP.')};
      } while (fin === 'c');
  
};

//EXTRA 14

coches = () => {

      let carros = ['Nissan March', 'Chevrolet Aveo', 'Volkswagen Taos', 'KIA Rio Sedan'];
      alert(carros);
  
      carros.pop();
      alert(carros);
  
      carros.push('Hyundai Creta');
      alert(carros);
  
      carros.shift();
      alert(carros);
  
      carros.splice(0,0,'Nissan Versa');
      alert(carros);
  
  };
  
 
  // EXTRA 14 - RESOL.SILVIA
  
  // let carros = ["Nissan March", "Chevrolet Aveo", "Volkswagen Taos", "KIA Rio Sedan"];
  // let elements = ["Hyundai Creta", "Nissan Versa"]
  
  // deleteLastElement = (arr) => {
  //       arr.pop()
  //       console.table(arr)
  // };
  
  // addElementToEnd = (arr, element) => {
  //       arr.push(element)
  //       console.table(arr)
  // };
  
  // spliceElement = (arr, element) => {
  //       arr.splice(0,0, element)
  //       console.table(arr)
  // };
  