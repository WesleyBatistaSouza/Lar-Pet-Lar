// login

// validade login


const formLogin = document.getElementById('loginForm');

formLogin.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
    
    if (passwordInput.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }
    
    alert('Login bem sucedido!');

    setTimeout(() => {
       window.location.href = '/index.html';
}, 1000); 
});
