const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi

// Semplice console.log
console.log('Semplice loggata')

console.log(names)

// Metodo for
console.log('Metodo for')

for (let i = 0; i < names.length; i++) {
    const thisName = names[i]
    console.log(thisName)
}

// Metodo forEach
console.log('Metodo forEach')

names.forEach((thisName) => {
    console.log(thisName)
})

// Risultato: 'Edoardo', 'Simone', 'Francesco'