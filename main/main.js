    import { Cargar_productos } from "/Cargar_productos/cargar_productos.js";
    import { Cargar_categorias } from "/Cargar_categorias/cargar_categorias.js";

    let DOM = document.querySelector("#root");
    
    DOM.innerHTML = `
        <header>
          <div class="imagen">
            icono
          </div>
          <div class="btn">🛒</div>
        </header>
        <main class="body">
            <section id="div_product_list"></section>
            <section id="div_summery_description"></section>
        </main>
        <footer></footer>
    `;


async function obtenerProductos() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      Cargar_productos(data);
    } catch (error) {
      console.log("Error al obtener los productos:", error);
    }
}

obtenerProductos();

Cargar_categorias();