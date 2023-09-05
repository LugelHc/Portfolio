const modo = document.getElementById("modo");
const navbar =  document.getElementById("navbar");
const icono = document.getElementById("icono");
const boton = document.getElementById("boton__responsive")
const modal = document.getElementById("modal")
const barraColores = document.getElementById("colors")
const x = document.getElementById("x")

modo.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (modo.innerHTML == "Dark mode") {
        modo.innerHTML = "Light mode";
    } else {
        modo.innerHTML = "Dark mode";
    }
});

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
boton.addEventListener("click",()=>{
    modal.style.opacity = 1
    modal.style.pointerEvents = "auto"
    x.style.opacity = 1
});
x.addEventListener("click",()=>{
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
})

