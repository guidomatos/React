// import { heroes } from './data/heroes'
// import { heroes } from './data/heroes';
// import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";

//console.log(heroes);

/*
const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id );
}
*/

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('DC') );


