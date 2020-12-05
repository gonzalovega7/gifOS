//-------------------------------------------------------------------------------------//
//------------------------------DARK MODE----------------------------------------------//
//-------------------------------------------------------------------------------------//
document.getElementById("mode-dark").addEventListener("click", function() {
    document.getElementById("body").classList.toggle("cuerpo-dark");
    if (document.getElementById("body").classList.contains("cuerpo-dark")) {

        localStorage.setItem("dark-mode", "true");
    } else {

        localStorage.setItem("dark-mode", "false");
    }
    setDarkMode();
})

function setDarkMode() {
    if (localStorage.getItem("dark-mode") === "true") {
        document.getElementById("logo").setAttribute("src", "./assets/logo-mobile-modo-noct.svg");
        document.getElementById("srch-btn").style.color = "#FFFFFF";
        document.getElementById("mode-dark").textContent = "Modo Diurno";
        document.getElementById("body").classList.add("cuerpo-dark");
        document.getElementById("body").classList.remove("body");
        document.getElementById("camera").setAttribute("src", "./assets/camara-modo-noc.svg");
        document.getElementById("movie").setAttribute("src", "./assets/pelicula-modo-noc.svg");
    } else {
        document.getElementById("logo").setAttribute("src", "./assets/logo-mobile.svg");
        document.getElementById("srch-btn").style.color = "#572EE5";
        document.getElementById("mode-dark").textContent = "Modo Nocturno";
        document.getElementById("body").classList.remove("cuerpo-dark");
        document.getElementById("body").classList.add("body");
        document.getElementById("camera").setAttribute("src", "./assets/camara.svg");
        document.getElementById("movie").setAttribute("src", "./assets/pelicula.svg");
    }
}