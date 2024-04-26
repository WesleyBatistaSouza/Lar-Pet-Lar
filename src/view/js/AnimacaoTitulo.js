const titulo = document.getElementById("");
const texto = "Lar Pet Lar"; // O texto que você deseja "digitar"
let indice = 0;

function digitar() {
  if (indice < texto.length) {
    titulo.textContent += texto.charAt(indice);
    indice++;
    setTimeout(digitar, 100); // Ajuste o intervalo conforme desejado
  }
}

digitar(); // Inicie a animação