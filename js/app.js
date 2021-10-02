// VARIABLES----
const clickButton = document.querySelectorAll (".btn")
const tbody = document.querySelector ('.tbody')
const ptotal= document.getElementsByClassName("itemCartTotal")
const itemList = document.getElementById ("listaProducto")



let carrito =[]
// EVENTO ----
clickButton.forEach (btn => {
  btn.addEventListener ("click", addToCart) 
  

 })


function addToCart (e) {
 const button = e.target 
 const item = button.closest (".divfoto")
 const itemName = item.querySelector(".ptexto").textContent;
 const itemPrice = item.querySelector (".cost").textContent;
 const itemImg = item.querySelector('.imgproducto').src;
 

 
 const newItem = {
    title:itemName,
    precio:itemPrice,
    img: itemImg,
    cantidad: 1,

}
addItemCarrito (newItem)
}


function addItemCarrito (newItem){


carrito.push (newItem)
renderCarrito ()
}

function renderCarrito (){
   tbody.innerHTML = ''
   carrito.map (item =>{

const row = document.createElement ('tr')
row.classList.add ('ItemCarrito')
const Content = `
     
                  <tr>
                     <td class="table__productos">
                     <img src=${item.img}  alt="">
                     <td class= "title">${item.title }</td>
                     <td>${item.precio}</td>
                     <td class="table__cantidad">
                     <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                     <button class="delete btn btn-danger">x</button>


                              

                     

                  
               </tr>



`
row.innerHTML = Content;
   tbody.appendChild (row) ;
   row.querySelector(".delete").addEventListener('click', removeItemCarrito)
   row.querySelector(".input__elemento").addEventListener ('change', contabilizador)
 
   
})
precioTotal()
}

const precioTotal =() => {    
   //let agregarGuardado= JSON.parse(localStorage.getItem ("carrito"))

   let calculoTotal = 0 ;
   const itemCartTotal = document.querySelector('.itemCartTotal')
   carrito.forEach (item => {

      calculoTotal = calculoTotal + parseInt(item.precio)* item.cantidad

    
    })
 
    itemCartTotal.textContent = `Total $ ${calculoTotal}`
    addLocalStorage ()
   
  }

  function removeItemCarrito (e){
   const buttonDelete = e.target
   const tr = buttonDelete.closest (".ItemCarrito")
   const title = tr.querySelector ('.title').textContent;

   for ( let i = 0 ; i< carrito.length ; i ++) {

    if (carrito [i].title.trim () === title.trim ()) {
          carrito.splice (i,1)

    }
   }

 
   tr.remove()
   precioTotal()
 }


 function contabilizador (e) {
   const suma = e.target
   const tr = suma.closest (".ItemCarrito ")
   const title = tr.querySelector ('.title').textContent

   carrito.forEach (item => {


     if (item.title.trim ()=== title){

        suma.value < 1 ? (suma.value = 1) : suma.value;
        item.cantidad = suma.value
     }
   })

   precioTotal()

}


const sumCantidad =(e) => {    

   const sumaInput  = e.target
   const tr = sumaInput.closest(".ItemCarrito")
   const title = tr.querySelector('.title').textContent;

    carrito.forEach (item => {
    
      if(item.title.trim() === title){
         sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
         item.cantidad = sumaInput.value;

         precioTotal()
     }
  
     
   })
}
function addLocalStorage (){

   localStorage.setItem ('carrito', JSON.stringify(carrito))
   
   
   }


   window.onload = function () {

      const storage= JSON.parse(localStorage.getItem ('carrito'))
   
      if (storage){
   
   carrito = storage;
   renderCarrito ()
   
      }
   }