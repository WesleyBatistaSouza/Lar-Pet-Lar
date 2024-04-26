import Animal from '../model/Pet.js';

const pets = JSON.parse(localStorage.getItem('pets')) || [];

function pet(name, gender, weight, cub, castrated) {

    const animal = new Animal(name, gender, weight, cub, castrated);
    pets.push(animal);
}