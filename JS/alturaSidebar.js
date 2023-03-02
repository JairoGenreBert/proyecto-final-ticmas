ajustarAltura();                 

window.addEventListener("resize", ajustarAltura);


function ajustarAltura(){
    let body = document.body,
    html = document.documentElement;

    let altura = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
    let alturapx = altura+"px";

    document.getElementById("sidebar").style.height = alturapx;   
}