const Combinatorics = require('js-combinatorics')
const permutations = require('permutation')

function run () {
  const output = permutations('9913')
  const baseN = Combinatorics.baseN(['+', '-', '*', '/'], 3)
  const ops = baseN.toArray()

  let count = 0
  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < ops.length; j++) {
      count++
      let o1 = eval(`${output[i][0]} ${ops[j][0]} ${output[i][1]}`)
      o1 = eval(`${o1} ${ops[j][1]} ${output[i][2]}`)
      o1 = eval(`${o1} ${ops[j][2]} ${output[i][3]}`)
      if (o1 === 24) {
        console.log(`${output[i][0]} ${ops[j][0]} ${output[i][1]} ${ops[j][1]} ${output[i][2]} ${ops[j][2]} ${output[i][3]}`)
        console.log('count = ', JSON.stringify(count, null, 2))
        return
      }
    }
  }
}

console.time('tatat')
run()
console.timeEnd('tatat')
