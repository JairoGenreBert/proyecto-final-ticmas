//Al cargar la pgina hago el ajuste inicial de las dimensiones de la cortina y el sidebar 
ajustarDimensiones();                 

//Luego, cada vez que hacemos zoom in o zoom out en el navegador, volvemos a ejecutar el ajuste de las dimensiones
//Asegurandome que siempre la cortina ocupe todo el alto y ancho de la pagina y el sidebar todo el alto.
window.addEventListener("resize", ajustarDimensiones);

//Función que ajusta la altura del sidebar a la maxima altura
function ajustarDimensiones(){
    let body = document.body, html = document.documentElement;
    //Aparentemente según el navegador, alguna de estas puede ser mas grande que otras, la idea es tomar la mas grande 
    //como altura y ancho de la pagina
    let altura = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    let ancho = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
    let alturapx = altura+"px";
    let anchopx = ancho+"px";
    //Modificamos el alto del sidebar y cortina, y el ancho de la cortina haciendolas igual a la máxima 
    document.getElementById("sidebar").style.height = alturapx; 
    document.getElementById("cortina").style.height = alturapx;
    document.getElementById("cortina").style.width = anchopx;  
}

