
    function mostrarSeccion(id) {
    // Si hay un parámetro, cambia la sección activa según el ID proporcionado
    if (id) {
        // Oculta todas las secciones
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Muestra la sección seleccionada
        document.getElementById(id).classList.add('active');
    } else {
        // Si no hay parámetro, muestra la sección home por defecto
        document.getElementById('main-container--home-page').classList.add('active');
    }
}

// Llama a mostrarSeccion sin parámetros al cargar la página para activar la sección home
window.onload = function() {
    mostrarSeccion();
};

// SEGUNDA VERSION DE LA FUNCION
function mostrarSeccion(id) {
    // Si hay un parámetro, cambia la sección activa según el ID proporcionado
    if (id) {
        // Guarda el ID de la sección activa en localStorage
        localStorage.setItem('seccionActiva', id);

        // Oculta todas las secciones
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Muestra la sección seleccionada
        document.getElementById(id).classList.add('active');
    } else {
        // Si no hay parámetro, intenta recuperar el ID de la sección activa desde localStorage
        const seccionActiva = localStorage.getItem('seccionActiva') || 'main-container--home-page';
        
        // Aplica la clase 'active' a la sección activa
        document.getElementById(seccionActiva).classList.add('active');
    }
}

    // Llama a mostrarSeccion sin parámetros al cargar la página para activar la sección home
    // o la última sección activa si existe en localStorage
    window.onload = function() {
        mostrarSeccion();
    };

    // Agrega un evento listener para actualizar la sección activa cuando se hace clic en un submenú
    document.querySelector('nav ul').addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace
            mostrarSeccion(e.target.getAttribute('href'));
        }
});


// TERCERA VERSION DE LA FUNCION
function mostrarSeccion(id) {
    // Guarda el ID de la sección activa en localStorage
    localStorage.setItem('seccionActiva', id);

    // Oculta todas las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Muestra la sección seleccionada
    document.getElementById(id).classList.add('active');
}

// Recupera la sección activa de localStorage al cargar la página
window.onload = function() {
    const seccionActiva = localStorage.getItem('seccionActiva') || 'section-home';
    mostrarSeccion(seccionActiva);
};

// Actualiza la sección activa cuando se hace clic en un submenú
document.querySelector('nav ul').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        mostrarSeccion(e.target.getAttribute('href'));
    }
});