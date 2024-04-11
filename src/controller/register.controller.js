import Animal from '../model/Pet.js';
import User from '../model/User.js';

const forms = document.querySelector('form');

forms.addEventListener('submit', (event) => {
    event.preventDefault();

    // User data
    const userData = new User(
        document.getElementById('name').value,
        document.getElementById('telephone').value,
        document.getElementById('email').value,
        document.getElementById('address').value,
        document.getElementById('password').value
    );

    // Pet data
    const petData = new Animal(
        document.getElementById('name_pet').value,
        document.getElementById('gender').value,
        document.getElementById('weight').value,
        document.getElementById('cub').value,
        document.getElementById('castration').value
    );

   

    // validation
    if (validateUserData(userData) && validatePetData(petData)) {
        // user and pet validation
        const name = document.getElementById('name').value;
        const telephone =  document.getElementById('telephone').value;
        const email =  document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const password = document.getElementById('password').value;
        const name_pet = document.getElementById('name_pet').value;
        const gender = document.getElementById('gender').value;
        const weight = document.getElementById('weight').value;
        const cub = document.getElementById('cub').value;
        const castration = document.getElementById('castration').value

        if (name === '' && telephone === '' && email === '' && address === '' && password === '' && name_pet === '' && gender === '' && weight === '' && cub === '' && castration === '') {
            alert('Por favor, preencha todos os campos.');
        }
      

        alert('successfully!');
        
        window.location.href = '/index.html';
    }
});

function validateUserData(userData) {
   
    for (let key in userData) {
        if (!userData[key]) {
            return false; 
        }
    }
    return true;
}


function validatePetData(petData) {
    for (let key in petData) {
        if (!petData[key]) {
            return false; 
        }
    }
    return true;
}
