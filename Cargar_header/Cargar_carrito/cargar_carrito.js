function inicializarCarritoModal() {
    const carritoModal = document.createElement('div');
    carritoModal.id = 'carritoModal';
    carritoModal.classList.add('modal');

    carritoModal.innerHTML = `
        <div class="modal-content">
        <span id="cerrarCarrito" class="close">&times;</span>
            <h2>Comprar Productos</h2>
            <div id="carritoContent"></div>
        </div>
    `;

    document.body.appendChild(carritoModal);

    document.getElementById('cerrarCarrito').addEventListener('click', () => {
        carritoModal.style.display = 'none';
    });
}

function mostrarModalCarrito() {
    const carritoModal = document.getElementById('carritoModal');
    fetch('https://fakestoreapi.com/products?limit=2')
        .then(res => res.json())
        .then(products => {
            const carritoContent = document.getElementById('carritoContent');
            carritoContent.innerHTML = ''; // Clear previous content
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('producto');

                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;

                const title = document.createElement('h3');
                title.innerText = product.title;

                const price = document.createElement('p');
                price.innerText = `Q${product.price}`;

                const deleteButton = document.createElement('button');
                deleteButton.innerText = 'Eliminar';
                deleteButton.addEventListener('click', () => {
                    productDiv.remove();
                });

                productDiv.appendChild(img);
                productDiv.appendChild(title);
                productDiv.appendChild(price);
                productDiv.appendChild(deleteButton);

                carritoContent.appendChild(productDiv);
            });

            carritoModal.style.display = 'block'; // Show the modal
        });
}

export { inicializarCarritoModal, mostrarModalCarrito };
