
const Chile = [];

Chile.push({
    nombre: 'Ana',
    salario: 400000
});

Chile.push({
    nombre: 'Alejandro',
    salario: 12000000
});

Chile.push({
    nombre: 'Jade',
    salario: 800000
});

Chile.push({
    nombre: 'Amelie',
    salario: 1000000
});

Chile.push({
    nombre: 'Denisse',
    salario: 500000
});

Chile.push({
    nombre: 'Nellie',
    salario: 4000000
});

Chile.push({
    nombre: 'Blair',
    salario: 400000
});

Chile.push({
    nombre: 'Lauren',
    salario: 350000
});

Chile.push({
   nombre: 'Willow',
   salario: 800000 
});

Chile.push({
    nombre: 'Ash',
    salario:  800000
});

Chile.push({
    nombre: 'Grace',
    salario: 250000
});

Chile.push({
    nombre: 'Michell',
    salario: 450000
});

Chile.push({
    nombre: 'Kara',
    salario: 850000
});

Chile.push({
    nombre: 'Juniper',
    salario: 600000
});

Chile.push({
    nombre: 'presidente',
    salario: 10000000
});

Chile.push({
    nombre: 'Emma',
    salario: 800000
});

Chile.push({
    nombre: 'Lily',
    salario: 850000
});

Chile.push({
    nombre: 'Harmony',
    salario: 550000
});

Chile.push({
    nombre: 'Daniel',
    salario: 600000
});

//Helpers
function esPar(numero){
    if( numero % 2 ===0){
       return true;
    }else{
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


//Análisis

//Calculadora de mediana general 
function medianaGeneralSalarios(lista){
    const mitad = parseInt(lista.length / 2); 

    if(esPar(lista.length)){

      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];

      const mediana  = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
      return mediana;


    }else{ //si la lista es impar 
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }

 
}


// mediana general de los salarios 
const salariosChile = Chile.map( 
    function (personita){
     return personita.salario;
   }
);  // esta función lo que hace es reunir todos los salarios de las personas, solo los salarios en un nuevo arreglo

const salarioChileOrdenado = salariosChile.sort(
  function (salarioA, salarioB){
       return salarioA - salarioB;
  }
);

const medianaGeneralChile = medianaGeneralSalarios(salarioChileOrdenado);

//Mediana del top 10%

const spliceStart = parseInt((salarioChileOrdenado.length * 90) / 100); 
const spliceCount = salarioChileOrdenado.length - spliceStart;

const salariosChiletop10 = salarioChileOrdenado.splice(
    spliceStart,
    spliceCount
);
console.log(spliceStart, spliceCount);
const medianaTop10Chile = medianaGeneralSalarios(salariosChiletop10);

console.log({
    medianaGeneralChile,
    medianaTop10Chile
});