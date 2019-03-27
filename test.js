function shuffle (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)) // random index from 0 to i
    console.log('i = ', JSON.stringify(i, null, 2))
    console.log('j = ', JSON.stringify(j, null, 2))
    console.log('j', array[j], 'i', array[i]);
    console.log(array.join(', '));
    [array[i], array[j]] = [array[j], array[i]] // swap elements
    console.log(array.join(', '))
  }
}

const count = {}

for (let i = 0; i < 1; i++) {
  let tat = [1, 2, 3, 4]
  shuffle(tat)
  if (typeof count[tat.join('')] === 'number') {
    count[tat.join('')]++
  } else {
    count[tat.join('')] = 0
  }
  // count[tat.join('')] ? count[tat.join('')]++ : count[tat.join('')] = 0
}

console.log('count = ', JSON.stringify(count, null, 2))
