// Espera que la página cargue completamente
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-fade");
  // Agrupa todos los elementos con clase .scroll-fade

  // Función para detectar si un elemento está visible en el viewport
  function handleScroll() {
    scrollElements.forEach((el) => {
      const rect = el.getBoundingClientRect(); // Obtener la posición del elemento

      // Si el elemento está parcialmente dentro del viewport
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        el.classList.add("visible"); // Añadir la clase visible para que se desvanezca
      } else {
        el.classList.remove("visible"); // Eliminar la clase visible si ya no está en el viewport
      }
    });
  }

  // Ejecutar la función cada vez que el usuario haga scroll
  window.addEventListener("scroll", handleScroll);

  // Ejecutar la función cuando la página se carga por primera vez
  handleScroll();
});
