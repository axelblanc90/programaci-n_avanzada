//Ejercicio 6: Calcular estadísticas de red 
//Dado un objeto con estadísticas de tráfico de red por hora, calcula el total de datos transferidos y la hora con mayor tráfico. 


const traficoRed = {
    "08:00": 1250,
    "09:00": 1870,
    "10:00": 2100,
    "11:00": 1950,
    "12:00": 1600,
    "13:00": 1300,
    "14:00": 1700,
    "15:00": 2200,
    "16:00": 1800,
    "17:00": 1500
};

let total = 0;
for (let hora in traficoRed) {
    total += traficoRed[hora];
}

let horaMayor = "";
let max = 0;
for (let hora in traficoRed) {
    if (traficoRed[hora] > max) {
        max = traficoRed[hora];
        horaMayor = hora;
    }
}

console.log("Total transferido:", total, "MB");
console.log("Hora con más tráfico:", horaMayor, "-", max, "MB");
