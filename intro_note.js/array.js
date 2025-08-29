
const carrito=["producto1","producto2","producto3"];

carrito.map (producto =>{
    return "el producto es ", producto;

});
//metodo inportante, .map(extraer valores de array o objetos )


//spred operation 

let lenguaje=["javascritp"," python ", "java"];
let fimewords=["react", "angular", " vue"];

let tecnologia={ ...lenguaje, ...fimewords};

console.log(tecnologia);

let tecnologia2= ["cr", "rubie", "php"];

let tecnologiacompleta = lenguaje .concat(fimewords,tecnologia);

console.log(tecnologiacompleta);

