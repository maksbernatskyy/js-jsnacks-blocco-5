const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

// Metodo for
console.log('Metodo for')

const evenNums = []
console.log(evenNums)

for (let i = 0; i < nums.length; i++) {
    const thisNumber = nums[i]

    if (thisNumber % 2 === 0) {
        evenNums.push(thisNumber)
    }
}

// Metodo forEach
console.log('Metodo forEach')

const evenForEachNums = []
console.log(evenForEachNums)

nums.forEach((thisNumber) => {
    if (thisNumber % 2 === 0) {
        evenForEachNums.push(thisNumber)
    }
})

// Metodo filter
console.log('Metodo filter')

const evenFilterNums = nums.filter((thisNumber) => thisNumber % 2 === 0)

console.log(evenFilterNums)

// Risultato: [2, 8, 4, 12]