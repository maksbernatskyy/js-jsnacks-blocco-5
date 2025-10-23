const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

// Metodo for
console.log('Metodo for')

const numIncrement = []
console.log(numIncrement)

for (let i = 0; i < numbers.length; i++) {
    const thisNumber = numbers[i] + 1
    numIncrement.push(thisNumber)
}

// Metodo forEach
console.log('Metodo forEach')

const numForEachIncrement = []
console.log(numForEachIncrement)

numbers.forEach((thisNumber) => {
    thisNumberPlusOne = thisNumber + 1
    numForEachIncrement.push(thisNumberPlusOne)
})

// Risultato: [3, 9, 5, 8, 3, 88]