  // Mostrar un mensaje de bienvenida en la primera carga de la página
  if (window.location.pathname.endsWith('page1.html')) {
    window.onload = function() {
        alert("¡Bienvenido a nuestra Galería de Artistas!");
    };
}

// Añadir eventos a los botones para mostrar alertas cuando se haga clic
document.getElementById("prevPage").addEventListener("click", function(event) {
    alert("Estás regresando al artista anterior.");
});

document.getElementById("nextPage").addEventListener("click", function(event) {
    alert("Te estás moviendo al siguiente artista.");
});