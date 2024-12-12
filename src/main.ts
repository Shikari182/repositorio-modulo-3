import "./style.css";

interface Artista {
    nombre: string;
    fundacion: number;
    activo: boolean;
    genero: string;

}

const artistaA : Artista = {
    nombre: "The Beatles",
    fundacion: 1960,
    activo: true,
    genero: "🎵 Pop Rock",
};

const artistaB : Artista = {
    nombre: "Queen",
    fundacion: 1970,
    activo: false,
    genero: "🎸 Rock",

};

const artistaC : Artista = {
    nombre: "AC DC",
    fundacion: 1973,
    activo: true,
    genero: "🤘 Hard Rock",
};

const artistaD : Artista = {
    nombre: "Ludwig van Beethoven",
    fundacion: 1770,
    activo: false,
    genero: "🎼 Clásica",
};

const artistaE : Artista = {
    nombre:"The Rolling Stones",
    fundacion: 1962,
    activo: true,
    genero: "🎸 Rock",
};

console.log(
    `%c${artistaA.nombre}%c - Fundación: ${artistaA.fundacion}, Activo: ${artistaA.activo}, Género: ${artistaA.genero}`, 
    'color: black; background-color: green; font-weight: bold; font-size: 20px', 
    'color: black; background-color: transparent;'
);

console.log(
    `%c${artistaB.nombre}%c - Fundación: ${artistaB.fundacion}, Activo: ${artistaB.activo}, Género: ${artistaB.genero}`, 
    'color: black; background-color: green; font-weight: bold; font-size: 20px', 
    'color: black; background-color: transparent;'
);

console.log(
    `%c${artistaC.nombre}%c - Fundación: ${artistaC.fundacion}, Activo: ${artistaC.activo}, Género: ${artistaC.genero}`, 
    'color: black; background-color: green; font-weight: bold; font-size: 20px', 
    'color: black; background-color: transparent;'
);

console.log(
    `%c${artistaD.nombre}%c - Fundación: ${artistaD.fundacion}, Activo: ${artistaD.activo}, Género: ${artistaD.genero}`, 
    'color: black; background-color: green; font-weight: bold; font-size: 20px', 
    'color: black; background-color: transparent;'
);

console.log(
    `%c${artistaE.nombre}%c - Fundación: ${artistaE.fundacion}, Activo: ${artistaE.activo}, Género: ${artistaE.genero}`, 
    'color: black; background-color: green; font-weight: bold; font-size: 20px', 
    'color: black; background-color: transparent;'
);