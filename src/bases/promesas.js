//promesas
import { getHeroeById } from './bases/importaciones';

const promesa = new Promise( (resolve, reject) =>{
    setTimeout( () =>{
        const heroe = getHeroeById(4);

        resolve(heroe);

    }, 2000)
} )

//cuando la promesa sea exitosa
promesa.then( (heroe) =>{

    console.log(heroe);

} ).catch( (error) =>{
    //cuando la promesa falle
    console.log('error al obtener heroe', error);

} )


//forma estandar de una promesa
const getHeroesByIdAsync = ( id ) =>{
    return new Promise( ( resolve, reject ) =>{

        setTimeout( () =>{

            const heroe = getHeroeById(id);

            if(heroe){
                resolve(heroe);

            }else{
                reject('el heroe no se encontro');
            }

        },2000 )

    } )
}


getHeroesByIdAsync(1)
      .then(heroe =>{
          console.log(heroe);
      })
      .catch( error =>{
          console.log(error);
      })
    //.then( console.log ) // se usa cuando se retornara el primer argumento en una funcion 
    //.catch((error) =>{
        //console.log(error); // se usa cuando se retornara el primer argumento en una funcion 
    //})
