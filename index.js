// require('lodash.combinations')
// const _ = require('lodash')
// 
// const combinations = _.combinations('+++---***///', 3)
// console.log('combinations.length = ', JSON.stringify(combinations.length, null, 2))
// for (let i = 0; i < combinations.length; i++) {
//   const com = combinations[i]
//   console.log(com.join(''))
// }
// // console.log('combinations = ', JSON.stringify(combinations, null, 2))
// const uniqCom = _.uniqWith(combinations, _.isEqual)
// console.log('uniqCom.length = ', JSON.stringify(uniqCom.length, null, 2))
// for (let i = 0; i < uniqCom.length; i++) {
//   const com = uniqCom[i]
//   console.log(com.join(''))
// }
// // console.log('uniqCom = ', JSON.stringify(uniqCom, null, 2))
const combinations = require('ml-combinations');
const options = { mode: 'index' };

// the generator function returns an iterator
var gen = combinations(3, 12, options);

const tat = '+++---***///'
const comJa = [...gen]
for (let i = 0; i < comJa.length; i++) {
  const com = comJa[i]
  console.log(tat[com[0]], tat[com[1]], tat[com[2]])
}
