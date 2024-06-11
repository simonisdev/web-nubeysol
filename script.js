// menú toggle
document.addEventListener('DOMContentLoaded', function() {
  const botonMenu = document.querySelector('.menu-toggle');
  const cabecera = document.querySelector('.cabecera');

  botonMenu.addEventListener('click', function() {
    cabecera.classList.toggle('nav-active');
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   const botonMenu = document.querySelector('.menu-toggle');
//   const menuDesplegable = document.querySelector('.menu-desplegable');
//   const cabecera = document.querySelector('.cabecera');

//   botonMenu.addEventListener('click', function() {
//     // Toglear la clase 'nav-active' en la cabecera para mostrar/ocultar el menú desplegable
//     cabecera.classList.toggle('nav-active');
//     // Mostrar el menú desplegable si la cabecera tiene la clase 'nav-active'
//     if (cabecera.classList.contains('nav-active')) {
//       menuDesplegable.style.display = 'block'; // Asumiendo que quieres usar display para mostrar/ocultar
//     } else {
//       menuDesplegable.style.display = 'none';
//     }
//   });

//   // Agregar evento de clic al documento para manejar clics fuera del menú
//   document.addEventListener('click', function(event) {
//     // Verificar si el clic fue fuera del menú desplegable
//     if (!menuDesplegable.contains(event.target)) {
//       // Si el clic fue fuera, ocultar el menú
//       cabecera.classList.remove('nav-active');
//       menuDesplegable.style.display = 'none';
//     }
//   });
// });

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
  
// FOOTER
// window.onload = function() {
//   fetch('footer.html')
//      .then(response => response.text())
//      .then(data => {
//           document.body.innerHTML += data;
//       })
//      .catch(error => console.error('Error al cargar el menú:', error));
// };  

//   calendario escolar
document.addEventListener('DOMContentLoaded', function() {
    var calendarioEl = document.getElementById('calendario');
  
    var calendario = new FullCalendar.Calendar(calendarioEl, {
      initialView: 'dayGridMonth'
      // Aquí puedes agregar opciones adicionales, como eventos, configuraciones de idioma, etc.
    });
  
    calendario.render();
  });

// MENSAJE DEL DIRECTOR
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const closeButton = document.querySelector('.close-button');
  const container = document.querySelector('.sobre-nosotros--container2');

  // Opciones del popup
  const option1 = document.getElementById('popup-option1');
  const option2 = document.getElementById('popup-option2');

  // Función para abrir el popup
  function openPopup(option) {
      popup.style.display = 'block';
      if (option === 1) {
          option1.classList.add('active');
          option2.classList.remove('active');
      } else if (option === 2) {
          option1.classList.remove('active');
          option2.classList.add('active');
      }
  }

  // Función para cerrar el popup
  function closePopup() {
      popup.style.display = 'none';
      option1.classList.remove('active');
      option2.classList.remove('active');
  }

  // Evento para abrir el popup al hacer clic en el contenedor
  container.addEventListener('click', () => openPopup(1)); // Cambia a 2 si deseas mostrar el video

  // Evento para cerrar el popup al hacer clic en el botón de cerrar
  closeButton.addEventListener('click', closePopup);

  // Evento para cerrar el popup al hacer clic fuera del contenido del popup
  window.addEventListener('click', (event) => {
      if (event.target === popup) {
          closePopup();
      }
  });
});

// GALERIA DE IMAGENES
document.addEventListener('DOMContentLoaded', () => {
  const viewer = document.getElementById('image-viewer');
  const viewerImage = document.getElementById('viewer-image');
  const closeViewer = document.querySelector('.close-viewer');
  const galleryItems = document.querySelectorAll('.galeria-item img');

  galleryItems.forEach(item => {
      item.addEventListener('click', () => {
          viewerImage.src = item.src;
          viewer.style.display = 'block';
      });
  });

  closeViewer.addEventListener('click', () => {
      viewer.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === viewer) {
          viewer.style.display = 'none';
      }
  });
});

    // Create a lightbox
    (function() {
      var $lightbox = $("<div class='lightbox'></div>");
      var $img = $("<img>");
      var $caption = $("<p class='caption'></p>");
    
      // Add image and caption to lightbox
    
      $lightbox
        .append($img)
        .append($caption);
    
      // Add lighbox to document
    
      $('body').append($lightbox);
    
      $('.lightbox-gallery img').click(function(e) {
        e.preventDefault();
    
        // Get image link and description
        var src = $(this).attr("data-image-hd");
        var cap = $(this).attr("alt");
    
        // Add data to lighbox
    
        $img.attr('src', src);
        $caption.text(cap);
    
        // Show lightbox
    
        $lightbox.fadeIn('fast');
    
        $lightbox.click(function() {
          $lightbox.fadeOut('fast');
        });
      });
    
    }());


    $(document).ready(function(){
      // Mostrar el botón cuando el usuario se desplace más de 300px hacia abajo
      $(window).scroll(function(){
          if ($(this).scrollTop() > 300){
              $('.scroll-top').fadeIn('slow');
          } else {
              $('.scroll-top').fadeOut('slow');
          }
      });
  
      // Acción del botón para volver al inicio de la página
      $('.scroll-top').click(function(event){
          event.preventDefault();
          $('html, body').animate({scrollTop: 0}, 500);
      });
  });

  // FOOTER
//   window.onload = function() {
//     fetch('footer.html')
//        .then(response => response.text())
//        .then(data => {
//             document.body.innerHTML += data;
//         })
//        .catch(error => console.error('Error al cargar el menú:', error));
// };

