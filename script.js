// Manejo de audio al pasar el cursor sobre las tarjetas
document.querySelectorAll('.card-container').forEach(card => {
    // Selecciona todos los elementos con la clase 'card-container' y para cada uno...
    
    const audio = card.querySelector('.audio');
    // Busca el elemento de audio que esté dentro de cada tarjeta

    card.addEventListener('mouseenter', () => {
        // Agrega un evento que se ejecuta cuando el cursor pasa sobre la tarjeta
        
        if (audio) {
            // Si hay un audio asociado a la tarjeta, lo reproduce
            audio.play();
        }
    });

    card.addEventListener('mouseleave', () => {
        // Agrega un evento que se ejecuta cuando el cursor sale de la tarjeta
        
        if (audio) {
            // Si hay un audio asociado, lo pausa y reinicia su tiempo de reproducción
            audio.pause();
            audio.currentTime = 0;
        }
    });
});

// Manejo del formulario de contacto y respuesta al envío
document.addEventListener('DOMContentLoaded', function () {
    // Espera a que el contenido de la página esté completamente cargado antes de ejecutar el código
    
    const form = document.getElementById('contactForm');
    // Obtiene el formulario de contacto usando su ID ('contactForm')

    const responseMessage = document.getElementById('responseMessage');
    // Obtiene el contenedor donde se mostrará el mensaje de respuesta tras enviar el formulario

    if (form && responseMessage) {
        // Verifica que el formulario y el contenedor del mensaje de respuesta existan en la página
        
        form.addEventListener('submit', function (event) {
            // Agrega un evento 'submit' al formulario, que se dispara cuando el usuario intenta enviarlo
            
            event.preventDefault();
            // Previene el envío normal del formulario, evitando que la página se recargue

            const name = document.getElementById('name').value;
            // Obtiene el valor del campo 'nombre' que el usuario ingresó

            const email = document.getElementById('email').value;
            // Obtiene el valor del campo 'email' que el usuario ingresó (no lo usamos aquí pero es parte del formulario)

            const message = document.getElementById('message').value;
            // Obtiene el valor del campo 'mensaje' que el usuario ingresó (también lo dejamos como parte del formulario)

            // Muestra un mensaje de éxito personalizado con el nombre del usuario
            responseMessage.classList.add('success');
            // Añade una clase 'success' al contenedor de mensajes para posibles estilos CSS personalizados

            responseMessage.innerHTML = `
                <h1>Hola ${name}, tu mensaje ha sido enviado.</h1>
                <p>Por el momento no tengo habilitado este apartado, pero</p>
                <p>!!! Gracias por tu mensaje, nos pondremos en contacto contigo pronto ¡¡¡</p>
                <a href='#contact' id='backToForm'>Volver al formulario</a>
            `;
            // Inserta el mensaje de éxito, incluyendo el nombre ingresado por el usuario, en el contenedor de respuesta

            responseMessage.style.display = 'block';
            // Hace visible el contenedor de respuesta, que podría estar oculto por defecto

            form.reset();
            // Limpia el formulario, dejando todos los campos vacíos después de enviar el mensaje

            const backToForm = document.getElementById('backToForm');
            // Obtiene el enlace "Volver al formulario" que se añadió al mensaje de respuesta

            if (backToForm) {
                // Verifica que el enlace "Volver al formulario" exista

                backToForm.addEventListener('click', function (event) {
                    // Agrega un evento 'click' al enlace para que el usuario pueda volver al formulario
                    
                    event.preventDefault();
                    // Previene el comportamiento predeterminado del enlace, que sería recargar la página

                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    // Desplaza suavemente la página hasta la parte superior, donde se encuentra el formulario
                });
            }
        });
    }
});
