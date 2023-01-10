
//const precioOriginal = 100;
//const descuento = 15; 

function calcularPrecioConDescuento(precio, descuento){ //calcula con una regla de tres el descuento

       const porcentajeDescuento = 100 - descuento;
       const precioConDescuento  = (porcentajeDescuento * precio)/100
       return precioConDescuento
}

function onClickButtonPriceDiscount(){ //imprime en html la función anterior
     const inputPrice    = document.getElementById('inputPrice');
     const priceValue    = inputPrice.value; 

     const inputDiscount = document.getElementById('inputDiscount');
     const discountValue = inputDiscount.value;

     const precioFinal = calcularPrecioConDescuento(priceValue, discountValue);
     const resultP     = document.getElementById('ResultP');
     resultP.innerText = 'El valor de su producto con descuento es:'  + precioFinal + '$';
}

const cupones = [
     {
        name :  'ANA' ,
        descuento: 15,
     },
{
     name:  'ES' ,
     descuento: 30,
},
 {
     name: 'UNA' , 
     descuento: 35,
 },

 {
      name:  'AVENGER' ,
      descuento: 50,
},
];

function CuponesTiendaVirtualResultado(){ //muestra los cupones disponibles en la tienda virtual
     const resultadoCuponesDisponibles = document.getElementById('CuponesD');
     resultadoCuponesDisponibles.innerHTML = 'los cupones disponibles en la tienda son: ' + cupones;
}

function onClickDescuentoCupon(){
     const inputPrice    = document.getElementById('inputPrice');
     const priceValue    = inputPrice.value; 

     const inputCupon    = document.getElementById('inputCupon');
     const valueCupon    = inputCupon.value; 
    
     const isCuponValueValid = function(cupon){
          return cupon.name === valueCupon;
     };
     const userCupon = cupones.find(isCuponValueValid);
     if(!userCupon){
          alert('Su cupon ' + valueCupon + 'no es valido');
     }else{
          const discount = userCupon.descuento;
          const descuentoFinal = calcularPrecioConDescuento(priceValue, discount);
          const resultadoCupones = document.getElementById('resultadoDC');
          resultadoCupones.innerHTML = 'El precio final de tu producto es de $' + descuentoFinal;
     }

}






















//function onClickDescuentoCupon(){

     //const inputPrice    = document.getElementById('inputPrice');
     //const priceValue    = inputPrice.value; 

     //const inputCupon    = document.getElementById('inputCupon');
     //const valueCupon    = inputCupon.value.trim();
     
     
     //let descuento = 0;
     //switch(valueCupon){
       //   case cupones[0]:
         //      descuento = 15;
          //break;
          //case cupones[1]:
            //   descuento = 30;

          //break;
          //case cupones[2]:
            //   descuento = 20;

          //break;
          //case cupones[3]:
            //   descuento =  50; 
         //break;
        // default:
      //       alert('¡¡¡Tu cupon no es valido. Intentalo de nuevo!!!');
    // }


     //const precioFinal = calcularPrecioConDescuento(priceValue, descuento);
     //const resultadoDescuentoCupones   = document.getElementById('resultadoDC');
     //resultadoDescuentoCupones.innerText = 'El precio de tu producto es $' + precioFinal;


//}
