//1
document.querySelector('.button-class').addEventListener('click', function() {
    const images = [
        'img/uno.jpg',
        'img/dos.jpg',
        'img/tres.jpg'
        // Agrega más imágenes si necesitas
    ];
    
    const currentImg = document.getElementById('nabo').src;
    let newImg;
    
    // Buscar una imagen diferente
    do {
        const randomIndex = Math.floor(Math.random() * images.length);
        newImg = images[randomIndex];
    } while (newImg === currentImg && images.length > 1);
    
    document.getElementById('nabo').src = newImg;
});
//Ejemplo 2 
const card = document.getElementById('card2');
const msgHover = document.getElementById('msgHover');
card.addEventListener('mouseover', function() {
    msgHover.textContent = 'Este es Totoro';
    msgHover.style.opacity = 1;
    msgHover.style.transition = 'opacity 0.5s';
});
card.addEventListener('mouseout', function() {
    msgHover.textContent = '';
    msgHover.style.opacity = 0;
    msgHover.style.transition = 'opacity 0.5s';
});
//Ejercicio 5
card.addEventListener("dblclick", function() {
    const isExpanded = card.style.width === "400px";
    card.style.width = isExpanded ? "300px" : "400px";
    card.style.height = isExpanded ? "400px" : "300px";

});
//Ejercicio 4 parte 2
const hoverImages = document.querySelectorAll('.gif-hover');

hoverImages.forEach(img => {
    let originalSrc = img.src;
    let gifSrc = img.dataset.gif;
    
    // Precargar el GIF
    const preload = new Image();
    preload.src = gifSrc;
    
    img.addEventListener('mouseenter', () => {
        img.style.transition = 'opacity 0.5s';
        img.src = gifSrc;
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transition = 'opacity 0.5s';
        img.src = originalSrc;
    });
});



