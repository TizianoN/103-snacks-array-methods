// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
const cars = [
  {
    marca: 'Ford',
    modello: 'Fiesta',
    alimentazione: 'Benzina',
  },

  {
    marca: 'Renault',
    modello: 'Clio',
    alimentazione: 'Diesel',
  },

  {
    marca: 'Ford',
    modello: 'Fiesta',
    alimentazione: 'GPL',
  },

  {
    marca: 'Renault',
    modello: 'Clio',
    alimentazione: 'Elettrico',
  },

  {
    marca: 'Ford',
    modello: 'Fiesta',
    alimentazione: 'Metano',
  },

  {
    marca: 'Ford',
    modello: 'Fiesta',
    alimentazione: 'Benzina',
  },

  {
    marca: 'Renault',
    modello: 'Clio',
    alimentazione: 'Diesel & Elettrico',
  },

  {
    marca: 'Ford',
    modello: 'Fiesta',
    alimentazione: 'GPL',
  },

  {
    marca: 'Renault',
    modello: 'Clio',
    alimentazione: 'Elettrico',
  },

  {
    marca: 'Ford',
    modello: 'Fiesta',
    alimentazione: 'Metano',
  },
];

// Dividi le automobili in 3 array separati:
// nel primo array solo le auto a benzina,
const benzCars = cars.filter((car) => car.alimentazione == 'Benzina');

// nel secondo solo le auto a diesel,
const dieselCars = cars.filter((car) => car.alimentazione == 'Diesel');

// nel terzo il resto delle auto.
const othersCars = cars.filter(
  (car) => car.alimentazione != 'Diesel' && car.alimentazione != 'Benzina'
);

// Infine stampa separatamente i 3 array.
console.log(benzCars);
console.log(dieselCars);
console.log(othersCars);
