function encontrarMayormenor(A, B, C) {
      let valores = [A, B, C]
      valores.sort(function(a,b){return a-b})
      console.log(`El valor mayor es: ${valores[2]}, y el valor menor es: ${valores[0]}`)
}

let A, B, C

do {
      A= parseInt(prompt('Ingrese el valor de A:'))
      B= parseInt(prompt('Ingrese el valor de B:'))
      C= parseInt(prompt('Ingrese el valor de C:'))

      if (A === B || A === C || B === C) {
            alert('ALERTA: Dos o más valores son iguales. Intente de nuevo.')
      }

} while (A === B || A === C || B === C)

encontrarMayormenor(A, B, C)