
document.getElementById("boton-contacto").addEventListener("click", mostrarContacto);
function mostrarContacto(){
    document.getElementById("cortina").style.visibility = "visible"; 
    document.getElementById("contacto").style.visibility = "visible"; 
}

function ocultarContacto(){
    document.getElementById("cortina").style.visibility = "hidden"; 
    document.getElementById("contacto").style.visibility = "hidden"; 
}

