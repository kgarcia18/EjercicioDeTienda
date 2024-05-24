async function Cargar_carrito() {
    try {
        // Fetch product data from API
        let respuesta = await fetch('https://fakestoreapi.com/products?limit=2');
        let datos = await respuesta.json();

        // Select the container for the cart items
        let carritoItems = document.getElementById("carritoItems");
        
        // Clear current content
        carritoItems.innerHTML = '';    

        // Create and append items to the container
        datos.forEach(item => {
            let itemDiv = document.createElement('div');
            itemDiv.className = "carrito-item";
            // Use template literals for the inner HTML of the item div
            itemDiv.innerHTML = `
                <div class="box_img1">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="caja_descri1">
                    <span class="name1">${item.title}</span>
                    <span class="price">Q${item.price}</span>
                    <div class="eliminar">Eliminar</div>
                </div>
            `;
            carritoItems.appendChild(itemDiv);
        });

        console.log("Datos cargados correctamente en el carrito");
    } catch (error) {
        console.log("Error al cargar el carrito:", error);
    }
}

function inicializarCarritoModal() {
    // Get the modal element
    let modal = document.getElementById("carritoModal");

    // Show the modal when the mouse enters the cart icon
    document.querySelector(".carrito").addEventListener("mouseenter", function() {
        Cargar_carrito();  // Load cart content
        modal.style.display = "block";
    });

    // Hide the modal when the mouse leaves the cart icon
    document.querySelector(".carrito").addEventListener("mouseleave", function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Event listener for delete button
    modal.addEventListener("click", function(event) {
        if (event.target && event.target.classList.contains("eliminar")) {
            event.target.closest(".carrito-item").remove(); // Remove the item's container
        }
    });
}

export { Cargar_carrito, inicializarCarritoModal };
