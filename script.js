// menu
// document.addEventListener('DOMContentLoaded', function() {
//   fetch('menu.html')
//      .then(response => response.text())
//      .then(data => {
//           document.body.innerHTML += data;
//       })
//      .catch(error => console.error('Error al cargar el menú:', error));
// });

// menú toggle
document.addEventListener('DOMContentLoaded', function() {
  const botonMenu = document.querySelector('.menu-toggle');
  const cabecera = document.querySelector('.cabecera');

  botonMenu.addEventListener('click', function() {
    cabecera.classList.toggle('nav-active');
  });
});

// slider anuncios
document.addEventListener('DOMContentLoaded', function() {
    let indiceActual = 0;
    const anuncios = document.querySelectorAll('.slider .anuncio');
    const totalAnuncios = anuncios.length;
  
    // Función para cambiar el anuncio visible
    const cambiarAnuncio = () => {
      // Ocultar el anuncio actual
      anuncios[indiceActual].style.display = 'none';
  
      // Calcular el índice del próximo anuncio a mostrar
      indiceActual = (indiceActual + 1) % totalAnuncios;
  
      // Mostrar el próximo anuncio
      anuncios[indiceActual].style.display = 'block';
    };
  
    // Inicializar el slider mostrando el primer anuncio
    anuncios.forEach((anuncio, indice) => {
      anuncio.style.display = indice === 0 ? 'block' : 'none';
    });
  
    // Cambiar el anuncio cada 5 segundos
    setInterval(cambiarAnuncio, 5000);
  });
  
  

//   calendario escolar
document.addEventListener('DOMContentLoaded', function() {
    var calendarioEl = document.getElementById('calendario');
  
    var calendario = new FullCalendar.Calendar(calendarioEl, {
      initialView: 'dayGridMonth'
      // Aquí puedes agregar opciones adicionales, como eventos, configuraciones de idioma, etc.
    });
  
    calendario.render();
  });

  // footer
//   document.addEventListener('DOMContentLoaded', function() {
//     fetch('footer.html')
//        .then(response => response.text())
//        .then(data => {
//             document.body.innerHTML += data;
//         })
//        .catch(error => console.error('Error al cargar el menú:', error));
// });