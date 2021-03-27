function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
  
function createLamina() {
    let colores = ["dodgerblue", "crimson", "gold", "greenyellow", "teal", "magenta", "orangered", "turquoise"];
    let lamina = document.createElement("div");
    lamina.style.position = "relative";
    lamina.style.backgroundColor = "transparent";
    lamina.style.animationName = "moverDiagonal";
    lamina.style.animationDuration = getRandomInt(10, 20) + "s";
    lamina.style.animationIterationCount = "infinite";
    lamina.style.animationDirection = "alternate";
    lamina.style.animationTimingFunction = "linear";
    lamina.style.animationDelay = getRandomInt(0, 5) + "s";
    
    let luz = document.createElement("div");
    luz.style.backgroundColor = colores[getRandomInt(0, colores.length)];
    luz.style.borderRadius = "20px" ;
    luz.style.width = getRandomInt(4, 5) + "px";
    luz.style.height = getRandomInt(50, 300) + "px";
    luz.style.position = "absolute";
    luz.style.top = getRandomInt(0, window.innerHeight) + "px";
    luz.style.left = getRandomInt(0, window.innerWidth) + "px";
    luz.style.transform = "rotate(45deg)";
    
    
    lamina.appendChild(luz);
    return lamina;
}
  
function agregarLamina() {
    let numeroDeLaminas = 100;
    let portada = document.querySelector(".portada");
    for(let i = 0; i < numeroDeLaminas; i++) {
      portada.appendChild(createLamina());
    }
}
  
agregarLamina();