function findFactorialRecursive(number) {
  if (number <= 1) return 1
  return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {
  let result = 1
  for (let i = 1; i < number + 1; i++) {
    result *= i
  }
  return result
}

console.log(`recursive ${findFactorialRecursive(5)}`)
console.log(`iterative ${findFactorialIterative(5)}`)
