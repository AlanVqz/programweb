// Función para limpiar una frase de caracteres no alfanuméricos, eliminar tildes y convertirla a minúsculas.
function cleanPhrase(phrase) {
  // Normalizar la frase eliminando acentos y otros caracteres diacríticos
  const normalizedPhrase = phrase.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
  // Remover caracteres no alfanuméricos y convertir a minúsculas
  return normalizedPhrase.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Función para verificar si una frase es un palíndromo.
function checkPalindrome() {
  const phraseInput = document.getElementById('phrase').value;
  const cleanedPhrase = cleanPhrase(phraseInput);
  const reversedPhrase = cleanedPhrase.split('').reverse().join('');
  const resultElement = document.getElementById('result');

  if (cleanedPhrase === reversedPhrase) {
      resultElement.textContent = "La frase es un palíndromo.";
      resultElement.style.color = "green";
  } else {
      resultElement.textContent = "La frase no es un palíndromo.";
      resultElement.style.color = "red";
  }
}
