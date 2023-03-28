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

// diaSemana()

