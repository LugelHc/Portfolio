const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style;//este metodo localiza todas las variables(root) de tu css

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]")

const changeLanguage = async language=>{
    const requestJson = await fetch(`./languages/${language}.json`)
    const texts = await requestJson.json();
    
    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML=texts[section][value];
    }
}

flagsElement.addEventListener('click' ,(e)=>{
    changeLanguage(e.target.parentElement.dataset.language);
});

toggleTheme.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent='Light Mode'
    } else {
        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent='Dark Mode';
    }
})

// fetch('./colores/color.json')
// .then(response => response.json())
// .then(async data =>{
//     const buscarColor = async color => {
//          localStorage.setItem("color", await data.colores[color]);
//          const savedColor = localStorage.getItem('color');
//         return rootStyles.setProperty("--primary-color", savedColor );
//     }
//     toggleColors.addEventListener("click",(e)=>{
//        buscarColor(e.target.dataset.color);
//     });
// })


// Selecciona el botón de cambio de color
const toggleColorsButton = document.getElementById("toggle-colors");

// Obtiene el valor de color predeterminado
const defaultColor = "#000000";

// Carga el archivo JSON de colores y establece el color predeterminado
fetch('./colores/color.json')
  .then(response => response.json())
  .then(data => {
    const rootStyles = document.documentElement.style;
    let primaryColor = localStorage.getItem("color") || defaultColor;
    rootStyles.setProperty("--primary-color", primaryColor);

    // Función para buscar y aplicar un color específico
    const buscarColor = color => {
      primaryColor = data.colores[color];
      localStorage.setItem("color", primaryColor);
      rootStyles.setProperty("--primary-color", primaryColor);
    };

    // Maneja el evento click en el botón de cambio de color
    toggleColorsButton.addEventListener("click", e => {
      const newColor = e.target.dataset.color;
      buscarColor(newColor);
    });
  })
  .catch(error => console.error("Error al cargar el archivo JSON:", error));