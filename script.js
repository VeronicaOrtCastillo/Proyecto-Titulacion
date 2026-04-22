document.querySelectorAll(".carrusel").forEach(carrusel => {
    const imagenes = carrusel.querySelectorAll("img");
    const next = carrusel.querySelector(".next");
    const prev = carrusel.querySelector(".prev");

    let index = 0;

    function mostrarImagen() {
        imagenes.forEach(img => img.classList.remove("activa"));
        if (imagenes.length > 0) {
            imagenes[index].classList.add("activa");
        }
    }

    // 👇 SI SOLO HAY UNA IMAGEN
    if (imagenes.length <= 1) {
        next.style.display = "none";
        prev.style.display = "none";
        mostrarImagen(); // 🔥 IMPORTANTE (esto faltaba)
        return;
    }

    mostrarImagen();

    next.addEventListener("click", () => {
        index = (index + 1) % imagenes.length;
        mostrarImagen();
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + imagenes.length) % imagenes.length;
        mostrarImagen();
    });
});