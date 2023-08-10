// Memoization: the purpose of memoization is for performance
export const memoTable = (size = 60, totalOperations = 59) => {
  const table = {};
  [...Array(size).keys()].forEach((n) => {
    if (n < 10) {
      table[`0${n}`] = fibonacci(0, n, totalOperations)
    } else {
      const position = `${n}`
      const x = parseInt(position[0])
      const y = parseInt(position[1])
      table[position] = fibonacci(x, y, totalOperations)
    }
  })
  return table
}

export const fibonacci = (x = 1, y = 1, totalOperations = 1) => {
  const array = [x, y]
  for (var i = 0; i < totalOperations - 2; i++) {
    const nextResult = array[i] + array[i + 1]
    array.push(nextResult)
  }
  return array
}