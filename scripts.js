//Cargar DOM

document.addEventListener('DOMContentLoaded',function() {
  
  // Mostrar un mensaje de bienvenida en la primera carga de la página
  if (window.location.pathname.endsWith('index.html')) {
    window.onload = function() {
        alert("¡Bienvenido a nuestra Galería de Artistas!");
    };
}

// Añadir eventos a los botones para mostrar alertas cuando se haga click

var prevPageButton = document.getElementById("prevPage");
var nextPageButton = document.getElementById("nextPage");


if (prevPageButton) {
prevPageButton.addEventListener("click", function(event) {
    alert("Estás regresando al artista anterior.");
});

}


if (nextPageButton) {
nextPageButton.addEventListener("click", function(event) {
    alert("Te estás moviendo al siguiente artista.");
});

}

});