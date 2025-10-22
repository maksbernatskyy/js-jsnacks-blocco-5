const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

console.log(people)

// Stampa in console tutti i nomi

// Metodo for
console.log('Metodo for')

for (let i = 0; i < people.length; i++){
  const thisPerson = people[i]
  console.log(thisPerson.name)
}

// Metodo forEach
console.log('Metodo forEach')

people.forEach((thisPerson) => {
  console.log(thisPerson.name)
})

// Risultato: 'Paolo', 'Giulia', 'Marco'