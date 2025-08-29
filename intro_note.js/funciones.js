//function declaration

function saludar(nombre){
    console.log("bien benido " + nombre + "!")};

saludar("axel");

//function expreccion

const cliente = function(nombreCliente, edadCliente){
    console.log("mmostrar datos de el cliente: "+ nombreCliente +"edad "+ edadCliente);
}

cliente("axel","20")

function actividad(nombre="walter white", nombreActividad="profe de quimica"){
console.log(`el clinte ${nombre} esta realizando ${nombreActividad}`)
}
actividad("axel","desarrollkador")
actividad("benja","lic")
actividad();



