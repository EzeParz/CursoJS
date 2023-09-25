//@ts-nocheck

const formularioDeContacto = document.querySelector("#formularioDeContacto");
const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const inputTelefono = document.querySelector("#telefono");
const inputMensaje = document.querySelector("#mensaje");
const lista = document.querySelector("#listaDeFormularios");


class Formularios{
    constructor({nombre,email,telefono,mensaje}){
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this.mensaje = mensaje;
    }
}

formularioDeContacto.onsubmit = e => {
    e.preventDefault()
   
    const nombre = inputNombre.value; 
    const email = inputEmail.value; 
    const telefono = inputTelefono.value; 
    const mensaje = inputMensaje.value;
    
    const nuevoFormulario = new Formularios({nombre, email, telefono, mensaje});

    guardarNuevoFormulario(nuevoFormulario);
    mostrarNuevoFormulario(nuevoFormulario);
}

function guardarNuevoFormulario(nuevoFormulario) {
    const formulariosGuardados = JSON.parse(localStorage.getItem("formularios")) || [];
    formulariosGuardados.push(nuevoFormulario);
    localStorage.setItem("formularios", JSON.stringify(formulariosGuardados));
}


function mostrarNuevoFormulario(nuevoFormulario){
    const listItem = document.createElement("p");
    listItem.textContent = `Nombre: ${nuevoFormulario.nombre}, Email: ${nuevoFormulario.email}, Teléfono: ${nuevoFormulario.telefono}, Mensaje: ${nuevoFormulario.mensaje}`;
    lista.appendChild(listItem);
}



