// document.addEventListener('DOMContentLoaded', function() {
//     fetch('menu.html')
//        .then(response => response.text())
//        .then(data => {
//             document.body.innerHTML += data;
//         })
//        .catch(error => console.error('Error al cargar el menú:', error));
// });

  document.addEventListener('DOMContentLoaded', function() {
      var template = document.getElementById('menuNavegacion').content;
      var fragmento = document.importNode(template, true);
      document.body.appendChild(fragmento);
  });