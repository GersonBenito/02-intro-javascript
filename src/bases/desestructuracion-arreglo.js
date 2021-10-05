//desestructuracion de arreglos

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 1212]
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

//tarea, crear un useState de react
// 1. el primer valor del arreglo se llamara nombre
// 2. el segundo se llamara setNombre

//useState 
const state = (valor) =>{
    return [ valor, ()=>{ console.log('Hola mundo') } ];
}

const arr = state('Goku');
console.log(arr);

const [ nombre, setNombre ] = state('Gerson');

console.log(nombre);
setNombre();