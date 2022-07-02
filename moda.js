//const lista1 = [
   // 1,
    //2,
    //1,
    //4,
    //3,
    //3,
    //5,
    //6,
    //1,
    //1
//];

function calcularModa(lista){


const listaCount = {};
lista.map(
    function (elemento){

        if(listaCount[elemento]){
        listaCount[elemento] += 1;  // = lista1Count[elemento] = lista1Count[elemento] + 1 lo que hacemos aca es sumarle uno a cada elm ento cuando sus posiciones  se repitan 
    } else{
        listaCount[elemento] = 1;
    }

}   
);

const listaArray = Object.entries(listaCount).sort(  //convierte un objeto en un Array;
    function (elementoA, elementoB){
          return elementoA[1] - elementoB[1];
    }
);       


const moda = listaArray[listaArray.length - 1];
return moda;
}