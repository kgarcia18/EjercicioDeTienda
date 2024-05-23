import { Mostrar_carrito } from "./Cargar_carrito/cargar_carrito.js";

function Cargar_header(lista_productos,usuario){
    let header = document.querySelector("header");

    header.innerHTML = `
        <div class="logo"><img src="https://github.com/kgarcia18/img/blob/main/img/tienda.png?raw=true" alt=""></div>
        <div class="busqueda"><input type="text" placeholder="Buscar... " id="search-box"></div>
        <div class="carrito">
            🛒
            <div class="ventana_carrito"></div>
        </div>
        <div class="sesion"><img src="https://github.com/kgarcia18/img/blob/main/img/sesion1.png?raw=true" alt=""></div>
    `;
    Mostrar_carrito(lista_productos);
}

export{Cargar_header}