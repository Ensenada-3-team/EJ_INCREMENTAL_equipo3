// const numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ]

let A, B, C


function ingresaValores() {
      alert('Ingresa el nº de likes de tus 3 fotos\nRecuerda que han de ser números distintos.')
      A = parseInt(prompt("Likes de la Foto 1:"))
      B = parseInt(prompt("Likes de la Foto 2:"))
      C = parseInt(prompt("Likes de la Foto 3:"))
}

//Nº primo = número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1
// comprobar si un número es divisible por algún número entero de 2 a su raíz cuadrada, y devolver verdadero si no se encuentra ningún divisor. 
function esNumeroPrimo(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
}
    

function init (){
      ingresaValores()

      // Verifico si los valores son distintos
      if (A === B || A === C || B === C) {
            alert("Por favor, introduce tres valores distintos")

      } else {
            //Identifico qué número es mayor y qué número es menor
            let mayor = (A > B) ? ((A > C) ? A : C) : ((B > C) ? B : C)
            let menor = (A < B) ? ((A < C) ? A : C) : ((B < C) ? B : C)
    
            if (mayor > 0 && menor > 0 && esNumeroPrimo(mayor) && esNumeroPrimo(menor)) {
                  alert(`El mayor valor es: ${mayor} y el menor valor es: ${menor}. Además, ambos son números primos y positivos.`)

            } else {
                  alert(`El mayor valor es: ${mayor} y el menor valor es: ${menor}.`)
            }
      }

}

init()