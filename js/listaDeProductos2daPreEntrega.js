alert ("Bienvenidos al Generador de listados de Productos")

let seguirCargandoProductos = prompt("¿Le gustaria cargar un Producto? si o no?")

class Producto{
    constructor(nombre,precio, stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

/* Funcion para pedir los datos que va a llevar el producto nuevo */
function pedirProducto() {
    const nombre = prompt("ingrese nombre del producto")
    const precio = parseFloat(prompt("ingrese precio del producto"))
    const stock = parseFloat(prompt("ingrese cantidad de productos en stock"))

    return new Producto(nombre, precio, stock)
}

const listaDeProductos = []

while (seguirCargandoProductos === "si") {
    const productos = pedirProducto()
    listaDeProductos.push(productos)
    seguirCargandoProductos = prompt("¿Queres seguir cargando productos? si o no?")  
}

alert("Productos cargados: " + listaDeProductos.length)

alert("Gracias, vuelva pronto!!!")