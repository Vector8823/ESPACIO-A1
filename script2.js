// Manejo de audio al pasar el cursor sobre las tarjetas
// Selecciona todos los elementos con la clase 'card-container'
document.querySelectorAll('.card-container').forEach(card => {
    // Para cada tarjeta, selecciona el audio dentro de ella
    const audio = card.querySelector('.audio');

    // Agrega un evento cuando el cursor pasa por encima de la tarjeta
    card.addEventListener('mouseenter', () => {
        if (audio) {
            // Si existe un audio asociado a la tarjeta, reproduce el audio
            audio.play();
        }
    });

    // Agrega un evento cuando el cursor sale de la tarjeta
    card.addEventListener('mouseleave', () => {
        if (audio) {
            // Pausa el audio y reinicia su tiempo de reproducción a 0
            audio.pause();
            audio.currentTime = 0;
        }
    });
});

// Manejo del formulario de contacto y respuesta al envío
document.addEventListener('DOMContentLoaded', function () {
    // Esta función se ejecuta cuando el contenido de la página está completamente cargado

    // Obtiene el formulario de contacto por su ID
    const form = document.getElementById('contactForm');
    // Obtiene el contenedor que mostrará el mensaje de respuesta tras enviar el formulario
    const responseMessage = document.getElementById('responseMessage');

    // Verifica que ambos elementos (formulario y contenedor de respuesta) existan
    if (form && responseMessage) {
        // Agrega un evento 'submit' al formulario que se dispara cuando se envía
        form.addEventListener('submit', function (event) {
            // Previene que el formulario se envíe normalmente (recargar la página)
            event.preventDefault();

            // Obtiene los valores ingresados por el usuario en los campos del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Muestra un mensaje de éxito en el contenedor de respuesta
            responseMessage.classList.add('success');
            responseMessage.innerHTML = `
                <h1>No disponible por el momento.</h1>
                <p>Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</p>
                <a href='#contact' id='backToForm'>Volver al formulario</a>
            `;
            responseMessage.style.display = 'block'; // Hace visible el contenedor de respuesta

            // Limpia los campos del formulario (deja los campos en blanco)
            form.reset();

            // Agrega un evento al enlace "Volver al formulario" dentro del mensaje de respuesta
            const backToForm = document.getElementById('backToForm');
            if (backToForm) {
                backToForm.addEventListener('click', function (event) {
                    // Previene el comportamiento predeterminado del enlace (navegar a otra página)
                    event.preventDefault();
                    // Desplaza la ventana de la página hacia el inicio de manera suave
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        });
    }
});