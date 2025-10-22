const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// Metodo for
console.log('Metodo for')

const longerZucchine = []
console.log(longerZucchine)

const shorterZucchine = []
console.log(shorterZucchine)

for (let i = 0; i < zucchine.length; i++) {
  const thisZucchina = zucchine[i]

  if (thisZucchina.length > 15) {
    longerZucchine.push(thisZucchina)

  } else {
    shorterZucchine.push(thisZucchina)
  }
}

// Metodo forEach
console.log('Metodo forEach')

const longerForEachZucchine = []
console.log(longerForEachZucchine)

const shorterForEachZucchine = []
console.log(shorterForEachZucchine)

zucchine.forEach((thisZucchina) => {
  if (thisZucchina.length > 15) {
    longerForEachZucchine.push(thisZucchina)

  } else {
    shorterForEachZucchine.push(thisZucchina)
  }
})

// Metodo filter
console.log('Metodo filter')

const longerFilterZucchine = zucchine.filter((thisZucchina) => {
  if (thisZucchina.length > 15) {
    return true
  }
})

console.log(longerFilterZucchine)

const shorteFilterZucchine = zucchine.filter((thisZucchina) => {
  if (thisZucchina.length <= 15) {
    return true
  }
})

console.log(shorteFilterZucchine)