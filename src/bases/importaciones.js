//importaciones
import { heroes } from '../data/heroes';
console.log(heroes);

export const getHeroeById = (id) =>{
    return heroes.find( res => res.id === id);
}

console.log( getHeroeById(5) );

export const getHeroesByOwner = (owner) =>{
    return heroes.filter( res => res.owner === owner );
}

console.log( getHeroesByOwner('DC') );
