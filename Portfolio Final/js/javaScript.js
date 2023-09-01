const modo = document.getElementById("modo");
const navbar =  document.getElementById("navbar");
const icono = document.getElementById("icono");



modo.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (modo.innerHTML == "Dark mode") {
        modo.innerHTML = "Light mode";
    } else {
        modo.innerHTML = "Dark mode";
    }
});
// ------------------------------------------------ParteConJson-------------------------------------------//
fetch('./json/colores/colore.json')
.then(Response => Response.json())
.then(data =>{
    const colores = document.getElementById("colors");
    const rootStyle = document.documentElement.style;
    const cambiarColor = color =>{
        colorPrimario = data.colores[color]
        rootStyle.setProperty("--primary-color",colorPrimario)
    }
    colores.addEventListener("click",(e)=>{
        cambiarColor(e.target.dataset.color)
    });
    
})
s