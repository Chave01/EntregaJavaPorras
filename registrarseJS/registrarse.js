
// entidad
class user { 

  constructor (email,pass) {

    this.email = email
    this.pass = pass

  }

}

$("#wrapSesion").on ("submit", (e) => {
       e.preventDefault ()


const contacto= new user ({

email: $("#Email").val(),
pass: $ ("#pass").val(),


})
console.log(contacto);
document.getElementById ("wrapSesion").reset ()
})













/*
constantes
let contact = []


let btn = document.getElementById  ("Botonlogin")
let form = document.getElementById ("wrapSesion")



Funciones de guardar la info 

const imprimirDato = (usuario) => {
   e.preventDefault ()



    let email = document.getElementById ("Email").value
    let pass= document.getElementById ("pass").value

 Para que se me guarden los contactos ingresados 

    contact = JSON.parse(localStorage.getItem ("contact"))
    let usuario = new user (email,pass)
    contact.push (e)

 guardamos en el localstorage

localStorage.setItem ("contact", JSON.stringify(contact))




console.log(` Tu correo es ${contact }` );


}


 Funcion de imprimir dato 
const printData = () => {




}



form.addEventListener ("submit", imprimirDato)  
*/