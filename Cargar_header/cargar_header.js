import { inicializarCarritoModal, mostrarModalCarrito } from "./Cargar_carrito/cargar_carrito.js"; // Agrega la importación de mostrarModalCarrito
import { cargarSesion, mostrarModalSesion } from "./Cargar_usuario/cargar_usuario.js";

function Cargar_header() {
    let header = document.querySelector("header");

    header.innerHTML = `
        <div class="logo"><img src="https://github.com/kgarcia18/img/blob/main/img/tienda.png?raw=true" alt=""></div>
        <div class="busqueda"><input type="text" placeholder="🔎 Buscar... " id="search-box"></div>
        <div class="carrito">🛒</div>
        <div class="sesion"><img src="https://github.com/kgarcia18/img/blob/main/img/sesion1.png?raw=true" alt=""></div>
    `;
    inicializarCarritoModal();

    const sesionButton = document.querySelector('.sesion');
    sesionButton.addEventListener('click', mostrarModalSesion);

    const carritoButton = document.querySelector('.carrito');
    carritoButton.addEventListener('click', mostrarModalCarrito);

    // Cargar el modal de inicio de sesión al cargar la página
    cargarSesion();
}

document.addEventListener('DOMContentLoaded', Cargar_header);

export { Cargar_header };
