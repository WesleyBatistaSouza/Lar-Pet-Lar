// login

const formLogin = document.getElementById('loginForm');
console.log(formLogin)


formLogin.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
    
    if (passwordInput.value.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }
    
    alert('Login bem sucedido!');

    window.location.href = '/index.html';
   setTimeout(() => {
}, 1000); 
});