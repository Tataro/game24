const permutations = require('permutation')

const output = permutations('1234')
console.log('output.length = ', JSON.stringify(output.length, null, 2))
console.log('output = ', JSON.stringify(output, null, 2))
