//metodos en arrays

const persona = [
    { nombre: "axel", edad: 20, aprendiendo: "JavaScript" },
    { nombre: "ana", edad: 34, aprendiendo: "Python" },
    { nombre: "maria", edad: 28, aprendiendo: "Java" },
    { nombre: "ana", edad: 40, aprendiendo: "JavaScript" },
    { nombre: "luisa", edad: 30, aprendiendo: "C#" }
];

console.log(persona);

// funcion para filtrar mayores de 28 , filter toma varios valores

const mayores = persona.filter(persona => persona.edad > 28);

console.log(mayores);

//funcion find toma un solo valor

const ana = persona.find(persona => persona.nombre === "ana");

console.log(ana);

console.log("persona2");
//crear el objeto persona dos y filtrar entre estos

const persona2 = [
    { nombre: "jose", edad: 25, aprendiendo: "JavaScript" },
    { nombre: "luisa", edad: 30, aprendiendo: "C#" },
    { nombre: "maria", edad: 46, aprendiendo: "Java" },
    { nombre: "ana", edad: 25, aprendiendo: "JavaScript" },
    { nombre: "jose", edad: 25, aprendiendo: "JavaScript" }
];

// Filtrar en ambas tablas usando spread operator
const mayoresAmbas = [...persona, ...persona2].filter(persona => persona.edad > 28);

console.log("mayores de 28 en las dos tablas",mayoresAmbas);
