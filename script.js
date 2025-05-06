const buscador = document.getElementById('buscador');
buscador.addEventListener('input', filtrarPeliculas);

// Función para filtrar solo por nombre
function filtrarPeliculas() {
    const termino = buscador.value.toLowerCase();

    for (let i = 1; i <= 5; i++) {
        const contenedor = document.querySelector(`.box-container-${i}`);
        const cajas = contenedor.querySelectorAll(`.box-${i}`);
        let mostradas = 0;

        cajas.forEach(caja => {
            const titulo = caja.querySelector('h3').innerText.toLowerCase();
            const coincideBusqueda = titulo.includes(termino);

            if (coincideBusqueda) {
                if (mostradas < 4) {
                    caja.style.display = "inline-block";
                    mostradas++;
                } else {
                    caja.style.display = "none";
                }
            } else {
                caja.style.display = "none";
            }
        });

        // Oculta el botón al buscar
        const boton = document.getElementById(`load-more-${i}`);
        if (boton) boton.style.display = "none";
    }
}

// Funciones "Ver más"
let currentItem1 = 4;
let loadMoreBtn1 = document.querySelector('#load-more-1');
loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-1 .box-1')];
    for (let i = currentItem1; i < currentItem1 + 4; i++) {
        if (boxes[i]) boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 4;
    if (currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none';
    }
};

let currentItem2 = 4;
let loadMoreBtn2 = document.querySelector('#load-more-2');
loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-2 .box-2')];
    for (let i = currentItem2; i < currentItem2 + 4; i++) {
        if (boxes[i]) boxes[i].style.display = 'inline-block';
    }
    currentItem2 += 4;
    if (currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none';
    }
};

let currentItem3 = 4;
let loadMoreBtn3 = document.querySelector('#load-more-3');
loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-3 .box-3')];
    for (let i = currentItem3; i < currentItem3 + 4; i++) {
        if (boxes[i]) boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;
    if (currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none';
    }
};

let currentItem4 = 4;
let loadMoreBtn4 = document.querySelector('#load-more-4');
loadMoreBtn4.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-4 .box-4')];
    for (let i = currentItem4; i < currentItem4 + 4; i++) {
        if (boxes[i]) boxes[i].style.display = 'inline-block';
    }
    currentItem4 += 4;
    if (currentItem4 >= boxes.length) {
        loadMoreBtn4.style.display = 'none';
    }
};

let currentItem5 = 4;
let loadMoreBtn5 = document.querySelector('#load-more-5');
loadMoreBtn5.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-5 .box-5')];
    for (let i = currentItem5; i < currentItem5 + 4; i++) {
        if (boxes[i]) boxes[i].style.display = 'inline-block';
    }
    currentItem5 += 4;
    if (currentItem5 >= boxes.length) {
        loadMoreBtn5.style.display = 'none';
    }
};

// Mostrar solo 4 al inicio
function mostrarInicialmente() {
    for (let i = 1; i <= 5; i++) {
        const contenedor = document.querySelector(`.box-container-${i}`);
        const cajas = contenedor.querySelectorAll(`.box-${i}`);
        const boton = document.getElementById(`load-more-${i}`);

        cajas.forEach((caja, index) => {
            caja.style.display = index < 4 ? "inline-block" : "none";
        });

        if (boton && cajas.length > 4) {
            boton.style.display = "inline-block";
        }
    }
}

mostrarInicialmente();
