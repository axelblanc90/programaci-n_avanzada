//Ejercicio 8: Filtrar y transformar alertas de seguridad 
//Dado un array de alertas de seguridad de red, filtra las que sean de nivel "alto" y transfórmalas en mensajes para el administrador. 

const alertas = [
    { id: 1, nivel: "alto", mensaje: "Intrusión detectada en 192.168.1.5" },
    { id: 2, nivel: "medio", mensaje: "Tráfico inusual en 192.168.1.7" },
    { id: 3, nivel: "alto", mensaje: "Ataque DDoS desde 192.168.1.12" },
    { id: 4, nivel: "bajo", mensaje: "Escaneo de puertos en 192.168.1.8" }
];


const alertasCriticas = alertas
    .filter(alerta => alerta.nivel === "alto")
    .map(alerta => `ALERTA CRÍTICA: ${alerta.mensaje}`);

console.log("Alertas críticas para el administrador:", alertasCriticas);

