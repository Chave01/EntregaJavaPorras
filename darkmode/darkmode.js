const toggleButton = document.querySelector('.dark-light');

$(".dark-light").on ("click", () =>{
   

if (localStorage.getItem("estilo")== "dark"){
    lighttheme ()
   
}else{
        darktheme()
      }




})



const darktheme = () => {
    $("nav").css ( "background-color", "transparent")
    $("a").css ( "color", "white")
    $("footer").css ({

   
        "background-color": "#1e222b",
        "color": "white",
     

    } )

    $("h1").css ( "color", "white")
    
    $("h2").css ( "color", "white")
    $("p").css ( "color", "white")
    $("body").css ( "background-color", "#1e222b")
    $(".Section2").css ( "background-color", "#1e222b")
    $(".Section3").css ( "background-color", "#1e222b")
    $(".ptexto").css ( "color", "#6c757d")
    $(".cost").css ( "color", "#6c757d")
    $(".itemCartTotal").css ( "color", "white")
    
    $("svg").css( "fill", "rgb: 12%, 13%, 17%")








localStorage.setItem("estilo", "dark")

}

const lighttheme = () => {

$("nav").css ( "background-color", "transparent")
$("body").css ( "background-color", "white")

$("a").css ( "color", "#6c757d")
$("footer").css ({


    "background-color": "#e5e5e5",
    "color": "black",
 

} )

$("h1").css ( "color", "black")
$("h2").css ( "color", "black")
$("#linkproduct").css ( "color", "#6c757d")
$("#idQuienes").css ( "color", "white")
$("#idverproduct").css ( "color", "black")
$(".H1PRODUCTO").css ( "color", "#f4511e")
$(".log").css ( "color", "#f4511e")
$(".historia").css ( "color", "#f4511e")
$("#textoHistoria").css ( "color", "#6c757d")

$(".Section2").css ( "background-color", "#f4511e")
$(".Section3").css ( "background-color", "white")
$(".Section3").css ( "background-color", "white")
$("#parrafo").css ( "color", "#6c757d")





localStorage.setItem("estilo", "light")
}
