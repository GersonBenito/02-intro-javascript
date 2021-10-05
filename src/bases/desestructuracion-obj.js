//desestructuracion de objetos
const persona = {
    nombre:'Gerson Benito',
    edad: 22,
    clave: '3485ndfhdd',
    //rango: 'Master'
}

console.log(persona);

//desestructuara objeto
const { nombre, edad, clave } = persona;
console.log( nombre, edad, clave );


//desectrurar en un funcion
const getUsuario = ({ nombre, edad, rango = 'Middle' }) =>{
    //const { nombre, edad, clave } = usuario;
    //console.log(usuario);
    //console.log( nombre, edad, clave );
    console.log( nombre, edad, rango );
}

//desestrurar directamente directamente de la funcion
const nuevo = ({ clave, nombre, edad, rango = 'Middle' }) =>{
    //const { nombre, edad, clave } = usuario;
    //console.log(usuario);
    //console.log( nombre, edad, clave );
    //console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.456567,
            lng: 14.567567
        }
    }
}

getUsuario(persona);

//desestructurar
const { nombreClave, anios, latlng:{ lat, lng } } = nuevo( persona ); //useContext

console.log( nombreClave, anios );
console.log( lat, lng );