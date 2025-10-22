const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2

// Metodo for
console.log('Metodo for')

for (let i = 0; i < students.length; i++) {
  const thisStudent = students[i]

  if (thisStudent.id === 2) {
    console.log(thisStudent)
    i = students.length
  }
}

// Metodo find
console.log('Metodo find')

const findStudent = students.find((thisStudent) => thisStudent.id === 2)

console.log(findStudent)

// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }