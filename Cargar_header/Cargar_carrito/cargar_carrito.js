async function Cargar_carrito(id_carrito){
    try{
        const respuesta = await fetch(`https://fakestoreapi.com/carts/${id_carrito}`);
        const datos = await respuesta.json();
        return datos;
    }catch{
        console.log("Error de la api");
        return [];
    }
}
function itemProducto(img, precio) {
    const div_item_cart = document.createElement('div');
    div_item_cart.className = "item-cart";
    
    const caja_img = document.createElement('div');
    caja_img.classList = "caja_img";
    const imagen_cart = document.createElement('img');
    imagen_cart.src = img;
    caja_img.appendChild(imagen_cart);

    const cart_precio = document.createElement('p');
    cart_precio.textContent = "Q " + precio;

    const btn_eliminar = document.createElement("div");
    btn_eliminar.classList = "btn-eliminar";
    btn_eliminar.textContent = "Eliminar";

    div_item_cart.appendChild(caja_img);
    div_item_cart.appendChild(cart_precio);
    div_item_cart.appendChild(btn_eliminar);

    return div_item_cart;
}

async function Mostrar_carrito(lista_productos) {
    try {
        const inventario = await lista_productos;
        const carrito_usuario = await Cargar_carrito(1);
        const usuario = carrito_usuario.userId;
        const fecha = carrito_usuario.date;
        const productos = carrito_usuario.products;

        const div_carrito_ventana = document.querySelector(".ventana-carrito");

        productos.forEach(element => {
            inventario.forEach((producto) => {
                if (producto.id == element.productId) {
                    div_carrito_ventana.appendChild(itemProducto(producto.image, producto.price));
                }
            });
        });

    } catch {
        console.log("error al mostrar el carro");
    }
}

export { Mostrar_carrito }