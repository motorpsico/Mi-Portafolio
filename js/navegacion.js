function toggleMenu(e) {
    menu.classList.toggle("active");
}

let botonMenu = document.querySelector(".boton-menu");
let botonCerrar = document.querySelector(".boton-cerrar");
let menu = document.querySelector(".navegacion");
botonMenu.addEventListener("click", toggleMenu);
botonCerrar.addEventListener("click",toggleMenu);

