// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
// 回傳 fibonacci sequence 之中 index = n 的數值

// O(n)
function fibonacciIterative(n) {
  if (n < 2) return n
  
  let result
  let left1 = 1
  let left2 = 0

  for (let i = 2; i <= n; i++) {
    result = left1 + left2
    left2 = left1
    left1 = result
  }

  return result
}

// O(2^n)
function fibonacciRecursive(n) {
  if (n < 2) return n
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(`Recursive: ${fibonacciRecursive(8)}`)
console.log(`Iterative: ${fibonacciIterative(8)}`)
