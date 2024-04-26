// login
const formMessage = document.getElementById('formMessage');

formMessage.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameUser = document.getElementById('nome').value;
    const emailUser = document.getElementById('email').value;
    const messageUser = document.getElementById('mensagem').value;

    if(nameUser.trim() === ''|| emailUser.trim() === '' || messageUser.trim() === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    } 

    const messageData = {
        nameUser: nameUser,
        emailUser: emailUser,
        messageUser: messageUser
    };
    console.log(messageData)
});