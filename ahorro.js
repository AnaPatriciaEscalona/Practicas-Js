
function calcularMeses(precio, cantidadDeDinero){
    return precio / cantidadDeDinero;
}

//interactuando con html
function calcularMesesParaLaCompra(){
    const input1 = document.getElementById('inputPrecio');
    const input2 = document.getElementById('inputCantidadDeDinero');

    const value1 = input1.value;
    const value2 = input2.value;

    const MesesCompra = calcularMeses(value1, value2);
    const resultadoMeses = document.getElementById('ResultadoMeses');
    resultadoMeses.innerText = 'Los meses que te llevará ahorrar son: '+ MesesCompra + ' ¡No te rindas! ';
}