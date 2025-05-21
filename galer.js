//filtrar imagenes por categoría
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el menú desplegable
    const filtroSelect = document.getElementById('filtro');
    
    // Seleccionar todas las imágenes
    const images = document.querySelectorAll('.imag');

    // Agregar evento de cambio al menú desplegable
    filtroSelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        
        // Filtrar imágenes
        images.forEach(image => {
            const imageCategory = image.getAttribute('data-category');
            
            if (selectedCategory === 'todas' || imageCategory === selectedCategory) {
                image.style.display = 'block'; // Mostrar imagen
            } else {
                image.style.display = 'none'; // Ocultar imagen
            }
        });
    });
});
 // Seleccionar el contenedor de la galería
    const galeria = document.getElementById('galeria');

    // Obtener todas las imágenes como un array
    const imagenes = Array.from(galeria.querySelectorAll('.imag'));

    // Eliminar todas las imágenes del contenedor
    while (galeria.firstChild) {
        galeria.removeChild(galeria.firstChild);
    }

    // Función para mezclar array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Mezclar las imágenes y volver a insertarlas
    const imagenesMezcladas = shuffleArray(imagenes);
    imagenesMezcladas.forEach(imagen => {
        galeria.appendChild(imagen);
    });

   // Protección para todas las imágenes de la galería,ejercicio 3 parte 2
document.querySelectorAll('.imag img').forEach(img => {
    // Bloquear click derecho
    img.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        // Crear mensaje flotante de advertencia
        const tooltip = document.createElement('div');
        tooltip.className = 'protection-tooltip';
        tooltip.textContent = 'Imagen protegida';
        document.body.appendChild(tooltip);
        
        // el mensaje sale donde este el click
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY - 30}px`;
        // Eliminar después de 1 segundo
        setTimeout(() => tooltip.remove(), 1000);
    });
    
    // en el video explicaban como bloquear arrastre
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});