// --- script.js ---

// Esperamos a que todo el documento HTML (la página) cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. ANIMACIÓN DE DESPLAZAMIENTO (Scroll) ---
    // Seleccionamos todas las tarjetas de servicios
    const cards = document.querySelectorAll('.service-card');

    // Creamos un "observador" que detecta cuándo un elemento entra en la pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si la tarjeta ya es visible en la pantalla...
            if (entry.isIntersecting) {
                // Le añadimos la clase 'visible' (que en el CSS le quita la transparencia y la mueve)
                entry.target.classList.add('visible');
                // Dejamos de observarla para que la animación no se repita al subir y bajar
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Se activa cuando al menos el 20% de la tarjeta es visible
    });

    // Le decimos al observador que vigile cada una de las tarjetas
    cards.forEach(card => {
        observer.observe(card);
    });


    // --- 2. VENTANAS DE AVISO INTERACTIVAS (Al hacer clic) ---
    // Agregamos un evento de clic a cada tarjeta para mostrar un aviso interactivo
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Buscamos el texto dentro de la etiqueta <h3> de la tarjeta clickeada
            const tituloServicio = card.querySelector('h3').innerText;
            
            // Mostramos una alerta personalizada con ese título
            alert("Te interesa el servicio de:\n\n" + tituloServicio + "\n\n¡Próximamente habilitaremos un formulario para que nos contactes por este servicio!");
        });
    });

});