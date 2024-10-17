/* Scroll al hacer click en las secciones del mení de navegación */
const links = document.querySelectorAll('.scrollMenú');
console.log(links);
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetSectionId = link.getAttribute('href'); // Obtiene el valor del atributo href del enlace clicado.
        scrollToSection(targetSectionId);
    });
})
function scrollToSection(sectionId) { // Identificador de la sección como argumento 
    const targetSection = document.querySelector(sectionId); // Obtener los elementos del identificador
    window.scrollTo({ 
        top: targetSection.offsetTop, // Desplazamiento hacia la parte superior de la sección 
        behavior: 'smooth' // Desplazamiento suave
    });
}
/* Cambiar de álbum */
var contenedorAlbum = document.getElementById("contenedorAlbumsPescado");
var botonAnterior = document.getElementById("botonAnterior");
botonAnterior.addEventListener("click",()=>{
    var albumActivo = contenedorAlbum.querySelector(".activo");
    var albumAnterior = albumActivo.previousElementSibling;

    if (albumAnterior === null){
        albumAnterior = contenedorAlbum.querySelector(".oculto:last-child");
    }

    albumActivo.style.transform = "translateX(100%)";
    albumAnterior.style.transform = "translateX(0)";

    albumActivo.classList.remove("activo");
    albumActivo.classList.add("oculto");

    albumAnterior.classList.remove("oculto");
    albumAnterior.classList.add("activo");
});
var botonSiguiente = document.getElementById("botonSiguiente");
botonSiguiente.addEventListener("click", (event) =>{
    event.preventDefault();
    var albumActivo = contenedorAlbum.querySelector(".activo");
    var albumSiguiente = contenedorAlbum.querySelector(".activo + .oculto");

    if (albumSiguiente === null){
        albumSiguiente = contenedorAlbum.querySelector(".oculto:first-child");
    }

    albumActivo.style.transform = "translateX(-100%)";
    albumSiguiente.style.transform = "translateX(0)";

    albumActivo.classList.remove("activo");
    albumActivo.classList.add("oculto");

    albumSiguiente.classList.remove("oculto");
    albumSiguiente.classList.add("activo");
});

// Validación de datos y mensaje de comprobación - Formulario
var botonEnviar = document.getElementById("submit");
var mensajeError = document.querySelector(".error-message");
var mensajeEnviado = document.getElementById("mensajeComprobación");
var audioMensaje = document.getElementById("audioMensaje");

botonEnviar.addEventListener("click", (event) => {
    event.preventDefault();

    var nombreInput = document.querySelector('input[name="name"]');
    var telefonoInput = document.querySelector('input[name="phone"]');
    var emailInput = document.querySelector('input[name="email"]');
    var mensajeTextarea = document.querySelector('textarea[name="message"]');

    var nombre = nombreInput.value;
    var telefono = telefonoInput.value;
    var email = emailInput.value;
    var mensaje = mensajeTextarea.value;

    if (nombre === "" && telefono === "" && email === "" && mensaje === "") {
        nombreInput.style.border = "1px solid red";
        telefonoInput.style.border = "1px solid red";
        emailInput.style.border = "1px solid red";
        mensajeTextarea.style.border = "1px solid red";
        mensajeError.innerHTML = "<p>Por favor, rellena los datos</p>";
    }
    if (nombre !== "" && telefono !== "" && email !== "" && mensaje !== "") {
        nombreInput.style.border = "0";
        telefonoInput.style.border = "0";
        emailInput.style.border = "0";
        mensajeTextarea.style.border = "0";
        mensajeError.innerHTML = "";
        mensajeEnviado.innerHTML = "<p>Hemos recibido tus datos, muchacha ojos de papel...</p><i class='las la-guitar la-3x'></i>";
        mensajeEnviado.style.display = "flex";
        mensajeEnviado.style.flexDirection = "column";
        mensajeEnviado.style.justifyContent = "center";
        mensajeEnviado.style.position = "absolute";
        mensajeEnviado.style.top = "200px";
        mensajeEnviado.style.left = "380px";
        mensajeEnviado.style.textAlign = "center";
        mensajeEnviado.style.padding = "50px";
        fondoOscuro.style.display = "block";
        document.body.style.overflow = "hidden";
        mensajeEnviado.style.alignItems = "center";

        audioMensaje.play();

        setTimeout(() => { /* Retrasa la ejecución de un fragmento de código */
            nombreInput.value = "";
            telefonoInput.value = "";
            emailInput.value = "";
            mensajeTextarea.value = "";

            mensajeComprobación.style.display = "none";
            document.body.style.overflow = "auto";
            fondoOscuro.style.display="none";
        }, 4000); /* Oculta el mensaje después de 4 segundos */
    }
});