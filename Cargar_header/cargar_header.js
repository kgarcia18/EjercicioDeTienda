import { inicializarCarritoModal } from "./Cargar_carrito/cargar_carrito.js";

function Cargar_header() {
    let header = document.querySelector("header");

    header.innerHTML = `
        <div class="logo"><img src="https://github.com/kgarcia18/img/blob/main/img/tienda.png?raw=true" alt=""></div>
        <div class="busqueda"><input type="text" placeholder="Buscar... " id="search-box"></div>
        <div class="carrito">
            🛒
            <!-- Modal -->
            <div id="carritoModal" class="modal">
                <div class="modal-content">
                    <h4>Compras...</h4>
                    <div id="carritoItems"></div>
                </div>
            </div>
        </div>
        <div class="sesion"><img src="https://github.com/kgarcia18/img/blob/main/img/sesion1.png?raw=true" alt=""></div>
    `;

    inicializarCarritoModal();
}

export { Cargar_header };
