//@ts-nocheck

const formularioDeContacto = document.querySelector("#formularioDeContacto")
const inputNombre = document.querySelector("#nombre")
const inputEmail = document.querySelector("#email")
const inputTelefono = document.querySelector("#telefono")
const inputMensaje = document.querySelector("#mensaje")


const formularios = JSON.parse(localStorage.getItem("formularios")) || []

class Formularios{
    constructor({nombre,email,telefono,mensaje}){
    this.nombre = nombre;
    this.email = email
    this.telefono = telefono
    this.mensaje = mensaje
    }
}

formularioDeContacto.onsubmit = e => {
    e.preventDefault()
   
    const nombre = inputNombre.value 
    const email = inputEmail.value 
    const telefono = inputTelefono.value 
    const mensaje = inputMensaje.value
    
    const nuevoFormulario = new Formularios({nombre, email, telefono, mensaje})

    guardarNuevoFormulario(nuevoFormulario)
    console.log(nuevoFormulario)
}

function guardarNuevoFormulario(nuevoFormulario){
    formularios.push(nuevoFormulario)
    localStorage.setItem("formularios", JSON.stringify(formularios))  
}


