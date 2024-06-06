import { cargar_productos } from "../Cargar_productos/cargar_productos.js";
import { cargar_categorias } from "../Cargar_categorias/cargar_categorias.js";
import { Cargar_header } from "../Cargar_header/cargar_header.js";
import { Cargar_footer } from "../Cargar_footer/cargar_footer.js";

let DOM = document.querySelector("#root");

DOM.innerHTML = `
    <header></header>
    <div class="body">
        <section id="div_summery_description"><p>CATEGORIAS</p></section>
        <section id="div_product_list"></section>
    </div>
    <footer></footer>
`;

async function obtenerProductos() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        cargar_productos(data);
    } catch (error) {
        console.log("Error al obtener los productos:", error);
    }
}

obtenerProductos();
cargar_categorias();
Cargar_header();
Cargar_footer();