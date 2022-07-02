


function CalcularMediana(lista1){
    const listaOrdenada = lista1.sort((primerElemento,segundoElemento)=> primerElemento-segundoElemento);
    //const lista1 = [100, 30, 50, 150000];
    const mitadLista1 = parseInt( listaOrdenada.length /2);
    
    
     let mediana;
    
    if(esPar(listaOrdenada.length)){
    
        const elemento1 = listaOrdenada[mitadLista1 -1];
        const elemento2 = listaOrdenada[mitadLista1];
    
       const promedioElemento1y2 =  calcularMediaAritmetica([
           elemento1,
           elemento2
       ])
       mediana = promedioElemento1y2;
       return mediana;
        //necesitares dos elementos
        //promedio
        //mediana
    } else{
        mediana = lista1[mitadLista1]
        return mediana;
        //mediana si la lista es impar
    }
    function esPar(numero){
        if(numero % 2 ===0){
            return true
        } else{
            return false;
        }
    }
    function calcularMediaAritmetica(lista){
 
        const sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElemnto){
               return valorAcumulado + nuevoElemnto;
            }
        );
         
         const promedioLista = sumaLista / lista.length;
         return promedioLista;
     }

    
}
