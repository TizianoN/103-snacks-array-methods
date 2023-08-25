// * Crea un array di oggetti che rappresentano delle persone.
// * Ogni persona ha un nome, un cognome e un’età.
const people = [
  {
    name: 'Mario',
    surname: 'Rossi',
    age: 15,
  },
  {
    name: 'Arianna',
    surname: 'Bianchi',
    age: 22,
  },
  {
    name: 'Giuseppe',
    surname: 'Verdi',
    age: 19,
  },
  {
    name: 'Federica',
    surname: 'Siena',
    age: 17,
  },
];

// * Crea quindi un nuovo array
const driverPeople = people.map((person) => {
  // * Creo un nuovo oggetto persona (per non modificare l'originale)
  // * con l'indicazione del "se può guidare"
  const driverPerson = {
    name: person.name,
    surname: person.surname,
    age: person.age,
    driver: person.age >= 18 ? '👌' : '🔞',
  };

  // * la ritorno
  return driverPerson;
});

console.log(driverPeople);
