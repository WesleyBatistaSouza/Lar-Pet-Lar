import Animal from "../../model/Pet.js";

const addPet = document.querySelector('button');
const modal = document.querySelector('.modal');
const newPet = document.getElementById('newPet');
const petList = document.getElementById('petList');

const pets = JSON.parse(localStorage.getItem('pets')) || [];

addPet.addEventListener('click', () => {
    
    const modal = document.querySelector('.modal');
    modal.classList.add('open');
})
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('open');
})

modal.addEventListener('submit', (event) => {
    event.preventDefault();

    // Pet data
    const petData = new Animal(
        document.getElementById('name_pet').value,
        document.getElementById('gender').value,
        document.getElementById('weight').value,
        document.getElementById('cub').value,
        document.getElementById('castration').value
    );
    pets.push(petData);

    // validation
    if (validatePetData(petData)) {
        // pet validation
        const name_pet = document.getElementById('name_pet').value;
        const gender = document.getElementById('gender').value;
        const weight = document.getElementById('weight').value;
        const cub = document.getElementById('cub').value;
        const castration = document.getElementById('castration').value

        if (name_pet === '' && gender === '' && weight === '' && cub === '' && castration === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }
    }
    
    modal.reset()
    exibirPet()
});

function exibirPet() {
    petList.innerHTML = '';

    pets.forEach((pet, index) => {
        const petItem = document.createElement('li');
        petItem.classList.add('infoPet');
        petItem.innerHTML = `
            <p>Nome do Pet: ${pet.name}</p>
            <p>Sexo: ${pet.gender}</p>
            <p>Peso: ${pet.weight}</p>
            <p>Número de Filhotes: ${pet.cub}</p>
            <p>Castrado? ${pet.castrated}</p>
            <button class="removeBtn" data-index="${index}">Excluir</button>
        `;
        petList.appendChild(petItem);
    });
}

function excluirPet(index) {
    pets.splice(index, 1);
    localStorage.setItem('pets', JSON.stringify(pets));
    exibirPet();
}

// Event listener para os botões de remoção
petList.addEventListener('click', (event) => {
    if (event.target.classList.contains('removeBtn')) {
        const index = event.target.dataset.index;
        excluirPet(index);
    }
});

function validatePetData(pet) {
    return Object.values(pet).every(value => value);
}

newPet.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('open');
})