// RECORRE TODOS LOS CARRUSELES
document.querySelectorAll(".carrusel").forEach(carrusel => {

    // OBTIENE ELEMENTOS
    const imagenes = carrusel.querySelectorAll("img");
    const next = carrusel.querySelector(".next");
    const prev = carrusel.querySelector(".prev");
    const indicadores = carrusel.querySelector(".indicadores");

    let index = 0;

    // 🔵 CREAR PUNTITOS DINÁMICAMENTE
    imagenes.forEach((_, i) => {
        const punto = document.createElement("span");

        // EVENTO PARA IR A ESA IMAGEN
        punto.addEventListener("click", () => {
            index = i;
            mostrarImagen();
        });

        indicadores.appendChild(punto);
    });

    const puntos = indicadores.querySelectorAll("span");

    // FUNCIÓN PARA MOSTRAR IMAGEN
    function mostrarImagen() {

        // OCULTAR TODAS
        imagenes.forEach(img => img.classList.remove("activa"));
        puntos.forEach(p => p.classList.remove("activo"));

        // MOSTRAR ACTUAL
        imagenes[index].classList.add("activa");
        puntos[index].classList.add("activo");
    }

    // SI SOLO HAY UNA IMAGEN
    if (imagenes.length <= 1) {
        next.style.display = "none";
        prev.style.display = "none";
    }

    // BOTÓN SIGUIENTE
    next.addEventListener("click", () => {
        index = (index + 1) % imagenes.length;
        mostrarImagen();
    });

    // BOTÓN ANTERIOR
    prev.addEventListener("click", () => {
        index = (index - 1 + imagenes.length) % imagenes.length;
        mostrarImagen();
    });

    // INICIAL
    mostrarImagen();
});
