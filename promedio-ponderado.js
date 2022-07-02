
 const Notas = [
    {
       prueba: 1,
       nota: 7.0,
       crédito: 60
    },
    {
       prueba: 2,
       nota: 5.5,
       crédito: 30
    },
    {
       prueba: 3,
       nota: 6.5,
       crédito: 3.3
    }
 ];
 console.log({Notas});

 const multiplicaciónNotasCreditos = Notas.map(function(notesObject){ //aquí se multiplica cada valor por su peso correspondiente 
   return notesObject.nota * notesObject.crédito;
 });

 
 const resultadoMult = (multiplicaciónNotasCreditos[0] + multiplicaciónNotasCreditos[1] + multiplicaciónNotasCreditos[2])/ Notas.length;