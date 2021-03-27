function irSeccion(e) {
    let seccionNueva = e.target.dataset.seccion;
    console.log(seccionNueva);
    let elemento = document.getElementById(seccionNueva + "");
    if(window.innerWidth <= 900) {
        let alturaRestar = Math.round(window.innerHeight / 10);
        let posElemento = elemento.offsetTop;
        window.scrollTo(0, posElemento - alturaRestar);
    } else {
        elemento.scrollIntoView(seccionNueva +"");
    } 
        
    
}

let barraNavegacion = document.getElementById("navegacion");
let secciones = document.getElementById("navegacion").children;
let elementos = document.querySelectorAll(".boton-navegacion");

for(let elem of secciones)
    elem.addEventListener("click", irSeccion);

