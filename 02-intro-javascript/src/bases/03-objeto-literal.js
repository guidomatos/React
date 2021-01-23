

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5565622,
        lat: 14.56564,
        lng: 34.65656
    }
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';


console.log( persona );
console.log(persona2);