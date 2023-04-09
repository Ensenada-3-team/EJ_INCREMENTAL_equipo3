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


//resolución silvia 

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