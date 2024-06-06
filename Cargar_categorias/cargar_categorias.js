import { cargar_productos } from '../Cargar_productos/cargar_productos.js';

function cargar_categorias() {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(categorias => {
            imprimir_categorias(categorias);
        });
}

function imprimir_categorias(lista_categorias) {
    let div_imformacion = document.querySelector("#div_summery_description");

    lista_categorias.forEach(element => {
        let div = document.createElement("div");
        div.innerHTML = `
            <input type="checkbox" id="${element}" class="category-checkbox">
            <label for="${element}">${element}</label>
        `;
        div_imformacion.appendChild(div);
    });

    // Añadir event listeners después de agregar los checkboxes al DOM
    document.querySelectorAll('.category-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', filtrarProductosPorCategoria);
    });
}

async function filtrarProductosPorCategoria() {
    const checkboxes = document.querySelectorAll('.category-checkbox');
    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    if (selectedCategories.length === 0) {
        obtenerTodosLosProductos();
        return;
    }

    const fetchPromises = selectedCategories.map(category => 
        fetch(`https://fakestoreapi.com/products/category/${category}`).then(res => res.json())
    );

    try {
        const productsArrays = await Promise.all(fetchPromises);
        const allProducts = productsArrays.flat();  // Combina todos los arrays de productos en uno solo
        cargar_productos(allProducts);
    } catch (error) {
        console.log("Error al obtener los productos:", error);
    }
}

async function obtenerTodosLosProductos() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        cargar_productos(data);
    } catch (error) {
        console.log("Error al obtener los productos:", error);
    }
}

export { cargar_categorias };
