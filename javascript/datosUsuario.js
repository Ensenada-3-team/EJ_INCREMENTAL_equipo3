//INCREMENTAL 13

getMonthName = (string) => {

      const monthStr = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

      let month = parseInt(string.substring(string.indexOf(':')+7, string.indexOf(':')+9 ))

      let monthName = monthStr[month-1];

      alert(`El mes en que te uniste al mundo tecler es ${monthName}.`)
      return monthName;
}

userData = () => {
      let valor
      let closeApp 

      do {
            valor = prompt('¡¡Bienvenid@ Tecler!!\n-Ingrese su id de usuario para obtener sus datos.\n-Ingrese "Salir" para finalizar.').toLowerCase()
            closeApp = ''

            switch (valor) {
                  case '1': 
                        alert('Job Daniel, fecha alta: 2021-09-16')
                        getMonthName('Job Daniel, fecha alta: 2021-09-16')
                        break
                        
                  case '5':
                        alert('Juan, fecha alta: 2021-05-01')
                        getMonthName('Juan, fecha alta: 2021-05-01')
                        break
                  
                  case '6':
                        alert('Jose, fecha alta: 2021-01-01')
                        getMonthName('Jose, fecha alta: 2021-01-01')
                        break

                  case '14':
                        alert('Citlalli, fecha alta: 2021-03-15')
                        getMonthName('Citlalli, fecha alta: 2021-03-15')
                        break

                  case '600':
                        alert('Maria, fecha alta: 2021-03-11 id: 601')
                        getMonthName('Maria, fecha alta: 2021-03-11 id: 601')
                        break

                  case 'salir':
                        alert('Gracias por utilizar nuestra app 😊')
                        break;

                  case '': // en blanco
                        alert('No has introducido ningun dato, ¡prueba de nuevo!')
                        break 
                  
                  case null:
                        closeApp = prompt('¿Estás segur@ de querer salir?\n-Igresa "Si" para finalizar.\n ingresa "No" para continuar.').toLowerCase()
                        break;

                  default:
                        alert('El usuario con ese ID no existe, prueba de nuevo, o teclee "Salir" para finalizar 😊')    
            }; 

      } while (valor !== 'salir' && closeApp !== 'si');

};

// userData()
