const activo = true;

//forma tradicional de hacer condiciones
/* let mensaje = '';

if(activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}

console.log(mensaje); */


//uso de operador ternario, para tener dos condiciones
/* const mensaje = activo ? 'Activo':'Inactivo';

console.log(mensaje); */

const mensaje = activo && 'Activo';
console.log(mensaje);