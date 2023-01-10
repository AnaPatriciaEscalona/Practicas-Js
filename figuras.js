
//Cuadrado

console.group('Cuadrado');
function perimetroCuadrado(ladosCuadrado){
     return ladosCuadrado * 4;
}

function areaCuadrado(ladosCuadrado){
      return ladosCuadrado * ladosCuadrado;
}
console.groupEnd();

//Triangulos 
console.group('traingulos');

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){ 
 return (ladoTriangulo1 + ladoTriangulo2) + baseTriangulo; 

} 

function areaTriangulo(baseTriangulo, alturaTriangulo){
return (baseTriangulo * alturaTriangulo) /2;  
}

//Circulos 
console.group('Circulos');

 PI       = Math.PI;
function perimetroCirculo(radio, diametro) {
    return  diametro * PI;
}
function areaCirculo(){
   return   (radio * radio) * PI;   
} 
console.groupEnd();

//Triangulo isoceles


 
console.group('Triangulo isoceles');

function altura(lado1, lado2, base){
      if(lado1 === lado2 && lado1 != base){
          console.log('isoceles')
         return  altura = Math.sqrt(lado1**2 - base**2/ 4)
          console.log('la altura de un triangulo isoceles es: '  + altura)
      }
      else{
          alert('no lo se')
      }
  }
  //altura(6, 6, 4);
  console.groupEnd();


//Interactuando con Html

function calcularPerimetroCuadrado(){
const input = document.getElementById('inputCuadrado');

const value = input.value;
const perimetro = perimetroCuadrado(value);
alert('el perimetro de un circulo es: ' + perimetro);
}

function calcularAreaCirculo(){
const input = document.getElementById('inputCuadrado');

const value = input.value;
const area = areaCuadrado(value);
alert('el area de un cuadrado es: ' + area);
}

function calcularPerimetroTriangulo(){
const input1 = document.getElementById('inputTriangulo1');
const input2 = document.getElementById('inputTriangulo2');
const input3 = document.getElementById('inputTriangulo3');

const value1 = Number(input1.value);
const value2 = Number(input2.value);
const value3 = Number(input3.value);

const perimetro = perimetroTriangulo(value1, value2, value3);
alert('el perimetro del triangulo es: ' + perimetro);

}

function calcularAreaTriangulo(){
      const input1 = document.getElementById('inputTriangulo1');
      const input2 = document.getElementById('inputTriangulo2');
      const input3 = document.getElementById('inputTriangulo3');
      
      const value1 = Number(input1.value);
      const value2 = Number(input2.value);
      const value3 = Number(input3.value);
      
      const area = areaTriangulo(value1, value2, value3);
      alert('el area del triangulo es de: ' + area);
}

function calcularPerimetroCirculo(){
const input1 = document.getElementById('inputCirculo1');
const input2 = document.getElementById('inputCirculo2');

const value1 = Number(input1.value);
const value2 = Number(input2.value);

const perimetro = perimetroCirculo(value1, value2);
alert('el perimetro del circulo es: ' + perimetro);
}

function calcularAreaCirculo(){
      const input1 = document.getElementById('inputCirculo1');
      const input2 = document.getElementById('inputCirculo2');
      
      const value1 = Number(input1.value);
      const value2 = Number(input2.value);

      const area = areaTriangulo(value1, value2);
      alert('el area del circulo es: '+ area);
}

function calculaAlturaTrianguloIsoceles(){
   const  input1 = document.getElementById('inputTrianguloIsoceles');
   const  input2 = document.getElementById('inputTrianguloIsoceles2');
   const  input3 = document.getElementById('inputTrianguloIsoceles3');

   const value1 = Number(input1.value);
   const value2 = Number(input2.value);
   const value3 = Number(input3.value);

   const alturaIso = altura(value1,value2, value3);
   alert('la altura del triangulo Isoceles: ' + alturaIso);
}
