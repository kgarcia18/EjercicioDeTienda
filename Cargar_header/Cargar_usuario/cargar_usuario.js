export function cargarSesion() {
    const modalHTML = `
        <div id="loginModal" class="modal1">
            <div class="modal-content1">
                <span class="close">&times;</span>
                <h2>Inicion de Sesion</h2>
                <form class="login-form" id="login-form">
                    <input type="text" id="username" placeholder="Username" required>
                    <input type="email" id="email" placeholder="Email" required>
                    <div class="password-container">
                        <input type="password" id="password" placeholder="Password" required>
                        <span id="togglePassword" class="toggle-password">👁️</span>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div id="login-message"></div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('loginModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.onclick = function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🙈';
    };

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(users => {
                const user = users.find(user => user.username === username && user.email === email && user.password === password);
                if (user) {
                    document.getElementById('login-message').textContent = 'Login successful!';
                    document.getElementById('login-message').style.color = 'green';

                    const sesionIcon = document.querySelector('.sesion img');
                    sesionIcon.src = 'https://github.com/kgarcia18/img/blob/main/img/sesion_iniciada.png?raw=true';
                    sesionIcon.alt = 'Sesión Iniciada';

                    setTimeout(() => { modal.style.display = "none"; }, 2000);
                } else {
                    document.getElementById('login-message').textContent = 'Invalid credentials, please try again.';
                    document.getElementById('login-message').style.color = 'red';
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                document.getElementById('login-message').textContent = 'An error occurred, please try again later.';
                document.getElementById('login-message').style.color = 'red';
            });
    });
}

export function mostrarModalSesion() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = "block";
    }
}
