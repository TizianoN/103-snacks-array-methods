// A partire da un array di stringhe,
const names = ['pippo', 'PLUTO', 'Paperino'];

// crea un secondo array formattando le stringhe del primo array
const newNames = names.map((name) => {
  // in minuscolo e con l’iniziale maiuscola.
  const firstChar = name.charAt(0).toUpperCase();
  const otherChars = name.substring(1).toLowerCase();
  return firstChar + otherChars;
});

console.log(names);
console.log(newNames);
