const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5];//añadoiendo un nuevo valor al arreglo sin hacer push
const arreglo3 = arreglo2.map( res =>{
    //console.log(res * 2);
    return res * 2;
})

console.log(arreglo2);
console.log(arreglo3);

//funciones

//TAREA
//1. Transformar a una funcion de flecha
//2. Tiene que retornar un ejemplo implicito
//3. pruebas

//funcion normal
function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC4385',
        username: nombre,
    }
}

//1. Transformar a una funcion de flecha
const getUser = ( nombre ) =>{
    return {
        uid: 'ABC4385',
        username: nombre,
    }
}

//2. Tiene que retornar un ejemplo implicito
const newUser = ( nombre ) =>({
    uid: 'ABC4385',
    username: nombre,
})

//simplificar mas
const nuevoUsuario = nombre =>({
    uid: 'ABC4385',
    username: nombre,
})

//asignacion a constantes
const usuario = getUsuarioActivo('Gerson_Benito');
const user = getUser('Gerson');
const nuevo = newUser('Gerson_Deodanes');
const nuevaFuncion = nuevoUsuario('Gerson_Deodanes_Benito');

//pruebas
console.log(usuario);
console.log(user);
console.log(nuevo);
console.log(nuevaFuncion);

