//esto es para la barra de busqueda y de colocar nombres
const searchInput = document.getElementById('searchC');
const keyMessage = document.getElementById('result');
const charCounter = document.getElementById('counterL');
const maxLength = 50; // Máximo de caracteres permitidos


// Contador de caracteres, ejercicio 3 parte 1
searchInput.addEventListener('input', function() {
    const currentLength = this.value.length;
    charCounter.textContent = `${currentLength}/${maxLength}`;
    
    // Cambiar color si se acerca al límite de 50
    if (currentLength > maxLength * 0.8) {
        charCounter.style.color = '#e74c3c';
    } else {
        charCounter.style.color = '#7f8c8d';
    }
    
    // Limitar caracteres 
    if (currentLength > maxLength) {
        this.value = this.value.substring(0, maxLength);
    }
});
//Mostrar la tecla que se usa, ejercicio 1 parte 2
searchInput.addEventListener('keydown', (e) => {
    // Mostrar mensaje de tecla presionada
    keyMessage.textContent = `Tecla presionada: ${e.key}`;
    keyMessage.classList.add('show-message');
    
    // Ocultar mensaje después de 2 segundos
    setTimeout(() => {
        keyMessage.classList.remove('show-message');
    }, 2000);
    
    // muestra el código de la tecla
    if (e.key.length > 1) {
        keyMessage.textContent = `Tecla especial: ${e.key}`;
    }
});

// Efecto para la barra de búsqueda, ejercicio 2 parte 2
searchInput.addEventListener('focus', () => {
    searchInput.placeholder = " ";
});

searchInput.addEventListener('blur', () => {
    searchInput.placeholder = "Buscador";
});
// Efecto para el menú desplegable, ejercicio 4 parte 2
const filtro = document.getElementById('filtro');
const result2 = document.getElementById('result2');

filtro.addEventListener('change', () => {
    const selectedOption = filtro.options[filtro.selectedIndex].text;//esto es para mostrar el texto de la opcion seleccionada
    
    if (filtro.value === "todas") {//esto es para mostrar todas las peliculas
        result2.textContent = "Se ha seleccionado: Todas las películas";
    } else {
        result2.textContent = `Se ha seleccionado: ${selectedOption}`;//esto es para mostrar la pelicula seleccionada
    }

    result2.classList.add('show-message');//esto es para mostrar el mensaje

    // Ocultar el mensaje después de unos segundos
    setTimeout(() => {
        result2.classList.remove('show-message');
    }, 4000);
});

// Se creo un pequeño array de personajes para hacer la busqueda
const personajesGhibli = [
    { nombre: "Totoro", pelicula: "Mi Vecino Totoro" },
    { nombre: "Chihiro", pelicula: "El Viaje de Chihiro" },
    { nombre: "Sophie", pelicula: "El Castillo Ambulante" },
    { nombre: "Ashitaka", pelicula: "La Princesa Mononoke" },
    { nombre: "Kiki", pelicula: "El Servicio de Entregas de Kiki" },
    { nombre: "Porco Rosso", pelicula: "Porco Rosso" },
    { nombre: "Nausicaä", pelicula: "Nausicaä del Valle del Viento" },
    { nombre: "Ponyo", pelicula: "Ponyo en el Acantilado" },
    { nombre: "San", pelicula: "La Princesa Mononoke" },
    { nombre: "Haku", pelicula: "El Viaje de Chihiro" },
    { nombre: "Calcifer", pelicula: "El Castillo Ambulante" },
    { nombre: "No-Face", pelicula: "El Viaje de Chihiro" },
    { nombre: "Satsuki", pelicula: "Mi Vecino Totoro" },
    { nombre: "Mei", pelicula: "Mi Vecino Totoro" },
    { nombre: "Shizuku", pelicula: "Susurros del Corazón" },
    { nombre: "Gigi", pelicula: "El Servicio de Entregas de Kiki" },
    { nombre: "Yubaba", pelicula: "El Viaje de Chihiro" },
    { nombre: "Jiji", pelicula: "El Servicio de Entregas de Kiki" },
    { nombre: "Ashitaka", pelicula: "La Princesa Mononoke" },
    { nombre: "Kiki", pelicula: "El Servicio de Entregas de Kiki" },
    { nombre: "Porco Rosso", pelicula: "Porco Rosso" },
    { nombre: "Nausicaä", pelicula: "Nausicaä del Valle del Viento" },
    { nombre: "Pazu", pelicula: "El Castillo en el Cielo" },
    { nombre: "Sheeta", pelicula: "El Castillo en el Cielo" }
];

//aca se hace la busqueda de los personajes, ejercicio 5 parte 2
searchInput.addEventListener('keyup', function(e) {
    clearTimeout(this.searchTimer);
    
    const termino = this.value.trim();
    if (termino.length === 0) {
        keyMessage.textContent = '';
        return;
    }
    
    this.searchTimer = setTimeout(() => {
        const resultados = personajesGhibli.filter(personaje =>
            personaje.nombre.toLowerCase().includes(termino.toLowerCase())
        );//esto es para filtrar los resultados
        setTimeout(() => {
        keyMessage.classList.remove('show-message');
    }, 10000);//esto es para que el mensaje dure mas tiempo
        
        if (resultados.length > 0) {//en caso de que haya resultados
            keyMessage.innerHTML = `
                <strong>Resultados para "${termino}":</strong><br>
                ${resultados.map(p => `${p.nombre} - ${p.pelicula}`).join('<br>')}`;//esto es para mostrar los resultados
        } else {//en caso de que no haya resultados
            keyMessage.textContent = `No se encontraron personajes con "${termino}"`;
        }
        // Mostrar mensaje de búsqueda
        keyMessage.classList.add('show-message');
    }, 50);// Espera de 50ms antes de realizar la búsqueda
});


