alert("Hola, Bienvenido al Conversor de Moneda");
const usd = prompt("Ingrese en que valor se encuentra el precio del USD sin simbolos")
let respuesta = "si"

while(respuesta === "si"){

const moneda = parseInt(prompt("Ingrese que tipo de conversion le gustaria realizar - 1 = USD/AR$ o 2 = AR$/USD")) === 1

    if(moneda){
        const usd1 = prompt("Ingrese la cantidad de USD que desea convertir en AR$ sin simbolos")
        const conversion1 = parseFloat(usd1) * parseFloat(usd)
        alert(conversion1)
    } else{
        const usd2 = prompt("Ingrese la cantidad de AR$ que desea convertir en USD sin simbolos")
        const conversion2 = parseFloat(usd2) / parseFloat(usd)
        alert(conversion2)
    }
   respuesta = prompt("¿Quiere realizar otra conversion? (si o no)")  
}

alert("Gracias, vuelva pronto!!!")