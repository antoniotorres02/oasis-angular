function include(tag, file) {
  $(tag).load(file);
}

var navbarContainer = document.getElementById("navbar-container");

// Crear una instancia de XMLHttpRequest
var xhr = new XMLHttpRequest();

// Cargar el contenido HTML del navbar
xhr.open("GET", "Componentes/navbar_de_verdad.html", true);
xhr.onload = function() {
  if (xhr.status === 200) {
    navbarContainer.innerHTML = xhr.responseText;
  }
};
xhr.send();