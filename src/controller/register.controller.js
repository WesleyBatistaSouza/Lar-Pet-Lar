import Animal from '../model/Pet.js';
import User from '../model/User.js';

const forms = document.querySelector('form');

const storageUser = JSON.parse(localStorage.getItem('pets')) || [];

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
            const passwordRepeat = document.getElementById('passwordRepeat').value;
            const name_pet = document.getElementById('name_pet').value;
            const gender = document.getElementById('gender').value;
            const weight = document.getElementById('weight').value;
            const cub = document.getElementById('cub').value;
            const castration = document.getElementById('castration').value

            // validate information user and pet
    
            if (name === '' && telephone === '' && email === '' && address === '' && password === '' && passwordRepeat === '' && name_pet === '' && gender === '' && weight === '' && cub === '' && castration === '') {
                alert('Por favor, preencha todos os campos.');
            } else if (password != passwordRepeat) {
                alert('as senhas não coincidem')
                return;
            } else {
                alert('successfully!');
            }

            setTimeout(() => {
                `${window.location.href = '/index.html'}`
            }, 1000);
        }


        saveUser();
    });


export default function validateUserData(userData) {
   
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

export function saveUser(password, email) {
    localStorage.setItem('storageUser', JSON.stringify(storageUser));
    storageUser.push({password, email})
}