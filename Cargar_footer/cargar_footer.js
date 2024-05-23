function Cargar_footer(){
    let footer = document.querySelector("footer");

    footer.innerHTML = `
        <div class="info">
            <p>Kathy Garcia</p>
            <p>V Bachillerato en Computación</p>
        </div>
        <div class="contactos">
            <p class="correo">Kgarcia@scl.edu.gt</p>
            <p>+502 37594832</p>
        </div>
        <div class="redes_sociales">
            <img src="https://github.com/kgarcia18/img/blob/main/img/redes_sociales.jpg?raw=true" alt="">
        </div>
    `;
}

export{Cargar_footer}