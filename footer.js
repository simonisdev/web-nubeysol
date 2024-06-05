// document.addEventListener('DOMContentLoaded', function() {
//     fetch('footer.html')
//        .then(response => response.text())
//        .then(data => {
//             document.body.innerHTML += data;
//         })
//        .catch(error => console.error('Error al cargar el menú:', error));
// });

// window.onload = function() {
//     fetch('footer.html')
//        .then(response => response.text())
//        .then(data => {
//             document.body.innerHTML += data;
//         })
//        .catch(error => console.error('Error al cargar el menú:', error));
// };

// Asegúrate de que el menú móvil se inicialice después de que el contenido del 'footer' se haya cargado
window.onload = function() {
    // Código para cargar y añadir el contenido del 'footer'
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
            document.body.innerHTML += data;
            // Inicializa el menú móvil aquí, después de que el contenido del 'footer' se haya añadido
            const botonMenu = document.querySelector('.menu-toggle');
            const cabecera = document.querySelector('.cabecera');
  
            if (botonMenu && cabecera) {
              botonMenu.addEventListener('click', function() {
                cabecera.classList.toggle('nav-active');
              });
            }
       })
      .catch(error => console.error('Error al cargar el menú:', error));
  };