function cargar_productos(products_list) {
    let div_product_list = document.querySelector("#div_product_list");
    div_product_list.innerHTML = '';  // Limpiar la lista de productos antes de cargar nuevos

    products_list.forEach(product => {
        let div = document.createElement("div");
        div.classList = "item_product";

        let short_text = product.title.split(' ').slice(0, 5).join(' ');

        div.innerHTML = `
            <div class="box_img">
                <img src="${product.image}" alt="">
            </div>
            <div class="box_description">
                <span class="name">${short_text}</span>
                <span class="price">Q ${product.price}</span>
                <div class="buy_btn">Comprar! 🛒</div>
            </div>
        `;
        div_product_list.appendChild(div);
    });
}

export { cargar_productos };
