const getAllSubsets = theArray => theArray.reduce(
          (subsets, value) => subsets.concat(
            subsets.map(set => [value, ...set])
          ),
          [[]]
        ).filter(array => array.length === 3)

const tat = getAllSubsets(['1', '2', '3', '4'])

console.log('tat = ', JSON.stringify(tat, null, 2))
