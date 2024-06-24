document.addEventListener('DOMContentLoaded', function() {
    var cookieConsent = document.getElementById('cookie-consent');
    var cookiesAccepted = localStorage.getItem('cookiesAccepted');

    // Verificar si ya se ha aceptado o rechazado las cookies
    if (cookiesAccepted !== null) {
        cookieConsent.style.display = 'none';
    } else {
        // si no hay decisión previa, mostrar el banner
        cookieConsent.style.display = 'block';
    }

    function hideCookieBanner() {
        // Inicia la transición de altura
        // cookieConsent.style.height = '0';
        cookieConsent.style.opacity = '0';
        // cookieConsent.style.overflow = 'hidden';
        cookieConsent.style.transition = 'opacity 0.5s ease';

        // Espera hasta que la transición termine para ocultar completamente el banner
        setTimeout(function() {
            cookieConsent.style.display = 'none';
        }, 500); // Ajusta este tiempo al de la duración de tu transición
    }

    // Manejar clic en "Aceptar"
    document.getElementById('accept-cookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        hideCookieBanner();
    });

    // Manejar clic en "Rechazar"
    document.getElementById('reject-cookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        hideCookieBanner();
    });
});