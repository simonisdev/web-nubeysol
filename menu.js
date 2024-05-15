document.addEventListener('DOMContentLoaded', function() {
    fetch('menu.html')
       .then(response => response.text())
       .then(data => {
            document.body.innerHTML += data;
        })
       .catch(error => console.error('Error al cargar el menú:', error));
});
