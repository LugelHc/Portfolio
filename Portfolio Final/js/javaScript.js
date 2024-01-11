const modo = document.getElementById("modo");
const navbar =  document.getElementById("navbar");
const icono = document.getElementById("icono");
const boton = document.getElementById("boton__responsive")
const modal = document.getElementById("modal")
const barraColores = document.getElementById("colors")
const x = document.getElementById("x")

modo.addEventListener("click", () => {
    document.body.classList.toggle("light")
    if (modo.innerHTML == "Modo oscuro") {
        modo.innerHTML = "Modo claro";
    } else {
        modo.innerHTML = "Modo oscuro";
    }
});
const defaultColor = "#4488ee";
fetch('./json/colores/colore.json')
    .then(response => response.json())
    .then(data => {
        const colores = document.getElementById("colors");
        const rootStyle = document.documentElement.style;

        let primaryColor = localStorage.getItem("color") || defaultColor;
        rootStyle.setProperty("--primary-color", primaryColor);

        const cambiarColor = color => {
            const colorPrimario = data.colores[color];
            localStorage.setItem("color",colorPrimario)
            rootStyle.setProperty("--primary-color",colorPrimario)
        };

        colores.addEventListener("click", (e) => {
            if (e.target.getAttribute('class')!="color xEstilo"){
                const nuevoColor = e.target.dataset.color
                cambiarColor(nuevoColor)
            }
        });
    
    })
    .catch(error => {
        console.error("Error al cargar el archivo JSON:", error);
    });
function verificarTamañoPantalla() {
    if (document.documentElement.clientWidth >= 710) {
        x.style.display = "none";
        modal.style.opacity = 1
        modal.style.pointerEvents = "auto"
   
    } else {
        x.style.display = "block";
        modal.style.pointerEvents = "none"
        modal.style.opacity = 0
    }
}
verificarTamañoPantalla();
window.addEventListener("resize", verificarTamañoPantalla);


boton.addEventListener("click",()=>{
    modal.style.opacity = 1
    modal.style.pointerEvents = "auto"
    x.style.display = "block"
});
x.addEventListener("click",()=>{
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
    x.style.display = "none"
})

