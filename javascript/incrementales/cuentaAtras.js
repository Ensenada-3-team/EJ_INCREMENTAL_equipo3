//EXTRA 12

cuentaAtras = () => {

    let tipo = 0;

    tipo = prompt('Ingrese un "1" si quiere imprimir números Impares ó un "2" para Imprimir números Pares');

    if (tipo==1) {
        for (i=19; i>=1; i-=2) {
            alert(i);
        }
    } else if (tipo==2) {
        for (i=20; i>=1; i-=2) {
            alert(i);
        }
    } else {
        alert('El valor introducido no es válido')
    }

    };

// cuentaAtras()
