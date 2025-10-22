const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

// Metodo for
console.log('Metodo for')

const namesAuthors = []

for (let i = 0; i < posts.length; i++) {
  const thisPost = posts[i]
  namesAuthors.push(thisPost.author)
}

console.log(namesAuthors)

// Metodo forEach
console.log('Metodo forEach')

const namesForEachAuthors = []

posts.forEach((thisPost) => {
  namesForEachAuthors.push(thisPost.author)
})

console.log(namesForEachAuthors)

// Metodo map
console.log('Metodo map')

const namesMapAuthors = posts.map((thisPost) => {
  return thisPost.author
})

console.log(namesMapAuthors)

// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']